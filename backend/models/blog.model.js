import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minLength: 3,
    maxLength: 100,
  },
  content: {
    type: String,
    required: true,
    minLength: 10,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});
const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
