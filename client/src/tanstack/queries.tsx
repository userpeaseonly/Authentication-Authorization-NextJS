import { useQuery } from "@tanstack/react-query"
import { verifyToken } from "./api";
import useInterceptor from "@/hooks/useInterceptor";


export const useVerifyToken = () => {
    const {verifyTokenInstance} = useInterceptor();
    const {data, isLoading} = useQuery({
        queryKey: ['token'],
        queryFn: () => verifyToken(verifyTokenInstance),
    });
    return {data, isLoading};
}