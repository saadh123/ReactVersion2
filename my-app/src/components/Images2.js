// import React, { useLayoutEffect } from "react";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import Image from "./Image";

import useScroll from "../utils/hooks/useScroll";
import useFetchImage from "../utils/hooks/useFetchImage";

export default function Images() {
  const [page, setPage] = useState(1);
  const [images, setImages, errors] = useFetchImage(page);
  const scrollPosition = useScroll();

  const inputRef = useRef(null);

  const varRef = useRef(images.length);

  // const [updateCount, setUpdateCount] = useState(0); - INIFINITE LOOP

  //useRef doesn't re render and value persists

  //useEffect = waits for component to render on screen
  //useLayoutEffect = doesn't wait for component to render on screen, runs as soon as component is rendered simultanousely
  //useRef doesn't cause a re render

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // useEffect(() => {
  //   varRef.current = varRef.current + 1;
  //   // setUpdateCount(updateCount + 1); - INIFINITE LOOP
  // });

  // const [myName, setMyName] = useState("Sarthak");

  useEffect(() => {
    varRef.current = varRef.current + 1;
  });

  // useEffect(() => {
  //   setMyName("Reactjs");
  //   console.log("I am useEffect 1");
  // });

  // useLayoutEffect(() => {
  //   setMyName("Reactjs");
  //   console.log("I am useLayeffect 2");
  // });

  const [newImageURL, setNewImageUrl] = useState("");

  function handleRemove(index) {
    // setImages(images.filter((image, i) => i !== index));
    setImages([
      ...images.slice(0, index),
      ...images.slice(index + 1, images.length),
    ]);
    console.log("I am changing the state");
  }

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
  function handleChange(e) {
    setNewImageUrl(e.target.value);
  }

  function handleAdd() {
    if (newImageURL !== "") {
      setImages([newImageURL, ...images]);
      setNewImageUrl("");
    }
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
      {errors[0]}
      {scrollPosition}
      <p>Component is updated {varRef.current} times</p>
      <div className="gap" style={{ columnCount: 5 }}>
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
