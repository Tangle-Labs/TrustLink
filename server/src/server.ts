import http from "http";
import { Server } from "socket.io";
import { PORT } from "./config/env.config";
import express from "express";
import cookieParser from "cookie-parser";
import { db } from "@/models";
import { identityService } from "./services/identity.service";
import { ExpressErrorHandler } from "./middleware/error-handler/error-handler";
import router from "./router";
import { corsConfig } from "./middleware/cors/cors";
import cors from "cors";

const app = express();
app.use(cookieParser());
app.use(express.json());

app.use(cors(corsConfig));
app.use("/", router);
app.use(ExpressErrorHandler);

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

server.listen(PORT, async () => {
    identityService.build();
    await db.sync({ force: false, alter: true });
    console.info(`📝: Serving docs on http://localhost:${PORT}/api/docs`);
    console.info(`🚀: Server started on http://localhost:${PORT}`);
    console.info("🤠: Database connection instantiated");
});

// identityService.build();
