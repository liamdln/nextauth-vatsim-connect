"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import PrimaryButton from "../primary-button";

export function AuthButton({ children, redirectUrl, className = "", hideLogoutButton = true }: { children?: React.ReactNode, redirectUrl?: string, hideLogoutButton?: boolean, className?: string }) {

    const router = useRouter();
    const { status } = useSession();

    // must be:
    // 1. loading
    // 2. unauthenticated
    // 3. authenticated
    if (status === "loading") {
        return (
            <span>Loading...</span>
        )
    }

    if (status === "unauthenticated") {
        router.push(redirectUrl || "/")
        return (
            <span>Loading...</span>
        )
    }

    if (status === "authenticated") {
        return (
            <div className={hideLogoutButton ? `${className}` : `${className} flex gap-3 items-center w-fit`}>
                {children}
                <span hidden={hideLogoutButton}><SignOutButton>Logout</SignOutButton></span>
            </div>
        )
    }

    throw Error("Could not determine session status.")

}

export function SignInButton({ children, provider, callback, doAuthCheck, className = "" }: { children: React.ReactNode, provider?: string, callback?: string, doAuthCheck?: boolean, className?: string }) {

    const session = useSession();
    const router = useRouter();

    // if the user is logged in, and the developer has opted to automatically redirect,
    // do so if there is a callback url to navigate to.
    if (session.status === "authenticated" && doAuthCheck && callback) {
        router.push(callback)
    }

    return (
        <PrimaryButton className={`${className}`} onClick={() => signIn(provider || "", { callbackUrl: callback || "" })}>{children}</PrimaryButton>
    )
}

export function SignOutButton({ children, redirectUrl, className = "" }: { children: React.ReactNode, redirectUrl?: string, className?: string }) {

    const router = useRouter();

    const logout = async () => {
        await signOut()
        router.push(redirectUrl || "/")
    }

    return (
        <PrimaryButton className={`${className}`} onClick={() => logout()}>{children}</PrimaryButton>
    )
}