//AT THE START OF INFINITE SCROLL - LESSON 51

// // import React, { useLayoutEffect } from "react";
// import { useEffect, useState } from "react";
// import Image from "./Image";
// import useFetchImage from "../utils/hooks/useFetchImage";
// import { Loading } from "./Loading";
// import useScroll from "../utils/hooks/useScroll";
// import InfiniteScroll from "react-infinite-scroll-component";

// export default function Images() {
//   const [page, setPage] = useState(1);
//   const [images, setImages, errors, isLoading] = useFetchImage(page);
//   const scrollPosition = useScroll();

//   useEffect(() => {
//     if (scrollPosition >= document.body.offsetHeight - window.innerHeight) {
//       console.log("hi");
//       setPage(page + 1);
//     }
//   }, [scrollPosition]);

//   function handleRemove(index) {
//     // setImages(images.filter((image, i) => i !== index));
//     setImages([
//       ...images.slice(0, index),
//       ...images.slice(index + 1, images.length),
//     ]);
//     console.log("I am changing the state");
//   }

//   function ShowImage() {
//     return (
//       <InfiniteScroll dataLength={images.length}>
//         {images.map((img, index) => (
//           <Image
//             index={index}
//             image={img.urls.regular}
//             handleRemove={handleRemove}
//             key={index}
//           />
//         ))}
//       </InfiniteScroll>
//     );
//   }

//   if (isLoading) return <Loading />;
//   return (
//     <section>
//       {errors.length > 0 && (
//         <div className="flex h-screen">
//           <p className="m-auto">{errors[0]}</p>
//         </div>
//       )}
//       <div className="flex flex-wrap">
//         <ShowImage />
//       </div>
//       {errors.length === 0 && (
//         <button
//           onClick={() => {
//             setPage(page + 1);
//           }}
//         >
//           Load More
//         </button>
//       )}
//     </section>
//   );
// }
