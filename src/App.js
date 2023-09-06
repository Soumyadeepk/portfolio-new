import Expr from "./components/Expr";
import Footer from "./components/Footer";
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
      <div className="pl-6 pr-6 lg:pr-0 lg:pl-32  lg:w-4/6">
        <Header />
        <MyLife />
        <Projects />
        <Expr />
        <TechStacks />
        <Footer />
      </div>
    </div>
  );
}

export default App;
