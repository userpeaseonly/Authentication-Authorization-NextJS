import { refreshTokenInstaance } from "@/tanstack/api"
import { saveToken } from "@/toolkit/userSlice";
import { useDispatch } from "react-redux";

export const useRefresh = () => {
    const dispatch = useDispatch();
    const refresh = async () => {
        const res = await refreshTokenInstaance("/refresh", {withCredentials: true});
        const newAccessToken = res.data.accessToken;
        dispatch(saveToken(newAccessToken));
        console.log(res);
    }
    return refresh;
}