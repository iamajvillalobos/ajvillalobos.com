import "./App.css";
import Header from "./components/Header";
import Bio from "./components/Bio";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="container">
      <Header />
      <Bio />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
