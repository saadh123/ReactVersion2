import { useEffect, useState, useRef, useLayoutEffect } from "react";
import Image from "./Image";
import useScroll from "../utils/hooks/useScroll";
import useFetchImage from "../utils/hooks/useFetchImage";

export default function Images() {
  const [page, setPage] = useState(1);
  const [images, setImages, errors] = useFetchImage(page);
  const scrollPosition = useScroll();
  const [newImageURL, setNewImageUrl] = useState("");
  const inputRef = useRef(null);
  const varRef = useRef(images.length);

  //useEffect = waits for component to render on screen
  //useLayoutEffect = doesn't wait for component to render on screen, runs as soon as component is rendered simultanousely
  //useRef doesn't cause a re render, value persists

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    varRef.current = varRef.current + 1;
  });

  //**FUNCTION HANDLERS */
  function handleRemove(index) {
    // setImages(images.filter((image, i) => i !== index));
    setImages([
      ...images.slice(0, index),
      ...images.slice(index + 1, images.length),
    ]);
  }

  function handleChange(e) {
    setNewImageUrl(e.target.value);
  }

  function handleAdd() {
    if (newImageURL !== "") {
      setImages([newImageURL, ...images]);
      setNewImageUrl("");
    }
  }

  //**COMPONENTS */
  function ShowImage() {
    return images.map((img, index) => (
      <Image
        index={index}
        image={img.urls.regular}
        handleRemove={handleRemove}
        key={index}
      />
    ));
  }

  return (
    <section>
      {errors.length > 0 ? (
        "null"
      ) : (
        <button
          onClick={() => {
            setPage(page + 1);
            console.log(`${page}`);
          }}
        >
          Load More
        </button>
      )}
      {scrollPosition}
      <p>Component is updated {varRef.current} times</p>
      <div className="gap" style={{ columnCount: 2 }}>
        <ShowImage />
      </div>

      <div className="flex justify-between my-5">
        <div className="w-full">
          <input
            ref={inputRef}
            id="inputBox"
            type="text"
            value={newImageURL}
            onChange={handleChange}
            //or onChange={(e) => handleChange(e)}
            className="p-2 border border-gray-800 shadow rounded w-full"
          />
        </div>
        <div className="">
          <button
            disabled={newImageURL === ""}
            className={`p-2 text-white ml-2 ${
              newImageURL !== "" ? "bg-green-600" : "bg-green-300"
            }`}
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
    </section>
  );
}

//**EXTRA FEATURES */

// const [updateCount, setUpdateCount] = useState(0); - INIFINITE LOOP
// useEffect(() => {
//   varRef.current = varRef.current + 1;
//   // setUpdateCount(updateCount + 1); - INIFINITE LOOP
// });

// const [myName, setMyName] = useState("Sarthak");

// useEffect(() => {
//   setMyName("Reactjs");
//   console.log(`I am ${myName}`);
// });

// useLayoutEffect(() => {
//   setMyName("Reactjs");
//   console.log("I am useLayeffect 2");
// });

// const scrollPosition = useScroll();

//   useEffect(() => {
//     if (scrollPosition >= document.body.offsetHeight - window.innerHeight) {
//       console.log("hi");
//       setPage(page + 1);
//     }
//   }, [scrollPosition]);
