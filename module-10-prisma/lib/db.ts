import { PrismaClient } from "@/app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

// using singleton pattern
const connectionString = process.env.DATABASE_URL?.includes('connect_timeout')
    ? process.env.DATABASE_URL
    : `${process.env.DATABASE_URL}&connect_timeout=30`;

export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        adapter: new PrismaPg({ connectionString }),
    });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

