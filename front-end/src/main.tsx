import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Toaster } from "react-hot-toast";
import "./index.css";
import Footer from "./components/footer/Footer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster />
    <App />
    <Footer />
  </React.StrictMode>
);
