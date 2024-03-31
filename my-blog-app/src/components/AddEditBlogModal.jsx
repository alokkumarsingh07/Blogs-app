
import React, { useState, useEffect } from "react";
import useBlog from "../context/BlogContext";

const AddEditBlogModal = () => {
  const { addBlog, editBlog, modalOpen, closeModal, selectedBlog } = useBlog();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (selectedBlog) {
      setTitle(selectedBlog.title);
      setDescription(selectedBlog.description);
      setImageUrl(selectedBlog.imageUrl);
    } else {
      setTitle("");
      setDescription("");
      setImageUrl("");
    }
  }, [selectedBlog]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedBlog) {
      editBlog(selectedBlog.id, { title, description, imageUrl });
    } else {
      addBlog({ id: Date.now(), title, description, imageUrl });
    }
  };

  return (
    modalOpen && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <h2>{selectedBlog ? "Edit Blog" : "Add New Blog"}</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
            <button type="submit">{selectedBlog ? "Update" : "Post"}</button>
          </form>
        </div>
      </div>
    )
  );
};

export default AddEditBlogModal;
