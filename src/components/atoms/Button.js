import React from 'react';
import styled from 'styled-components';

const getButtonColor = (buttonThemeProperty, key = 'palette') => {
  console.log(getButtonColor, buttonThemeProperty);
  return (props) => {
    console.log(props);
    return props.theme.buttons[props[key]][buttonThemeProperty];
  };
};

const StyledButton = styled.button`
  border: 2px solid black;
  padding: ${(props) => props.theme.spacing(1)} 0;
  cursor: pointer;
  background: transparent;
  border: none;
  color: white;
  min-width: ${(props) => props.theme.spacing(4)};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${(props) =>
      props.theme.color('primary', 'main', (color) => color.lighten(0.1))};
  }
  &:active {
    background-color: ${(props) =>
      props.theme.color('primary', 'main', (color) => color.lighten(0.2))};
  }
`;
export default StyledButton;

export const Button = (props) => {
  console.log(props);
  return <StyledButton {...props} />;
};
