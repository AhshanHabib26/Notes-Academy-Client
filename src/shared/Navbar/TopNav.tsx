import {
  FaArrowTrendUp,
  FaFacebookF,
  FaLinkedinIn,
  FaRegClock,
  FaYoutube,
} from "react-icons/fa6";
import Container from "../../utils/Container";
import { Link } from "react-router-dom";

const TopNav = () => {
  const today = new Date();
  const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
  const day = today.getDate();
  const month = today.toLocaleDateString("en-US", { month: "long" });
  const year = today.getFullYear();
  const formattedDate = `${dayName}, ${month} ${day} ${year}`;

  return (
    <Container>
      <div className="flex items-center justify-between py-2">
        <div className=" flex items-center">
          <FaArrowTrendUp color="#fff" size={18} />
          <p className=" hind-siliguri-light text-lg ml-2 text-white">
            React Virtual DOM Explanation
          </p>
        </div>
        <div className=" hidden lg:block">
          <div className=" flex items-center gap-3">
            <div className=" flex items-center">
              <FaRegClock color="#fff" size={18} />
              <p className="hind-siliguri-light text-lg ml-1 text-white">
                {formattedDate}
              </p>
            </div>
            <hr className=" border-[#fff] border h-[16px]" />
            <div className=" flex items-center">
              <Link to="/">
                <FaFacebookF
                  className="text-white hover:text-[#FC4F4F] transition-colors duration-300"
                  size={18}
                />
              </Link>
              <Link to="/">
                {" "}
                <FaLinkedinIn
                  className="text-white hover:text-[#FC4F4F] transition-colors duration-300 mx-2"
                  size={18}
                />
              </Link>
              <Link to="/">
                {" "}
                <FaYoutube
                  className="text-white hover:text-[#FC4F4F] transition-colors duration-300"
                  size={18}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TopNav;
