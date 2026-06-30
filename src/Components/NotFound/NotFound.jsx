import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main className="main-cont">
      <div className="not-found-cont">
        <h1>404</h1>
        <p>Page Not Found!</p>
        <button onClick={() => navigate("/")}>Go Back Home</button>
      </div>
    </main>
  );
};

export default NotFound;
