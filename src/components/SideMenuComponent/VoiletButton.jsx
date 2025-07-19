import React from "react";
import "./VoiletButtonStyle.css";
const VoiletButton = ({ children = "", title, icon = "" }) => {
  return (
    <div>
      <button className="bgVoilet">
        <div>{title}</div>
        <div>{icon}</div>
        <div>{children}</div>
      </button>
    </div>
  );
};

export default VoiletButton;
