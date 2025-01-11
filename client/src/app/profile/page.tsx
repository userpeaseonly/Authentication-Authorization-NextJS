"use client";
import { useVerifyToken } from "@/tanstack/queries";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
    const router = useRouter();
    const { data, isLoading } = useVerifyToken();

    useEffect(() => {
        if (data === 401) {
            router.push("/");
        }
    }, [data, router]);

    if (isLoading) return <p>Loading...</p>;

    return (
        <div>
            <h1>Profile</h1>
        </div>
    );
}
