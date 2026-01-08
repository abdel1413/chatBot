import { useState } from "react";

export const ChatInput = ({messages, setMessages}) => {
  const [inputText, setInputText] =  useState("");  
  

    const getInput = (e) => {
      
        setInputText(e.target.value);
    }   
    const sendMessage = () => {     
       
        console.log("Input Text:", inputText);
        setMessages([
            ...messages,
            {
                message: inputText,
                sender: "user",
                id: messages.length + 1
            }
        ]);
    
       console.log("Messages after user input:", window.chatbot.getResponse(inputText) );
        let chatbotResponse = window.chatbot.getResponse(inputText);
        
        setMessages(prevMessages => [       
            ...prevMessages,
            {
                message: chatbotResponse,
                sender: "robot",
                id: prevMessages.length + 1
            }
        ]);
        setInputText(""); // Clear input field after sending

    }

  return (
    <div>
    <h2 style={{margin: "0"}}>hello from chat input</h2>
    <div> 
        <input style={{width:"300px", height:"30px" , marginRight:"10px"}}
        type="text" 
         
         placeholder="How may i help you?" 
         onChange={getInput}
            value={inputText}
         />
        <button onClick={sendMessage}>Send</button>
        
    </div>
    </div>
  )
}
