import NextAuth from "next-auth/next";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { NextAuthOptions } from "next-auth";
import { getDbClient } from "@/database/client";

const VATSIM_URL = process.env.VATSIM_URL!;
const VATSIM_ID = process.env.VATSIM_ID!;
const VATSIM_SECRET = process.env.VATSIM_SECRET!;

const prisma = getDbClient();

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        {
            id: "vatsim",
            name: "VATSIM Connect",
            type: "oauth",
            version: "2.0",
            authorization: {
                url: `${VATSIM_URL}/oauth/authorize?response_type=code`,
                params: {
                    // add the scope that you want from the
                    // sso here.
                    scope: "full_name vatsim_details email",
                },
            },
            clientId: VATSIM_ID,
            clientSecret: VATSIM_SECRET,
            token: {
                url: `${VATSIM_URL}/oauth/token`,
                params: {
                    grant_type: "authorization_code",
                }
            },
            userinfo: `${VATSIM_URL}/api/user`,
            async profile(profile) {
                return {
                    id: profile.data.cid,
                    cid: profile.data.cid,
                    name: profile.data.personal.name_full,
                    email: profile.data.personal.email,
                    emailVerified: null,
                }
            },
        }
    ],
    callbacks: {
        // async signIn({ profile }) {
        //     const blacklistedCids: string[] = ["10000009"]
            
        //     if (profile) {
        //         if (blacklistedCids.includes(profile.data.cid)) {
        //             return false;
        //         }
        //     }
        //     return true;
        // },
        async session({ session, token }) {
            session.user = token.data;
            return session;
        },
        async jwt({ token, profile, account }) {
            // only run on sign in
            if (account && profile) {
                token.data = profile.data
            }
            return token;
        }
    },
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET!
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }