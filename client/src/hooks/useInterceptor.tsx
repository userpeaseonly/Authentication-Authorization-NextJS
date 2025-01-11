import { verifyTokenInstance } from "@/tanstack/api";
import { RootState } from "@/toolkit/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRefresh } from "./useRefresh";

export default function useInterceptor() {
    const refresh = useRefresh();
    const accessToken = useSelector((state: RootState) => state.userSlice.accessToken);

    useEffect(() => {
        const regInterceptor = verifyTokenInstance.interceptors.request.use((config) => {
            console.log("Request Interceptor", config);
            if(!config.headers.Authorization){
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
            return config;
        });


        const resInterceptor = verifyTokenInstance.interceptors.response.use((res) => {
            console.log("Response Interceptor", res);
            
            return res;
        }, async (error) => {
            const initialReq = error.config;
            console.log("Response Interceptor", error);
            if(error.status === 401){
                const { newAccessToken } = await refresh();
                initialReq.headers.Authorization = `Bearer ${newAccessToken}`;
                return verifyTokenInstance(initialReq);
            }
            return Promise.reject(error);
        });

        return () => {
            verifyTokenInstance.interceptors.request.eject(regInterceptor);
            verifyTokenInstance.interceptors.response.eject(resInterceptor);
        }
    }, []);

    return {verifyTokenInstance};
}