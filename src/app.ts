import express, {Express, Request, Response} from "express";
import productRoutes from "./routes/product.routes"
import cors from "cors"
import contactRoutes from "./routes/contact.routes";
import authRoutes from "./routes/auth.routes";
import {authenticateToken} from "./middleware/auth.middleware";

// 1. Initialize the express app
const app = express();

//2.Define Middlewares
app.use(express.json());
const allowedOrigins=[
    "http://localhost:5173"

];

// app.use(cors()); //Enable/Allow CORS here

const corsOptions={
 origin:(origin:string|undefined,
         callback: (err: Error | null, origin?: boolean | undefined) => void) => {
     if(!origin || allowedOrigins.includes(origin)){
         callback(null,true);
     } else {
        callback(new Error("Not Allowed by CORS"))
     }
 }
}
 app.use(cors(corsOptions));
// app.use(cors(corsOptions));

app.use("/api/auth",authRoutes)

app.use("/api/products", authenticateToken,productRoutes)
app.use("/api/contacts", contactRoutes)

//Define a simple HTTP GET request
// app.get("/", (req:Request, res:Response) => {
//     console.log(req.body)
//     res.send("Hello world hi!");
// })

export default app