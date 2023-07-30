import { AuthButton } from "@/components/auth/buttons";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Dashboard() {

    const session = await getServerSession(authOptions);
    

    return (
        <>
            <main className="h-screen flex flex-col text-center justify-center">
                <div>
                    <h1 className="text-8xl">Dashboard</h1>
                    <p>The session object:</p>
                    <p className="max-w-lg mx-auto my-5">{JSON.stringify(session || { session: "No session" })}</p>
                </div>
                <div className="mt-5 w-fit self-center">
                    <AuthButton className={""} hideLogoutButton={false} />
                </div>
            </main>
        </>
    )
}