import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Assuming you have a CSS file for styles

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/posts");
  };

  const handle2Click = () => {
    navigate("/create");
  };

  return (
    <div>
      <div className="main-content" onClick={handleClick}>
        <div className="moleskine-wrapper">
          <div className="moleskine-notebook">
            <div className="notebook-cover green">
              <div className="notebook-skin">Read Note</div>
            </div>
            <div className="notebook-page dotted"></div>
          </div>
        </div>
      </div>
      <div className="main-content" onClick={handle2Click}>
        <div className="moleskine-wrapper">
          <div className="moleskine-notebook">
            <div className="notebook-cover green">
              <div className="notebook-skin"> Create Note </div>
            </div>
            <div className="notebook-page dotted"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
