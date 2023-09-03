import React from "react";
import Psychiatry from "../assets/icons8_brain_200px 1.jpg";
import Laboratory from "../assets/icons8_test_tube_240px 1.jpg";
import Dentistry from "../assets/icons8_tooth_100px_1 1.jpg";
import Cardiology from "../assets/icons8_heart_with_pulse_100px_1 1.jpg";
import Gynecology from "../assets/icons8_vagina_100px_1 1.jpg";
import Medicine from "../assets/icons8_caduceus_100px_1 1.jpg";
import Emergency from "../assets/icons8_Car_Accident_100px_1 1.jpg";
import Pediatrics from "../assets/icons8_Child_with_Pacifier_200px_1 1.jpg";

const OurDepartments = () => {
  return (
    <div className="container ">
      <div className="">
        <h1>Our Departments</h1>
        <p>
          Lmedic medical care specialises in various services for the
          convenience of the patients
        </p>
      </div>

      <div>
        <div>
          <img src={Psychiatry} alt="" />
          <h1>Psychiatry</h1>
        </div>
        <div>
          <img src={Laboratory} alt="Laboratory" />
          <h1>Laboratory</h1>
        </div>
        <div>
          <img src={Dentistry} alt="Dentistry" />
          <h1>Dentistry</h1>
        </div>
        <div>
          <img src={Cardiology} alt="Cardiology" />
          <h1>Cardiology</h1>
        </div>
        <div>
          <img src={Gynecology} alt="Gynecology" />
          <h1>Gynecology</h1>
        </div>
        <div>
          <img src={Medicine} alt="Medicine" />
          <h1>Medicine</h1>
        </div>
        <div>
          <img src={Emergency} alt="Emergency" />
          <h1>Emergency</h1>
        </div>
        <div>
          <img src={Pediatrics} alt="Pediatrics" />
          <h1>Pediatrics</h1>
        </div>
      </div>
    </div>
  );
};

export default OurDepartments;
