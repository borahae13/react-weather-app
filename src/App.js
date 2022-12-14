import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Miami" />
        <footer>
          Open source{" "}
          <a
            href="https://github.com/borahae13/react-weather-app"
            rel="noreferrer"
          >
            code
          </a>{" "}
          by Shaina Carson
        </footer>
      </div>
    </div>
  );
}
export default App;
