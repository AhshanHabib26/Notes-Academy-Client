import { Link } from "react-router-dom";
import { TServiceProps } from "../types/types.global";
import { FaRegCircleCheck } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";

const PackageCard: React.FC<TServiceProps> = ({ service }) => {
  return (
    <div className=" shadow-md">
      <h1
        className={`${
          service.altTitle === "Basic"
            ? "bg-orange-500"
            : service.altTitle === "Plus"
            ? "bg-[#FC4F4F]"
            : "bg-green-500"
        } text-center p-2 text-xl hind-siliguri-regular text-white`}
      >
        {service.title}
      </h1>
      <div className="flex items-center justify-center my-2">
        <p className="text-lg hind-siliguri-light mr-2">প্যাকেজ মূল্য : </p>
        <div className="flex items-center">
            <p className="text-lg hind-siliguri-light mr-2">টাকা</p>
            <h1 className="text-2xl hind-siliguri-light line-through text-red-500">{service.price}</h1>
        </div>
        <div className="flex items-center">
          <h1
            className={`text-3xl ml-2 hind-siliguri-bold ${
              service.altTitle === "Basic"
                ? "text-orange-500"
                : service.altTitle === "Plus"
                ? "text-[#FC4F4F]"
                : "text-green-500"
            }`}
          >
            {service.offerPrice}
          </h1>
          <p className="text-lg hind-siliguri-regular ml-1"> / মাস</p>
        </div>
      </div>
      <hr className="border border-gray-100 border-dashed" />
      <div className="p-2">
        {service.service.map((item, index) => (
          <div key={index} className="flex items-center">
            {service.altTitle === "Basic" && (
              <>
                {index === 0 && <FaRegCircleCheck color="green" size={18} />}
                {index === 1 && <FaRegCircleCheck color="green" size={18} />}
                {index === 2 && <FaRegCircleCheck color="green" size={18} />}
                {index === 3 && <FaRegCircleCheck color="green" size={18} />}
                {index === 4 && <FaRegCircleCheck color="green" size={18} />}
                {index === 5 && <RxCrossCircled color="red" size={18} />}
                {index === 6 && <RxCrossCircled color="red" size={18} />}
                {index === 7 && <RxCrossCircled color="red" size={18} />}
                {index === 8 && <RxCrossCircled color="red" size={18} />}
                {index === 9 && <RxCrossCircled color="red" size={18} />}
                {index === 10 && <RxCrossCircled color="red" size={18} />}
              </>
            )}
            {service.altTitle === "Plus" && (
              <>
                {index === 0 && <FaRegCircleCheck color="green" size={18} />}
                {index === 1 && <FaRegCircleCheck color="green" size={18} />}
                {index === 2 && <FaRegCircleCheck color="green" size={18} />}
                {index === 3 && <FaRegCircleCheck color="green" size={18} />}
                {index === 4 && <FaRegCircleCheck color="green" size={18} />}
                {index === 5 && <FaRegCircleCheck color="green" size={18} />}
                {index === 6 && <RxCrossCircled color="red" size={18} />}
                {index === 7 && <FaRegCircleCheck color="green" size={18} />}
                {index === 8 && <RxCrossCircled color="red" size={18} />}
                {index === 9 && <FaRegCircleCheck color="green" size={18} />}
                {index === 10 && <RxCrossCircled color="red" size={18} />}
              </>
            )}
            {service.altTitle === "Premium" && (
              <>
                {index === 0 && <FaRegCircleCheck color="green" size={18} />}
                {index === 1 && <FaRegCircleCheck color="green" size={18} />}
                {index === 2 && <FaRegCircleCheck color="green" size={18} />}
                {index === 3 && <FaRegCircleCheck color="green" size={18} />}
                {index === 4 && <FaRegCircleCheck color="green" size={18} />}
                {index === 5 && <FaRegCircleCheck color="green" size={18} />}
                {index === 6 && <FaRegCircleCheck color="green" size={18} />}
                {index === 7 && <FaRegCircleCheck color="green" size={18} />}
                {index === 8 && <FaRegCircleCheck color="green" size={18} />}
                {index === 9 && <FaRegCircleCheck color="green" size={18} />}
                {index === 10 && <FaRegCircleCheck color="green" size={18} />}
              </>
            )}
            <p className="text-lg hind-siliguri-light ml-2 mb-1">{item}</p>
          </div>
        ))}
      </div>
      <div className="mt-2">
        {service.altTitle === "Basic" ? (
          <Link
            className="bg-orange-500 inline-block w-full text-center text-xl hind-siliguri-regular text-white p-2"
            to="/"
          >
            এনরোল বেসিক
          </Link>
        ) : service.altTitle === "Plus" ? (
          <Link
            className="bg-[#FC4F4F] inline-block w-full text-center text-xl hind-siliguri-regular text-white p-2"
            to="/"
          >
            এনরোল প্লাস
          </Link>
        ) : (
          <Link
            className="bg-green-500 inline-block w-full text-center text-xl hind-siliguri-regular text-white p-2"
            to="/"
          >
            এনরোল প্রিমিয়াম
          </Link>
        )}
      </div>
    </div>
  );
};

export default PackageCard;