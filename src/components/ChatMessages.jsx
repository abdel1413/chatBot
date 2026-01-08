
import { Message } from "./Message"

export const ChatMessages = ({messages}) => {
  
//   const sendMessage = () => {
//     const newMessage = {
//       message: "This is a new message",
//       sender: "user",
//       id: messages.length + 1
//     };
//     setMessage([...messages, newMessage]);
//   }
  return (
    <div style={{display:"flex", flexDirection:"column", gap:"10px" , 
    border:"1px solid black", padding:"10px",
    width:"370px",
    marginBottom:"5px"
    }}>
      {/* <button onClick={sendMessage}>send Msg</button> */}
      {messages.map(({message,sender,id})=>(
      <Message
      key={id}
      message={message} 
      sender={sender}/>
    ))}
    </div>
  )
}