//import { PrismaClient } from "@prisma/client";
import getTodo from "./func";

//const prisma = new PrismaClient();

//createTodo(1, "go to gym", "go to gym and do 10 pushups");
getTodo(1);



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



//interface UpdateParams {
   // firsName: string;
   // lastName: string;
//}


// async function updateUser(username: string, {
//     firsName,
//     lastName
// }: UpdateParams) {

//   const yo  = await prisma.user.update({
//     where: {username}, 
//     data: {
//       firsName,
//       lastName
//     }
//   })

//   console.log(yo);

  
  
// }


// async function getUser(username: string) {
//   const user = await prisma.user.findFirst({
//     where: {
//         username: username
//     }
//   })
//   console.log(user);
// }

// getUser("admin1");


// updateUser("admin1", {
//   firsName: "NEW",
//   lastName: "Singh"
// })