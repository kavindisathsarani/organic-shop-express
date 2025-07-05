import express, {Express, Request, Response} from "express";
import productRoutes from "./routes/product.routes"

// 1. Initialize the express app
const app = express();

//2.Define Middlewares
app.use(express.json());

app.use("api/products", productRoutes)

//Define a simple HTTP GET request
// app.get("/", (req:Request, res:Response) => {
//     console.log(req.body)
//     res.send("Hello world hi!");
// })

export default app