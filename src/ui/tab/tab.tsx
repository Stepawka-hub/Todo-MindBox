import { styled, Tab as BaseTab } from "@mui/material";

export const Tab = styled(BaseTab)(() => ({
  "&.MuiTab-root": {
    borderRadius: "0.25rem",
  },
}));
