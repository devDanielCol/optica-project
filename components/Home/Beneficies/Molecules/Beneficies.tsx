import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import useTheme from "../../../../util/hooks/useTheme";
import gradients from "../../../../styles/colors/gradients";
import GradientText from "../../../GradientText/GradientText";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Beneficies = () => {
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
            display: "flex",
            justifyContent: "center",
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
            fontSize={{ xs: "2.5rem", md: "4rem" }}
          >
            Build when inspiration strikes
          </GradientText>
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
              position: "absolute",
              backgroundImage: `linear-gradient( ${theme.palette.background.default}, transparent 90%)`,
              height: "80px",
              width: "100%",
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
        <Box sx={{ width: "100%", display: "flex" }}>
          <Box
            sx={{
              height: "1px",
              width: "100%",
              backgroundImage: gradients.blueDarkBlue,
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
                backgroundImage: "linear-gradient(#007cf0, #2cc7ca)",
                color: "white",
                "&:hover": {
                  backgroundImage: "linear-gradient(#007cf0, #2cc7ca)",
                },
                fontSize: { xs: "0.7rem", md: "1rem" },
              }}
            >
              Progreso
            </Button>
            <Button
              LinkComponent={"a"}
              href="#beneficios"
              sx={{
                backgroundImage: "linear-gradient(#007cf0, #2cc7ca)",
                color: "white",
                "&:hover": {
                  backgroundImage: "linear-gradient(#007cf0, #2cc7ca)",
                },
                fontSize: { xs: "0.7rem", md: "1rem" },
              }}
            >
              Avance
            </Button>
            <Button
              LinkComponent={"a"}
              href="#beneficios"
              sx={{
                backgroundImage: "linear-gradient(#007cf0, #2cc7ca)",
                color: "white",
                "&:hover": {
                  backgroundImage: "linear-gradient(#007cf0, #2cc7ca)",
                },
                fontSize: { xs: "0.7rem", md: "1rem" },
              }}
            >
              Servico
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            my: 10,
            py: 10,
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontWeight: 800,
              pl: 1,
              lineHeight: 1,
              opacity: 0.9,
              textAlign: "center",
              fontSize: { xs: "2rem", md: "4rem" },
            }}
          >
            Delight every visitor
          </Typography>
          <Typography
            sx={{
              mt: 4,
              fontWeight: 300,
              pl: 1,
              lineHeight: 1,
              opacity: 0.9,
              textAlign: "center",
              fontSize: { xs: "1rem", md: "1.5rem" },
              maxWidth: { xs: "95%", md: "60%" },
            }}
          >
            Make frontend development a collaborative experience with automatic
            Preview Deployments for every code change, by seamlessly integrating
            with GitHub, GitLab, and Bitbucket.
          </Typography>
        </Box>
      </Container>
      <Box>
        <Box
          sx={{
            height: "50vh",
            width: "100%",
            objectPosition: "top",
            objectFit: "cover",
            backgroundImage:
              "url(https://www.transitions.com/assets/images/home/carousel/A%20copy.webp)",
            backgroundPositionY: "center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: 800,
              pl: 1,
              lineHeight: 1,
              opacity: 0.9,
              textAlign: "center",
              fontSize: { xs: "3rem", md: "4rem" },
              color: "white",
            }}
          >
            Speed is critical to customers
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Beneficies;
