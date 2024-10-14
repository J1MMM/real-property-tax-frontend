import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { DataProvider } from "./context/DataProvider.jsx";

const queryClient = new QueryClient({});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <DataProvider>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </DataProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
