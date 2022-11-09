import React from "react";
import style from "../styles/Background.module.css";

function Background() {
  return (
    <div
      className={
        style.image + " h-full w-full absolute top-0 left-0 right-0 -z-50"
      }
    >
      <div className="w-full h-full bg-black backdrop-blur-2xl bg-opacity-75 backdrop-filter"></div>
    </div>
  );
}

export default Background;
