import React from "react";

function Link(props) {
  return (
    <div className="h-14 w-[95%] md:w-[680px] text-white m-2 hover:scale-105 duration-[50ms] ease-in-out">
      <a
        href={props.link}
        className="flex flex-row items-center justify-center backdrop-blur bg-opacity-60 backdrop-filter bg-black rounded-md"
        target="_blank"
        rel="noreferrer"
      >
        <img src={props.image} alt="" className="mx-2 absolute left-0" />
        <p className="text-base font-medium py-4">{props.title}</p>
      </a>
    </div>
  );
}

export default Link;
