
import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { exportAsPDF } from "./utils/pdfExport";


function App() {
  const handleExport = () => {
    // Export the whole page (everything inside #root)
    const root = document.getElementById("root");
    exportAsPDF(root, { filename: "ajvillalobos.com.pdf" });
  };

  return (
    <div className="container">
      <Header onExport={handleExport} />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
