import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#ffffff",
      contrastText: "#000",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#000000",
      contrastText: "#000",
    },
  },
});
