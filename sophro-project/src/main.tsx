/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Accueil from "./pages/Accueil";
import Sophrologie from "./pages/Sophrologie";
import Moi from "./pages/Moi";
import Tarifs from "./pages/Tarifs";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Accueil />
            </Layout>
          }
        />
        <Route
          path="/sophrologie"
          element={
            <Layout>
              <Sophrologie />
            </Layout>
          }
        />
        <Route
          path="/moi"
          element={
            <Layout>
              <Moi />
            </Layout>
          }
        />
        <Route
          path="/tarifs"
          element={
            <Layout>
              <Tarifs />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
