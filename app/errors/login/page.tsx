"use client";

import PrimaryButton from "@/components/primary-button";
import { useRouter } from "next/navigation";

export default function LoginError() {

    // router
    const router = useRouter();

    const goHome = () => {
        router.push("");
    }

    return (
        <main className="h-screen flex flex-col text-center justify-center">
            <div>
                <h1 className="text-8xl">Oh no!</h1>
                <p className="max-w-xs mx-auto">There was an error logging you in.</p>
            </div>
            <div className="mt-5">
                <PrimaryButton className="w-56" onClick={() => goHome()}>Go Home</PrimaryButton>
            </div>
        </main>
    )
}