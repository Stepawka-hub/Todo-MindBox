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
  color: '#dac7c6ff',
};

export const contentStyle = {
  boxShadow: '0 2px 5px #ccc',
  borderRadius: '0.5rem',
  overflow: 'hidden'
};