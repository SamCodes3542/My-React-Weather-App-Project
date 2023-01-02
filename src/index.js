import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import WeatherDate from "./WeatherDate";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WeatherDate city="Paris" />=
    <App />
  </React.StrictMode>
);
reportWebVitals();
