/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import Blurry from './components/atoms/Blurry';
import Header from './components/Header';
import Box from './components/atoms/Box';
import Image from './components/Image';
import Card from './components/organisms/Card';
import { TypographyStyle, GoogleFont } from 'react-typography';
import dark from './styles/themes/dark';
import white from './styles/themes/white';
// Best practice is to have a typography module
// where you define your theme.
import typography from './utils/typography';
import PromoOffers from './components/organisms/PromoOffers';
import { ThemeProvider } from 'styled-components';
import WelcomeTitle from './components/organisms/WelcomeTitle';
import GlobalStyle from './components/GlobalStyle';

const themes = { dark, white };

function App() {
  const [currentThemeName, setThemeName] = useState('dark');

  const handleSwitch = () => {
    if (currentThemeName === 'dark') {
      setThemeName('white');
    } else {
      setThemeName('dark');
    }
  };
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', function() {
      try {
        let app = firebase.app();
        let features = ['auth', 'firestore', 'messaging', 'storage'].filter(
          feature => typeof app[feature] === 'function'
        );
        console.log(`Firebase SDK loaded with ${features.join(', ')}`);
      } catch (e) {
        console.error(e);
        document.getElementById('load').innerHTML =
          'Error loading the Firebase SDK, check the console.';
      }
    });
  }, []);
  return (
    <ThemeProvider theme={themes[currentThemeName]}>
      <div className="App">
        <GlobalStyle />
        <TypographyStyle typography={typography} />
        <GoogleFont typography={typography} />

        <Header onSwitchTheme={handleSwitch} themeName={currentThemeName} />
        <header className="App-header">
          <Blurry>
            <h2>some text</h2>
          </Blurry>
          <WelcomeTitle />
          <PromoOffers />
          <Box wrap>
            <Blurry>
              <Card
                title="Business card"
                description="THe common business cards that you met the whole your life. We can use whatever paper you prefer"
              />
            </Blurry>
            <Blurry>
              <Card
                title="Business card"
                description="THe common business cards that you met the whole your life. We can use whatever paper you prefer"
              />
            </Blurry>
            <Blurry>
              <Card
                title="Business card"
                description="THe common business cards that you met the whole your life. We can use whatever paper you prefer"
              />
            </Blurry>
            <Blurry>
              <Card
                title="Business card"
                description="THe common business cards that you met the whole your life. We can use whatever paper you prefer"
              />
            </Blurry>
            <Blurry>
              <Card
                title="Business card"
                description="THe common business cards that you met the whole your life. We can use whatever paper you prefer"
              />
            </Blurry>
            <Blurry>
              <Card
                title="Business card"
                description="THe common business cards that you met the whole your life. We can use whatever paper you prefer"
              />
            </Blurry>
            <Blurry>
              <Card
                title="Business card"
                description="THe common business cards that you met the whole your life. We can use whatever paper you prefer"
              />
            </Blurry>
            <Blurry>
              <Card
                title="Business card"
                description="THe common business cards that you met the whole your life. We can use whatever paper you prefer"
              />
            </Blurry>
          </Box>
          <Blurry>
            <h2>some text</h2>
          </Blurry>
          <Blurry>
            <h2>some text</h2>
          </Blurry>
          <Blurry>
            <h2>some text</h2>
          </Blurry>
          <Blurry>
            <h2>some text</h2>
          </Blurry>
          <Blurry>
            <h2>some text</h2>
          </Blurry>
          <Box>
            <Blurry>
              <Image src="//placeimg.com/200/200/nature" />
            </Blurry>
            <Blurry>
              <Image src="//placekitten.com/200/202" />
            </Blurry>
            <Blurry>
              <Image src="//placekitten.com/200/203" />
            </Blurry>
          </Box>
          <Box>
            <Blurry>
              <Image src="//placekitten.com/200/200" />
            </Blurry>
            <Blurry>
              <Image src="//placekitten.com/200/203" />
            </Blurry>
          </Box>
          <div style={{ height: 2000 }}></div>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
