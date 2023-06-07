import { Container, Box, Typography, SxProps } from "@mui/material";
import { FC } from "react";

interface ITextsDeskopFooterProps {
  sx?: SxProps;
}

const TextsDeskopFooter: FC<ITextsDeskopFooterProps> = ({ sx }) => {
  return (
    <>
      <Container sx={{ py: 2, opacity: 0.5, ...sx }}>
        <Box component="section">
          <Typography
            component="h1"
            sx={{ fontSize: "0.8rem", fontWeight: 600 }}
          >
            Visual Healt
          </Typography>
          <Typography sx={{ fontSize: "0.7rem", mt: 0.5 }}>
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
        <Box component={"section"} sx={{ mt: 2 }}>
          <Typography
            component="h2"
            sx={{ fontSize: "0.8rem", fontWeight: 600 }}
          >
            Lo que hacemos
          </Typography>
          <Typography sx={{ fontSize: "0.7rem", mt: 0.5 }}>
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
      </Container>
    </>
  );
};

export default TextsDeskopFooter;
