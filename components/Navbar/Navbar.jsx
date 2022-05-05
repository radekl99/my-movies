import Logo from "./Logo.style";
import NavLinks from "./NavLinks.style";
import NavbarContainer from "./NavbarContainer.style";
import Hamburger from "./Hamburger/Hamburger";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>myMovies</Logo>
      {/* <NavLinks /> */}
      <Hamburger />
    </NavbarContainer>
  );
};

export default Navbar;
