import React from "react";
import content from "./assets/linkContent.jsx";
import Link from "./subcomponents/Link";

function Links() {
  return (
    <div className="flex flex-col justify-center items-center mt-8 w-full">
      {content.map((e) => (
        <Link title={e.title} link={e.link} image={e.image} key={e.id} />
      ))}
    </div>
  );
}

export default Links;
