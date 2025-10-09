import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles.ts";
import { Theme } from "./Theme.ts";
import Page from "./components/Page.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Page />
    </ThemeProvider>
  </StrictMode>
);
