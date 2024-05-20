import Categories from "../components/ui/Categories";
import NHBanner from "../components/ui/NHBanner";
import Container from "../utils/Container";

const HomePage = () => {
  return (
    <Container>
      <NHBanner />
      <Categories />
    </Container>
  );
};

export default HomePage;
