import { Box, Button, Drawer, Typography } from "@mui/material";
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
      transitionDuration={1000}
      onClose={onCloseFc}
    >
      <Box
        sx={{
          width: {
            xs: "100vw",
            sm: "60vw",
            md: "30vw",
          },
          maxWidth: "450px",
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
            mt: 8,
            pl: { xs: 1, md: 4 },
          }}
        >
          {[
            "Brigadas Empresariales",
            "Salud Visual",
            "Cudado de tus Ojos",
            "Blog",
          ].map((item, key) => (
            <Box key={key} sx={{ width: "100%", py: 1 }}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "1.2rem",
                    md: "1.5rem",
                  },
                  textTransform: "uppercase",
                  transition: "all 0.2s linear",
                  pl: 0,
                  "&:hover": {
                    pl: 1,
                    transition: "all 0.2s linear",
                    textDecoration: "underline",
                  },
                  py: 1,
                  fontWeight: "300",
                  "&>a": {
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                    "&:visited": {
                      color: "inherit",
                    },
                  },
                }}
              >
                <Link href={"/#"} onClick={onCloseFc}>
                  {item}
                </Link>
              </Typography>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <Button
            sx={{
              width: { xs: "100%", md: "40%" },
              py: 1.2,
              fontWeight: "300",
              textTransform: "uppercase",
              color: theme.palette.custom.menuText,
              backgroundColor: "transparent",
              boxShadow: "none",
              border: theme.palette.custom.menuText + " solid 1px",
            }}
          >
            Buy Now
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default MenuHmw;
