
import React, { createContext, useContext, useState } from "react";

export const BlogContext = createContext({
  imageUrl: "",
  title: "",
  description: "",
});

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const addBlog = (blog) => {
    setBlogs([...blogs, blog]);
    setModalOpen(false);
  };

  const editBlog = (id, updatedBlog) => {
    const updatedBlogs = blogs.map((blog) =>
      blog.id === id ? { ...blog, ...updatedBlog } : blog
    );
    setBlogs(updatedBlogs);
    setModalOpen(false);
  };

  const deleteBlog = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedBlog(null);
  };

  const openEditModal = (id) => {
    const blogToEdit = blogs.find((blog) => blog.id === id);
    setSelectedBlog(blogToEdit);
    setModalOpen(true);
  };

  return (
    <BlogContext.Provider
      value={{
        blogs,
        addBlog,
        editBlog,
        deleteBlog,
        modalOpen,
        openModal,
        closeModal,
        openEditModal,
        selectedBlog,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default function useBlog() {
  return useContext(BlogContext);
}
