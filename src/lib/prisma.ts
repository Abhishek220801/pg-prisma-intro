import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client.js";

const DB_URL = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString: DB_URL });
const prisma = new PrismaClient({ adapter });

export default prisma;
