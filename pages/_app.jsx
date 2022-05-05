import { createGlobalStyle } from "styled-components";
import Layout from "../components/Layout/Layout.style";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 16px;
    font-family: 'Akshar', sans-serif;
    letter-spacing: -0.05rem;
    overflow: hidden;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
