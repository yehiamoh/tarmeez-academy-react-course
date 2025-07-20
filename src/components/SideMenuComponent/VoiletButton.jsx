import React from "react";
import "./VoiletButtonStyle.css";
//conditional Rendering
const VoiletButton = ({ children = "", title, icon = "" }) => {
  return (
    <div>
      {title === "" || title === null ? (
        <div></div>
      ) : (
        <button className="bgVoilet">
          <div>{title}</div>
          <div>{icon}</div>
          <div>{children}</div>
        </button>
      )}
    </div>
  );
};

export default VoiletButton;
