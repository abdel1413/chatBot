
import { useEffect, useRef } from "react";
import { Message } from "./Message"

export const ChatMessages = ({messages}) => {
    const chatRef = useRef(null);
  
//   const sendMessage = () => {
//     const newMessage = {
//       message: "This is a new message",
//       sender: "user",
//       id: messages.length + 1
//     };
//     setMessage([...messages, newMessage]);
//   }

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);
  return (
    <div ref={chatRef}
     style={{display:"flex", flexDirection:"column", gap:"10px" , 
    border:"1px solid black", padding:"10px",
    width:"370px", overflowY:"auto",  height:"400px",
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