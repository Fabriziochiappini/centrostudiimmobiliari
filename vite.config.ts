import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "node:fs/promises";
import fssync from "node:fs";
import { createReadStream } from "node:fs";
import { fileURLToPath } from "node:url";

const projectDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    {
      name: "attached-assets",
      configureServer(server: any) {
        const assetsDir = path.resolve(projectDir, "attached_assets");

        server.middlewares.use("/attached_assets", async (req: any, res: any, next: any) => {
          try {
            if (!req.url) return next();
            if (req.method !== "GET" && req.method !== "HEAD") return next();

            const url = new URL(req.url, "http://localhost");
            const rel = decodeURIComponent(url.pathname).replace(/^\/+/, "");
            if (!rel) return next();

            const resolved = path.resolve(assetsDir, rel);
            if (!resolved.startsWith(assetsDir + path.sep)) return next();

            const stat = await fs.stat(resolved).catch(() => null);
            if (!stat || !stat.isFile()) return next();

            const ext = path.extname(resolved).toLowerCase();
            const contentTypes: Record<string, string> = {
              ".jpg": "image/jpeg",
              ".jpeg": "image/jpeg",
              ".png": "image/png",
              ".webp": "image/webp",
              ".gif": "image/gif",
              ".svg": "image/svg+xml",
              ".mp4": "video/mp4",
              ".pdf": "application/pdf",
              ".txt": "text/plain; charset=utf-8",
              ".html": "text/html; charset=utf-8",
            };
            const contentType = contentTypes[ext] || "application/octet-stream";

            res.statusCode = 200;
            res.setHeader("Content-Type", contentType);
            res.setHeader("Content-Length", String(stat.size));
            res.setHeader("Cache-Control", "public, max-age=0");

            if (req.method === "HEAD") return res.end();

            const stream = createReadStream(resolved);
            stream.on("error", () => {
              if (!res.headersSent) res.statusCode = 500;
              res.end();
            });
            return stream.pipe(res);
          } catch {
            return next();
          }
        });
      },
      async closeBundle() {
        const assetsDir = path.resolve(projectDir, "attached_assets");
        const outDir = path.resolve(projectDir, "dist");
        const outAssetsDir = path.resolve(outDir, "attached_assets");

        if (!fssync.existsSync(assetsDir)) return;

        await fs.rm(outAssetsDir, { recursive: true, force: true });
        await fs.cp(assetsDir, outAssetsDir, { recursive: true });
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(projectDir, "client", "src"),
      "@shared": path.resolve(projectDir, "shared"),
      "@assets": path.resolve(projectDir, "attached_assets"),
    },
  },
  root: path.resolve(projectDir, "client"),
  build: {
    outDir: path.resolve(projectDir, "dist"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
