import { SxProps } from "@mui/material";
import { CSSProperties } from "styled-components";

export const containerStyle: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  p: 1,
};

export const iconStyle: CSSProperties = {
  fontSize: "1.75rem",
};

export const taskTextStyle = {
  completed: {
    fontSize: "1.25rem",
    color: "text.disabled",
    textDecoration: "line-through",
  },
  active: {
    fontSize: "1.25rem",
    color: "text.primary",
    textDecoration: "none",
  },
};
