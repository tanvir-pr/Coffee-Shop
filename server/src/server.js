import path from "node:path";
import { pathToFileURL } from "node:url";
import createApp from "./app.js";
import { connectDb } from "./config/db.js";
import { loadEnv } from "./config/env.js";

export async function start() {
  const env = loadEnv();
  await connectDb(env.mongodbUri);

  const app = createApp();
  const port = env.port;

  return app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
}

function isDirectRun() {
  const entry = process.argv[1];
  if (!entry) return false;

  const entryHref = pathToFileURL(path.resolve(entry)).href;
  return import.meta.url.toLowerCase() === entryHref.toLowerCase();
}

if (isDirectRun()) {
  start().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
