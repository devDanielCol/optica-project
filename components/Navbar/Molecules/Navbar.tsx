import {
  AppBar,
  Container,
  Grid,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { FC, MouseEvent, useState } from "react";

import MenuHmw from "../../Menu/Molecules/MenuHmw";
import HmwButton from "../../Global/HmwButton/HmwButton";
import Link from "next/link";
import Icon from "../../Home/PageHead/Atoms/Icon";

interface NavbarProps {
  window?: () => Window;
  threshold?: number;
}

const Navbar: FC<NavbarProps> = ({ window, threshold }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(!menuOpen);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: threshold ? threshold : 120,
    target: window ? window() : undefined,
  });

  return (
    <>
      <AppBar
        sx={{
          boxShadow: 0,
          transition: "all .25s linear",
          // backdropFilter: trigger ? "blur(15px)" : "blur(0px)",
          backgroundColor: trigger ? "custom.navbar" : "transparent",
          backgroundImage: "none",
          opacity: trigger ? 100 : 0,
          borderBottomColor: trigger ? "#4e317e50" : "transparent",
          py: 0,
          transform: trigger ? "translateY(0%)" : "translateY(-100%)",
          backdropFilter: "blur(7px)",
          color: "custom.navbarText",
          zIndex: 3000,
        }}
      >
        <Toolbar>
          <Container
            sx={{
              transition: "all 1s linear ",
              px: { xs: 0, md: 0 },
            }}
          >
            <Grid container sx={{ py: trigger ? 0.5 : 2 }}>
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Link
                  onClick={handleClose}
                  href={"/"}
                  style={{ textDecoration: "none" }}
                >
                  <Icon />
                </Link>
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <HmwButton
                  onClick={handleClick}
                  open={menuOpen}
                  bgColor={"custom.navbarText"}
                  sx={{ zIndex: 10000 }}
                />
                <Typography
                  sx={{
                    ml: 1,
                    textTransform: "uppercase",
                    fontSize: "0.9rem",
                    display: { xs: "none", md: "block" },
                  }}
                >
                  {menuOpen ? "Close" : "Menu"}
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
      <MenuHmw onCloseFc={handleClose} anchorEl={anchorEl} open={menuOpen} />
    </>
  );
};

export default Navbar;
