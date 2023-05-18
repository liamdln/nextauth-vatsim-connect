import { DefaultSession } from "next-auth"
import { DefaultJWT } from "next-auth/jwt";
import { User as UserType } from "@/types/models/user";

declare module "next-auth" {
    type Profile = UserType
    interface Session extends DefaultSession {
        user: UserType;
    }
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        user: Profile
    }
}