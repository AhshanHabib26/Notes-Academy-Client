import { FaLongArrowAltRight } from "react-icons/fa";
import { getAllBlogData } from "../../data/blogData";
import { TBlog } from "../../types/types.global";
import BlogCard from "../../utils/BlogCard";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogs = getAllBlogData();

  return (
    <div className="mt-20">
      <h1 className="text-3xl hind-siliguri-bold text-center">
        জনপ্রিয় <span className="text-[#FC4F4F]"> ব্লগ</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-5xl mx-auto mt-10">
        {blogs.map((blog: TBlog, index: number) => (
          <div
            key={blog.id}
            className={`${
              index === 0 ? "lg:col-span-1 lg:row-span-3" : "lg:col-span-1"
            }`}
          >
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-center">
        <Link
          className=" bg-[#FC4F4F] flex items-center justify-center px-5 py-3 rounded-md"
          to="/"
        >
          {" "}
          <h1 className="text-lg poppins-light text-white">Explore More</h1>
          <FaLongArrowAltRight className="ml-1" size={20} color="#fff" />
        </Link>
      </div>
    </div>
  );
};

export default Blog;
