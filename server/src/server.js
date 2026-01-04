import path from "node:path";
import { pathToFileURL } from "node:url";
import createApp from "./app.js";

export function start() {
  const port = process.env.PORT || 5000;
  const app = createApp();

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
  start();
}
