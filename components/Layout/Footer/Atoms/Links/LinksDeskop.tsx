import {
  Container,
  Typography,
  Box,
  ButtonGroup,
  IconButton,
  Grid,
  SxProps,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import useTheme from "../../../../../util/hooks/useTheme";
import { FC } from "react";
import { DataLinks } from "./DataLinks";
import Link from "next/link";

interface ILinksDeskopFooterProps {
  sx?: SxProps;
}

const LinksDeskopFooter: FC<ILinksDeskopFooterProps> = ({ sx }) => {
  const theme = useTheme();

  return (
    <Box sx={sx}>
      <Grid
        container
        maxWidth={"lg"}
        direction={["column", "row"]}
        sx={{ minHeight: "300px", py: 4 }}
      >
        {DataLinks.map(({ title, paths }, key) => (
          <Grid key={key} item xs={12} sm={4} lg={3.5}>
            <Container component={"ul"} sx={{ px: 3 }}>
              <Typography
                sx={{
                  textTransform: "uppercase",
                  fontSize: { md: "1.3rem" },
                  letterSpacing: "8px",
                  lineHeight: "1",
                  mb: 2,
                  fontWeight: "600",
                }}
              >
                {title}
              </Typography>
              {paths.map(({ name, route }, key) => (
                <Box
                  key={key}
                  component={"li"}
                  sx={{ display: "flex", mb: 0.5, alignItems: "center" }}
                >
                  <KeyboardArrowRightIcon />
                  <Typography
                    sx={{
                      fontWeight: "200",
                      fontSize: { md: "0.9rem" },
                      "&>a": {
                        textDecoration: "none",
                        color: "inherit",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                        "&:visited": {
                          color: "inherit",
                        },
                      },
                    }}
                  >
                    <Link href={route}>{name}</Link>
                  </Typography>
                </Box>
              ))}
            </Container>
          </Grid>
        ))}
      </Grid>
      <Container component={"ul"} sx={{ px: 3 }}>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: { md: "1.3rem" },
            letterSpacing: "8px",
            lineHeight: "1",
            mb: 1,
            fontWeight: "600",
          }}
        >
          Siguenos
        </Typography>
        <ButtonGroup sx={{ mt: 2, fontSize: "0.9rem" }}>
          <IconButton
            onClick={() => {
              self.open("https://wa.me/3203379213", "__blank");
            }}
            sx={{
              backgroundColor: theme.palette.custom.footerText,
              color: theme.palette.custom.footer,
              p: 0.5,
              mr: 1,
              "&:hover": {
                backgroundColor: theme.palette.custom.footerText,
                color: theme.palette.custom.footer,
              },
            }}
          >
            <WhatsAppIcon sx={{ width: "20px", height: "20px" }} />
          </IconButton>
          <IconButton
            onClick={() => {
              self.open(
                "https://www.facebook.com/profile.php?id=100075904522414&mibextid=ZbWKwL",
                "__blank"
              );
            }}
            sx={{
              backgroundColor: theme.palette.custom.footerText,
              color: theme.palette.custom.footer,
              p: 0.5,
              mr: 1,
              "&:hover": {
                backgroundColor: theme.palette.custom.footerText,
                color: theme.palette.custom.footer,
              },
            }}
          >
            <FacebookOutlinedIcon sx={{ width: "20px", height: "20px" }} />
          </IconButton>
          <IconButton
            onClick={() => {
              self.open(
                "https://instagram.com/construccionespeniel?igshid=YmMyMTA2M2Y=",
                "__blank"
              );
            }}
            sx={{
              backgroundColor: theme.palette.custom.footerText,
              color: theme.palette.custom.footer,
              p: 0.5,
              mr: 1,
              "&:hover": {
                backgroundColor: theme.palette.custom.footerText,
                color: theme.palette.custom.footer,
              },
            }}
          >
            <InstagramIcon sx={{ width: "20px", height: "20px" }} />
          </IconButton>
        </ButtonGroup>
      </Container>
    </Box>
  );
};

export default LinksDeskopFooter;
