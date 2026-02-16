"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    // Reference the CSS variable from your layout file
    fontFamily: "Cardo",
  },
  palette: {
    info: {
      main: "#6b6b6b",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  // You can add other theme customizations here (palette, etc.)
});

export default theme;
