import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import OurDepartments from "./components/OurDepartments";
import Services from "./components/Services";
import OurSpecialists from "./components/OurSpecialists";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <div>
        <Header />
        <Navbar />
        <About />
        <OurDepartments />
        <Services />
        <OurSpecialists />
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
}

export default App;
