import styled from "styled-components";
import { primary } from "../../styles/colors";

const NavbarContainer = styled.nav`
  width: 100%;
  padding: 0.75rem 2rem;
  background-color: ${primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default NavbarContainer;
