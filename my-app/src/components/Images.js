import { useEffect, useState } from "react";
import Image from "./Image";
import useFetchImage from "../utils/hooks/useFetchImage";
import { Loading } from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import useDebounce from "../utils/hooks/useDebounce";

export default function Images() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(null);
  const [images, setImages, errors, isLoading] = useFetchImage(
    page,
    searchTerm
  );

  function handleRemove(index) {
    // setImages(images.filter((image, i) => i !== index));
    setImages([
      ...images.slice(0, index),
      ...images.slice(index + 1, images.length),
    ]);
    console.log("I am changing the state");
  }

  function ShowImage() {
    return (
      <InfiniteScroll
        dataLength={images.length}
        next={() => setPage(page + 1)}
        hasMore={true}
        className="flex flex-wrap"
      >
        {images.map((img, index) => (
          <Image
            index={index}
            image={img.urls.regular}
            handleRemove={handleRemove}
            key={index}
          />
        ))}
      </InfiniteScroll>
    );
  }

  const debounce = useDebounce();
  
  function handleInput(e) {
    const text = e.target.value;
    debounce(() => setSearchTerm(text));
  }
  return (
    <section>
      <div className="my-5">
        <input
          type="text"
          onChange={handleInput}
          className="w-full border rounded shadow p-2"
          placeholder="Search Photos Here"
        />
      </div>
      {errors && errors.length > 0 && (
        <div className="flex h-screen">
          <p className="m-auto">{errors[0]}</p>
        </div>
      )}
      <ShowImage />
      {isLoading && <Loading />};
    </section>
  );
}
