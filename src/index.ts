import express from "express";
import connectDB from "./config/db";
import userRoutes from "./routes/userRoutes";
import otherRoutes from "./routes/otherRoutes";

const app = express();
const port = 3001;

// Connect to database
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Define routes
app.use("/api", userRoutes);
app.use("/api", otherRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
