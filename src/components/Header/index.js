import React, { useContext } from 'react';
import Box from 'src/components/atoms/Box';
import Link from 'next/link';
import Switch from 'react-switch';
import { LocaleContext } from 'src/contexts/Locale';
import { ThemeContext } from 'src/contexts/Theme';

const Header = () => {
  return (
    <>
      <header>
        <Box fullHeight justify="space-around" alignItems="baseline">
          <Link href="/projects">Gorazdo.studio</Link>
          <span>
            <a href="mailto:tomova.design@gmail.com">@Contact us</a>
          </span>
          <Box fullHeight alignItems="center" alignSelf="flex-end">
            <ThemeSwitch />
            <LocaleSwitch />
          </Box>
        </Box>
      </header>
    </>
  );
};

const ThemeSwitch = () => {
  const [themeName, toggleTheme] = useContext(ThemeContext);
  return <Switch onChange={toggleTheme} checked={themeName === 'dark'} />;
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

export { Header };
