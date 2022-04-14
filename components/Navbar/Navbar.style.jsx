import styled from "styled-components";
import { primary } from "../../styles/colors";
import Logo from "./Logo.style";
import NavLinks from "./NavLinks.style";

const NavbarContainer = styled.nav`
  width: 100%;
  padding: 0.5rem 4rem;
  background-color: ${primary};
  display: flex;
  justify-content: space-between;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>myMovies</Logo>
      <NavLinks />
    </NavbarContainer>
  );
};

export default Navbar;
