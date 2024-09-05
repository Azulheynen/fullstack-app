import React from "react";
import "./singlePost.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PostCard = ({ id }) => {
  const [listOfPosts, setlistOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9001/posts").then((response) => {
      setlistOfPosts(response.data);
    });
  }, []);

  return (
    <div>
      <ul>
        {listOfPosts.map((post, index) => (
          <li key={post.id} className="sticky-note">
            <Link to={`/posts/${post.id}`} className="note-link">
              <div className="note-content">
                <h2>{post.title}</h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostCard;
