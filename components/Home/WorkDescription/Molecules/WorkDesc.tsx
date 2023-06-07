import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const WorkDesc = () => {
  return (
    <Box sx={{}}>
      <Container>
        <Grid container sx={{ py: 8 }}>
          <Grid item xs={6}>
            <Box
              sx={{
                width: "70%",
                backdropFilter: "blur(7px))",
                backgroundImage:
                  "linear-gradient(90deg, rgba(1,106,109,1) 0%, rgba(0,156,132,1) 49%, rgba(1,106,109,1) 100%)",
                boxShadow: 5,
                p: 3,
                borderRadius: 2,
                transition: "all .2s linear",
                transform: "scale(1)",
                "&:hover": {
                  transform: "scale(1.05)",
                  transition: "all .2s linear",
                },
              }}
            >
              <Image
                src={"/images/aboutus.svg"}
                alt=""
                width={100}
                style={{ width: "100%", height: "auto" }}
                height={100}
              ></Image>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                mt: 3,
                pl: 3,
              }}
            >
              <Typography sx={{ fontSize: "2rem" }}>Sobre nosotros</Typography>
            </Box>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WorkDesc;
