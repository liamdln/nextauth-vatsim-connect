import { AuthButton } from "@/components/auth/buttons";
import { authOptions } from "@/utils/auth/auth-config";
import { getServerSession } from "next-auth/next";

export default async function Dashboard() {

    const session = await getServerSession(authOptions);
    
    return (
        <>
            <main className="h-screen flex flex-col text-center justify-center">
                <div>
                    <h1 className="text-8xl">Dashboard</h1>
                    <p>Data from the session object:</p>
                    {/* <p className="max-w-lg mx-auto my-5">{JSON.stringify(session || { session: "No session" })}</p> */}
                    <div className="flex justify-center">
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Key
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Value
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-t">
                                        <th scope="row" className="px-6 py-4 whitespace-nowrap">
                                            cid
                                        </th>
                                        <td className="px-6 py-4">
                                            { session?.user.cid }
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <th scope="row" className="px-6 py-4 whitespace-nowrap">
                                            email    
                                        </th>
                                        <td className="px-6 py-4">
                                            {session?.user.personal.email}
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <th scope="row" className="px-6 py-4 whitespace-nowrap">
                                            name
                                        </th>
                                        <td className="px-6 py-4">
                                            { session?.user.personal.name_full }
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <th scope="row" className="px-6 py-4 whitespace-nowrap">
                                            rating
                                        </th>
                                        <td className="px-6 py-4">
                                            {JSON.stringify(session?.user.vatsim.rating)}
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <th scope="row" className="px-6 py-4 whitespace-nowrap">
                                            pilot rating
                                        </th>
                                        <td className="px-6 py-4">
                                            {JSON.stringify(session?.user.vatsim.pilotrating)}
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <th scope="row" className="px-6 py-4 whitespace-nowrap">
                                            division
                                        </th>
                                        <td className="px-6 py-4">
                                            {JSON.stringify(session?.user.vatsim.division)}
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <th scope="row" className="px-6 py-4 whitespace-nowrap">
                                            region
                                        </th>
                                        <td className="px-6 py-4">
                                            {JSON.stringify(session?.user.vatsim.region)}
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <th scope="row" className="px-6 py-4 whitespace-nowrap">
                                            subdivision
                                        </th>
                                        <td className="px-6 py-4">
                                            {JSON.stringify(session?.user.vatsim.subdivision)}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="mt-5 w-fit self-center">
                    <AuthButton className={""} hideLogoutButton={false} />
                </div>
            </main>
        </>
    )
}