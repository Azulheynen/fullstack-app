import React from "react";
import "../App.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SinglePost = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPostcard = async () => {
      try {
        const response = await axios.get(`http://localhost:9001/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching postcard data:", error);
      }
    };

    fetchPostcard();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <div className="background"></div>
      <div className="wolf"></div>
      <div className="content-container">
        <div className="content">
          <div className="title" data-test="post-title">
            <img src=""></img>
            <h1>{post.title}</h1>
          </div>

          <div className="postext" id="post" data-test="post-body">
            <p>{post.postText}</p>
          </div>

          <div className="footer" data-test="post-username">
            <h3>{post.username}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
