
import React, { useState } from "react";
import useBlog from "../context/BlogContext";

const MainComponent = () => {
  const { blogs, openModal, openEditModal, deleteBlog } = useBlog();

  return (
    <div>
      <h1>Blog Website</h1>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
          <img src={blog.imageUrl} alt={blog.title} />
          <button onClick={() => openEditModal(blog.id)}>Edit</button>
          <button onClick={() => deleteBlog(blog.id)}>Delete</button>
        </div>
      ))}
      <button onClick={openModal}>Add New Blog</button>
    </div>
  );
};

export default MainComponent;
