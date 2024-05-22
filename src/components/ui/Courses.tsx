import { FaLongArrowAltRight } from "react-icons/fa";
import getAllCourses from "../../data/courseData";
import { TCourse } from "../../types/types.global";
import CourseCard from "../../utils/CourseCard";
import { Link } from "react-router-dom";
import Container from "../../utils/Container";

const Courses = () => {
  const courses = getAllCourses();

  return (
    <Container>
      <div className=" mt-20">
        <h1 className="text-3xl hind-siliguri-bold text-center">
          জনপ্রিয় <span className="text-[#FC4F4F]">সকল কোর্স</span>
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto mt-10">
          {courses.slice(0, 6).map((course: TCourse) => (
            <CourseCard course={course} key={course.id} />
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
    </Container>
  );
};

export default Courses;
