

import React from "react";
import "./index.css";
import App from "./App";

import { createRoot } from "react-dom/client";
import { AuthContextProvider } from "./store/auth-context";
const root = createRoot(document.getElementById("root")); // createRoot(container!) if you use TypeScript
root.render(      <AuthContextProvider>    <App tab="home" /> </AuthContextProvider >

   );
 