import React from "react";
import { BlogProvider } from "../src/context/BlogContext";
import MainComponent from "./components/MainComponent";
import AddEditBlogModal from "./components/AddEditBlogModal";

function App() {
  return (
    <BlogProvider>
      <div className="App">
        <MainComponent />
        <AddEditBlogModal />
      </div>
    </BlogProvider>
  );
}

export default App;