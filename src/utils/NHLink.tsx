import { Link } from "react-router-dom";
import { TLinkProps } from "../types/types.global";

const NHLink: React.FC<TLinkProps> = ({ linkUrl, linkText }) => {
  return <Link className=" bg-[#FC4F4F] px-3 py-3 mt-3 inline-block poppins-light text-lg rounded-md text-white" to={linkUrl}>{linkText}</Link>;
};

export default NHLink;
