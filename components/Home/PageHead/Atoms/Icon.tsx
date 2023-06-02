import { Box, Typography } from "@mui/material";

const Icon = () => {
  return (
    <Box
      sx={{
        fontFamily: "'Concert One', cursive",
        fontSize: "2rem",
        textTransform: "Capitalize",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <Typography
        sx={{ fontWeight: 900, fontSize: { xs: "1rem", md: "1.3rem" } }}
      >
        Visual Healt
      </Typography>
      <Typography sx={{ fontSize: { xs: "0.3rem", md: "0.5rem" } }}>
        Centro de diagnóstico empresarial visual
      </Typography>
    </Box>
  );
};

export default Icon;
