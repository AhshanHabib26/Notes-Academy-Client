import Blog from "../components/ui/Blog";
import Books from "../components/ui/Books";
import Categories from "../components/ui/Categories";
import Courses from "../components/ui/Courses";
import Info from "../components/ui/Info";
import NHBanner from "../components/ui/NHBanner";
import Package from "../components/ui/OurPackage";
import Container from "../utils/Container";

const HomePage = () => {
  return (
    <div>
      <Container>
        <NHBanner />
        <Categories />
        <Books />
        <Courses />
        <Package />
        <Blog />
      </Container>
      <Info />
    </div>
  );
};

export default HomePage;
