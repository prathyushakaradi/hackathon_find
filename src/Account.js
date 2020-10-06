import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";


function Account(){
  return(
    <body>
    <Navigation/>
    <div class="account-body">
    <div class="card">
    <div class="card-body">
    <i class="fas fa-user fa-5x"></i>
    <p>ABC <br/>Student </p>
    <button class="btn btn-outline-dark btn-block"> Update Your Resume </button>
    <button class="btn btn-outline-dark btn-block"> Your saved jobs </button>
    <button class="btn btn-outline-dark btn-block"> Your applied jobs </button>


    </div>
    </div>
    </div>
    <Footer/>
    </body>
  );
}

export default Account;
