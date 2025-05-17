import Blog from "../models/blog.model.js";

export const createBlog = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newBlog = new Blog({
      title,
      content,
    });
    await newBlog.save();
    res.status(201).json({
      message: "Blog created successfully",
      blog: newBlog,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
export const getBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
export const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );
    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json({
      message: "Blog updated successfully",
      blog: updatedBlog,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
export const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json({
      message: "Blog deleted successfully",
      blog: deletedBlog,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
export const getBlogsByUser = async (req, res) => {
  const userId = req.user._id;
  try {
    const blogs = await Blog.find({ user: userId });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
