import { Pagination } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { FC, useRef, useState } from "react";
import Icon from "../Atoms/Icon";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

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
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement>();

  const pauseAndPlay = () => {
    if (videoRef.current?.paused) {
      console.log("played");
      setIsPaused(!isPaused);
      videoRef.current
        .play()
        .then(() => {
          console.warn("video played");
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      setIsPaused(!isPaused);
      videoRef.current?.pause();
    }
  };

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
        draggable={false}
        noSwiping
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
              ref={videoRef}
              sx={{
                height: "98vh",
                width: "100%",
                objectPosition: "top",
                objectFit: "cover",
                zIndex: -1,
              }}
              autoPlay
              preload=""
              muted
              poster="images/brigadas.jpg"
              loop
              playsInline
              component={"video"}
            >
              <p>load failed</p>
              <source src="video/optica.mp4" type="video/mp4" />
              <source src="video/optica.webm" type="video/webm" />
            </Box>
            <Box
              sx={{
                width: "100%",
                position: "absolute",
                display: "flex",
                top: 0,
                justifyContent: "flex-start",
                alignItems: "flex-end",
                height: "90vh",
                // bgcolor: "blue",
              }}
            >
              <Box
                sx={{
                  flexDirection: "column",
                  maxWidth: "800px",
                  p: {
                    xs: 1,
                    sm: 5,
                    lg: 3,
                  },
                  pb: {
                    xs: 5,
                    sm: 7,
                    lg: 10,
                  },
                  // bgcolor: "red",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "3rem", sm: "5rem", md: "4rem" },
                    letterSpacing: "0px",
                    fontWeight: 300,
                    lineHeight: "1",
                    textAlign: "left",
                    textTransform: "uppercase",
                  }}
                >
                  Salud Visual
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "3rem", md: "3rem" },
                    letterSpacing: "0px",
                    fontWeight: 300,
                    lineHeight: "1",
                    textAlign: "left",
                    textTransform: "uppercase",
                  }}
                >
                  Transforma tu perspectiva
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "0.8rem",
                      sm: "1.5rem",
                      md: "1.5rem",
                    },
                    fontWeight: 200,
                    lineHeight: "1",
                    textAlign: "left",
                    mt: 3,
                  }}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repellat illo nam aperiam quidem amet earum reiciendis
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                bottom: 20,
                right: 20,
              }}
            >
              <IconButton
                sx={{ color: "custom.navbarText" }}
                onClick={pauseAndPlay}
              >
                {!isPaused ? (
                  <PauseCircleIcon sx={{ fontSize: "3rem" }} />
                ) : (
                  <PlayCircleIcon sx={{ fontSize: "3rem" }} />
                )}
              </IconButton>
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
                height: "98vh",
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
                width: "100%",
                position: "absolute",
                display: "flex",
                top: 0,
                justifyContent: "flex-start",
                alignItems: "flex-end",
                height: "90vh",
                // bgcolor: "blue",
              }}
            >
              <Box
                sx={{
                  flexDirection: "column",
                  maxWidth: "800px",
                  p: {
                    xs: 1,
                    sm: 5,
                    lg: 3,
                  },
                  pb: {
                    xs: 5,
                    sm: 7,
                    lg: 10,
                  },
                  // bgcolor: "red",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "3rem", sm: "5rem", md: "4rem" },
                    letterSpacing: "0px",
                    fontWeight: 300,
                    lineHeight: "1",
                    textAlign: "left",
                    textTransform: "uppercase",
                  }}
                >
                  Salud Visual
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "3rem", md: "3rem" },
                    letterSpacing: "0px",
                    fontWeight: 300,
                    lineHeight: "1",
                    textAlign: "left",
                    textTransform: "uppercase",
                  }}
                >
                  Transforma tu perspectiva
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "0.8rem",
                      sm: "1.5rem",
                      md: "1.5rem",
                    },
                    fontWeight: 200,
                    lineHeight: "1",
                    textAlign: "left",
                    mt: 3,
                  }}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repellat illo nam aperiam quidem amet earum reiciendis
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
                height: "98vh",
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
                width: "100%",
                position: "absolute",
                display: "flex",
                top: 0,
                justifyContent: "flex-start",
                alignItems: "flex-end",
                height: "90vh",
                // bgcolor: "blue",
              }}
            >
              <Box
                sx={{
                  flexDirection: "column",
                  maxWidth: "800px",
                  p: {
                    xs: 1,
                    sm: 5,
                    lg: 3,
                  },
                  pb: {
                    xs: 5,
                    sm: 7,
                    lg: 10,
                  },
                  // bgcolor: "red",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "3rem", sm: "5rem", md: "4rem" },
                    letterSpacing: "0px",
                    fontWeight: 300,
                    lineHeight: "1",
                    textAlign: "left",
                    textTransform: "uppercase",
                  }}
                >
                  Salud Visual
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "3rem", md: "3rem" },
                    letterSpacing: "0px",
                    fontWeight: 300,
                    lineHeight: "1",
                    textAlign: "left",
                    textTransform: "uppercase",
                  }}
                >
                  Transforma tu perspectiva
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "0.8rem",
                      sm: "1.5rem",
                      md: "1.5rem",
                    },
                    fontWeight: 200,
                    lineHeight: "1",
                    textAlign: "left",
                    mt: 3,
                  }}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repellat illo nam aperiam quidem amet earum reiciendis
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
