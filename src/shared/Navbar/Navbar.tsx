import TopMainNav from "./TopMainNav";
import TopNav from "./TopNav";

const Navbar = () => {
  return (
    <div className=" bg-[#001D25]">
      <TopNav/>
      <hr className=" border-[#063846] border-dashed " />
      <TopMainNav/>
    </div>
  );
};

export default Navbar;
