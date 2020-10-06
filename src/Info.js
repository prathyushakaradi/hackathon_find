import React from "react";
import "./postings.css";
import Navigation from "./Navigation";
import Footer from "./Footer";
import "./info.css";
import ibm from "./images/ibm.png";

function Info(){
  return(
    <body>
    <Navigation/>
    <div class="one">
    <div class="card">
    <div class="card-body">
    <img src={ibm} alt="IBM" class="info-img"/>
    <p class="card-title"> IBM<br/>Application Developer: Java Full Stack<br/> Hyderbad, IN</p><br/>
    <p class="info-content">As an Application Developer, you will lead IBM into the future by translating system requirements into the design and development of customized systems in an agile environment. The success of IBM is in your hands as you transform vital business needs into code and drive innovation. Your work will power IBM and its clients globally, collaborating and integrating code into enterprise systems. You will have access to the latest education, tools and technology, and a limitless career path with the worlds technology leader. Come to IBM and make a global impact!</p>
    <p>Your day in the role will include</p>
      <ul>
      <li>Expert in Backend and Front end technologies.</li>
      <li>Proven in developing and implementation and providing solutions to the given problem in all the Java technologies.</li>
      <li>Proficient in stitch together end to end application starting from front end web development, back end development, middleware integration and persisting data in no SQL or DBMS database.</li>
      <li>Strong into trends and directions of the Industry, marketplace and the players.</li>
      <li>Provide objective guidance without personal or political considerations.</li>
      </ul>
      <p>Requirements </p>
      <ul>
      <li>Hands on experience with JAVA 8 and above Java 8 or higher. Should know both Spring and Hibernate. Spring 4 or above.</li>
      <li>Should be experienced in OOP concepts well. Should be proficient in exception handling , collections, Abstract Classes and Interfaces, Constructors, File IO and Serialization, Collections (List, Map, Set), Access Specifiers, Exceptions (Checked, Unchecked), Generics, Java Keywords (Static, Final, Volatile, Synchronized, Transient), JVM and Memory Management, Multithreading and Synchronization, JSP/ Servlets,JMS . Should be skilled in one of the IDEs like Eclipse , IntelliJ. Should be  conversant with Build tools like Ant , Maven.</li>
      <li>Experience of working in HTML 5 , CSS3, Angular JS, Spring MVC, Spring Boot, REST API, JUnit.</li>
      </ul>

    <a href="#" class="btn btn-outline-success">Apply</a>
    <a href="#" class="btn btn-outline-info">Save</a>
  </div>
  </div>
</div>
    <Footer/>
    </body>
  );
}

export default Info;
