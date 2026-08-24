import React from "react";
import ReactDOM from "react-dom/client";
import { Steps, ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider } from "@/components/ui/color-mode"; // Ajusta o caminho se necessário
import App from "./App";
import system from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ColorModeProvider>
      <ChakraProvider value={system}>
        <App />
      </ChakraProvider>
    </ColorModeProvider>
  </React.StrictMode>
);