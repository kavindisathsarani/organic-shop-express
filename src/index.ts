import app from "./app";
import dotenv from "dotenv"

dotenv.config(); //Load environment variables from a .env file into process.env

// Define the application port
const port = process.env.PORT || 3000; //Access the value of the PORT environment variable

//4.Instructs the express app to listen on port 3000
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})