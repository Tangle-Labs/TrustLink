import http from "http";
import { Server } from "socket.io";
import { PORT } from "./config/env.config";

const server = http.createServer();
const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
    console.log("connected");

    socket.on("joinChannel", ({ channel }) => {
        console.log("channel joined", channel);
        socket.join(channel);
        socket.to(channel).emit("userJoined");
    });

    socket.on("credentialShared", ({ token, channel }) => {
        socket.to(channel).emit("credential", token);
    });
});

server.listen(PORT);
