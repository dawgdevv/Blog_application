import {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
  getBlogsByUser,
} from "../controllers/blog.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import express from "express";
const router = express.Router();

router.post("/create", authMiddleware, createBlog);
router.get("/getblogs", getBlogs);
router.get("/getblogs/:id", getBlogById);
router.get("/getblogs/user/:userId", authMiddleware, getBlogsByUser);
router.put("/update/:id", authMiddleware, updateBlog);
router.delete("/delete/:id", authMiddleware, deleteBlog);

export default router;
