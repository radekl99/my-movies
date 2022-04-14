import styled from "styled-components";
import Navbar from "../Navbar/Navbar.style";

const LayoutStyle = styled.div`
  width: 100%;
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
