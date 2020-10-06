import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

function Register(){
  return(
    <body>
    <Navigation/>
    <div class="card login-box">
    <div class="card-body">
      <p class="form-title">Register | <a href="/Login">If a member please Login </a></p>

      <input type="email" class="form-control" placeholder="Email or Username"/>
      <input type="password" class="form-control" placeholder="Password"/>
      <input type="password" class="form-control" placeholder="Re-Enter Password"/>

      <p class="form-content"> Role &nbsp;
      <input type="radio" name="role"/> Student &nbsp;
      <input type="radio" name="role"/> Organisation &nbsp;
      <input type="radio" name="role"/> Placement Cell </p><hr/>


      <p class="form-content"> Or Signup with </p>
      <button class="btn btn-outline-danger"><i class="fa fa-google"></i> Google</button>
      <button class="btn btn-outline-primary"><i class="fab fa-facebook-f"></i> Facebook</button>






    </div>
    </div>
    <Footer/>
    </body>
);
}



export default Register;
