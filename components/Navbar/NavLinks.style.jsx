import styled from "styled-components";
import PrimaryButton from "../Buttons/PrimaryButton.style";
import NavLink from "./NavLink.style";

const NavLinksContainer = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLinks = () => {
  return (
    <NavLinksContainer>
      <NavLink>list</NavLink>
      <NavLink>search</NavLink>
      <PrimaryButton>sign in</PrimaryButton>
    </NavLinksContainer>
  );
};

export default NavLinks;
