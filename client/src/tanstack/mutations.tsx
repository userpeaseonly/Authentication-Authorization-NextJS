import { useMutation } from "@tanstack/react-query";
import { login } from "./api";
import { useDispatch } from "react-redux";
import { saveToken } from "@/toolkit/userSlice";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { mutate } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      const token = data.data.accessToken;
      dispatch(saveToken(token));
      router.push("/profile");
    },
  });

  return { mutate };
};
