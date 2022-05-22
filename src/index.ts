import express from "express";
import dotenv from "dotenv";
import { router as machinesRouter } from "./routes/machines";

dotenv.config();
const PORT = process.env.PORT;
let app = null;

const startApp = () => {
    app = express();

    app.use("/machines", machinesRouter);

    app.listen(PORT, () => {
        console.log(`Running on port ${PORT}`);
    });
};

startApp();
