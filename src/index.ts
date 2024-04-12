import dotenv from "dotenv";
import express, { Request, Response } from "express";
import connectDB from "./db/index";
import logger from "./logger/winston.logger";
import responseTime from "response-time";
import routes from "./routes";
import deserializeUser from "./middleware/deserializeUser";
import { restResponseTimeHistogram, startMetricsServer } from "./utils/metrics";
import swaggerDocs from "./utils/swagger";

dotenv.config({
    path: './.env'
});

const app = express();
const port = parseInt(process.env.PORT ?? "3000");

app.use(express.json());
app.use(deserializeUser);

app.use(
  responseTime((req: Request, res: Response, time: number) => {
    if (req?.route?.path) {
      restResponseTimeHistogram.observe(
        {
          method: req.method,
          route: req.route.path,
          status_code: res.statusCode,
        },
        time * 1000
      );
    }
  })
);

connectDB()
    .then(() => {
        app.listen(port, () => {
            logger.info(`Server is running at port: ${port}`);
            routes(app);
            startMetricsServer();
            swaggerDocs(app, port);
        });

        logger.info("Server started successfully.");
    })
    .catch((err) => {
        logger.error(`MongoDB connection failed: ${err.message}`);
    });
