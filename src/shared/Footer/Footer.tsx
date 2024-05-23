import Styles from "../../styles/Footer.module.css";
import Container from "../../utils/Container";
import FooterInfo from "./FooterInfo";
import FooterImportantLinks from "./FooterImportantLinks";
import FooterOtherLinks from "./FooterOtherLinks";
import FooterConatctInfo from "./FooterConatctInfo";
import FooterCopyright from "./FooterCopyright";
const Footer = () => {
  return (
    <div className={`${Styles.FooterContainer} mt-20 p-5`}>
      <Container>
        <div className="text-white grid grid-cols-1 lg:grid-cols-4 gap-5">
          <FooterInfo />
          <FooterImportantLinks />
          <FooterOtherLinks />
          <FooterConatctInfo />
        </div>
        <hr className="border-dashed border-[#243B55] my-8" />
        <FooterCopyright />
      </Container>
    </div>
  );
};

export default Footer;
