import { Container, Box, Grid, IconButton, Typography } from "@mui/material";

import gradients from "../../../styles/colors/gradients";
import GradientText from "../../GradientText/GradientText";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import doctorSvg from "../../../public/images/doctors.svg";

import DoneIcon from "@mui/icons-material/Done";

import Image from "next/image";
import BeneficiesTable from "./Atoms/TableBeneficies/BeneficiesTable";

const Beneficies = () => {
  return (
    <Box sx={{ mt: { xs: 0, md: 10 }, py: 5 }}>
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
              flexDirection: "column",
              justifyContent: { xs: "center", md: "center" },
              alignItems: { xs: "center", md: "inherit" },
              borderRight: { xs: "none", md: "1px dashed" },
              borderRightColor: "primary",
            }}
          >
            {/* <Image src={loveSvg as string} alt="" width={300} height={300} /> */}
            <Image
              src={doctorSvg as string}
              alt=""
              width={300}
              height={300}
              style={{ width: "100%" }}
            />
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
                  Precios muy bajos - Descuentos
                </Typography>
                <Typography
                  sx={{ mt: 2 }}
                  fontSize={{ xs: "1rem", md: "1rem" }}
                >
                  Precios por debajo de su valor comercial de un 30 a un 35% de
                  descuento
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
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: 3,
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
            Multiples Beneficios
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
            Tiempos de entrega de tan solo 8 días, facil acceso con descuentos
            de nómina, las campañas no representan ningun costo para tu empresa.
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
            id="beneficios"
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
            <DoneIcon />
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
            Beneficios
          </GradientText>
        </Box>
        <BeneficiesTable />
      </Container>
    </Box>
  );
};

export default Beneficies;
