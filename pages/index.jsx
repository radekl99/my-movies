import styled from "styled-components";
import ContentWrapper from "../components/Layout/ContentWrapper.style";
import { primary, primaryDark, secondary } from "../styles/colors";

const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;

  h1 {
    margin: 1rem 0;
    text-align: center;
    font-size: 1.75rem;
    font-weight: 400;
    color: ${secondary};
  }

  img {
    width: 20rem;
    max-width: 100%;
    border-radius: 0.5rem;
    margin-bottom: 3rem;
  }

  button {
    padding: 1rem 2rem;
    font-size: 1.25rem;
    border-radius: 0.5rem;
    background-color: ${secondary};
    border: none;
    font-weight: bold;
    color: ${primaryDark};
    transition: 150ms;

    &:hover,
    &:active,
    &:focus {
      transform: translateY(-10%);
    }
  }
`;

export default function Home() {
  return (
    <ContentWrapper>
      <HomeContainer>
        <h1>Place to track your movies history!</h1>
        <img src="movies.jpg" alt="" />
        <button>Get started</button>
      </HomeContainer>
    </ContentWrapper>
  );
}
