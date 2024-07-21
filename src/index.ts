import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async function insertUser(username: string, password: string, firsName: string, lastName: string) {
//   const res = await prisma.user.create({
//     data: {
//         username,
//         password,
//         firsName,
//         lastName
//     }
//   })
//   console.log(res);
// }

// insertUser("admin1", "123456", "umang", "singh")



interface UpdateParams {
    firsName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firsName,
    lastName
}: UpdateParams) {

  const yo  = await prisma.user.update({
    where: {username}, 
    data: {
      firsName,
      lastName
    }
  })

  console.log(yo);

  
  
}

updateUser("admin1", {
  firsName: "NEW",
  lastName: "Singh"
})