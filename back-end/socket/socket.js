import { Server } from "socket.io";

let onlineUsers = {};

const socketServer = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
    },
  });
  io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId;
    if (userId) {
      onlineUsers[userId] = socket.id;
    }
    io.emit("onlineUsers", onlineUsers);
    socket.on("disconnect", () => {
      delete onlineUsers[userId];
      io.emit("onlineUsers", onlineUsers);
    });
  });

  return io;
};

export { socketServer, onlineUsers };
