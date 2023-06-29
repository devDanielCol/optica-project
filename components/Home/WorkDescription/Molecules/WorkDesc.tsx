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
          px: 0,
          pt: 7,
          pb: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 0,
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
          <Typography sx={{ fontWeight: 700, pl: 1 }}>Coper + Co.</Typography>
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
              fontWeight: 800,
              lineHeight: 1,
              opacity: 0.9,
              textAlign: "center",
            }}
            fontSize={{ xs: "3rem", md: "4rem" }}
          >
            Salud Visual
          </GradientText>
          <GradientText
            gradient={gradients.blueDarkBlue}
            sx={{
              fontWeight: 600,
              pl: 1,
              lineHeight: 1.15,
              letterSpacing: "2px",
            }}
            fontSize={{ xs: "3rem", md: "4rem" }}
          >
            Brigadas
          </GradientText>

          <Typography
            sx={{
              fontWeight: 300,
              pl: 1,
              mt: 3,
              fontSize: { xs: "0.65rem", md: "1rem" },
              textAlign: "center",
              textTransform: "uppercase",
              letterSpacing: 2,
            }}
          >
            Especialistas en brigadas empresariales
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default WorkDesc;
