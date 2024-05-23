import { Link } from "react-router-dom";

const FooterOtherLinks = () => {
  return (
    <div>
      <h1 className="text-2xl hind-siliguri-regular mb-2">Others Links</h1>
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
  );
};

export default FooterOtherLinks;
