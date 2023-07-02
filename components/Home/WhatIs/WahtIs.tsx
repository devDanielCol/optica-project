import { Box, Container, Typography } from "@mui/material";
import { FC, useState } from "react";
import useTheme from "../../../util/hooks/useTheme";

interface ICuadro {
  index: number;
  bgcolor?: string;
}

const Cuadro: FC<ICuadro> = ({ index, bgcolor }) => {
  const [open, setopen] = useState(false);

  return (
    <Box
      sx={{
        width: "calc(4vw - 1px)",
        height: 100,
        opacity: open ? 0 : index / 100,
        backgroundColor: `rgb(${index * 10}, ${80 + index * 3}, ${155})`,
        m: "0.5px",
      }}
    ></Box>
  );
};

const WhatIs = () => {
  const theme = useTheme();

  const arr = [];

  for (let i = 0; i < 25; i++) {
    arr.push(1);
  }

  return (
    <Box
      sx={{
        px: {
          xs: 2,
          md: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        },
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          //   backgroundImage: gradients.pinkRedPink,
          py: { xs: 4, md: 8 },
          borderRadius: "24px",
          paddingLeft: "7px !important",
          paddingRight: "7px !important",
        }}
      >
        <Box
          sx={{
            px: { xs: 1, md: 5 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: 800,
              lineHeight: 1,
              opacity: 0.9,
              textAlign: "center",
              maxWidth: { xs: "100%", md: "90%" },
            }}
            fontSize={{ xs: "2rem", md: "4rem" }}
          >
            ¿Qué es una brigada de salud visual?
          </Typography>
          <Typography
            sx={{
              mt: 3,
              fontWeight: 500,
              pl: 0,
              lineHeight: 1.2,
              textAlign: "center",
              fontSize: { xs: "0.9rem", md: "1.2rem" },
              maxWidth: { xs: "100%", md: "80%" },
            }}
          >
            Una brigada de Salud Visual Empresarial es un instrumento para el
            diagnóstico y corrección de las condiciones de salud visual de los
            trabajadores, el desarrollo de esta campaña lo realizamos con los
            más altos estándares de calidad en equipos de optometría y
            profesionales de la salud acreditados conforme a la ley 372 de 1997.
            Cumpliendo lo exigido en el Decreto 1072 del 2015 y la Resolución
            2346 de 2007 del Ministerio de Trabajo.
          </Typography>
        </Box>
      </Container>

      <Box
        sx={{
          //   backgroundImage:
          //     "url(https://cdn.pixabay.com/photo/2016/07/21/01/46/tourist-1531712_1280.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 100,
        }}
      >
        <Box sx={{ display: "flex" }}>
          {arr.map((_, i) => (
            <Cuadro key={i} index={i} bgcolor={theme.palette.custom.footer} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default WhatIs;
