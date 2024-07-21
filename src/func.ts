import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


// create todo
// async function createTodo(user_id: number, title: string, description: string) {

//     const yo = await prisma.todos.create({
//         data: {
//             user_id,
//             title,
//             description
//     }
//     })
    

// }

async function getTodo(user_id:number) {

    const yo = await prisma.todos.findMany({
        where: {user_id}
    })

    console.log(yo);
    
}



// async function getTodosAndUserDetails(user_id: number, ) {

//     const getall = await prisma.user.findFirst({

//     where: {user_id}

//     })

// }

// getTodosAndUserDetails(1);

//export default createTodo;
export default getTodo;

