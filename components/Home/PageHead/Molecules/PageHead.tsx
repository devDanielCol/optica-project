import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
import useTheme from "../../../../util/hooks/useTheme";
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
        fontSize: { xs: "0.8rem", md: "1.2rem" },
        textTransform: "unset",
        mx: { xs: 0, md: 2 },
        color: "white",
        height: { xs: "50px", md: "77px" },
        backgroundColor: selected === to ? "#e16a3d" : "",
        "&:hover": {
          backgroundColor: selected === to ? "#e16a3d" : "",
        },
        borderRadius: "0px",
        width: "100%",
      }}
      onMouseMove={onSelected}
    >
      {name}
    </Button>
  );
};

const PageHead = () => {
  const theme = useTheme();
  const [active, setActive] = useState<number>(0);

  return (
    <Box sx={{ color: "white" }}>
      <Swiper
        pagination={{
          type: "custom",
        }}
        modules={[Pagination]}
        speed={1100}
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
            backgroundColor: "#00000078",
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
                pl: 0,
                pr: 0,
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
                minHeight: "26.25rem",
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
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1.5rem", md: "3rem" },
                  letterSpacing: "10px",
                  fontWeight: 700,
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
                  fontWeight: 500,
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
        <SwiperSlide style={{ height: "inherit" }}>
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
                minHeight: "26.25rem",
                width: "100%",
                objectPosition: "top",
                objectFit: "cover",
              }}
              autoPlay
              preload=""
              loop
              src="video/day.mp4"
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
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1.5rem", md: "3rem" },
                  letterSpacing: "10px",
                  fontWeight: 700,
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
                  fontWeight: 500,
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
                minHeight: "26.25rem",
                width: "100%",
                objectPosition: "top",
                objectFit: "cover",
              }}
              autoPlay
              preload=""
              loop
              src="video/day.mp4"
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
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1.5rem", md: "3rem" },
                  letterSpacing: "10px",
                  fontWeight: 700,
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
                  fontWeight: 500,
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
      </Swiper>
    </Box>
  );
};

export default PageHead;
