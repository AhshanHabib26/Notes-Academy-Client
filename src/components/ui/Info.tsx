import { Link } from "react-router-dom";
import Styles from "../../styles/Info.module.css";

const Info = () => {
  return (
    <div
      className={`${Styles.InfoContainer} mt-20 py-20 lg:py-24 text-center`}
    >
      <h1 className="text-4xl hind-siliguri-bold text-white">
        নিজের শেখা নিজেই গুছিয়ে নেয়ার যাত্রা শুরু হোক
      </h1>
      <Link
        className="bg-[#001D25] text-xl hind-siliguri-light p-3 mt-3 inline-block text-white rounded-md"
        to="/"
      >
        আজই শুরু করুন
      </Link>
    </div>
  );
};

export default Info;
