import { FaRegCopyright } from "react-icons/fa6";

const FooterCopyright = () => {
  const date = new Date();
  const fullYear = date.getFullYear();

  return (
    <div className="text-white flex items-center justify-center">
      <FaRegCopyright size={14} />
      <p className="text-md hind-siliguri-light ml-1">
        {fullYear} All rights reserved by{" "}
        <a
          target="_blank"
          className="text-[#FC4F4F]"
          href="https://www.linkedin.com/in/ahshanhabib26/"
        >
          Ahshan Habib
        </a>
      </p>
    </div>
  );
};

export default FooterCopyright;
