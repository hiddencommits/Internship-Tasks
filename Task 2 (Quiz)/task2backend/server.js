import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config"

import connectDB from "./db/database.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import quizRoutes from "./routes/quizRoutes.js"

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:5173" }));

app.get('/', (req, res) => {
    res.send("Server is running.");
});

connectDB()
    .then(() => {

        app.use('/', authRoutes);
        app.use('/', userRoutes);
        app.use('/api/quiz', quizRoutes);

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Unable to connect to the database: ", err);
    });
