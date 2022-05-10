import React from "react";
import { connect, styled } from "frontity";

const Toggle = ({ actions, state }) => {
  const { setLightMode, setDarkMode } = actions.theme;
  const { mode } = state.theme;
  // return (
  //   <Container>
  //     <ButtonsStyled isSelected={mode === "light"} onClick={setLightMode}>
  //       Light
  //     </ButtonsStyled>
  //     <ButtonsStyled isSelected={mode === "dark"} onClick={setDarkMode}>
  //       Dark
  //     </ButtonsStyled>
  //   </Container>
  // );
  return (
    <label>
      <input className="toggle-checkbox" type="checkbox" />
      <div className="toggle-slot">
        <div className="sun-icon-wrapper">
          <div
            className="iconify sun-icon"
            data-icon="feather-sun"
            data-inline="false"
          />
        </div>
        <div className="toggle-button" />
        <div className="moon-icon-wrapper">
          <div
            className="iconify moon-icon"
            data-icon="feather-moon"
            data-inline="false"
          />
        </div>
      </div>
    </label>
  );
};

export default connect(Toggle);

const Container = styled.div`
  display: flex;
`;

const ButtonsStyled = styled.button`
  padding: 10px;
  border: 0;
  background-color: ${({ isSelected }) => (isSelected ? "#ccc" : "#fff")};
`;
