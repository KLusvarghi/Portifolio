import { Roboto, Poppins } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  weight: ['500'],
  subsets: ['latin'],
  display: 'swap',
});

const sidebar = createTheme({
  typography: {
    subtitle1: {
      fontWeight: 500,
      fontSize: 18,
      fontFamily: 'Poppins',
      lineHeigth: 32,

    }
    
  }
})

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;