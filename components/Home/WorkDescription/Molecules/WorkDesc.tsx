import { Box, Container, Typography } from "@mui/material";
import GradientText from "../../../GradientText/GradientText";
import gradients from "../../../../styles/colors/gradients";
import useTheme from "../../../../util/hooks/useTheme";

const WorkDesc = () => {
  const theme = useTheme();

  return (
    <Box>
      <Container
        maxWidth="lg"
        sx={{
          px: 7,
          pt: 7,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 0,
          pb: 0,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
          <Typography
            component="span"
            sx={{
              width: "3px",
              height: "1.7rem",
              backgroundImage:
                theme.palette.mode === "light"
                  ? "linear-gradient(to right, #19787a, #00dfd8)"
                  : gradients.blueDarkBlue,
            }}
          ></Typography>
          <Typography sx={{ fontWeight: 700, pl: 1 }}>Fleuri + Co.</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 5,
          }}
        >
          <GradientText
            gradient={gradients.blueDarkBlue}
            sx={{
              fontWeight: 600,
              pl: 1,
              fontSize: { xs: "3rem", md: "4rem" },
              lineHeight: 1,
              letterSpacing: "2px",
            }}
            fontSize={{ xs: "3rem", md: "4rem" }}
          >
            Sustainability
          </GradientText>
          <GradientText
            gradient={gradients.blueDarkBlue}
            sx={{
              fontWeight: 600,
              pl: 1,
              lineHeight: 1,
              letterSpacing: "2px",
            }}
            fontSize={{ xs: "3rem", md: "4rem" }}
          >
            Plans
          </GradientText>

          <Typography
            sx={{
              fontWeight: 300,
              pl: 1,
              mt: 3,
              fontSize: { xs: "0.7rem", md: "1rem" },
              textAlign: "center",
              textTransform: "uppercase",
              letterSpacing: 2,
            }}
          >
            Sustainable Progress Goals Report
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default WorkDesc;
