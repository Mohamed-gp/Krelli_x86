import express from "express";
import dotenv from "dotenv";
dotenv.config();
import {jwtVerify} from "./middleware/jwtVerify.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.js";
import originChecker from "./middleware/originChecker.js";
import corsOptions from "./config/corsOptions.js";
import cors from "cors";

const app = express();

app.use(originChecker);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(cookieParser());

app.get("/", (req, res) => {
	res.json("Hello World");
});


app.use( "/auth" , authRouter);

app.use(jwtVerify);


















const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
