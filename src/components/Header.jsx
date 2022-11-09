import React from "react";
import { RWebShare } from "react-web-share";
import img from "../assets/17.jpg";

function Header() {
  return (
    <div className=" w-full flex flex-col justify-center items-center">
      <div className="w-full md:w-[788px] h-[70px] flex justify-end items-center p-3 my-3 mx-auto hover:cursor-pointer">
        <RWebShare
          data={{
            text: "Links for Paavan Agrawal",
            url: window.location.href,
            title: "Paavan",
          }}
        >
          <button className="bg-white rounded-full w-10 h-10 flex justify-center items-center self-end my-auto">
            <svg width="16" height="16">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.6464 3.85347L11 4.20702L11.7071 3.49992L11.3536 3.14636L8.35355 0.146362H7.64645L4.64645 3.14636L4.29289 3.49992L5 4.20702L5.35355 3.85347L7.5 1.70702V9.49992V9.99992H8.5V9.49992V1.70702L10.6464 3.85347ZM1 5.49994L1.5 4.99994H4V5.99994H2V14.9999H14V5.99994H12V4.99994H14.5L15 5.49994V15.4999L14.5 15.9999H1.5L1 15.4999V5.49994Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </RWebShare>
      </div>

      <div className="flex flex-col justify-center items-center -mt-7 text-center">
        <img src={img} alt="dp" className="w-24 h-24 rounded-full mb-4"></img>
        <h1 className="text-white text-2xl font-bold font-sans">
          Paavan Agrawal
        </h1>
        <p className="text-white text-lg pt-2">
          2nd Year CSE Student at SRMIST, Chennai
        </p>
      </div>
    </div>
  );
}

export default Header;
