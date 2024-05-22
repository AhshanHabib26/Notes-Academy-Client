import Blog from "../components/ui/Blog";
import Books from "../components/ui/Books";
import Categories from "../components/ui/Categories";
import Contact from "../components/ui/Contact";
import Courses from "../components/ui/Courses";
import Info from "../components/ui/Info";
import NHBanner from "../components/ui/NHBanner";
import Package from "../components/ui/OurPackage";


const HomePage = () => {
  return (
    <div>
      <NHBanner />
      <Categories />
      <Books />
      <Courses />
      <Package />
      <Blog />
      <Info />
      <Contact/>
    </div>
  );
};

export default HomePage;
