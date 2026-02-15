import "dotenv/config";
import prisma from "./lib/prisma.js";

async function insertUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string,
) {
  const res = await prisma.user.create({
    data: {
      email: username,
      password,
      firstName,
      lastName,
    },
    select: {
      id: true,
      password: true,
    },
  });

  console.log(res);
  process.exit(0);
}

// insertUser("abhi@email.com", "password", "Abhishek", "Sankhwar");

const fetchData = async () => {
  const data = await prisma.user.findMany();
  console.log(data);
  process.exit(0);
};
fetchData();
