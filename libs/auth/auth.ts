import { NextAuthOptions } from "next-auth"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/libs/database/auth-adapter";


const VATSIM_URL = process.env.VATSIM_URL;
const CLIENT_ID = process.env.VATSIM_CLIENT_ID;
const CLIENT_SECRET = process.env.VATSIM_CLIENT_SECRET;

export const authOptions: NextAuthOptions = {
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        {
            id: "vatsim",
            name: "VATSIM Connect",
            type: "oauth",
            version: "2.0",
            authorization: {
                url: `${VATSIM_URL}/oauth/authorize?response_type=code`,
                params: {
                    scope: "full_name vatsim_details email",
                },
            },
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            token: {
                url: `${VATSIM_URL}/oauth/token`,
                params: {
                    grant_type: "authorization_code",
                },
            },
            userinfo: `${VATSIM_URL}/api/user`,
            profile(profile) {
                return {
                    id: profile.data.cid,
                    personal: {
                        name: profile.data.personal.name_first,
                        familyName: profile.data.personal.name_last,
                        email: profile.data.personal.email
                    },
                    vatsim: {
                        region: {
                            name: profile.data.vatsim.region.name,
                            id: profile.data.vatsim.region.id
                        },
                        division: {
                            name: profile.data.vatsim.division.name,
                            id: profile.data.vatsim.division.id
                        },
                        subdivision: {
                            name: profile.data.vatsim.subdivision.name,
                            id: profile.data.vatsim.subdivision.id
                        },
                        rating: {
                            id: profile.data.vatsim.rating.id,
                            long: profile.data.vatsim.rating.long,
                            short: profile.data.vatsim.rating.short
                        },
                        pilotRating: {
                            id: profile.data.vatsim.pilotrating.id,
                            long: profile.data.vatsim.pilotrating.long,
                            short: profile.data.vatsim.pilotrating.short
                        }
                    }
                }
            },
        }
    ],
    callbacks: {
        async session({ session, token }) {
            session.user = token.user;
            return session;
        },
        async jwt({ token, profile }) {
            if (profile) {
                token.user = profile;
            }
            return token;
        }
    },
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: "/",
    }
}