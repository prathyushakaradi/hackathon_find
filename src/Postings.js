import React from "react";
import "./postings.css";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ryan from "./images/ryan.png";
import infosys from "./images/infosys.png";
import ibm from "./images/ibm.png";


function Postings(){
  return(
    <body>
    <Navigation/>
    <div class="top">
    <input type="checkbox"/> Jobs &nbsp;
    <input type="checkbox"/> Internships
    <div class="filter">
    Sort by&nbsp;
    <select name="sort">
      <option value="Date"> Date of posting </option>
      <option value="A-Z"> A-Z </option>
      <option value="Z-A">Z-A </option>
    </select>
    </div>


    <table class="table table-hover postings-table">
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
    <td><a class="btn btn-outline-success btn-block" href="/Info">Apply </a></td>
    </tr>
    <tr>
    <td><img src={infosys} alt="Infosys"class="logo-size"/> Infosys</td>
    <td>Java OSS Architect</td>
    <td> Full-time </td>
    <td>Bangalore, IN</td>
    <td><a class="btn btn-outline-success btn-block" href="/Info">Apply </a></td>
    </tr>
    <tr>
    <td><img src={ibm} alt="IBM"class="logo-size"/> IBM</td>
    <td>Application Developer: Java Full Stack</td>
    <td> Internship</td>
    <td>Hyderabad, IN</td>
    <td><a class="btn btn-outline-success btn-block" href="/Info">Apply </a></td>
    </tr>
  </tbody>
</table>
    </div>
    <Footer/>
    </body>
  );
}


export default Postings;
