const express = require ("express");
const { 
    getAllBlogs, 
    addBlog, 
    updateBlog, 
    getById, 
    deleteBlog,
    getUserById
} = require("../controllers/blogController");
const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/:id", getById);
blogRouter.delete("/:id", deleteBlog);
blogRouter.get("/user/:id", getUserById)

module.exports = blogRouter;