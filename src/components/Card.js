import React from 'react'
import './Card.css'
  
function Card(props)
{
   
    return(
    <div>
     
        <div className='center'>
       <div className='outline'>
        <div className='card' style={{backgroundColor:props.colors}} >
        <div className='name' >
          {props.name}
        <h6 className='text'  style={{color:props.colors}} >
          {props.text}
         </h6>

        </div>
       </div>
       </div>
       </div>
      


</div>

  
            

   
  
  
  
  
  
          
    
  
    )
}
export default  Card