import Logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center mt-16 mb-8">
      <img
        src={Logo}
        alt=""
        className="mx-auto"
      />
      <p>Journalism Without Fear or Favour</p>
      <p className="text-xl">{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;
