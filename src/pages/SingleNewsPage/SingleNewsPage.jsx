import { useEffect, useState } from "react";
import Header from "../shared/Header/Header";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const SingleNewsPage = () => {
  const newsArray = useLoaderData();
  const { id } = useParams();
  const news = newsArray.find((news) => news._id === id);

  return (
    <div>
      <Header />
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="md:col-span-3">
          <h2 className="text-xl font-bold">Dragon News</h2>
          <div className=" space-y-6 p-2 pl-0">
            <img
              className="w-full"
              src={news.image_url}
              alt=""
            />
            <p className="text-2xl font-bold">{news.title}</p>
            <p className="text-justify">{news.details}</p>
          </div>
        </div>

        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default SingleNewsPage;
