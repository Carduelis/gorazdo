import { color } from '../color';
import { createMuiTheme } from '@material-ui/core/styles';
import protoTheme from './proto';

const light = createMuiTheme({
  ...protoTheme,
  name: 'light',
  type: 'light',
  palette: {
    misc: {
      scrollbarThumb: '#999',
    },
    background: {
      paper: '#f4f4f4',
      default: 'white',
    },
    primary: {
      main: '#2626a9',
    },
  },
  color,
});

export default light;
