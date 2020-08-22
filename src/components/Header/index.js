import React, { useRef } from 'react';
import styled from 'styled-components';
import { MdMenu } from 'react-icons/md';
import Box from '../atoms/Box';
import Switch from 'react-switch';
import { Link } from 'react-router-dom';

const FixedHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 5em;
  z-index: 10;
  width: 100%;
  font-size: 1.25em;
  background-color: rgba(0, 0, 0, 0.4);
`;

const MenuButton = styled.button`
  padding: 1em;
  font-size: inherit;
  border: none;
  background: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
const HeaderPlaceholder = styled.div`
  height: 5em;
`;
const Header = ({ children, onSwitchTheme, themeName }) => {
  return (
    <>
      <HeaderPlaceholder />
      <FixedHeader>
        <Box fullHeight justify="space-around" alignItems="center">
          <h1
            css={`
              margin: 0;
            `}
          >
            <Link to="/projects">Gorazdo.studio</Link>
          </h1>
          <a href="mailto:tomova.design@gmail.com">@Contact us</a>
        </Box>
        {/* <Box fullHeight justify="space-between" alignItems="center">
          <Box>
            <MenuButton>
              <Box alignItems="center">
                <MdMenu />
                &nbsp;
                <Link to="/">
                  <span>Gorazdo</span>
                  <b>studio</b>
                </Link>
              </Box>
            </MenuButton>
          </Box>
          <Box>Design</Box>
          <Box>
            <Link to="/projects">Projects</Link>
          </Box>
          <Box>you</Box>
          <Box>
            <Switch onChange={onSwitchTheme} checked={themeName === 'dark'} />
          </Box>
        </Box> */}
      </FixedHeader>
    </>
  );
};

export default Header;
