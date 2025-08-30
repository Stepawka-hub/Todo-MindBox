import { SxProps } from "@mui/material";

export const tabStyle: SxProps = {
  fontSize: { xs: "0.875rem", md: "1rem" },
  padding: { xs: "0.5rem 0.75rem", md: "0.75rem 1.25rem" },
  minHeight: { xs: 32, sm: 40, md: 48 },
  minWidth: { xs: 60, sm: 80 },
};

export const tabsStyle: SxProps = {
  minHeight: { xs: 40, sm: 48 },

  "& .MuiTabs-flexContainer": {
    gap: { xs: 1, sm: 2 },
  },

  "& .MuiTabs-indicator": {
    bottom: { xs: 6, sm: 5, md: 0 },
    height: { xs: "2px", sm: "3px" },
  },
};
