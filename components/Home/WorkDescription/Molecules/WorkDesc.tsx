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
          <Typography sx={{ fontWeight: 700, pl: 1 }}>CEDIEMVI + VS</Typography>
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
              lineHeight: 1.15,
              textAlign: "center",
            }}
            fontSize={{ xs: "3rem", md: "4rem" }}
          >
            Brigadas de
          </GradientText>
          <GradientText
            gradient={gradients.blueDarkBlue}
            sx={{
              fontWeight: 800,
              lineHeight: 1.15,
              textAlign: "center",
            }}
            fontSize={{ xs: "3rem", md: "4rem" }}
          >
            Salud Visual
          </GradientText>

          <Typography
            sx={{
              fontWeight: 300,
              pl: 1,
              mt: 3,
              fontSize: { xs: "0.6rem", md: "1rem" },
              textAlign: "center",
              textTransform: "uppercase",
              letterSpacing: 2,
            }}
          >
            Somos Especialistas en brigadas empresariales
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default WorkDesc;
