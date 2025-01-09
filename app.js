// Import the required modules
import express from "express";
import morgan from "morgan";

// import charactersRouter from "./routes/characters.js";
// import personasRouter from "./routes/personas.js";

// Initialize the express app
const app = express();

// Middleware
app.use(morgan("dev")); // Morgan is used for logging HTTP requests to the console in a developer-friendly format
app.use(express.json()); // express.json() middleware is used to parse incoming JSON requests

// Use sub-routers
// app.use("/characters", charactersRouter);
// app.use("/personas", personasRouter);

export default app;
