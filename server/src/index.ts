import express, { Application, Request, Response, Router } from "express";
import * as dotenv from "dotenv";

const router = Router();
dotenv.config();

import controller from "./Tracks/controllers/search";
import artistController from "./Tracks/controllers/artist";

const app: Application = express();
const port = process.env.PORT || 9001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    // set the CORS policy
    res.header("Access-Control-Allow-Origin", "*");
    // set the CORS headers
    res.header(
        "Access-Control-Allow-Headers",
        "origin, X-Requested-With,Content-Type,Accept, Authorization"
    );
    // set the CORS method headers
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST");
        return res.status(200).json({});
    }
    next();
});

app.get(
    "/status",
    async (request: Request, response: Response): Promise<Response> => {
        return response.json({ status: "OK" });
    }
);

app.get("/search/:param", controller.Search);
app.get("/artist/:id", artistController.Artist);

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error) {
    console.error(`Error occured: ${error}`);
}
