import { checkEnvVariables } from "@/libs/database/utils"
import './globals.css'
import AuthContext from "@/contexts/auth-context";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth/auth";

if (!checkEnvVariables()) {
    throw new Error("Env variables are not configured correctly.")
} else {
    // console.log("Env variables correctly configured.")
}

export const metadata = {
    title: "Limonium",
    description: "Management suite for Arabian vACC",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const session = await getServerSession(authOptions);
    return (
        <html lang="en">
            <body className="bg-darkBlue text-light h-screen">
                <AuthContext session={session}>
                    {children}
                </AuthContext>
            </body>
        </html>
    )
}
