import React from "react";
import Weather from "./weather";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <Weather defaultCity="Tehran" />
        <footer>
          This project was coded by Selma Khajeh and {""}
          <a
            href="https://github.com/Selmakhj/weather-react-app"
            target="_blank"
          >
            is open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
