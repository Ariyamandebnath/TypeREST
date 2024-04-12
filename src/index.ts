import dotenv from "dotenv";
import express, { Request, Response } from "express";import connectDB from "./db/index";
import logger from "./logger/winston.logger"
import responseTime from "response-time";



dotenv.config({
    path: './.env'
});

logger.info("information log")


connectDB()
    .then(() => {
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running at port : ${process.env.PORT}`);
        });
        app.on("error", (err) => {
            logger.error("Server error: ", err);
        });

        
    })

    .catch((err) => {
        logger.error(`mongoDB connection failed: ${err.message}`);
    })