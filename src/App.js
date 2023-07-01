import './App.css';
import InputField from './components/InputFied';
import Coach from './components/Coach';
import Footer from './components/Footer';
import { useState,useEffect } from 'react';
import { HalfMalf ,BarLoader} from 'react-spinner-animated';


import 'react-spinner-animated/dist/index.css'


function App() {

     const [Seats,setSeats]=useState([]);
     const [isLoading,setisLoading]=useState(false);
   

      useEffect(()=>{

         
         console.log("hello");
         fetch('http://localhost:3001/').
         then(response=>response.json()).
         then(data=>setSeats(data));


      },[])

     
        const update=()=>{

         fetch('http://localhost:3001/').
         then(response=>response.json()).
         then(data=>setSeats(data));
           
        }

       
      const BookingRequest=(value)=>{
            
          setisLoading(value);
      }



          if(Seats.length==0)
          {

             return (

                <div>
               <h1 className="text"> Ticket Booking System </h1>
             
               <HalfMalf text={"Loading..Please Wait"}  center={true} width={"150px"} height={"150px"}/>
               </div>
                 
             )
          }

           else if(isLoading==true){

            return (

               <div>
     
                 <h1 className="text"> Ticket Booking System </h1>
                   <InputField update={update} BookingRequest={BookingRequest}/>
      
                       
                   <BarLoader text={"Wait a Minute.."}  center={true} width={"150px"} height={"150px"} />

                   <Coach Seats={Seats}/>
     
                     
                  
                   <Footer/>
                          
     
               </div>
                     
                  )

              
           }

          else{

             return (

          <div>

            <h1 className="text"> Ticket Booking System </h1>
              <InputField update={update} BookingRequest={BookingRequest}/>
 
                  

              <Coach Seats={Seats}/>
             
              <Footer/>
                     

          </div>
                
             )
          }
  
}

export default App;
