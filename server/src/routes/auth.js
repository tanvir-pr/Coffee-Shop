import { Router } from "express";
import { asyncHandler } from "../middleware/async.js";
import { registerUser } from "../services/auth.js";

export function createAuthRouter() {
  const router = Router();

  router.post(
    "/register",
    asyncHandler(async (req, res) => {
      const user = await registerUser(req.body);
      res.status(201).json({ user });
    }),
  );

  return router;
}
