import React from "react";

import Row from "./Row";

 function Coach(props){

     const {Seats}=props;
    
           
           const RowList=Seats.map((item,index)=>{

              return <Row key={index} SeatDetails={item[1]}/>

           })
      return(
     <div>

       
         {RowList}

       </div>
      );


 }

 export default Coach;
          