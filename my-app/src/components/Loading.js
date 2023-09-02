import React from "react";

export const Loading = () => {
  return (
    <div className="flex h-screen">
      <p className="m-auto">
        <i className="fas fa-circle-notch fa-spin text-5xl text-blue-500"></i>
      </p>
    </div>
  );
};
