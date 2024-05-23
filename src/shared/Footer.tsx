import Styles from "../styles/Footer.module.css";
import Container from "../utils/Container";
import logoImg from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import {
  FaLaptopCode,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaRegCopyright,
  FaSquareGithub,
} from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
const Footer = () => {
  return (
    <div className={`${Styles.FooterContainer} mt-20 p-5`}>
      <Container>
        <div className="text-white grid grid-cols-1 lg:grid-cols-4 gap-5">
          <div>
            <div className="flex items-center mb-2">
              <img src={logoImg} alt="Logo image" />
              <h1 className="text-2xl hind-siliguri-regular ml-2">
                Notes Academy
              </h1>
            </div>
            <p className="text-lg hind-siliguri-light">
              Your ultimate resource for concise, clear, and comprehensive study
              notes across various subjects, helping students achieve academic
              success effortlessly.
            </p>
          </div>
          <div>
            <h1 className="text-2xl hind-siliguri-regular mb-2">
              Important Links
            </h1>
            <div>
              <Link
                className="block text-lg hind-siliguri-light hover:text-[#FC4F4F]"
                to="/"
              >
                Join as a Teacher
              </Link>
              <Link
                className="block text-lg hind-siliguri-light hover:text-[#FC4F4F]"
                to="/"
              >
                Join as a Affiliate
              </Link>
              <Link
                className="block text-lg hind-siliguri-light hover:text-[#FC4F4F]"
                to="/"
              >
                Career
              </Link>
              <Link
                className="block text-lg hind-siliguri-light hover:text-[#FC4F4F]"
                to="/"
              >
                Privacy Policy
              </Link>
              <Link
                className="block text-lg hind-siliguri-light hover:text-[#FC4F4F]"
                to="/"
              >
                Refund Policy
              </Link>
              <Link
                className="block text-lg hind-siliguri-light hover:text-[#FC4F4F]"
                to="/"
              >
                Disclaimer
              </Link>
            </div>
          </div>
          <div>
            <h1 className="text-2xl hind-siliguri-regular mb-2">
              Others Links
            </h1>
            <div>
              <Link
                className="block text-lg hind-siliguri-light hover:text-[#FC4F4F]"
                to="/"
              >
                Blog
              </Link>
              <Link
                className="block text-lg hind-siliguri-light hover:text-[#FC4F4F]"
                to="/"
              >
                Book Store
              </Link>
              <Link
                className="block text-lg hind-siliguri-light hover:text-[#FC4F4F]"
                to="/"
              >
                Free Notes & Guide
              </Link>
              <Link
                className="block text-lg hind-siliguri-light hover:text-[#FC4F4F]"
                to="/"
              >
                Ebook Download
              </Link>
              <Link
                className="block text-lg hind-siliguri-light hover:text-[#FC4F4F]"
                to="/"
              >
                Verify Certificate
              </Link>
              <Link
                className="block text-lg hind-siliguri-light hover:text-[#FC4F4F]"
                to="/"
              >
                Disclaimer
              </Link>
            </div>
          </div>
          <div>
            <h1 className="text-2xl hind-siliguri-regular mb-2">
              Contact Info
            </h1>
            <div>
              <div className="flex items-center">
                <FaLocationDot size={18} />
                <p className="text-lg hind-siliguri-light ml-2">
                  Dhaka, Bangladesh
                </p>
              </div>
              <div className="flex items-center">
                <FaPhone size={18} />
                <a
                  className="text-lg hind-siliguri-light ml-2"
                  href="callto:+8801646418365"
                >
                  +8801646418365
                </a>
              </div>
              <div className="flex items-center">
                <MdMail size={18} />
                <a
                  className="text-lg hind-siliguri-light ml-2"
                  href="mailto:ahshan.habib026@gmail.com"
                >
                  ahshan.habib026@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <a target="_blank" href="https://web.facebook.com/AhshanHabib26">
                <FaFacebookSquare size={22} />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ahshanhabib26/"
              >
                <FaLinkedin size={22} />
              </a>
              <a target="_blank" href="https://github.com/AhshanHabib26">
                <FaSquareGithub size={22} />
              </a>
              <a target="_blank" href="https://leetcode.com/u/AhshanHabib/">
                <FaLaptopCode size={22} />
              </a>
              <a target="_blank" href="">
                <IoLogoYoutube size={22} />
              </a>
            </div>
          </div>
        </div>
        <hr className="border-dashed border-[#243B55] my-8" />
        <div className="text-white flex items-center justify-center">
        <FaRegCopyright size={16} />
          <p className="text-lg hind-siliguri-light ml-2">
            All rights reserved by{" "}
            <a target="_blank" className="text-[#FC4F4F]" href="https://www.linkedin.com/in/ahshanhabib26/">
              Ahshan Habib
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
