import React, { useContext } from 'react';
import styled from 'styled-components';
import Box from '../atoms/Box';
import Switch from 'react-switch';
import { Link } from 'react-router-dom';
import { LocaleContext } from 'contexts/Locale';

const FixedHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 5rem;
  z-index: 10;
  width: 100%;
  line-height: 5rem;
  font-size: 1.25em;
  background-color: rgba(0, 0, 0, 0.4);
`;

const StyledTitle = styled('h1')`
  margin: 0;
`;

const HeaderPlaceholder = styled.div`
  height: 5rem;
`;
const Header = ({ children, onSwitchTheme, themeName }) => {
  return (
    <>
      <HeaderPlaceholder />
      <FixedHeader>
        <Box fullHeight justify="space-around" alignItems="baseline">
          <StyledTitle>
            <Link to="/projects">Gorazdo.studio</Link>
          </StyledTitle>
          <span>
            <a href="mailto:tomova.design@gmail.com">@Contact us</a>
          </span>
          <Switch onChange={onSwitchTheme} checked={themeName === 'dark'} />
          <LocaleSwitch />
        </Box>
      </FixedHeader>
    </>
  );
};

const LocaleSwitch = () => {
  const [locale, setLocale] = useContext(LocaleContext);
  const handleSwitchLocale = () => {
    if (locale === 'en') {
      setLocale('ru');
    } else {
      setLocale('en');
    }
  };
  return <Switch onChange={handleSwitchLocale} checked={locale === 'en'} />;
};
export default Header;
