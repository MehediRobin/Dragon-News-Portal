import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const LogInPage = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
  };
  return (
    <div className="flex flex-col items-cente">
      <Navbar />
      <div className=" mt-24 md:w-3/4 lg:w-1/2 mx-auto py-10 px-5 rounded bg-slate-700">
        <h2 className="text-3xl text-center text-white">Please Login</h2>
        <form className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a
                href="#"
                className="label-text-alt link link-hover text-white">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn  bg-slate-100 text-black">Login</button>
          </div>
          <p className=" text-xs mt-1 text-white">
            Don't have an account?{" "}
            <Link
              className="text-blue-600 font-bold ml-2"
              to="/register">
              Register
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogInPage;
