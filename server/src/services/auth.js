import bcrypt from "bcryptjs";
import { User } from "../models/user.js";

function publicUser(user) {
  return {
    id: String(user._id),
    name: user.name,
    email: user.email,
    role: user.role,
  };
}

export async function registerUser({ name, email, password, role }) {
  if (!name || !email || !password) {
    const err = new Error("name, email, and password are required");
    err.status = 400;
    throw err;
  }

  if (password.length < 8) {
    const err = new Error("password must be at least 8 characters");
    err.status = 400;
    throw err;
  }

  const existing = await User.findOne({ email: email.toLowerCase() });
  if (existing) {
    const err = new Error("email is already registered");
    err.status = 409;
    throw err;
  }

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({
    name: name.trim(),
    email: email.toLowerCase().trim(),
    password: hashed,
    role,
  });

  return publicUser(user);
}
