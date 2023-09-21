import React from "react";
import Images from "../components/Images";
import Images2 from "../components/Images2";
import { Fetch } from "../components/Fetch";

export default function Gallery() {
  return (
    <section className="flex justify-center">
      <div className="w-10/12">
        <div className="text-center">
          <Images />
        </div>
      </div>
    </section>
  );
}
