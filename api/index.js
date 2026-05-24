// Vercel serverless function — adapts the TanStack Start Web Standard fetch
// handler (dist/server/server.js) to Vercel's Node.js runtime.
// This file is intentionally kept as plain JS so it works without a build step.

import { Readable } from "node:stream";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Resolve the built server entry.
// - In Vercel: api/index.js lives at /var/task/api/, dist/server is at /var/task/dist/server/
//   (Vercel places includeFiles relative to the project root in /var/task/)
// - Locally: api/index.js is at <project>/api/, dist/server is at <project>/dist/server/
const serverEntryPath = path.resolve(__dirname, "../dist/server/server.js");

let handlerPromise;

async function getHandler() {
  if (!handlerPromise) {
    handlerPromise = import(serverEntryPath).then((mod) => {
      const handler = mod.default ?? mod;
      if (typeof handler?.fetch === "function") return handler;
      if (typeof handler === "function") return { fetch: handler };
      throw new Error(
        "Server entry does not export a fetch handler. Got: " + typeof handler
      );
    });
  }
  return handlerPromise;
}

/**
 * Convert a Node.js IncomingMessage to a Web Standard Request.
 */
async function nodeRequestToWebRequest(req) {
  const protocol =
    req.headers["x-forwarded-proto"]?.split(",")[0]?.trim() ?? "https";
  const host =
    req.headers["x-forwarded-host"] ?? req.headers.host ?? "localhost";
  const url = `${protocol}://${host}${req.url}`;

  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (value === undefined) continue;
    if (Array.isArray(value)) {
      for (const v of value) headers.append(key, v);
    } else {
      headers.set(key, value);
    }
  }

  const method = req.method ?? "GET";
  const hasBody = method !== "GET" && method !== "HEAD";

  let body = undefined;
  if (hasBody) {
    body = Readable.toWeb(req);
  }

  return new Request(url, {
    method,
    headers,
    body,
    // @ts-ignore — duplex is required for streaming bodies in Node 18+
    duplex: hasBody ? "half" : undefined,
  });
}

/**
 * Write a Web Standard Response back to the Node.js ServerResponse.
 */
async function webResponseToNodeResponse(webResponse, res) {
  res.statusCode = webResponse.status;
  res.statusMessage = webResponse.statusText;

  for (const [key, value] of webResponse.headers.entries()) {
    // set-cookie needs special handling to avoid header folding
    if (key.toLowerCase() === "set-cookie") {
      const cookies = webResponse.headers.getSetCookie?.() ?? [value];
      res.setHeader("set-cookie", cookies);
    } else {
      res.setHeader(key, value);
    }
  }

  if (webResponse.body) {
    const reader = webResponse.body.getReader();
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(value);
      }
    } finally {
      reader.releaseLock();
    }
  }

  res.end();
}

/**
 * Main Vercel serverless handler.
 */
export default async function handler(req, res) {
  try {
    const server = await getHandler();
    const webRequest = await nodeRequestToWebRequest(req);
    const webResponse = await server.fetch(webRequest, {}, {});
    await webResponseToNodeResponse(webResponse, res);
  } catch (err) {
    console.error("[vercel-handler] Unhandled error:", err);
    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader("content-type", "text/plain");
    }
    res.end("Internal Server Error");
  }
}
