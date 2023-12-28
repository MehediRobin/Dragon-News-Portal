import { FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 bg-slate-100 rounded mb-5">
        <h2 className="text-3xl">Login With</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle />
          Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          Github
        </button>
      </div>
      <div className="p-4 bg-slate-100 rounded mb-5">
        <h2 className="text-3xl">Find Us On</h2>
        <Link className="p-4 flex items-center text-lg border rounded-t-lg">
          <FaFacebook className="mr-3" />
          <p>Facebook</p>
        </Link>
        <Link className="p-4 flex items-center text-lg border-x ">
          <FaTwitter className="mr-3" />
          <p>Twitter</p>
        </Link>
        <Link className="p-4 flex items-center text-lg border rounded-b-lg">
          <FaInstagram className="mr-3" />
          <p>Instagram</p>
        </Link>
      </div>
      <div className="p-4 space-y-3 bg-slate-100 rounded mb-5">
        <h2 className="text-3xl">Q Zone</h2>
        <img
          src={qzone1}
          alt=""
        />
        <img
          src={qzone2}
          alt=""
        />
        <img
          src={qzone3}
          alt=""
        />
      </div>
    </div>
  );
};

export default RightSideNav;
