import express from "express";
import dotenv from "dotenv";
import { router as userRouter } from "./routes/machines";
// import { connectDb } from "./database";

dotenv.config();
const PORT = process.env.PORT;
let app = null;
// const sequelize = connectDb();

const startApp = () => {
    app = express();

    // app.use((req, res, next) => {
    //     req.db = sequelize;
    //     next();
    // });

    app.use("/machines", userRouter);

    app.listen(PORT, () => {
        console.log(`Running on port ${PORT}`);
    });
};

startApp();
