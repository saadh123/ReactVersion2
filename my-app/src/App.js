import React from "react";
import "./index.css";
import Images from "./components/Images";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function Gallery() {
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

function Home() {
  return (
    <div className="flex h-screen">
      <h1 className="m-auto text-3xl">Welcome Home</h1>
    </div>
  );
}

function Login() {
  return (
    <div className="flex h-screen">
      <h1 className="m-auto text-3xl">Login Page</h1>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

// const [isShowing, setisShowing] = useState(false);

// function handleClick() {
//   setisShowing(!isShowing);
// }

// // function App() {
// //   const [title, setTitle] = useState("Hello React");
// //   const [isShowing, setisShowing] = useState(false);

// //   function handleClick() {
// //     setisShowing(!isShowing);
// //   }
// // }

export default App;
