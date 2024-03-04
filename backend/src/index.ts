import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute";
import authMiddleware from "./middlewares/authMiddleware";
import mineralRoute from "./routes/mineralRoute";
import gemstoneRoute from "./routes/gemstoneRoute";

dotenv.config()

const app = express();
const port = process.env.PORT || 3000;
const frontendUrl = process.env.FRONTEND_URL

// Config

app.use(cors({credentials: true, origin: frontendUrl}));
app.use(express.json());
app.use(cookieParser())

// Routes

app.use("/", authRoute)
app.use("/mineral", mineralRoute)
app.use("/gemstone", gemstoneRoute)

app.use(authMiddleware)

// Start server api

app.listen(port, () => {
    console.log(`Server has just started on http://localhost:${port}`);
});
