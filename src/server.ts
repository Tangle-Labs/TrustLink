import http from "http";
import { Server } from "socket.io";
import { PORT } from "./config/env.config";
import express from "express";

const app = express();
app.use(express.json());

app.route("*").get((req, res) => {
    res.send("<h1>Redirecting...</h1>");
});

const server = http.createServer(app);
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
