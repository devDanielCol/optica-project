import { SwiperSlide, Swiper } from "swiper/react";

import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

const ProductsCarrousell = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ my: 3 }}>
          <Typography
            sx={{
              fontWeight: 800,
              lineHeight: 1,
              textAlign: "left",
              mb: 3,
            }}
            fontSize={{ xs: "0.8rem", md: "1rem" }}
          >
            Nuestros productos
          </Typography>
          <Typography
            sx={{
              fontWeight: 800,
              lineHeight: 1,
              textAlign: "left",
            }}
            fontSize={{ xs: "2rem", md: "3rem" }}
          >
            Algunos de nuestros productos
          </Typography>
        </Box>
        <Box sx={{ marginTop: "65px !important" }}>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.75,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {[1, 2, 3, 4, 5, 6].map((_, key) => (
              <SwiperSlide key={key}>
                <Card
                  elevation={0}
                  sx={{
                    height: 540,
                    mx: 1,
                    borderRadius: 2,
                    backgroundColor: "transparent",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "2rem", md: "1.5rem" },
                      letterSpacing: "0px",
                      textAnchor: "start",
                      fontWeight: 600,
                      lineHeight: "1",
                      textAlign: "left",
                      mb: 2,
                      textTransform: "initial",
                    }}
                  >
                    Nuevo en tienda
                  </Typography>
                  <CardMedia
                    component="img"
                    height="250"
                    image="images/brigadas.jpg"
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography
                      sx={{
                        fontSize: { xs: "2rem", md: "2rem" },
                        letterSpacing: "0px",
                        textAnchor: "start",
                        fontWeight: 600,
                        lineHeight: "1",
                        textAlign: "left",
                        mt: 2,
                        mb: 4,
                        textTransform: "initial",
                      }}
                    >
                      Salud Visual
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "1rem", md: "1.4rem" },
                        letterSpacing: "0px",
                        fontWeight: 600,
                        lineHeight: "1",
                        textAlign: "left",
                        textTransform: "initial",
                      }}
                    >
                      Relentiza la progresion de la miopia
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      component={Button}
                      sx={{
                        px: 5,
                        py: 1.5,
                        borderStyle: "solid",
                        borderWidth: "3px",
                        backgroundColor: "#007cf0",
                        border: "none",
                        textAlign: "center",
                        width: "100%",
                        borderRadius: 5,
                        color: "white",
                        "&:hover": {
                          backgroundColor: "#007cf0",
                        },
                      }}
                    >
                      Descubrir
                    </Box>
                  </CardActions>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductsCarrousell;
