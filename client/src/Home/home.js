import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Assuming you have a CSS file for styles

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/posts");
  };
  return (
    <div className="main-content" onClick={handleClick}>
      <div className="moleskine-wrapper">
        <div className="moleskine-notebook">
          <div className="notebook-cover green">
            <div className="notebook-skin">ARTICLES & READS</div>
          </div>
          <div className="notebook-page dotted"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
