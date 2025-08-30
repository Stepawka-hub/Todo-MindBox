import { styled, TextField as BaseTextField } from "@mui/material";

export const TextField = styled(BaseTextField)(({ theme }) => ({
  width: "100%",

  "& .MuiOutlinedInput-root": {
    borderRadius: "0.5rem 0.5rem 0 0",
    fontSize: "1.25rem",

    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primary.main,
    },

    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderWidth: "2px",
    },
  },

  "& .MuiInputLabel-root": {
    fontSize: "1rem",

    "&.Mui-focused": {
      color: theme.palette.primary.main,
    },
  },

  "& .MuiFormHelperText-root": {
    fontSize: "0.875rem",
  },
}));
