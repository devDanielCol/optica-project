import { Pagination } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
import Icon from "../Atoms/Icon";

interface ButtonChangeProps {
  to: number;
  name: string;
  selected: number;
  onSelect?(id: number): void;
}

const ButtonChange: FC<ButtonChangeProps> = ({
  to,
  name,
  selected,
  onSelect,
}) => {
  const swiper = useSwiper();

  const onSelected = () => {
    onSelect && onSelect(to);
    return swiper.slideTo(to);
  };

  return (
    <Button
      sx={{
        fontSize: { xs: "0.8rem", md: "0.9rem" },
        textTransform: "uppercase",
        mx: { xs: 0, lg: 2 },
        color: "white",
        height: { xs: "40px", lg: "77px" },
        backgroundColor: selected === to ? "#e16a3d" : "",
        "&:hover": {
          backgroundColor: selected === to ? "#e16a3d" : "",
        },
        borderRadius: "0px",
        width: "100%",
        fontWeight: 300,
      }}
      onMouseMove={onSelected}
    >
      {name}
    </Button>
  );
};

const PageHead = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <Box sx={{ color: "white" }}>
      <Swiper
        pagination={{
          type: "bullets",
        }}
        modules={[Pagination]}
        speed={1000}
        onSlideChange={(e) => {
          setActive(e.activeIndex);
        }}
      >
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            top: 0,
            left: 0,
            zIndex: "1000",
            p: 0,
            width: "100%",
            backgroundImage: "radial-gradient( #ffffff33 10%, transparent)",
            backdropFilter: "blur(7px)",
            m: 0,
          }}
        >
          <Container
            maxWidth="lg"
            sx={{
              paddingRight: "0px !important",
              paddingLeft: "0px !important",
            }}
          >
            <Grid
              container
              sx={{
                display: "flex",
                flexDirection: {
                  sm: "column",
                  lg: "row",
                },
                px: 0,
                m: 0,
              }}
            >
              <Grid
                item
                xs={12}
                lg={6}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", lg: "flex-start" },
                  p: 0,
                  py: { xs: 1, lg: 0 },
                }}
              >
                <Icon />
              </Grid>

              <Grid item xs={12} lg={6}>
                <Grid container sx={{ width: "100%", mt: { xs: 1, sm: 0 } }}>
                  <Grid item xs={4}>
                    <ButtonChange
                      to={0}
                      name="Salud Visual"
                      selected={active}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <ButtonChange to={1} name="Brigadas" selected={active} />
                  </Grid>
                  <Grid item xs={4}>
                    <ButtonChange to={2} name="Servicios" selected={active} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Box
              sx={{
                height: "90vh",
                width: "100%",
                objectPosition: "top",
                objectFit: "cover",
              }}
              autoPlay
              preload=""
              loop
              src="https://www.transitions.com/assets/videos/15s_LOOP_VI_HORIZ_200310_422HQ.mp4"
              component={"video"}
            ></Box>
            <Box
              sx={{
                position: "absolute",
                display: "flex",
                top: 0,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: {
                  xs: "90%",
                  md: "70%",
                },
                height: "100%",
                pt: 10,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1.5rem", md: "5rem" },
                  letterSpacing: "8px",
                  fontWeight: 300,
                  lineHeight: "1",
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
              >
                Salud Visual
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "0.8rem",
                    md: "1.5rem",
                  },
                  fontWeight: 200,
                  textAlign: "center",
                  mt: 3,
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellat illo nam aperiam quidem amet earum reiciendis? Soluta
                magnam corrupti quae at. Laboriosam minima natus eligendi
                architecto dolorem tempore facilis officiis.
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Box
              sx={{
                height: "90vh",
                width: "100%",
                objectPosition: "top",
                objectFit: "cover",
                backgroundImage:
                  "url(https://www.transitions.com/assets/images/home/carousel/A%20copy.webp)",
                backgroundPositionY: "center",
                backgroundSize: "cover",
              }}
            ></Box>
            <Box
              sx={{
                position: "absolute",
                display: "flex",
                top: 0,
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-start",
                height: "100%",
                pl: { xs: 0, md: 5 },
                pb: "10rem !important",
              }}
            >
              <Box
                sx={{
                  maxWidth: { xs: "100%", md: "50%" },
                  paddingBottom: "70px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "1.5rem", md: "5rem" },
                    letterSpacing: "8px",
                    fontWeight: 300,
                    lineHeight: "1",
                    textAlign: {
                      xs: "center",
                      md: "left",
                    },
                    textTransform: "uppercase",
                  }}
                >
                  Salud Visual
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "0.8rem",
                      md: "1.2rem",
                    },
                    fontWeight: 200,
                    textAlign: {
                      xs: "center",
                      md: "left",
                    },
                    mt: 3,
                  }}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repellat illo nam aperiam quidem amet earum reiciendis? Soluta
                  magnam corrupti quae at. Laboriosam minima natus eligendi
                  architecto dolorem tempore facilis officiis.
                </Typography>
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Box
              sx={{
                height: "90vh",
                width: "100%",
                objectPosition: "top",
                objectFit: "cover",
                backgroundImage:
                  "url(https://www.transitions.com/assets/images/home/carousel/A%20copy.webp)",
                backgroundPositionY: "center",
                backgroundSize: "cover",
              }}
            ></Box>
            <Box
              sx={{
                position: "absolute",
                display: "flex",
                top: 0,
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-start",
                height: "100%",
                pl: { xs: 0, md: 5 },
                pb: "10rem !important",
              }}
            >
              <Box
                sx={{
                  maxWidth: { xs: "100%", md: "50%" },
                  paddingBottom: "70px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "1.5rem", md: "5rem" },
                    letterSpacing: "8px",
                    fontWeight: 300,
                    lineHeight: "1",
                    textAlign: {
                      xs: "center",
                      md: "left",
                    },
                    textTransform: "uppercase",
                  }}
                >
                  Salud Visual
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "0.8rem",
                      md: "1.2rem",
                    },
                    fontWeight: 200,
                    textAlign: {
                      xs: "center",
                      md: "left",
                    },
                    mt: 3,
                  }}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repellat illo nam aperiam quidem amet earum reiciendis? Soluta
                  magnam corrupti quae at. Laboriosam minima natus eligendi
                  architecto dolorem tempore facilis officiis.
                </Typography>
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default PageHead;
