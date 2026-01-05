import express from "express";
import { errorHandler } from "./middleware/error.js";
import { createAuthRouter } from "./routes/auth.js";
import { createHealthRouter } from "./routes/health.js";

export function createApp() {
  const app = express();
  app.use(express.json());

  app.get("/", (_req, res) => {
    res.json({ ok: true, name: "SkillForge API" });
  });

  app.use("/api/health", createHealthRouter());
  app.use("/api/auth", createAuthRouter());
  app.use(errorHandler);

  return app;
}

export default createApp;
