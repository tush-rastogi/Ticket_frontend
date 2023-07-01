import React ,{useState} from 'react';
import Button from '@mui/material/Button';
import './InputField.css'


function InputField({update,BookingRequest}) {

     const [seat,setSeats]=useState(0);
     
        const BookSeat=async ()=>{

              
           BookingRequest(true);
           const response =await fetch('https://train-ticket-ewqj.onrender.com/bookSeats',{

             method:'PUT',
             headers:{
                "Content-Type":"application/json"
             },
             body:JSON.stringify({
                NumberofSeats:seat
             })

            })
            
            const data=await response.json();
             
              
              BookingRequest(false);
              
                alert(data);

                 update();
            
            }


        const handleValue=(event)=>{
             
             setSeats(event.target.value);
        }


    return (


         <div className="Input">
           
            <input type="number" placeholder='Book Your Tickets' onChange={handleValue}/>
           
            <Button variant='outlined' color='success'  onClick={BookSeat} >Book</Button>

        </div>


    )

}

export default InputField;