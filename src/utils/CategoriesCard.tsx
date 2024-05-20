import { useState } from "react";
import { TCategoryProps } from "../types/types.global";

// const bgColor = [
//     "bg-red-100",
//     "bg-yellow-100",
//     "bg-green-100",
//     "bg-gray-100",
//     "bg-orange-100",
//     "bg-blue-100",
//     "bg-teal-100",
//     "bg-pink-100",
//     "bg-purple-100",
//   ];
//   const bgHoverColor = [
//     "bg-red-500",
//     "bg-yellow-500",
//     "bg-green-500",
//     "bg-gray-500",
//     "bg-orange-500",
//     "bg-blue-500",
//     "bg-teal-500",
//     "bg-pink-500",
//     "bg-purple-500",
//   ];

const CategoriesCard: React.FC<TCategoryProps> = ({ category }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`flex items-center p-4 rounded-md cursor-pointer ${
        isHovered ? "text-white" : ""
      }`}
      style={{
        backgroundColor: isHovered ? category.hoverColor : category.bgColor,
        transition: "0.5s"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <img className="w-[50px]" src={category.image} alt="" />
      </div>
      <div className="ml-4">
        <h1 className="text-lg hind-siliguri-bold">{category.title}</h1>
        <p className="text-lg hind-siliguri-light">{category.description}</p>
      </div>
    </div>
  );
};

export default CategoriesCard;
