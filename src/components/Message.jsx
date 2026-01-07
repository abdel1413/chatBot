
import user from '../assets/user.png'
import robot from '../assets/robot.png'
export const Message = ({message,sender}) => {
    return sender === 'robot'
    ? <div style={{display:"flex", alignItems:"center", gap:"10px"}}>   
            <img  src={robot} style={{width:"50px" , height:"50px" }} alt="robot" />
            <p style={{background: "lightgray", color:'black' , padding:'5px'}}>{message}</p>      
            </div>
        
      
 :<div style={{display:"flex", alignItems:"center", gap:"10px",}}>
     <p style={{background: "gray" , padding:'5px'}}>{message}</p> 
    <img  src={user} style={{width:"50px" , height:"50px" }} alt="user" />
    </div>
  
}