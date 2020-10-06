import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import "./login.css";


function Login(){
  return(
    <body>
    <Navigation/>
    <div class="card login-box">
    <div class="card-body form-content">
      <p class="form-title">Login | <a href="/Register">If not a member please Register </a></p>

      <input type="email" class="form-control" placeholder="Email or Username"/>
      <input type="password" class="form-control" placeholder="Password"/>
      <input type="checkbox"/> Remember Me<hr/>
      <button type="submit" class="btn btn-outline-secondary"><i class="fa fa-check"></i> Login </button>
      <p class="form-content"> Or Login with </p>
      <button class="btn btn-outline-danger"><i class="fa fa-google"></i> Google</button>
      <button class="btn btn-outline-primary"><i class="fab fa-facebook-f"></i> Facebook</button>






    </div>
    </div>
    <Footer/>
    </body>
);
}



export default Login;
