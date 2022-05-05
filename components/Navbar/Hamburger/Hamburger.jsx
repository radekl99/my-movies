import HamburgerContainer from "./HamburgerContainer.style";
import HamburgerLine from "./HamburgerLine.style";

const HamburgerButton = () => {
  return (
    <HamburgerContainer>
      <HamburgerLine />
      <HamburgerLine />
      <HamburgerLine />
    </HamburgerContainer>
  );
};

export default HamburgerButton;
