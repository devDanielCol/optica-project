import { Box, Drawer, Typography } from "@mui/material";
import useTheme from "../../../util/hooks/useTheme";
import ThemeButton from "../../ThemeCtrl/ThemeBtn/ThemeBtn";
import Link from "next/link";

interface IMenuHmwProps {
  open: boolean;
  anchorEl?: HTMLButtonElement | null;
  onCloseFc(): void;
}

const MenuHmw = ({ open, onCloseFc }: IMenuHmwProps) => {
  const theme = useTheme();

  return (
    <Drawer
      anchor="right"
      open={open}
      disablePortal
      elevation={3}
      transitionDuration={1100}
      onClose={onCloseFc}
    >
      <Box
        sx={{
          width: {
            xs: "100vw",
            sm: "60vw",
            md: "50vw",
          },
          height: "100%",
          p: 4,
          pt: 10,
          display: "flex",
          flexDirection: "column",
          color: theme.palette.custom.menuText,
        }}
      >
        <Box
          sx={{
            height: "fit-content",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "0.9rem",
                md: "1rem",
              },
            }}
          >
            El modo
            <Typography
              component="span"
              sx={{ fontWeight: 700, mx: 0.5, fontSize: "inherit" }}
            >
              {theme.palette.mode}
            </Typography>
            esta encendido
          </Typography>
          <ThemeButton />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            pl: 3,
            mt: 8,
          }}
        >
          <Box sx={{ width: "100%", py: 1 }}>
            <Typography
              sx={{
                fontSize: {
                  xs: "1.7rem",
                  md: "2.2rem",
                },
                py: 1,
                fontWeight: "300",
              }}
            >
              Brigadas Empresariales
            </Typography>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography
              sx={{
                fontSize: {
                  xs: "1.7rem",
                  md: "2.2rem",
                },
                py: 1,
                fontWeight: "300",
              }}
            >
              Salud Visual
            </Typography>
          </Box>{" "}
          <Box sx={{ width: "100%" }}>
            <Typography
              sx={{
                fontSize: {
                  xs: "1.7rem",
                  md: "2.2rem",
                },
                py: 1,
                fontWeight: "300",
              }}
            >
              El cuidado de tus ojos
            </Typography>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography
              sx={{
                fontSize: {
                  xs: "1.7rem",
                  md: "2.2rem",
                },
                py: 1,
                fontWeight: "300",
              }}
            >
              Blog
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "0.7rem",
                md: "0.8rem",
              },
              opacity: "0.7",
              lineHeight: 1,
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
            distinctio alias sed exercitationem incidunt hic eos error eum ipsum
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            eligendi suscipit temporibus consequuntur quod molestiae nisi quidem
            eveniet sunt. Cumque, itaque? Minima, perferendis. Magnam assumenda
            reprehenderit voluptatibus quis sed esse. maxime, atque laborum ab
            repudiandae dicta a aut dolorum vitae enim?{" "}
            <Link href={""}>Leer más</Link>
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

export default MenuHmw;
