import path from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";

export function loadEnv() {
  const here = path.dirname(fileURLToPath(import.meta.url));
  dotenv.config({ path: path.resolve(here, "../../.env") });

  return {
    port: process.env.PORT || 5000,
    mongodbUri: process.env.MONGODB_URI,
  };
}
