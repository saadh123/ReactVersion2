import React from "react";
import { useState } from "react";

export default function Image({ index, image, handleRemove }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="w-1/3 my-4 flex justify-enter">
      <div
        className="relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* // function handleMouseEnter(index) {
  //   setIsHovering(true);
  // }

  // function handleMouseLeave(index) {
  //   setIsHovering(false);
  // }
  //use this method if not wanting to use a callback within onmousenter/onmouseleave */}

        <i
          className={`fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100 ${
            isHovering ? "" : "hidden"
          }`}
          onClick={() => handleRemove(index)}
        ></i>
        <img src={image} width="150" alt="" />
      </div>
    </div>
  );
}
