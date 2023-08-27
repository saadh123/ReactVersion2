// import React from "react";
// import { useState, useEffect } from "react";

// const Images = () => {
//   const [images, setImage] = useState([
//     "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/5/14/2/FNM_060114-Strawberry-Rhubarb-Pie-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1400257598943.jpeg",
//   ]);

//   const [imgUrl, setimgURL] = useState("");

//   const handleClick = () => {
//     setImage([...images, imgUrl]);
//     setimgURL("");
//   };
//   const handleChange = (e) => {
//     setimgURL(e.target.value);
//   };

//   const handleRemove = (index) => {
//     setImage([
//       ...images.slice(0, index),
//       ...images.slice(index + 1, images.length),
//     ]);
//     // setImage(
//     //   images.filter((image, i) => {
//     //     return i !== index;
//     //   })
//     // );
//   };

//   const [isHovering, setIsHovering] = useState(-1);

//   const handleMouseEnter = (index) => {
//     setIsHovering(index);
//   };

//   const handleOnMouseLeave = (index) => {
//     setIsHovering(-1);
//   };

//   return (
//     <div>
//       <input
//         className="Search"
//         key="input"
//         type="text"
//         value={imgUrl}
//         onChange={handleChange}
//       />
//       <button onClick={handleClick} key="button">
//         Add here
//       </button>
//       {images.map((image, index) => {
//         return (
//           <div className="w-1/3 my-4 flex justify-center" key={index}>
//             <div
//               className="relative"
//               onMouseLeave={() => handleOnMouseLeave(index)}
//               onMouseEnter={() => handleMouseEnter(index)}
//             >
//               <i
//                 // className={
//                 //   isHovering === index
//                 //     ? "fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100"
//                 //     : "fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100 hidden"
//                 // }
//                 className={`fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100 ${
//                   isHovering === index ? "" : "hidden"
//                 }`}
//                 onClick={() => handleRemove(index)}
//               ></i>
//               <img
//                 src={image}
//                 width="150"
//                 key={index}

//                 //for mouseleave and mouseenter, can just {() => setIsHovering(false) or (true) instead of creating new function}
//               />
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Images;
