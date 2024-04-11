import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { jwtVerify } from "./middleware/jwtVerify.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.js";
import originChecker from "./middleware/originChecker.js";
import corsOptions from "./config/corsOptions.js";
import {createServer} from "http";
import {socketServer} from "./socket/socket.js";
import HostRouter from "./routes/host.js";
import HomesRouter from "./routes/home.js";
import MessagesRouter from "./routes/messages.js";
import ReservationRouter from "./routes/reservation.js";
import AdminRouter from "./routes/admin.js";
import verifyRoles from "./middleware/roleChecker.js";
import cors from "cors";
dotenv.config();



const app = express();
const server = createServer(app);
const io = socketServer(server);

app.use(originChecker);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(cookieParser());

app.use((req, res, next) => {
	res.io = io;
	next();
});

app.get("/", (req, res) => {
	res.json("Hello World");
});



app.use("/auth", authRouter);


app.use(jwtVerify);

app.use("/host", HostRouter);

app.use("/homes", HomesRouter);

app.use("/messages", MessagesRouter);

app.use("/reservations", ReservationRouter);

app.use("/admin",verifyRoles("admin"), AdminRouter);




const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
