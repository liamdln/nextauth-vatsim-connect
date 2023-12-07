import { authOptions } from "@/utils/auth/auth-config";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {

    const session = await getServerSession(authOptions);
    if (!session?.user) {
        return redirect("/")
    }

    return (
        <>
            {/* navbar */}
            {children}
            {/* footer */}
        </>
    )
}