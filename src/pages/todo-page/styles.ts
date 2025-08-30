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
  textAlign: "center",
};

export const contentStyle = {
  boxShadow: '0 3px 6px #d7d7d7ff',
  borderRadius: '0.5rem',
  overflowX: 'hidden',
};