import * as React from "react";
import { Box, Typography, Container } from "@mui/material";
import { SxProps } from "@mui/material/styles";
import MUILink from "@mui/material/Link";
import useTheme from "../../util/hooks/useTheme";

interface IProps {
  sx?: SxProps;
}

function Copyright(props: IProps) {
  return (
    <Typography variant="body2" align="center" {...props}>
      {"Copyright © "}
      <MUILink color="inherit" href="#">
        Construcciones y acabados peniel SAS
      </MUILink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        scrollSnapAlign: "start",
        scrollSnapStop: "normal",
        backgroundColor: theme.palette.custom.footer,
        color: theme.palette.custom.footerText,
      }}
      component="footer"
    >
      <Container sx={{ minHeight: "10rem", p: 3, width: "100%" }}>
        <Copyright />
      </Container>
    </Box>
  );
};

export default Footer;
