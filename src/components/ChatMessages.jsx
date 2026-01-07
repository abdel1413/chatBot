import { useState } from "react"
import { Message } from "./Message"

export const ChatMessages = () => {
   const [messages,setMessage] =  useState([
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

  const sendMessage = () => {
    const newMessage = {
      message: "This is a new message",
      sender: "user",
      id: messages.length + 1
    };
    setMessage([...messages, newMessage]);
  }
  return (
    <>
      <button onClick={sendMessage}>send Msg</button>
      {messages.map(({message,sender,id})=>(
      <Message
      key={id}
      message={message} 
      sender={sender}/>
    ))}
    </>
  )
}