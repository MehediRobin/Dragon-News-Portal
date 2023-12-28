import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  });
  useEffect(() => {
    fetch("mostRead.json")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
      });
  });
  return (
    <div>
      <div className="space-y-6 mb-5">
        <h2 className="text-3xl">All Categories</h2>
        {categories.map((category) => (
          <Link
            className="block text-xl font-semibold"
            key={category.id}
            to={`/category/${category.id}`}>
            {category.name}
          </Link>
        ))}
      </div>
      <div className="space-y-6">
        {news.map((singleNews) => (
          <Link
            className="block text-xl font-semibold "
            key={singleNews.news_id}
            to={`/news/${singleNews.id}`}>
            <div className="space-y-1">
              {" "}
              <img
                src={singleNews.news_image}
                alt=""
              />
              <div className="text-justify"> {singleNews.news_headline}</div>
              <div className="flex justify-between ">
                <p className="text-sm ">{singleNews.category}</p>
                <p className="text-sm">{singleNews.published_date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
