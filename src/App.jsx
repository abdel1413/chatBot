import { ChatInput } from "./components/ChatInput"
import { Message } from "./components/Message"


function App() {
  

  return (
    <>
    <ChatInput />
    <Message message="Hello Chatbot" sender="user"/>
    <Message message="Hello how can I help you?" sender='robot'/>
    <Message message="Can you get today's date?" sender='user'/>
    <Message message="Sure! today is 01/06/2026" sender='robot'/>
    </>
  )
}

export default App
