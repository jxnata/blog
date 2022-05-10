import React from "react";
import { connect, styled } from "frontity";
import SunLogo from "./sun.svg";
import MoonLogo from "./moon.svg";

const Toggle = ({ actions, state }) => {
  const { setLightMode, setDarkMode } = actions.theme;
  const { mode } = state.theme;

  const toggleMode = () => {
    if (mode === "light") {
      setDarkMode();
      localStorage.setItem("theme", "dark");
    } else {
      setLightMode();
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <Container onClick={toggleMode}>
      <CheckBox type="checkbox" />
      <ToggleSlot>
        <Icon src={SunLogo} alt="light" />
        <Icon src={MoonLogo} alt="dark" />
        <ToggleButton mode={mode} />
      </ToggleSlot>
    </Container>
  );
};

export default connect(Toggle);

const Container = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;
const CheckBox = styled.input`
  opacity: 0;
  position: absolute;
`;
const ToggleSlot = styled.div`
  background-color: #555555;
  width: 50px;
  height: 26px;
  border-radius: 50px;
  position: relative;
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Icon = styled.img`
  width: 16px;
  height: 16px;
`;
const ToggleButton = styled.div`
  background-color: #fff;
  width: 22px;
  height: 22px;
  position: absolute;
  left: 2px;
  top: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;

  ${({ mode }) =>
    mode === "light" &&
    `
    transform: translateX(24px);
  `}
`;
