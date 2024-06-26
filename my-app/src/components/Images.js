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
  }

  const ShowImage = () => {
    return  ( 
    images.map((img, index) => (
          <Image
            index={index}
            image={img.urls.regular}
            handleRemove={handleRemove}
            key={index}
          />
        )))
    // return (
    //   <InfiniteScroll
    //     dataLength={images.length}
    //     next={() => setPage(page + 1)}
    //     hasMore={true}
    //     className="flex flex-wrap"
    //   >
      // let content =  images.map((img, index) => (
      //     <Image
      //       index={index}
      //       image={img.urls.regular}
      //       handleRemove={handleRemove}
      //       key={index}
      //     />
      //   ))

      //   return content
    //   </InfiniteScroll>
    // );
  };


  // const ShowImage = ({images}) => {
  
  //   let content = "";

  //   if(images.length > 0) {
  //     content = images.map((img, index) => (
  //       <Image
  //         index={index}
  //         image={img.urls.regular}
  //         handleRemove={handleRemove}
  //         key={index}
  //       />
  //     ));
  //   }

  //   return (
  //     content
  //   );
  // };



  const debounce = useDebounce();

  function handleInput(e) {
    const text = e.target.value;
    debounce(() => setSearchTerm(text));
  }

  // What it accomplishes here: When the user types in an input field, the handleInput function is called on each keystroke. However, instead of immediately setting the search term for each keystroke, the debounce function is used to wait for a short period of inactivity (defined by the wait parameter, which defaults to 1000 milliseconds or 1 second). This helps to prevent unnecessary and rapid calls to setSearchTerm, optimizing the performance and responsiveness of the application.

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
     {/* {images.map((img, index) => (
          <Image
            index={index}
            image={img.urls.regular}
            handleRemove={handleRemove}
            key={index}
          />
        ))}  */}
        
        {isLoading && <Loading />};
    </section>
  );
}
