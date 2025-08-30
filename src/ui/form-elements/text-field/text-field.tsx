import { styled, TextField as BaseTextField } from "@mui/material";

export const TextField = styled(BaseTextField)(({ theme }) => ({
  width: "100%",

  "& .MuiOutlinedInput-root": {
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
      borderBottom: "1px solid",
      borderColor: theme.palette.divider,
      borderRadius: 0,
    },

    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primary.main,
      borderBottomWidth: "2px",
    },

    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primary.main,
      borderBottomWidth: "2px",
    },
  },

  "& .MuiInputBase-input": {
    paddingTop: theme.spacing(1.75),
    paddingBottom: theme.spacing(1.25),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },

  "& .MuiInputLabel-root": {
    fontSize: "1rem",

    "&.Mui-focused": {
      color: theme.palette.primary.main,
    },
  },
}));
