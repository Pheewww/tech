import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getTodosAndUserDetails(user_id: number, ) {
    //joins
    const todos = await prisma.todos.findMany({
        where: {
            user_id: user_id,
        },
        select: {
            user: true,
            title: true,
            description: true
        }
    });
    console.log(todos);
}

export default getTodosAndUserDetails;