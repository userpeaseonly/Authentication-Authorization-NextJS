import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET } from "../utils/generateTokens.mjs";

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).send({ message: "no token available on header" });
  }

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, decode) => {
    if (err) return res.status(401).send({ message: "token has expired" });
    next();
  });
};
