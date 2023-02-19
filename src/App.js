import "./App.css";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App" style={{ fontFamily: "monospace" }}>
      {/* heading  */}
      <Navbar />

      {/* main content */}
      <Main />
    </div>
  );
}

export default App;
