import { FaUserCircle } from "react-icons/fa";
import { TBlogProps } from "../types/types.global";
import { BiLike } from "react-icons/bi";
import { FaCommentDots } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BlogCard: React.FC<TBlogProps> = ({ blog }) => {
  return (
    <div>
      <div
        className={`border p-3 rounded-lg shadow-lg w-full ${
          blog.id === "1" ? "" : "flex items-start flex-row"
        } ${
          blog.type === "premium"
            ? " cursor-not-allowed opacity-60"
            : " cursor-pointer"
        }`}
      >
        <img
          className={`rounded-lg ${
            blog.id === "1" ? "w-full !h-[300px]" : "!w-[120px] !h-[100px]"
          }`}
          src={blog.image}
          alt={blog.title}
        />

        <div className={`${blog.id === "1" ? "mt-2" : "flex-col ml-2"} w-full`}>
          <div className="flex items-center">
            <FaUserCircle size={18} color="#001D25" />
            <p className="text-lg hind-siliguri-regular ml-1">{blog.author}</p>
          </div>
          <h1 className="text-lg hind-siliguri-regular text-[#001D25]">
            {blog.title}
          </h1>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center">
              <div className="flex items-center mr-4">
                <BiLike size={18} color="#001D25" />
                <p className="text-lg hind-siliguri-regular ml-1">
                  {blog.likes}
                </p>
              </div>
              <div className="flex items-center">
                <FaCommentDots size={18} color="#001D25" />
                <p className="text-lg hind-siliguri-regular ml-1">
                  {blog.comments}
                </p>
              </div>
            </div>
            <div>
              {blog.type === "premium" ? (
                <p>Premium content</p>
              ) : (
                <Link
                  to=""
                  className="text-lg hind-siliguri-light text-[#FC4F4F]"
                >
                  Read more
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
