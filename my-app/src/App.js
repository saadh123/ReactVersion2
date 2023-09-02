import React, { useState } from "react";
import "./index.css";
import Images from "./components/Images";

function App() {
  // const [isShowing, setisShowing] = useState(false);

  // function handleClick() {
  //   setisShowing(!isShowing);
  // }

  return (
    <section className="flex justify-center">
      <div className="w-10/12">
        <div className="text-center">
          <Images />
        </div>
        {/* <button
          className="p-1 bg-blue-700 text-white my-2"
          onClick={handleClick}
        >
          Toggle Image
        </button>

        {isShowing ? <Images /> : null} */}
      </div>
    </section>
  );
}

// // function App() {
// //   const [title, setTitle] = useState("Hello React");
// //   const [isShowing, setisShowing] = useState(false);

// //   function handleClick() {
// //     setisShowing(!isShowing);
// //   }
// // }

export default App;
