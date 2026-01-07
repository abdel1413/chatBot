
import user from '../assets/user.png'
import robot from '../assets/robot.png'
export const Message = ({message,sender}) => {
   return ( 
    <div style={{display:"flex", alignItems:"center", gap:"10px"}}>   
      {sender === 'user' &&(
         <img   src={user} 
         style={{width:"50px" ,
          height:"50px" }} 
           alt="user" />)}
        
            <p 
                style={{background: "lightgray", 
                color:'black' , 
                padding:'5px'}}>
                    {message}
            </p>   
               
       {sender === 'robot' &&(
         <img src={robot}  
         style={{width:"50px" ,
          height:"50px" }}
           alt="robot" />)}     
              
 </div>
        
      
    )

  

}