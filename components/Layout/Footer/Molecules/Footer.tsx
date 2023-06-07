import * as React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { SxProps } from "@mui/material/styles";
import MUILink from "@mui/material/Link";
import useTheme from "../../../../util/hooks/useTheme";
import Link from "next/link";
import LinksDeskopFooter from "../Atoms/Links/LinksDeskop";
import LinksMobilFooter from "../Atoms/Links/LinksMobil";
import TextsDeskopFooter from "../Atoms/Texts/TextsDeskop";
import TextsMobilFooter from "../Atoms/Texts/TextsMobil";

interface IProps {
  sx?: SxProps;
}

function Copyright(props: IProps) {
  return (
    <Typography variant="body2" align="center" {...props}>
      {"Copyright © "}
      <MUILink color="inherit" href="#">
        Visual Healt & Optical Services
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
        py: 2,
      }}
      component="footer"
    >
      <LinksDeskopFooter sx={{ display: { xs: "none", md: "block" } }} />
      <LinksMobilFooter sx={{ display: { xs: "block", md: "none" } }} />
      <TextsDeskopFooter sx={{ display: { xs: "none", md: "block" } }} />
      <TextsMobilFooter sx={{ display: { xs: "block", md: "none" } }} />

      <Grid maxWidth="lg" container sx={{ width: "100%", px: 3 }}>
        <Grid item xs={12} md={6}>
          <Grid container>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "center",
                  lg: "flex-start",
                  alignItems: "center",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "0.6rem", md: "0.7rem" },
                  textTransform: "capitalize",
                  opacity: 0.7,
                }}
              >
                <Link href={"/#"} style={{ color: "inherit" }}>
                  Nuestras Politicas
                </Link>
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "center",
                  lg: "flex-start",
                  alignItems: "center",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "0.6rem", md: "0.7rem" },
                  textTransform: "capitalize",
                  opacity: 0.7,
                }}
              >
                <Link href={"/#"} style={{ color: "inherit" }}>
                  Profesionales
                </Link>
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "center",
                  lg: "flex-start",
                  alignItems: "center",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "0.6rem", md: "0.7rem" },
                  textTransform: "capitalize",
                  opacity: 0.7,
                }}
              >
                <Link href={"/#"} style={{ color: "inherit" }}>
                  Sedes y horarios
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", lg: "flex-end" },
            mt: { xs: 2, lg: 0 },
          }}
        >
          <Copyright
            sx={{ fontSize: { xs: "0.6rem", md: "0.8rem" }, opacity: 0.7 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
