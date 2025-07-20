import React from "react";
import VoiletButton from "./VoiletButton";
import "./SideMenuStyle.css";
const SideMenu = () => {
  const ButtonList = [
    {
      id: 1,
      title: "New 🤘🤘🤘",
      children: (
        <div>
          <h1>😞😞😞😞</h1>
        </div>
      ),
    },
    { id: 2, title: "Most Read", icons: "👌👌" },
    {
      id: 3,
      title: "Intersting News",
      children: (
        <div>
          <h1>🤣🤣🤣🤣🤣</h1>
        </div>
      ),
    },
  ];
  return (
    <div className="sideMenu">
      {ButtonList.map((btn) => (
        <VoiletButton
          key={btn.id}
          title={btn.title}
          icon={btn.icons}
          children={btn.children}
        />
      ))}
    </div>
  );
};
export default SideMenu;
