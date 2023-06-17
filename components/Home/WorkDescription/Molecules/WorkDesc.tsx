import { Box, Container, IconButton, Typography, styled } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import GradientText from "../../../GradientText/GradientText";
import gradients from "../../../../styles/colors/gradients";

const Button = styled("button")({
  backgroundColor: "orange",
  color: "white",
  paddingTop: "0.7rem",
  paddingBottom: "0.7rem",
  paddingLeft: "1.7rem",
  paddingRight: "1.7rem",
  outline: "none",
  border: "none",
  borderRadius: "24px",
  fontSize: "1.2rem",
  fontWeight: 600,
});

const WorkDesc = () => {
  return (
    <Box sx={{}}>
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
              backgroundImage: gradients.blueDarkBlue,
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
              fontWeight: 700,
              pl: 1,
              mt: 3,
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              textAlign: "center",
            }}
          >
            Sustainable Progress Goals Report
          </Typography>
        </Box>
        <Box
          sx={{
            mt: 3,
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
      </Container>
    </Box>
  );
};

export default WorkDesc;
