import { Box } from "@mui/material";
import { ReactNode } from "react";

interface IBodyDocumentProps {
  children: ReactNode;
}

const BodyDocument = ({ children }: IBodyDocumentProps) => {
  return (
    <Box sx={{ minHeight: "100vh", width: "100%", p: 0, m: 0 }}>{children}</Box>
  );
};

export default BodyDocument;
