import React from "react";
import title_img from "./images/title.jpg";
import "./home.css";
import Navigation from "./Navigation";
import Footer from "./Footer";
import student_img from "./images/student.jpg";
import organization_img from "./images/organization.jpg";
import university_img from "./images/university.jpg";
import ryan from "./images/ryan.png";
import infosys from "./images/infosys.png";
import ibm from "./images/ibm.png";

function Home() {
    return  (
      <body>
      <Navigation />

     <div class="one">
     <img src={title_img} alt="title-img" class="title-img"/>
       <p class="content-main"> Hunt.Hire.Hustle.</p>
       <p class="content-top"> Making your next <em>FIND</em> easy.</p>
     </div>

     <div class="two">
     <div class="card">
     <div class="card-body">
     <h1 class="content-bottom">Recent Postings <i class="fas fa-bullhorn"></i></h1><br/>
     <table class="table table-borderless table-data">
      <thead>
        <tr>
          <th scope="col">Organisation</th>
          <th scope="col">Role</th>
          <th scope="col">Type</th>
          <th scope="col">Location</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img src={ryan} alt="RyanLLC"class="logo-size"/> Ryan, LLC</td>
          <td>Senior Engineer, Data Strategy</td>
          <td> Full-time </td>
          <td>Hyderabad, IN</td>
          <td><a class="btn btn-outline-dark btn-block" href="/info">Learn More </a></td>
        </tr>
        <tr>
          <td><img src={infosys} alt="Infosys"class="logo-size"/> Infosys</td>
          <td>Java OSS Architect</td>
          <td> Full-time </td>
          <td>Bangalore, IN</td>
          <td><a class="btn btn-outline-dark btn-block" href="/info">Learn More </a></td>
        </tr>
        <tr>
          <td><img src={ibm} alt="IBM"class="logo-size"/> IBM</td>
          <td>Application Developer: Java Full Stack</td>
          <td> Internship </td>
          <td>Hyderabad, IN</td>
          <td><a class="btn btn-outline-dark btn-block" href="/info">Learn More </a></td>
        </tr>
      </tbody>
    </table>
    </div>
    </div>
    </div>

     <div class="row three">
       <div class="col-lg-4 col-md-1">
         <div class="content-middle">
         <img src={student_img} class="image" alt="student"/><br/>Student? </div>
         <p> Register here to hunt Job and Internship opportunities. </p>
         <button class="btn btn-outline-dark btn-block"> Register </button>
       </div>
       <div class="col-lg-4 col-md-1">
         <div class="content-middle">
         <img src={organization_img} class="image" alt="organization"/><br/>Organisation? </div>
         <p> Register here to hire fresh talent to reach those milestones. </p>
         <button class="btn btn-outline-dark btn-block"> Register </button>
       </div>
       <div class="col-lg-4 col-md-1">
       <div class="content-middle">
       <img src={university_img} class="image" alt="university"/><br/>Placement Cell? </div>
       <p> Register here to enroll your college to various companies. </p>
       <button class="btn btn-outline-dark btn-block"> Register </button>
     </div>
     </div>

<Footer/>


</body>

    );

}

export default Home;
