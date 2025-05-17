import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

connectDB();
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("running the backend sevices!");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
