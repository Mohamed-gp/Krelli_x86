import prisma from "../prisma/client.js";
import { onlineUsers } from "../socket/socket.js";
export const getChats = async (req, res) => {
  const userId = req.user.userId;
  const chats = await prisma.chat.findMany({
    where: {
      users: {
        some: {
          id: userId,
        },
      },
    },
    select: {
      id: true,
      picture: true,
      
      users: {
        select: {
          username: true,
          id: true,
          profileImage: true,
          password: false,
        
        },
      },
    },
  });
  res.status(200).json({ data: chats, message: null });
};

export const getChat = async (req, res) => {
  const chatId = req.params.id;
  const chat = await prisma.chat.findUnique({
    where: {
      id: chatId,
    },
    include: {
      Messages: {
        orderBy: {
          createdAt: "asc",
        },
      },
      users: true,
    },
  });
  res.status(200).json({ data: chat, message: null });
};

export const createMessage = async (req, res) => {
  const { chatId } = req.params;
  const { text } = req.body;
  const message = await prisma.message.create({
    data: {
      message: text,
      Chat: {
        connect: {
          id: chatId,
        },
      },

      User: {
        connect: {
          id: req.user.userId,
        },
      },
    },
  });

  const chat = await prisma.chat.findUnique({
    where: {
      id: chatId,
    },
    include: {
      users: true,
    },
  });

  chat.users.forEach((user) => {
    if (onlineUsers[user.id]) {
      res.io.to(onlineUsers[user.id]).emit("message", message);
    }
  });

  res
    .status(201)
    .json({ data: message, message: "Message created successfully" });
};
