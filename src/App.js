import Expr from "./components/Expr";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechStacks from "./components/TechStacks";

function App() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <TechStacks />
      <Projects />
      <Expr />
    </div>
  );
}

export default App;
