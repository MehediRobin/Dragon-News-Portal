import { useEffect, useState } from "react";
import Header from "../shared/Header/Header";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import { useParams } from "react-router-dom";

const SingleNewsPage = () => {
  const [newsArray, setNewsArray] = useState([]);
  const { id } = useParams();

  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="md:col-span-3">{console.log(newsArray)}</div>

        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default SingleNewsPage;
