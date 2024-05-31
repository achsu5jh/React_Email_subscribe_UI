// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: 'SFNewRepublic, Arial, sans-serif', 
    h4: {
      fontWeight: 700,
      color: "#2e80fc",
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h6: {
      fontWeight: 700,
      color: '#ffffff',
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
    subtitle1: {
      color: '#ff5454',
      fontWeight: 700,
      '@media (max-width:600px)': {
        fontSize: '0.7rem',
      },
    },
  },

});

export default theme;
