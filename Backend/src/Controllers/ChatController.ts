import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

class ChatController{
    async createChat(usernames:string[]){     
        try{
            const chat = await db.chat.create({
                data:{
                    Users:{
                        connect: usernames.map(id=>({id}))
                    }
                }
            });
            return chat;
        }catch(err){
            console.log("Não foi possível criar chat, erro:",err);
        }
    }

    async retrieveChatByUsernames(usernames:string[]){
        try{
            const chat = await db.chat.findFirst({where:{Users:{some:{username:usernames[0]}},AND:{Users:{some:{username:usernames[1]}}}},include:{messages:true}})
            if(chat){
                console.log(`[Backend - ChatController] chat (${usernames[0]}-${usernames[1]}) encontrado!`);
                return chat;
            }else{
                console.log(`[Backend - ChatController] chat (${usernames[0]}-${usernames[1]}) não encontrado!`);
            }
        }catch(err){
            console.error("[Backend - ChatController] erro:",err);
        }
    }
}

export default ChatController;