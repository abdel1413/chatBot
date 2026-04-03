import { useState } from "react";

export const  ChatInput = ({messages, setMessages}) => {
  const [inputText, setInputText] =  useState("");  
  

    const getInput = (e) => {
      
        setInputText(e.target.value);
    }   
     async function sendMessage(){     
        setMessages([
            ...messages,
            {
                message: inputText,
                sender: "user",
                id: messages.length + 1
            }
        ]);
    
        let chatbotResponse = await window.chatbot.getResponseAsync(inputText);
        
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
        <input style={{width:"300px", height:"30px" , marginRight:"10px"}}
        type="text" 
         
         placeholder="How may i help you?" 
         onChange={getInput}
            value={inputText}
         />
        <button onClick={sendMessage} style={{backgroundColor: "#198755", color: 'white'}}>Send</button>
        
    </div>
  
  )
}
