import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firsName: string, lastName: string) {
  const res = await prisma.user.create({
    data: {
        username,
        password,
        firsName,
        lastName
    }
  })
  console.log(res);
}

insertUser("admin1", "123456", "umang", "singh")