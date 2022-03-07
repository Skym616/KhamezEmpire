import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fe4c50',
    },
    secondary: {
      main: '#FEF5ED',
    },
    white: {
      main: '#fff',
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: 'Ubuntu',
  },
});

export default theme;
