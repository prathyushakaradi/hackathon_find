import React from 'react';
import "./nav.css";



function Navigation(){
      return (
        <body class="one">
        <div>
          <a href="/" class="heading">FIND.</a>
          <a href="/Account" class="heading-tabs">account</a>
          <a href="/Login" class="heading-tabs">register/login</a>
          <a class="heading-tabs" href="/About">about </a>
          <a class="heading-tabs" href="/Postings">postings </a>
          <a class="heading-tabs" href="/">home </a>


        </div>
        </body>
    )
}

export default Navigation;
