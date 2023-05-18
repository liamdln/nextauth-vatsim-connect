"use client";

import PrimaryButton from "@/components/primary-button";
import { signIn, useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {

    // setup
    const session = useSession();
    const router = useRouter();

    // state
    const [loginLoading, setLoginLoading] = useState(false);

    // get error url parameter (if there is one)
    const error = useSearchParams().get("error");

    useEffect(() => {
        // if there is an authenticated session,
        // go to /dashboard
        if (session.status === "authenticated") {
            router.push("/dashboard");
        }
        // can do some session loading page here
    })

    // check if there is an error code in the URL
    useEffect(() => {
        // if there is an error
        // show the error page.
        if (error) {
            router.push("/errors/login")
        }
    })

    const handleSignIn = () => {

        setLoginLoading(true);
        // sign in with vatsim, on a successful sign in,
        // return to /dashboard.
        signIn("vatsim", { callbackUrl: "/dashboard" });
    }

    return (
        <main className="h-screen flex flex-col text-center justify-center">
            <div>
                <h1 className="text-8xl">Hello</h1>
                <p className="max-w-xs mx-auto">
                    This is an example of NextAuth and Next.js 13 working with&nbsp;
                    <a href="https://auth.vatsim.net/" target="_blank" className="font-bold">VATSIM&apos;s SSO.</a>
                </p>
            </div>
            <div className="mt-5">
                <PrimaryButton className="w-56" disabled={ loginLoading } onClick={() => handleSignIn()}>
                    {loginLoading ? "Loading..." : "Login"}
                </PrimaryButton>
            </div>
        </main>
    )
}
