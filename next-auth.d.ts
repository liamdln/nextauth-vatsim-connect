import { User as UserType, VatsimData } from "@prisma/client"
import NextAuth, { DefaultSession, DefaultUser, Profile as DefaultProfile } from "next-auth"

export interface VATSIMData {
    cid: string,
    personal: {
        name_first: string,
        name_last: string,
        name_full: string,
        email: string
    },
    vatsim: {
        rating: {
            id: number,
            long: string,
            short: string
        },
        pilotrating: {
            id: number,
            long: string,
            short: string
        },
        division: {
            id: string?,
            name: string?
        },
        region: {
            id: string?,
            name: string?
        },
        subdivision: {
            id: string?,
            name: string?
        }
    }

}

declare module "next-auth" {
    interface Profile extends DefaultProfile {
        data: VATSIMData
    }
    interface Session extends DefaultSession {
        user: VATSIMData
    }
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        data: VATSIMData
    }
}