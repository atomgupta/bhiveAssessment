import Logo from "../../assets/logo.svg";
import { Phone } from "@mui/icons-material";

const Header = () => {
  return (
    <div className="header bg-white px-5 lg:px-32 py-4 flex justify-between items-center shadow-md">
      <a href="/">
        <img className="w-32 lg:w-auto" alt="logo" src={Logo} />
      </a>
      <Phone
        className="border border-logo-primary-2 p-1.5 rounded shadow-md cursor-pointer text-logo-primary-2"
        sx={{ width: "2rem", height: "2rem" }}
      />
    </div>
  );
};

export default Header;
