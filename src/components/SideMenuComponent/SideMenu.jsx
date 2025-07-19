import React from "react";
import VoiletButton from "./VoiletButton";
import "./SideMenuStyle.css";
const SideMenu = () => {
  return (
    <div className="sideMenu">
      <VoiletButton title="جديده 🤘🤘" />
      <VoiletButton title="الاكثر قراءه">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRC6ISUMAqfrftJa3ukCD4OsJ-hCLxfuB1Yw&s"
          alt="image"
          style={{
            width: "50px",
            height: "50px",
          }}
        />
      </VoiletButton>
      <VoiletButton title="مقالات مميزه" icon="👌👌👌">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtDZ3-Yw3bgKq-QSpxuvlERsUfa77gz2JJcw&s"
          alt="image"
          style={{
            width: "50px",
            height: "50px",
          }}
        />
      </VoiletButton>
    </div>
  );
};

export default SideMenu;
