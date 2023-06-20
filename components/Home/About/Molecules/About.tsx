import { Box, Container, IconButton, Typography } from "@mui/material";
import useTheme from "../../../../util/hooks/useTheme";
import gradients from "../../../../styles/colors/gradients";
import GradientText from "../../../GradientText/GradientText";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const About = () => {
  const theme = useTheme();

  return (
    <Box id="beneficios">
      <Container maxWidth="lg" sx={{ minHeight: "300px" }}>
        <Box
          sx={{
            mt: 3,
            display: "flex",
            justifyContent: "center",
            minHeight: "200px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              backgroundImage: `linear-gradient( ${theme.palette.background.default}, transparent 90%)`,
              height: "80px",
              width: "100%",
            }}
          ></Box>
          <Box
            sx={{
              position: "absolute",
              backgroundImage: `linear-gradient(transparent,${theme.palette.background.default} 90%)`,
              height: "80px",
              width: "100%",
              bottom: 0,
            }}
          ></Box>
          <Box
            sx={{
              width: "1px",
              height: "200px",
              backgroundImage: "linear-gradient(#007cf0, #2cc7ca)",
            }}
            component="span"
          ></Box>
        </Box>
        <Box
          sx={{
            my: 3,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IconButton
            LinkComponent={"a"}
            href="#beneficios"
            sx={{
              backgroundImage: gradients.blueDarkBlue,
              color: "white",
              "&:hover": {
                backgroundImage: gradients.blueDarkBlue,
              },
            }}
          >
            <ArrowDownwardIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            mb: 3,
          }}
        >
          <GradientText
            gradient={gradients.blueDarkBlue}
            sx={{
              fontWeight: 800,
              lineHeight: 1,
              opacity: 0.9,
              textAlign: "center",
            }}
            fontSize={{ xs: "3rem", md: "4rem" }}
          >
            Build when inspiration strikes
          </GradientText>
          <Typography
            sx={{
              mt: 4,
              fontWeight: 300,
              pl: 0,
              lineHeight: 1.5,
              opacity: 0.9,
              textAlign: "center",
              fontSize: { xs: "0.9rem", md: "1.2rem", lg: "1.5rem" },
              maxWidth: { xs: "100%", md: "80%", lg: "70%" },
            }}
          >
            Make frontend development a collaborative experience with automatic
            Preview Deployments for every code change, by seamlessly integrating
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
