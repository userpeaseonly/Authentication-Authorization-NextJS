import jwt from "jsonwebtoken";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import {
  generateAccessToken,
  generateRefreshToken,
  REFRESH_TOKEN_SECRET,
} from "./utils/generateTokens.mjs";
import { authMiddleware } from "./middleware/middleware.mjs";

//
const app = express();
const port = 3001;
app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());

// endpoints
app.post("/login", (req, res) => {
  const cred = req.body;
  const accessToken = generateAccessToken(cred);
  const refreshToken = generateRefreshToken(cred);
  res.cookie("refreshToken", refreshToken, { httpOnly: true });
  res.send({ accessToken });
});

app.get("/verify", authMiddleware, (req, res) => {
  res.send({ message: "access granted" });
});
app.get("/refresh", (req, res) => {
  const refreshToken = req.cookies["refreshToken"];
  if (!refreshToken) return res.sendStatus(401);
  jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, decode) => {
    if (err) return res.sendStatus(401);
    const newAccessToken = generateAccessToken({
      userName: decode.userName,
      password: decode.password,
    });

    res.send(newAccessToken);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
