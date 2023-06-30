import './App.css';
import InputField from './components/InputFied';
import Coach from './components/Coach';
import Footer from './components/Footer';
import { useState,useEffect } from 'react';

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
  return (
     <div >

               

           <h1 className="text"> Ticket Booking System </h1>
              <InputField update={update}/>
 
              <Coach Seats={Seats}/>
             
              <Footer/>


     </div>
  );
}

export default App;
