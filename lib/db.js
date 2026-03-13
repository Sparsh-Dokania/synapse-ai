import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

const connectionString =
    process.env.DATABASE_URL ||
    "postgresql://postgres:postgres@localhost:5432/synapseaibuild";

const createPrismaClient = () =>
    new PrismaClient({
        adapter: new PrismaPg({ connectionString }),
        log: ["query", "info", "warn", "error"],
    });

const db = globalThis.prisma || createPrismaClient();

if(process.env.NODE_ENV === 'development') {
    globalThis.prisma = db;
}
export default db;