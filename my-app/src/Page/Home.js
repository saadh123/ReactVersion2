import React from "react";
import { Fetch } from "../components/Fetch";

export const Home = () => {
  return (
    <div className="flex justify-center">
      {/* <h1 className="m-auto text-3xl">Welcome Home</h1> */}
      <Fetch></Fetch>
    </div>
  );
};

// export const Home = () => {
//   return (
//     <div className="flex flex-col items-center">
//       <h1 className="text-3xl">Welcome Home</h1>
//       <Fetch />
//     </div>
//   );
// };
