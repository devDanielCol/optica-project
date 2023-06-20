const darkThemeOption = {
  palette: {
    mode: "dark",
    primary: {
      main: "#e16a3d",
      dark: "#e16a3d",
    },
    secondary: {
      main: "#ffa45d",
      dark: "#ffa45d",
    },
    info: {
      main: "#B8C7FF",
      dark: "#1E1938",
      light: "#7B78ED",
    },
    warning: {
      main: "#FEC201",
      dark: "#FF7A00",
    },
    success: {
      main: "#B3DCEA",
      dark: "#0FD960",
    },
    common: {
      white: "#FFFFFF",
      black: "#000000",
    },
    text: {
      primary: "#ffffff",
    },
    background: {
      default: "#001E3C",
      paper: "rgba(8, 25, 48, 1)",
    },
    custom: {
      navbar: "rgba(8, 25, 48, 0.9)",
      navbarText: "#fff",
      footer: "rgb(15, 46, 87)",
      footerText: "#fff",
      menuText: "#5f83bd",
      variant: "rgb(15, 46, 87)",
    },
  },

  typography: {
    fontFamily: [
      "Alliance1",
      "Alliance1HeaderFallback",
      "-apple-system",
      "BlinkMacSystemFont",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Helvetica",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "'Concert One', cursive",
    ].join(","),
    button: {
      textTransform: "capitalize",
    },
    fontSize: 16,
  },
  components: {
    MuiPopover: {
      styleOverrides: {
        paper: {
          borderRadius: "12px",
          backgroundColor: "#111",
          backgroundImage: "none",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: "12px",
          backgroundColor: "#111",
          backgroundImage: "none",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        container: {
          backdropFilter: "blur(3px)",
        },
        paper: {
          backgroundColor: "#111",
          backgroundImage: "none",
        },
      },
    },
  },
};

export default darkThemeOption;
