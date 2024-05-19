import { GiNotebook } from "react-icons/gi";
import Container from "../../utils/Container";
import { Link } from "react-router-dom";
import NHButton from "../../utils/NHButton";

const TopMainNav = () => {
  return (
    <div className="py-2">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <Link to="/">
              <div className="flex items-center">
                <GiNotebook color="#fff" size={22} />
                <h1 className="text-lg poppins-regular text-white ml-1">
                  Notes Academy
                </h1>
              </div>
            </Link>
          </div>
          <div className=" flex items-center gap-3">
            <Link
              className="text-lg poppins-light text-white hover:text-[#FC4F4F]"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-lg poppins-light text-white hover:text-[#FC4F4F]"
              to="/"
            >
              Courses
            </Link>
            <Link
              className="text-lg poppins-light text-white hover:text-[#FC4F4F]"
              to="/"
            >
              Blog
            </Link>
            <NHButton btnText="Login" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopMainNav;
