import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import http from "node:http";

const port = Number(process.env.PORT) || 3000;
const distDir = join(process.cwd(), "dist");

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".map": "application/json; charset=utf-8",
};

function sendFile(filePath, res) {
  const ext = extname(filePath).toLowerCase();
  res.writeHead(200, {
    "Content-Type": contentTypes[ext] || "application/octet-stream",
    "Cache-Control": ext === ".html" ? "no-cache" : "public, max-age=31536000, immutable",
  });
  createReadStream(filePath).pipe(res);
}

const server = http.createServer((req, res) => {
  const urlPath = req.url === "/" ? "/index.html" : req.url || "/index.html";
  const safePath = normalize(urlPath).replace(/^(\.\.[/\\])+/, "");
  const candidate = join(distDir, safePath);

  if (existsSync(candidate) && statSync(candidate).isFile()) {
    sendFile(candidate, res);
    return;
  }

  const fallback = join(distDir, "index.html");
  if (existsSync(fallback)) {
    sendFile(fallback, res);
    return;
  }

  res.writeHead(503, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Build output not found. Run `npm run build` first.");
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${port}`);
});
