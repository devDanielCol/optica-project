import { Popover, Box, Grid, Drawer, Typography } from "@mui/material";
import AccordionMenuItem from "../Atoms/Accordion";
import useTheme from "../../../util/hooks/useTheme";
import ThemeButton from "../../ThemeCtrl/ThemeBtn/ThemeBtn";

interface IMenuHmwProps {
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  onCloseFc(): void;
}

const MenuHmw = ({ open, anchorEl, onCloseFc }: IMenuHmwProps) => {
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
            md: "40vw",
          },
          p: 4,
          pt: 8,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
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
          <Typography>
            El modo{" "}
            <Typography component="span" sx={{ fontWeight: 700 }}>
              {theme.palette.mode}
            </Typography>{" "}
            esta encendido
          </Typography>
          <ThemeButton />
        </Box>
      </Box>
    </Drawer>
  );
};

export default MenuHmw;
