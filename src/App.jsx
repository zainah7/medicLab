import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import OurDepartments from "./components/OurDepartments";
function App() {
  return (
    <div>
      <div>
        <Header />
        <Navbar />
        <About />
        <OurDepartments />
      </div>
    </div>
  );
}

export default App;
