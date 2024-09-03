import React from "react";
import "../App.css";
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
      {listOfPosts.map((post, key) => {
        return (
          <div className="postcard">
            <div key={post.id} className="postDiv" id="postDiv">
              <div className="title" data-test="post-title">
                <Link to={`/posts/${post.id}`} id="LinkToPost">
                  {" "}
                  {post.title}
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostCard;
