import React, { useState } from "react";
import "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import routes from "./utils/hooks/routes";
import { Header } from "./components/Header";
import Images from "./components/Images";

//when exporting a default function, don't need to destructure
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index} // Add a unique key for each route
            path={route.path}
            element={route.component()} // Use element instead of component
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;

// function App() {
//   const [title, setTitle] = useState("Hello React");
//   const [isShowing, setisShowing] = useState(false);

//   function handleClick() {
//     setisShowing(!isShowing);
//   }
//   return (
//     <div>
//       <button className="p-1 bg-blue-700 text-white my-2" onClick={handleClick}>
//         Toggle Image
//       </button>
//       ;{isShowing ? <Images /> : null}
//     </div>
//   );
// }
