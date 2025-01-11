import { UserCred } from "@/types";
import axios, { AxiosInstance } from "axios";

const BASE_URL = "http://localhost:3001";

const loginInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const verifyTokenInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


export const login = async (userCred: UserCred) => {
  const res = await loginInstance.post("/login", userCred, {
    withCredentials: true,
  });
  return res;
};

export const refreshTokenInstaance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const verifyToken = async (verTokenIns: AxiosInstance) => {
  try {
    const res = await verTokenIns.get("/verify");
    console.log(res);  
    return res;
  } catch (e) {
    const err = e as {status: number};
    const statusCode = err.status
    return statusCode;
  }
};

