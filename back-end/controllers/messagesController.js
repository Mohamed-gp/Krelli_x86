import prisma from '../prisma/client.js'
import { onlineUsers } from '../socket/socket.js';
export const getChats = async (req, res) => {
    const userId = req.user.id;
    const chats = await prisma.chat.findMany({
        where: {
            users: {
                some: {
                    id: userId
                }
            }
        }
    });
    res.json(chats);
};

export const getChat = async (req, res) => {
    const chatId = req.params.id;
    const chat = await prisma.chat.findUnique({
        where: {
            id: chatId
        },
        include: {
            messages: {
                orderBy: {
                    createdAt: 'asc'
                }
            },
            users: true
        },
    });
    res.json(chat);
}


export const createChat = async (req, res) => {
    const { userIds } = req.body;
    const chat = await prisma.chat.create({
        data: {
            users: {
                connect: userIds.map((id) => ({ id }))
            }
        }
    });
    res.json(chat);
}

export const createMessage = async (req, res) => {
    const { chatId } = req.params;
    const { text } = req.body;
    const userId = req.user.id;
    const message = await prisma.message.create({
        data: {
            text,
            chat: {
                connect: {
                    id: chatId
                }
            },
            user: {
                connect: {
                    id: req.user.id
                }
            }
        }
    });
    const theOtherUsers = await prisma.chat.findUnique({
        where: {
            id: chatId
        },
        include: {
            users: {
                where: {
                    NOT: {
                        id: userId
                    }
                }
            }
        }
    });

    theOtherUsers.users.forEach((user) => {
        if(onlineUsers[user.id]){
            res.io.to(onlineUsers[user.id]).emit('message', message);
        }
    });
    
    if(onlineUsers[userId]){
        res.io.to(onlineUsers[userId]).emit('message', message);
    }

    res.json(message);
}


