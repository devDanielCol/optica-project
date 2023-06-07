import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  SxProps,
  Typography,
} from "@mui/material";
import { FC } from "react";

interface ITextsMobilFooterProps {
  sx?: SxProps;
}

const TextMobilFooter: FC<ITextsMobilFooterProps> = ({ sx }) => {
  return (
    <Accordion
      sx={{
        ...sx,
        backgroundImage: "none",
        backgroundColor: "inherit",
        color: "inherit",
        boxShadow: 0,
        borderTop: "none !important",
      }}
    >
      <AccordionSummary
        sx={{
          width: "100vw",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            pb: 0,
            mb: 0,
            justifyContent: "center",
          }}
        >
          <Typography sx={{ fontSize: "0.7rem", textAlign: "center" }}>
            Important Information
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box component="section" sx={{ opacity: 0.5 }}>
          <Typography
            component="h1"
            sx={{ fontSize: "0.7rem", fontWeight: 600 }}
          >
            Visual Healt
          </Typography>
          <Typography sx={{ fontSize: "0.6rem", mt: 0.5 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            laborum sit. Cum totam illo error laborum pariatur quae nisi omnis.
            Reiciendis labore perspiciatis, iusto excepturi voluptatibus ipsum
            praesentium necessitatibus exercitationem! Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Officiis quibusdam cum,
            consequatur, error quae voluptatibus rem illo eligendi illum ipsum
            voluptatem tempora alias corporis! Deleniti, cum. Laborum omnis
            deserunt totam?
          </Typography>
        </Box>
        <Box component={"section"} sx={{ mt: 1, opacity: 0.5 }}>
          <Typography
            component="h2"
            sx={{ fontSize: "0.7rem", fontWeight: 600 }}
          >
            Lo que hacemos
          </Typography>
          <Typography sx={{ fontSize: "0.6rem", mt: 0.5 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            laborum sit. Cum totam illo error laborum pariatur quae nisi omnis.
            Reiciendis labore perspiciatis, iusto excepturi voluptatibus ipsum
            praesentium necessitatibus exercitationem! Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Officiis quibusdam cum,
            consequatur, error quae voluptatibus rem illo eligendi illum ipsum
            voluptatem tempora alias corporis! Deleniti, cum. Laborum omnis
            deserunt totam?
          </Typography>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default TextMobilFooter;
