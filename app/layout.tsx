import AuthProvider from "./AuthProvider";
import './globals.css'
import { getServerSession } from "next-auth";

export const metadata = {
    title: "NextAuth VATSIM Connect",
    description: "Demonstration of NextAuth using VATSIM's Connect SSO.",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <AuthProvider >
            <html lang="en">
                <body className="bg-darkBlue text-light h-screen">
                    {children}
                </body>
            </html>
        </AuthProvider>
    )
}
