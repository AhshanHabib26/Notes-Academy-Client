import { GiNotebook } from "react-icons/gi";
import Container from "../../utils/Container";
import { Link } from "react-router-dom";
import NHButton from "../../utils/NHButton";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { Drawer } from "@mantine/core";
import logoImg from "../../assets/images/logo.png";

const TopMainNav = () => {
  const [opened, setOpened] = useState(false);

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
          <div className=" flex items-center justify-between">
            <div className=" hidden md:block lg:block">
              <div className="flex items-center gap-3">
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
                <NHButton btnText="Register" />
              </div>
            </div>
            <div className=" block lg:hidden md:hidden">
              <Drawer.Root
                opened={opened}
                onClose={() => setOpened(false)}
                position="right"
                size="xs"
              >
                <Drawer.Overlay backgroundOpacity={0.2} blur={2} />
                <Drawer.Content>
                  <Drawer.Header>
                    <div className=" border-b-2 w-full flex items-center pb-2 border-green-50">
                      <Drawer.Title>
                        <div className="flex items-center">
                          <img
                            className="w-[30px] h-[30px] object-cover"
                            src={logoImg}
                            alt="Website Logo"
                          />
                          <h1 className="text-lg poppins-regular ml-1">
                            Notes Academy
                          </h1>
                        </div>
                      </Drawer.Title>
                      <Drawer.CloseButton />
                    </div>
                  </Drawer.Header>
                  <Drawer.Body>
                    {" "}
                    <div>
                      <Link
                        className="text-lg poppins-light cursor-pointer hover:text-[#F56565] block"
                        to="/"
                      >
                        Home
                      </Link>
                      <Link
                        className="text-lg poppins-light mt-1 cursor-pointer hover:text-[#F56565] block"
                        to="/courses"
                      >
                        Courses
                      </Link>
                      <Link
                        className="text-lg poppins-light mt-1 cursor-pointer hover:text-[#F56565] block"
                        to="/blogs"
                      >
                        Blogs
                      </Link>
                      <Link
                        className="text-lg poppins-light mt-1 cursor-pointer hover:text-[#F56565] block"
                        to="/contact-us"
                      >
                        Contact Us
                      </Link>
                      <hr className="my-3 border border-gray-100" />
                      <Link
                        className="text-lg poppins-light cursor-pointer border p-2 text-center bg-[#F56565] text-white rounded-lg block"
                        to="/"
                      >
                        Register
                      </Link>
                    </div>
                  </Drawer.Body>
                </Drawer.Content>
              </Drawer.Root>

              <button onClick={() => setOpened(true)}>
                <FaBars size={20} color="#fff" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopMainNav;
