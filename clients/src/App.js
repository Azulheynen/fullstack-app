import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SinglePost from "./Postcards/SinglePost";
import PostCard from "./Postcards/postCards";
import Home from "./Home/home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostCard />} />
        <Route path="/posts/:id" element={<SinglePost />} />
      </Routes>
    </div>
  );
}

export default App;
