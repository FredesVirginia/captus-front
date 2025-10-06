import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/styles/index.css";
import App from "./App.tsx";
import { CustomProvider } from "rsuite";
import { ToastProvider } from "./components/ToastProvider";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CustomProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </CustomProvider>
  </StrictMode>
);
