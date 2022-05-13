import React from "react";
import "./body.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import iconphone from "./images/iconphone.png";
import whatsapp from "./images/whatsapp.png";
const Body = () => {
  return ( 
    <section className="banner-container">
      <div className="containers">
        <div className="left_sections">
          {/* <h1>Online and Offline Sessions</h1> */}
          <h2>Book Your Session!</h2><br></br>
          <img src={iconphone} id="image" alt="i"></img>&nbsp;&nbsp;
          <a href="tel:8593820942">+91 8593820942</a> <br /><br/>
          <img src={whatsapp} id="image" alt="t"></img>&nbsp;&nbsp;
          <a href="tel:8593820942">+91 8593820942</a>
        </div>
      </div>
    </section>
  );
};

export default Body;
