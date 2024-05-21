import {
  FaBook,
  FaBookOpen,
  FaCartShopping,
  FaEye,
  FaRegHeart,
  FaUser,
} from "react-icons/fa6";
import { TBookProps } from "../types/types.global";
import { BiCategory } from "react-icons/bi";
import { IoMdPricetags } from "react-icons/io";
import Styles from "../styles/BooksCard.module.css";

const BooksCard = ({ book }: TBookProps) => {
  return (
    <div
      className={`flex items-start shadow border p-3 rounded-md ${Styles.BCMainContainer}`}
    >
      <div>
        <img
          className="w-[130px] h-[130px] object-center rounded"
          src={book.coverImageUrl}
          alt=""
        />
      </div>
      <div className=" w-full ml-2">
        <div className="flex items-center">
          <FaBook size={16} color="#001D25" />
          <h1 className="text-xl hind-siliguri-regular ml-1">{book.title}</h1>
        </div>
        <div className="flex items-center">
          <FaUser size={16} color="#001D25" />
          <h1 className="text-lg hind-siliguri-light ml-1">{book.author}</h1>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <BiCategory size={16} color="#001D25" />
            <h1 className="text-lg hind-siliguri-light ml-1">{book.genre}</h1>
          </div>
          <div className="flex items-center">
            <FaBookOpen size={18} color="#001D25" />
            <h1 className="text-lg hind-siliguri-light ml-1">{book.pages}</h1>
          </div>
        </div>
        <div>
          {book?.offerPrice ? (
            <div>
              {" "}
              <div className="flex items-center">
                <IoMdPricetags size={16} color="#001D25" />
                <div className="flex items-center">
                  <h1 className="text-lg hind-siliguri-semibold ml-1 line-through text-red-400">
                    TK {book.price}
                  </h1>
                  <h1 className="text-lg hind-siliguri-semibold ml-1 text-[#001D25]">
                    TK {book.offerPrice}
                  </h1>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center">
              <IoMdPricetags size={16} color="#001D25" />
              <h1 className="text-lg hind-siliguri-regular ml-1">
               TK {book.price}
              </h1>
            </div>
          )}
        </div>
        <div className="flex items-end justify-end gap-3">
          <FaEye size={18} color="#001D25" />
          <FaRegHeart size={18} color="#001D25" />
          <FaCartShopping size={18} color="#001D25" />
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
