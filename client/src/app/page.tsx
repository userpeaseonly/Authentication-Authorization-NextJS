"use client";
import { useLogin } from "@/tanstack/mutations";
import { RootState } from "@/toolkit/store";
import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const accessToken = useSelector(
    (state: RootState) => state.userSlice.accessToken
  );
  console.log(accessToken);

  const { mutate } = useLogin();
  const [cred, setCred] = useState({
    userName: "",
    password: "",
  });

  const credHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setCred((prev) => ({ ...prev, [name]: value }));
  };

  const loginHandler = () => {
    if (cred.userName && cred.password) {
      mutate(cred);
    }
  };

  return (
    <div className="border-2 flex flex-col w-60 gap-2 p-2">
      <input
        onChange={credHandler}
        name="userName"
        className="border-2 p-2"
        type="text"
        placeholder="user name"
      />
      <input
        onChange={credHandler}
        name="password"
        className="border-2 p-2"
        type="text"
        placeholder="password"
      />
      <button onClick={loginHandler} className="border-2">
        Log In
      </button>
    </div>
  );
}
