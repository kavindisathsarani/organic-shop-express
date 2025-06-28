import express, {Express, Request, Response} from "express";

// 1. Initialize the express app
const app = express();

//2.Define Middlewares
app.use(express.json());
app.get("/", (req:Request, res:Response) => {
    res.send("Hello world hi!");
})

export default app