import React from "react";
import "./courses.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Courses = () => {
  return (
    <section className="course-section">
      <h1>COURSES</h1>
      <div className="course-div">
        <div className="ielts">
          <h2>IELTS</h2>
          <p>IELTS(The International English Language) is designed to help you work, study, or migrate to a country
               where English isthe native language.</p>
        </div>
        <br/>
        <div className="oet">
          <h2>OET</h2>
          <p>OET(Occupational English Test) is designed for healthcare professionals recognised by various regulatory
               healthcare bodies. This test is designed for those who want to work in an English speaking environment.  </p>
        </div>
        <br/><br/>
      </div>
    </section>
  );
};

export default Courses;
