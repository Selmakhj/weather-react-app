import react from "react";
import Weather from "./weather";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <h1>Weather app</h1>
        <Weather defaultcity="Tehran" />
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
