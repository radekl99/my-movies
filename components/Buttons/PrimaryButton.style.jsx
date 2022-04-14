import styled from "styled-components";
import { primary, secondary, secondaryAlpha } from "../../styles/colors";

const PrimaryButton = styled.button`
  color: ${primary};
  background-color: ${secondary};
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 0.25rem ${secondaryAlpha};
  }
`;

export default PrimaryButton;
