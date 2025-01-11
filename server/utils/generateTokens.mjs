import jwt from "jsonwebtoken";
import { generateSecretKey } from "./cryptoUtils.mjs";

export const ACCESS_TOKEN_SECRET = generateSecretKey();
export const REFRESH_TOKEN_SECRET = generateSecretKey();

export const generateAccessToken = (userCred) => {
  return jwt.sign(userCred, ACCESS_TOKEN_SECRET, { expiresIn: "1m" });
};

export const generateRefreshToken = (userCred) => {
  return jwt.sign(userCred, REFRESH_TOKEN_SECRET, { expiresIn: "3m" });
};
