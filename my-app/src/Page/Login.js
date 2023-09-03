import React from "react";
import firebase from "../config/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export const Login = () => {
  function handleForm(e) {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword("hi@123.com", "hi1234")
      .then((res) => {
        console.log(res);
      });
  }
  return (
    <div className="flex h-screen bg-gray-200">
      <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-indigo-900 to-gray-600">
        <form className="m-5 w-10/12" onSubmit={handleForm}>
          <h1 className="w-full text-4xl tracking-widest text-center my-6">
            Login
          </h1>
          <div className="w-full my-6">
            <input
              type="email"
              className="p-2 rounded shadow w-full"
              placeholder="Email or Username"
            />
          </div>
          <div className="w-full my-6">
            <input
              type="password"
              className="p-2 rounded shadow w-full"
              placeholder="password"
            />
          </div>
          <div className="w-full my-10">
            <button
              type="submit"
              className="p-2 rounded shadow w-full bg-gradient-to-br from-yellow-500 to-yellow-600 text-black"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
