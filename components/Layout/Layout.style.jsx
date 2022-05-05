import styled from "styled-components";
import Navbar from "../Navbar/Navbar";

const LayoutStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: pink;
`;

const Layout = ({ children }) => {
  return (
    <LayoutStyle>
      <Navbar />
      {children}
    </LayoutStyle>
  );
};

export default Layout;
