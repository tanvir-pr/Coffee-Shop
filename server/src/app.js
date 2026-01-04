import express from "express";

export function createApp() {
  const app = express();
  app.use(express.json());

  app.get("/", (_req, res) => {
    res.json({ ok: true, name: "SkillForge API" });
  });

  return app;
}

export default createApp;



