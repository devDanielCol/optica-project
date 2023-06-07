import { IconButton } from "@mui/material";
import { FC, ReactNode } from "react";
import BodyDocument from "../Body";
import FooterDocument from "../Footer/Molecules/Footer";
import HeadDocument from "../Head";
import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";
import Navbar from "../../Navbar/Molecules/Navbar";

interface IContentProps {
  children?: ReactNode;
  title: string;
  description?: string;
  threshold?: number;
}

const Content: FC<IContentProps> = ({
  children,
  title,
  description,
  threshold,
}) => {
  return (
    <>
      <HeadDocument title={title} description={description} />
      <BodyDocument>
        <>
          <Navbar threshold={threshold} />
          <>{children}</>
          <FooterDocument />

          <IconButton
            href="/#"
            sx={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              zIndex: 1000,
              backgroundColor: "custom.navbar",
              color: "custom.navbarText",
            }}
          >
            <KeyboardDoubleArrowUpRoundedIcon />
          </IconButton>
          {/* <IconButton
            href="#"
            sx={{
              position: "fixed",
              bottom: "80px",
              right: "20px",
              zIndex: 1000,
              backgroundColor: "#24d366",
              "&:hover": {
                backgroundColor: "#24d366",
              },
              color: "white",
            }}
          >
            <WhatsAppIcon sx={{ width: "50px", height: "50px" }} />
          </IconButton> */}
        </>
      </BodyDocument>
    </>
  );
};

export default Content;
