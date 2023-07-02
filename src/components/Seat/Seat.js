import React from "react";
import './Seat.css'
 function Seat(props){

        //     console.log(p);
           if(props.Status==="Available"){

             return (
           
                 <div>

                  <div className="square1">{props.SeatNo}</div>

                 </div>

             )
           }

           else 
           {

            return (
           
                <div>

                 <div className="square2">{props.SeatNo}</div>

                </div>

            )
                 
           }

           
       
     

 }

 export default Seat;