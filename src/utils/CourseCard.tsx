import { TCourseProps } from "../types/types.global";
import Styles from "../styles/CourseCard.module.css";
import {
  FaCartPlus,
  FaRegClock,
  FaRegEye,
  FaRegFolderOpen,
  FaUserTie,
} from "react-icons/fa6";
import { IoPricetags } from "react-icons/io5";
import { CiBookmarkCheck } from "react-icons/ci";
import { toast } from "sonner";



const CourseCard: React.FC<TCourseProps> = ({ course }) => {
  const handleClick = () => {
    toast.info("Hey! Please wait a couple of days for the update.");
  };

  return (
    <div
      className={`w-full border border-gray-200 ${Styles.NHCourseCardContainer}`}
    >
      <div className=" relative">
        <div className=" relative overflow-hidden">
          <img
            className={`w-full h-[200px] object-center object-cover opacity-70 ${Styles.NHCourseImg}`}
            src={course.image}
            alt=""
          />
        </div>
        <div className={Styles.NHLevel}>
          <h1 className=" hind-siliguri-light text-lg text-white px-2 py-1">
            {course.level}
          </h1>
        </div>
      </div>
      <div className="p-2">
        <div>
          <p className="bg-[#ffd4d4] inline-block p-[4px] text-[16px] rounded-md hind-siliguri-light ">
            {course.category}
          </p>
        </div>
        <div className=" flex items-center mt-2">
          <FaRegFolderOpen size={18} color="#001D25" />
          <h1 className="text-lg hind-siliguri-regular ml-1">{course.title}</h1>
        </div>
        <div className=" flex items-center">
          <FaUserTie size={18} color="#001D25" />
          <p className="text-lg hind-siliguri-regular ml-1 mt-1">
            {course.instructor}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className=" flex items-center">
            <IoPricetags size={18} color="#001D25" />
            <p className="text-lg hind-siliguri-regular ml-1">
              {course.price} টাকা
            </p>
          </div>
          <div className=" flex items-center">
            <FaRegClock size={18} color="#001D25" />
            <p className="text-lg hind-siliguri-regular ml-1">
              {course.duration}
            </p>
          </div>
        </div>
        <div>
          <hr className="border-slate-300 border-dashed my-3" />
          <div className="flex items-center justify-end gap-2 cursor-pointer">
            <CiBookmarkCheck
              onClick={() => handleClick()}
              size={20}
              color="#001D25"
            />
            <FaRegEye onClick={() => handleClick()} size={20} color="#001D25" />
            <FaCartPlus
              onClick={() => handleClick()}
              size={22}
              color="#001D25"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
