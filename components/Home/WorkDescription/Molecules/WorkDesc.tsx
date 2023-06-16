import {
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

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
          p: 7,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
          <Typography
            component="span"
            sx={{ width: "3px", height: "1.7rem", backgroundColor: "red" }}
          ></Typography>
          <Typography sx={{ fontWeight: 600, pl: 1 }}>Fleuri + Co.</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 5,
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              pl: 1,
              fontSize: { xs: "3rem", md: "4rem" },
              lineHeight: 1,
              letterSpacing: "2px",
              color: "custom.menuText",
            }}
          >
            Sustainability
          </Typography>
          <Typography
            sx={{
              fontWeight: 600,
              pl: 1,
              fontSize: { xs: "3rem", md: "4rem" },
              lineHeight: 1,
              letterSpacing: "2px",
              color: "custom.menuText",
            }}
          >
            Plans
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              pl: 1,
              mt: 3,
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              textAlign: "center",
            }}
          >
            Sustainable Progress Goals Report
          </Typography>
          <Button sx={{ mt: 3 }}>December 2023</Button>
        </Box>
        <Box
          sx={{
            mt: 6,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            sx={{
              backgroundColor: "custom.menuText",
              color: "white",
              "&:hover": {
                backgroundColor: "custom.menuText",
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

<Grid container sx={{ py: 8 }}>
  <Grid item xs={4}>
    <Box
      sx={{
        minHeight: "30vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        mt: 3,
        pl: 3,
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "3rem", sm: "5rem", md: "3rem" },
          letterSpacing: "0px",
          fontWeight: 300,
          lineHeight: "0.5",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        Nuestro
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "3rem", sm: "5rem", md: "4rem" },
          letterSpacing: "4px",
          fontWeight: 500,
          lineHeight: "1",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        Objectivo
      </Typography>
    </Box>
  </Grid>
  <Grid item xs={6}></Grid>
</Grid>;

export default WorkDesc;
