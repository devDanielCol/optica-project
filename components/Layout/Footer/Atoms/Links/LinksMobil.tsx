import {
  Typography,
  Box,
  ButtonGroup,
  IconButton,
  SxProps,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import useTheme from "../../../../../util/hooks/useTheme";
import { FC, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";
import { DataLinks } from "./DataLinks";

interface ILinksMobilFooterProps {
  sx?: SxProps;
}

const LinksMobilFooter: FC<ILinksMobilFooterProps> = ({ sx }) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState<number | null>(null);

  const openAccordion = (item: number) => () => {
    expanded === item ? setExpanded(null) : setExpanded(item);
  };

  return (
    <Box sx={sx}>
      {DataLinks.map(({ title, paths }, key) => (
        <Accordion
          key={key}
          expanded={expanded === key}
          onChange={openAccordion(key)}
          sx={{
            backgroundImage: "none",
            backgroundColor: "inherit",
            color: "inherit",
            boxShadow: 0,
            borderBottom: "none !important",
          }}
        >
          <AccordionSummary
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100vw",
              pb: 0,
              mb: 0,
            }}
          >
            <Typography
              sx={{
                textTransform: "uppercase",
                fontSize: { xs: "0.9rem", md: "1.3rem" },
                letterSpacing: { xs: "5px", md: "8px" },
                lineHeight: "1",
                fontWeight: "600",
                width: "95%",
              }}
            >
              {title}
            </Typography>
            <KeyboardArrowDownIcon
              sx={{ fontSize: { xs: "1rem", md: "1.3rem" } }}
            />
          </AccordionSummary>
          <AccordionDetails>
            {paths.map(({ name, route }, key) => (
              <Box
                key={key}
                component={"li"}
                sx={{ display: "flex", alignItems: "center", pl: 2, mb: 1 }}
              >
                <KeyboardArrowRightIcon
                  sx={{ fontSize: { xs: "0.7rem", md: "0.9rem" } }}
                />
                <Typography
                  sx={{
                    fontWeight: "200",
                    fontSize: { xs: "0.7rem", md: "0.9rem" },
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
          </AccordionDetails>
        </Accordion>
      ))}

      <Box
        sx={{
          width: "100%",
          py: 4,
          px: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: { xs: "0.8rem", md: "1.2rem" },
            lineHeight: "1",
            mb: 1,
            fontWeight: "600",
          }}
        >
          Siguenos
        </Typography>
        <ButtonGroup sx={{ fontSize: "0.8rem" }}>
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
      </Box>
    </Box>
  );
};

export default LinksMobilFooter;
