import mongoose from "mongoose";

export async function connectDb(uri) {
  if (!uri) {
    throw new Error("MONGODB_URI is missing");
  }

  await mongoose.connect(uri);
  return mongoose.connection;
}

export function dbStatus() {
  return mongoose.connection.readyState === 1 ? "connected" : "disconnected";
}
