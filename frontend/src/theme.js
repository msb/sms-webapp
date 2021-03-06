/**
 * Custom University of Cambridge material UI theme
 */

// Since the ordering of properties has some meaning to users editing this file even if they are of
// no interest to the code, we disable the alphabetical sort check.
//
// tslint:disable:object-literal-sort-keys

import { createMuiTheme } from '@material-ui/core/styles';

const paleGreen = '#F1FBFC';
const lightGreen = '#91B9A4';
const coreGreen = '#00B1C1';
const darkGreen = '#106470';
const white = '#fff';
const darkGrey = '#212121';
const mediumGrey = '#757575';
const lightGrey = '#F0F0F0';
const blueyGrey = '#ECEFF1';

// Custom Appbar colour, instead of using the main primary colour
const appBarBackground = darkGreen;

const theme = createMuiTheme({
  palette: {
    primary: {
      light: lightGreen,
      main: coreGreen,
      dark: darkGreen,
      contrastText: white,
    },
    secondary: {
      light: lightGreen,
      main: coreGreen,
      dark: darkGreen,
      contrastText: white,
    },
  },
  customColors: {
    paleGreen,
    lightGreen,
    coreGreen,
    darkGreen,
    white,
    darkGrey,
    mediumGrey,
    lightGrey,
    blueyGrey,
    appBarBackground,
  },
});

export default theme;
