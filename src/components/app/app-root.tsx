import { FC, Suspense, useMemo } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ThemeSettings } from "./config/mui/theme";

export const AppRoot: FC = () => {
  const muiTheme = useMemo(() => createTheme(ThemeSettings()), []);

  return (
    <Suspense>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Suspense>
  );
};
