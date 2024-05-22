import Books from "../components/ui/Books";
import Categories from "../components/ui/Categories";
import Courses from "../components/ui/Courses";
import NHBanner from "../components/ui/NHBanner";
import Package from "../components/ui/OurPackage";
import Container from "../utils/Container";

const HomePage = () => {
  return (
    <Container>
      <NHBanner />
      <Categories />
      <Books />
      <Courses />
      <Package />
    </Container>
  );
};

export default HomePage;
