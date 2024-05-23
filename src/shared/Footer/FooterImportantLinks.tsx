import { Link } from "react-router-dom";

const FooterImportantLinks = () => {
  return (
    <div>
      <h1 className="text-2xl hind-siliguri-regular mb-2">Important Links</h1>
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
  );
};

export default FooterImportantLinks;
