import NextAuth from "next-auth/next";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "@/database/client";
import { NextAuthOptions } from "next-auth";

const VATSIM_URL = process.env.VATSIM_URL!;
const VATSIM_ID = process.env.VATSIM_ID!;
const VATSIM_SECRET = process.env.VATSIM_SECRET!;

export const authOptions: NextAuthOptions = {
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
                    lastLogin: null,
                    vatsimData: {
                        create: {
                            region: profile.data.vatsim.region.name || null,
                            regionId: profile.data.vatsim.region.id || null,
                            division: profile.data.vatsim.division.name || null,
                            divisionId: profile.data.vatsim.division.id || null,
                            subDivision: profile.data.vatsim.subdivision.name || null,
                            subDivisionId: profile.data.vatsim.subdivision.id || null,
                            ratingLong: profile.data.vatsim.rating.long,
                            ratingShort: profile.data.vatsim.rating.short,
                            ratingId: profile.data.vatsim.rating.id,
                            pilotRatingLong: profile.data.vatsim.pilotrating.long,
                            pilotRatingShort: profile.data.vatsim.pilotrating.short,
                            pilotRatingId: profile.data.vatsim.pilotrating.id,
                            lastUpdate: new Date()
                        }
                    }
                }
            },
        }
    ],
    adapter: PrismaAdapter(prisma),
    callbacks: {
        async session({ session, token }) {
            session.user = token.user;
            return session;
        },
        async jwt({ token, profile, user, account }) {
            
            // this function is called when the session is accessed
            // but if account exists, it runs on sign in only
            if (account) {
                if (profile && user) {

                    // push the updated data to the database
                    const then = user.lastLogin ? user.lastLogin.getTime() : 0
                    const now = new Date().getTime()
                    const dataRefreshTimeout = 30 * 60 * 1000 // 30 mins

                    if (now - then > dataRefreshTimeout) {
                        await prisma.user.update({
                            where: { cid: user.cid },
                            data: {
                                cid: profile.data.cid,
                                name: profile.data.personal.name_full,
                                email: profile.data.personal.email,
                                emailVerified: user.emailVerified,
                                lastLogin: new Date(),
                                vatsimData: {
                                    update: {
                                        region: profile.data.vatsim.region.name || null,
                                        regionId: profile.data.vatsim.region.id || null,
                                        division: profile.data.vatsim.division.name || null,
                                        divisionId: profile.data.vatsim.division.id || null,
                                        subDivision: profile.data.vatsim.subdivision.name || null,
                                        subDivisionId: profile.data.vatsim.subdivision.id || null,
                                        ratingLong: profile.data.vatsim.rating.long,
                                        ratingShort: profile.data.vatsim.rating.short,
                                        ratingId: profile.data.vatsim.rating.id,
                                        pilotRatingLong: profile.data.vatsim.pilotrating.long,
                                        pilotRatingShort: profile.data.vatsim.pilotrating.short,
                                        pilotRatingId: profile.data.vatsim.pilotrating.id
                                    }
                                }
                            }
                        })
                    } else {
                        // update the last login field
                        await prisma.user.update({
                            where: { cid: user.cid },
                            data: { ...user, lastLogin: new Date() }
                        })
                    }

                    token.user = {
                        cid: profile.data.cid,
                        name: profile.data.personal.name_full,
                        email: profile.data.personal.email,
                        vatsim: profile.data.vatsim
                    }
                }
                console.log("Expensive DB lookup run.")
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