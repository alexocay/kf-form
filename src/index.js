import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Hero from "../src/components/hero/Hero";
import Formulario from "../src/components/form/Formulario";
import Footer from "./components/footer/Footer";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Hero />
    <div className="contenedor">
      <Formulario />
    </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
