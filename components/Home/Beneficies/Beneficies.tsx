import {
  Container,
  Box,
  Grid,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import useTheme from "../../../util/hooks/useTheme";
import gradients from "../../../styles/colors/gradients";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import GradientText from "../../GradientText/GradientText";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";

const Beneficies = () => {
  const theme = useTheme();

  return (
    <Box sx={{ mt: 10, py: 5 }}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              p: { xs: 0, lg: 2 },
              minHeight: { xs: "400px", md: "500px" },
              display: "flex",
              justifyContent: { xs: "center", md: "inherit" },
              borderRight: { xs: "none", md: "1px dashed" },
              borderRightColor: "primary",
            }}
          >
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  boxShadow: 5,
                  height: { xs: "200px", md: "280px" },
                  width: { xs: "290px", md: "450px" },
                  backgroundColor: theme.palette.custom.variant,
                  "box-shadow": "-13px 1px 40px -11px rgba(0,0,0,0.49)",
                  borderRadius: "12px",
                }}
              ></Box>
              <Box
                sx={{
                  top: 150,
                  left: 50,
                  position: "absolute",
                  height: { xs: "200px", md: "280px" },
                  width: { xs: "290px", md: "450px" },
                  backgroundColor: theme.palette.custom.variant,
                  borderRadius: "12px",
                  "box-shadow": "-13px 1px 40px -11px rgba(0,0,0,0.49)",
                }}
              ></Box>
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {[1, 2].map((x, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "fit-content",
                  px: 3,
                  mt: 4,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    lineHeight: 1,
                  }}
                  fontSize={{ xs: "1rem", md: "1.5rem" }}
                >
                  Automatic Previews for every branch
                </Typography>
                <Typography
                  sx={{ mt: 2 }}
                  fontSize={{ xs: "1rem", md: "1rem" }}
                >
                  Each new branch receives a live, production-like URL that
                  everyone on your team can visit.
                </Typography>
              </Box>
            ))}
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            my: 2,
          }}
        >
          <PanoramaFishEyeIcon
            sx={{ alignSelf: "center", fontSize: "0.8rem" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            minHeight: "200px",
            position: "relative",
          }}
        >
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
          <GradientText
            gradient={gradients.blueDarkBlue}
            sx={{
              fontWeight: 800,
              lineHeight: 1,
              opacity: 0.9,
              textAlign: "center",
              mt: 2,
            }}
            fontSize={{ xs: "2rem", md: "2rem" }}
          >
            Develop
          </GradientText>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography
            sx={{
              fontWeight: 800,
              lineHeight: 1,
              opacity: 0.9,
              textAlign: "center",
            }}
            fontSize={{ xs: "3rem", md: "4rem" }}
          >
            Exámenes y estudios
          </Typography>
          <Typography
            sx={{
              mt: 4,
              fontWeight: 300,
              pl: 0,
              lineHeight: 1.5,
              opacity: 0.5,
              textAlign: "center",
              fontSize: { xs: "0.9rem", md: "1.2rem", lg: "1.5rem" },
              maxWidth: { xs: "100%", md: "80%", lg: "70%" },
            }}
          >
            Make frontend development a collaborative experience with automatic
            Preview Deployments for every code change, by seamlessly integrating
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "1px",
              height: "100px",
              backgroundColor: "#a8a8a8",
            }}
            component="span"
          ></Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            my: 2,
          }}
        >
          <PanoramaFishEyeIcon
            sx={{ alignSelf: "center", fontSize: "0.8rem" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "1px",
              height: "100px",
              backgroundColor: "#a8a8a8",
            }}
            component="span"
          ></Box>
        </Box>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              height: "1px",
              width: { xs: "100%", md: "70%", lg: "60%" },
              backgroundColor: "#a8a8a8",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            component="span"
          >
            <Button
              LinkComponent={"a"}
              href="#beneficios"
              sx={{
                backgroundColor:
                  theme.palette.mode === "dark" ? "white" : "black",
                color: theme.palette.mode === "dark" ? "black" : "white",
                fontSize: { xs: "0.7rem", md: "1rem" },
                borderRadius: "24px",
                py: 0.5,
                px: 2,
              }}
            >
              Progreso
            </Button>
            <Button
              LinkComponent={"a"}
              href="#beneficios"
              sx={{
                backgroundColor:
                  theme.palette.mode === "dark" ? "white" : "black",
                color: theme.palette.mode === "dark" ? "black" : "white",
                fontSize: { xs: "0.7rem", md: "1rem" },
                borderRadius: "24px",
                py: 0.5,
                px: 2,
              }}
            >
              Avance
            </Button>
            <Button
              LinkComponent={"a"}
              href="#beneficios"
              sx={{
                transition: "all .2s linear",
                backgroundColor:
                  theme.palette.mode === "dark" ? "white" : "black",
                color: theme.palette.mode === "dark" ? "black" : "white",
                fontSize: { xs: "0.7rem", md: "1rem" },
                borderRadius: "24px",
                py: 0.5,
                px: 2,
              }}
            >
              Servico
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Beneficies;
