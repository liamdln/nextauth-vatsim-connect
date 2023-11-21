import { SignInButton } from "@/components/auth/buttons";

export default async function Home() {
    return (
        <main className="h-screen flex flex-col text-center justify-center">
            <div>
                <h1 className="text-8xl">Hello</h1>
                <p className="max-w-xs mx-auto">
                    This is an example of NextAuth and Next.js 14 working with&nbsp;
                    <a href="https://auth.vatsim.net/" target="_blank" className="font-bold">VATSIM&apos;s SSO.</a>
                </p>
            </div>
            <div className="mt-5">
                <SignInButton provider={"vatsim"} callback={ "/dashboard" }>Login with VATSIM</SignInButton>
            </div>
        </main>
    )
}
