import styled from "styled-components";
import { secondary, secondaryAlpha } from "../../styles/colors";

const NavLink = styled.li`
  color: ${secondary};
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  transition: 0.2s;

  &:hover {
    background-color: ${secondaryAlpha};
  }
`;

export default NavLink;
