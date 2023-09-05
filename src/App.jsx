import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import OurDepartments from "./components/OurDepartments";
import Services from "./components/Services";
import OurSpecialists from "./components/OurSpecialists";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
// import Faq from "./components/Faq";
function App() {
  return (
    <div>
      <div>
        <Header />
        <Navbar />
        <About />
        <OurDepartments />
        <Services />
        {/* <Faq /> */}
        <OurSpecialists />
        <Testimonial />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}

export default App;
