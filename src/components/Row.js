import React from "react";
import './Row.css'
import Seat from "./Seat/Seat";

function Row(props){


      const SeatList=props.SeatDetails.map((item,index)=>{

          return  <Seat key={index} SeatNo={item.SeatNo} Status={item.Status}/>
      })

     return(

        <div className="rows">

           {SeatList}

        </div>
     )

}

export default Row;