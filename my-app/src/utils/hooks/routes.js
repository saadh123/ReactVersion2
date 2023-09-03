import { Home } from "../../Page/Home";
import Gallery from "../../Page/Gallery";
import { Login } from "../../Page/Login";
import React from "react";
export default [
  {
    path: "/",
    exact: true,
    component: () => <Home />,
  },
  {
    path: "/gallery",
    exact: true,
    component: () => <Gallery />,
  },
  {
    path: "/login",
    exact: true,
    component: () => <Login />,
  },
];
