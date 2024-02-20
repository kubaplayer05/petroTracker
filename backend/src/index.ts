import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute";
import authMiddleware from "./middlewares/authMiddleware";

dotenv.config()

const app = express();
const port = process.env.PORT || 3000;

// Config

app.use(cors({credentials: true}));
app.use(express.json());
app.use(cookieParser())

// Routes

app.use("/", authRoute)

app.use(authMiddleware)

// Start server api

app.listen(port, () => {
    console.log(`Server has just started on http://localhost:${port}`);
});
