import { useState } from "react";
export const ChatInput = ({messages, setMessages}) => {
  const [inputText, setInputText] =  useState("");  

    const getInput = (e) => {
      
        setInputText(e.target.value);
    }   
    const sendMessage = () => {     
       
        console.log("Input Text:", inputText);
        setMessages(()=>([
            ...messages,
            {
                message: inputText,
                sender: "user",
                id: messages.length + 1
            }
        ]));
        setInputText(""); // Clear input field after sending
    }

  return (
    <div>
    <h2 style={{margin: "0"}}>hello from chat input</h2>
    <div> 
        <input type="text" 
         placeholder="How may i help you?" 
         onChange={getInput}
         />
        <button onClick={sendMessage}>Send</button>
        
    </div>
    </div>
  )
}
