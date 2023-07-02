import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";

const BannerDescription = () => {
  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(to right, #c94b4b, #4b134f)",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: { xs: 3, md: 7 },
          minHeight: 400,
          flexDirection: "column",
          color: "white",
        }}
      >
        <Typography
          sx={{
            fontWeight: 800,
            lineHeight: 1,
            opacity: 0.9,
            textAlign: "center",
            maxWidth: { xs: "100%", md: "90%" },
            color: "white",
            mb: 4,
          }}
          fontSize={{ xs: "2rem", md: "3rem" }}
        >
          Todo lo que necesitas saber:
        </Typography>
        <Accordion
          sx={{
            backgroundColor: "transparent",
            width: { xs: "100%", md: "50%" },
          }}
        >
          <AccordionSummary>
            <Typography
              sx={{
                fontWeight: 800,
                lineHeight: 1,
                opacity: 0.9,
                textAlign: "left",
                maxWidth: { xs: "100%", md: "90%" },
                color: "white",
              }}
              fontSize={{ xs: "1rem", md: "1.5rem" }}
            >
              ¿Que es una brigada de salud visual?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "white" }}>
              Una brigada de Salud Visual Empresarial es un instrumento para el
              diagnóstico y corrección de las condiciones de salud visual de los
              trabajadores, el desarrollo de esta campaña lo realizamos con los
              más altos estándares de calidad en equipos de optometría y
              profesionales de la salud acreditados
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            backgroundColor: "transparent",
            width: { xs: "100%", md: "50%" },
          }}
        >
          <AccordionSummary>
            <Typography
              sx={{
                fontWeight: 800,
                lineHeight: 1,
                opacity: 0.9,
                textAlign: "left",
                maxWidth: { xs: "100%", md: "90%" },
                color: "white",
              }}
              fontSize={{ xs: "1rem", md: "1.5rem" }}
            >
              ¿Como funciona una brigada de salud visual ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "white" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
              magnam neque aliquid illum dolorum inventore tenetur facere
              consectetur velit minima! Rem quos nisi est temporibus sequi
              perspiciatis at. Illum, facilis.
            </Typography>
          </AccordionDetails>
        </Accordion>{" "}
        <Accordion
          sx={{
            backgroundColor: "transparent",
            width: { xs: "100%", md: "50%" },
          }}
        >
          <AccordionSummary>
            <Typography
              sx={{
                fontWeight: 800,
                lineHeight: 1,
                opacity: 0.9,
                textAlign: "left",
                maxWidth: { xs: "100%", md: "90%" },
                color: "white",
              }}
              fontSize={{ xs: "1rem", md: "1.5rem" }}
            >
              ¿Cómo solicitar de forma gratuita una brigada de salud visual?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "white" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              laborum nobis modi eius repellat amet, nulla, at dicta accusamus
              ab id similique, quisquam necessitatibus numquam nostrum maiores
              odit? Illum, asperiores?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Box
          component={Button}
          sx={{
            mt: 4,
            px: 5,
            py: 1,
            borderStyle: "solid",
            borderWidth: "3px",
            borderColor: "white",
            textAlign: "center",
            width: "fit-content",
            borderRadius: 3,
            color: "white",
          }}
        >
          Ver más detalles
        </Box>
      </Container>
    </Box>
  );
};

export default BannerDescription;
