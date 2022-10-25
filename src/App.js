import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Weather />
      <footer>
        Open source{" "}
        <a
          href="https://github.com/borahae13/react-weather-app"
          target="_blank"
        >
          code
        </a>{" "}
        by Shaina C.
      </footer>
    </div>
  );
}
