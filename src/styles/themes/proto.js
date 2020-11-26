import { createMuiTheme } from '@material-ui/core/styles';

const MuiTheme = createMuiTheme({
  spacing: (gridSize) => gridSize * 8 + 'px',
});

export default MuiTheme;
