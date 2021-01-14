import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#46bff4",
      main: "#1349b0",
      dark: "#002E86",
      contrastText: "#fff",
    },
    // secondary: {},
    grey: {
      100: "#c2c2c2",
      200: "#677289",
      300: "#595959",
      400: "#252525",
    },
  },
  overrides: {
    MuiTypography: {
      fontFamily: "Merriweather",
      body: {
        fontFamily: "Open Sans",
      },
    },
    MuiContainer: {
      root: {
        margin: 0,
        padding: 0,
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
