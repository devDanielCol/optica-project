import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Subscribe = () => {
  return (
    <Box
      sx={{
        width: "100%",
        py: 4,
        minHeight: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <Typography
              component={"span"}
              sx={{
                fontSize: { xs: "1rem" },
                fontWeight: 600,
                lineHeight: 1.2,
                opacity: 0.7,
                mr: 0.5,
              }}
            >
              Agenda hoy mismo una sita y encuentra todo lo que buscas en el
              lugar indicado
            </Typography>
            <span>
              <Link>
                <Typography
                  component={"span"}
                  sx={{
                    fontSize: { xs: "1rem" },
                    maxWidth: 310,
                    fontWeight: 600,
                    lineHeight: 1.2,
                    color: "#e16a3d",
                  }}
                >
                  @saludVisual
                </Typography>
              </Link>
            </span>
          </Grid>
          <Grid
            item
            sm={4}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              my: { xs: 5, sm: 0 },
            }}
          >
            <Box
              component={Button}
              sx={{
                px: 5,
                py: 1,
                borderStyle: "solid",
                borderWidth: "3px",
                borderColor: "#e16a3d",
                textAlign: "center",
                width: "fit-content",
                borderRadius: 1.5,
                color: "#e16a3d",
              }}
            >
              Agendar Cita
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Typography
              component={"span"}
              sx={{
                fontSize: { xs: "1rem" },
                maxWidth: 310,
                fontWeight: 600,
                lineHeight: 1.2,
                mr: 0.5,
                textAlign: "center",
              }}
            >
              <IconButton sx={{ color: "#e16a3d", mr: 0.5 }}>
                <LocationOnIcon />
              </IconButton>
              Nuestra sede
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Subscribe;
