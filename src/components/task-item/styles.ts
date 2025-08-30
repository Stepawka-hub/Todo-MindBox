import { SxProps } from "@mui/material";
import { CSSProperties } from "styled-components";

export const containerStyle: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  py: 1,
  pl: 1,
  pr: 2,
  minWidth: 0,
};

export const iconStyle: CSSProperties = {
  fontSize: "1.75rem",
};

export const taskTextStyle = {
  base: {
    maxWidth: "100%",
    fontSize: "1.25rem",
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
