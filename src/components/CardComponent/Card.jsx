import React from "react";
import "./CardStyle.css";
const Card = ({ title, subTitle = "", content }) => {
  return (
    <div className="card">
      <h1 className="cardTitle">{title}</h1>
      <h1
        className="cardSubtitle"
        style={{
          textAlign: "center",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        {subTitle}
      </h1>
      <hr />
      <h1 className="cardContent">{content}</h1>
    </div>
  );
};

export default Card;
