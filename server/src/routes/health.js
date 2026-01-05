import { Router } from "express";
import { dbStatus } from "../config/db.js";

export function createHealthRouter() {
  const router = Router();

  router.get("/", (_req, res) => {
    res.json({ ok: true, db: dbStatus() });
  });

  return router;
}
