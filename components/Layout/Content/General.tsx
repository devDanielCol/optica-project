import { IconButton } from "@mui/material";
import { FC, ReactNode } from "react";
import BodyDocument from "../Body";
import FooterDocument from "../Footer/Molecules/Footer";
import HeadDocument from "../Head";
import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";
import Navbar from "../../Navbar/Molecules/Navbar";
import isNavigator from "../../../util/helpers/isNavigator";

interface IContentProps {
  children?: ReactNode;
  title: string;
  description: string;
  threshold?: number;
}

const Content: FC<IContentProps> = ({
  children,
  title,
  description,
  threshold,
}) => {
  const urlSite = isNavigator() ? location.href : "";
  return (
    <>
      <HeadDocument title={title} description={description} url={urlSite} />
      <BodyDocument>
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
      </BodyDocument>
    </>
  );
};

export default Content;
