import { ChatInput } from "./components/ChatInput"
import { ChatMessages } from "./components/ChatMessages"
import { Message } from "./components/Message"
import { useState } from "react"

function App() {
 const [messages,setMessages] =  useState([
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
  ]);

 
  

  return (
    <>
    <ChatMessages 
    messages={messages} /> 
    <ChatInput  
    messages={messages}
    setMessages={setMessages}
    />
    
    </>
  )
}

export default App
