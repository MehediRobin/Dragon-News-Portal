import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div>
      <div className="flex bg-slate-100 p-2">
        <button className="btn btn-error">Breaking News!!</button>
        <Marquee className="font-bold">
          <Link className="mr-8">
            {" "}
            I can be a React component, multiple React components, or just some
            text.
          </Link>
          <Link className="mr-8">
            {" "}
            I can be a React component, multiple React components, or just some
            text.
          </Link>
          <Link className="mr-8">
            {" "}
            I can be a React component, multiple React components, or just some
            text.
          </Link>
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
