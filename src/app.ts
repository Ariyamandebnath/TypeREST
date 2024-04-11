import express from "express"
import { Request, Response } from "express";


const app = express();


app.get("/healthcheck", (req: Request, res: Response) => {
    res.sendStatus(200)
});



export { app }