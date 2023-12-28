import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  if (loading) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  } else {
    return (
      <Navigate
        state={location.pathname}
        to="/login"></Navigate>
    );
  }
};

export default PrivateRoute;
