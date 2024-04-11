import dotenv from "dotenv";
import { app } from "./app";
import connectDB from "./db/index";

dotenv.config({
    path: './.env'
});



connectDB()
    .then(() => {
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running at port : ${process.env.PORT}`);
        });
        app.on("error", (err) => {
            console.error("Server error: ", err);
        });
    })

    .catch((err) => {
        console.error(`mongoDB connection failed: ${err.message}`);
    })