import { User as UserType, VatsimData } from "@prisma/client"
import NextAuth, { DefaultSession, DefaultUser } from "next-auth"

export interface VATSIMResData {
    data: {
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
}

export interface UserData {
    cid: string,
    name: string,
    email: string
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
    interface Profile extends VATSIMResData { }
    interface Session extends DefaultSession {
        user: UserData
    }
    interface User extends UserType, DefaultUser { }
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        user: UserData
    }
}