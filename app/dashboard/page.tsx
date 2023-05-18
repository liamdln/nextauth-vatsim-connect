"use client";

import PrimaryButton from "@/components/primary-button";
import AuthenticatedLayout from "@/layouts/authenticated";
import { signOut, useSession } from "next-auth/react"
import { useState } from "react";

export default function Dashboard() {

    // session
    const session = useSession();

    // state
    const [logoutLoading, setLogoutLoading] = useState(false);

    // sign out
    // will return to homepage automatically
    // this is set in the ./libs/auth/auth.ts file
    // under the "pages" key.
    const handleSignOut = () => {
        setLogoutLoading(true);
        signOut();
    }

    return (
        <>
            <AuthenticatedLayout>
                <main className="h-screen flex flex-col text-center justify-center">
                    <div>
                        <h1 className="text-8xl">Dashboard</h1>
                        <p>The session object:</p>
                        <p className="max-w-lg mx-auto my-5">{JSON.stringify(session)}</p>
                    </div>
                    <div className="mt-5">
                        <PrimaryButton className="w-56" onClick={() => handleSignOut()} disabled={ logoutLoading }>
                            {logoutLoading ? "Loading..." : "Logout" }
                        </PrimaryButton>
                    </div>
                </main>
            </AuthenticatedLayout>
        </>
    )
}