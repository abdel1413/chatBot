import { Message } from "./Message"

export const ChatMessages = () => {

     const  chatMesages = [
    {
      message:"Hello Chatbot",
      sender:"user",
      id:1
    },
    {
      message:"Hello how can I help you?",
      sender:"robot",
      id:2
    },
    {
      message:"Can you get today's date?",
      sender:"user",
      id:3
    },
    {
      message:"Sure! today is 01/06/2026",
      sender:"robot",
      id:4
    }
  ]
  return (
    <>
      {chatMesages.map(({message,sender,id})=>(
      <Message
      key={id}
      message={message} 
      sender={sender}/>
    ))}
    </>
  )
}