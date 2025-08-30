import { SxProps } from "@mui/material";

export const taskControlsBox: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 1,
  py: 1,
  px: 2,
};

export const filterBoxStyle: SxProps = {
  display: { xs: "flex", md: "block" },
  justifyContent: { xs: "center" },
  width: { xs: "100%", md: "auto" },
};

export const tasksCounterStyle: SxProps = {
  fontSize: { xs: "0.95rem", sm: "1rem", md: "1.15rem" },
};

export const clearButtonStyle: SxProps = {
  width: { xs: "100%", md: "auto" },
  fontSize: { xs: "0.875rem", md: "1rem" },
};
