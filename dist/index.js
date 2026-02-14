import { PrismaClient } from "./generated/prisma/client";
const prisma = new PrismaClient({});
async function insertUser(username, password, firstName, lastName) {
    const res = await prisma.user.create({
        data: {
            email: username,
            password,
            firstName,
            lastName
        },
        select: {
            id: true,
            password: true
        }
    });
    console.log(res);
}
insertUser("abhi@email.com", "password", "Abhishek", "Sankhwar");
//# sourceMappingURL=index.js.map