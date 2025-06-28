import express, {Express} from "express";

// 1. Initialize the express app
const app = express();

// Define the application port
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello world hi!");
})

//4.Instructs the express app to listen on port 3000
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})