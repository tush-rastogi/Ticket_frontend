import React from "react";
import Seat from './Seat/Seat';

 function Footer(){

     return (
      <div className="center">

      
        <Seat Status="Available"/>
        <h5>Available</h5>
      
        <Seat Status="Not Available"/>
        
         <h5>Not Available</h5>
      </div>

     );
 }

 export default Footer;