import React, { useContext } from "react";
import Navbar from "../shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const RegisterPage = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex flex-col items-cente">
      <Navbar />
      <div className=" mt-24 md:w-3/4 lg:w-1/2 mx-auto py-10 px-5 rounded bg-slate-700">
        <h2 className="text-3xl text-center text-white">Please Register</h2>
        <form
          onSubmit={handleRegister}
          className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
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
          </div>
          <div className="form-control mt-6">
            <button className="btn  bg-slate-100 text-black">Register</button>
          </div>
          <p className=" text-xs mt-1 text-white">
            Already have an account?
            <Link
              className="text-blue-600 font-bold ml-2"
              to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default RegisterPage;
