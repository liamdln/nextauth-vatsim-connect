"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";


export default function AuthContext({ children, session = null }: { children: React.ReactNode, session: Session | null }) {
    return (
        <SessionProvider>
            { children }
        </SessionProvider>
    )
}