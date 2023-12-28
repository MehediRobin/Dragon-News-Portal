import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NewsField = () => {
  const [newsArray, setNewsArray] = useState([]);
  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => {
        setNewsArray(data);
      });
  });

  return (
    <div>
      {newsArray.map((piece) => (
        <Link
          key={piece._id}
          to={`/${piece._id}`}>
          <div className="space-y-3 mb-6">
            <h2 className="text-3xl font-bold">{piece.title}</h2>
            <img
              src={piece.image_url}
              alt=""
            />
            {piece.details.length > 300 ? (
              <p>{piece.details.slice(0, 300)}...</p>
            ) : (
              <p>{piece.details}</p>
            )}
            <p className=" font-medium text-orange-300">Read More</p>
            <div className="divider"></div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NewsField;
