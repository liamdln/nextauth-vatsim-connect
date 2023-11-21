import { PrismaClient } from "@prisma/client";

let prisma = new PrismaClient()

export function getDbClient() {
    return prisma;
}

export function resetDbClient() {
    prisma = new PrismaClient();
}