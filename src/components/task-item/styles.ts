import { SxProps } from "@mui/material";

export const containerStyle: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  py: 1,
  pl: 1,
  pr: 2,
  minWidth: 0,
};

export const iconStyle = {
  fontSize: {
    xs: "1.5rem",
    sm: "1.75rem",
    md: "2rem",
  },
};

export const taskTextStyle = {
  base: {
    maxWidth: "100%",
    fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" },
    fontWeight: 300,
    overflow: "hidden",
    wordBreak: "break-word",
    minWidth: 0,
  },
  completed: {
    color: "text.disabled",
    textDecoration: "line-through",
  },
  active: {
    color: "text.primary",
    textDecoration: "none",
  },
};
