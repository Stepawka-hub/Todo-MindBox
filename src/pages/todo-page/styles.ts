import { SxProps, Theme } from "@mui/material";

export const pageWrapperStyle: SxProps<Theme> = {
  minHeight: "100vh",
  py: 2,
  px: 4,
  overflow: "hidden",
  backgroundColor: "background.default",
};

export const pageTitleStyle: SxProps<Theme> = {
  mb: 1,
  fontSize: { xs: "2.75rem", sm: "3rem", md: "3.25rem", lg: "3.75rem" },
  textAlign: "center",
};

export const headerContainerStyle: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: 2,
  px: 2,
};

export const contentStyle = {
  boxShadow: "0 3px 6px #d7d7d7",
  borderRadius: "0.5rem",
  overflowX: "hidden",
};
