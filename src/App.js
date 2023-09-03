import Expr from "./components/Expr";
import Header from "./components/Header";
import MyLife from "./components/MyLife";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SideCard from "./components/SideCard";
import TechStacks from "./components/TechStacks";

function App() {
  return (
    <div className="">
      <Navbar />
      <SideCard />
      <div className="w-4/6">
        <Header />
        <MyLife />
        <Projects />
        {/* <TechStacks /> */}
        <Expr />
      </div>
    </div>
  );
}

export default App;
