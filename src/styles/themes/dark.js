import protoTheme from './proto';

const variants = {
  colors: {
    paper: '#09090a',
    pane: '#1a1b1e',
    scrollbarThumb: '#111',
    card: 'black',
    font: 'white',
  },
  buttons: {
    primary: {},
    secondary: {},
    accent: {},
  },
};

const dark = {
  ...protoTheme,
  ...variants,
};

export default dark;
