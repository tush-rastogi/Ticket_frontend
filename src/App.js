import './App.css';
import InputField from './components/InputFied';
import Coach from './components/Coach';
import Footer from './components/Footer';
import { useState,useEffect } from 'react';
import { HalfMalf } from 'react-spinner-animated';


import 'react-spinner-animated/dist/index.css'


function App() {

     const [Seats,setSeats]=useState([]);
   

      useEffect(()=>{

         
         console.log("hello");
         fetch('https://train-ticket-ewqj.onrender.com/').
         then(response=>response.json()).
         then(data=>setSeats(data));


      },[])

     
        const update=()=>{

         fetch('https://train-ticket-ewqj.onrender.com/').
         then(response=>response.json()).
         then(data=>setSeats(data));
           
        }


          if(Seats.length==0)
          {

             return (

                <div>
               <h1 className="text"> Ticket Booking System </h1>
               <InputField update={update}/>              
               <HalfMalf text={"Loading..."}  center={true} width={"150px"} height={"150px"}/>
               </div>
                 
             )
          }

          else{

             return (

          <div>

            <h1 className="text"> Ticket Booking System </h1>
              <InputField update={update}/>
 
                  
                   

              <Coach Seats={Seats}/>
             
              <Footer/>
                     

          </div>
                
             )
          }
  
}

export default App;
