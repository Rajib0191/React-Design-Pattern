import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LoginPage from "./pages/atomic-pattern/pages/LoginPage";
// import App from "./pages/container-pattern/example-02/App";
// import App from "./pages/container-pattern/example-01/App";
// import App from "./pages/layout-pattern/example-01/App";
// import App from "./pages/layout-pattern/example-02/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginPage />
  </StrictMode>
);
