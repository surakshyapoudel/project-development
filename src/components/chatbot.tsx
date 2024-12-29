import { useState } from "react";
import { Chat } from "./chatbot/chat";
import { FloatingButton } from "./chatbot/floating-button";


export const MyComponent = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)

  const toggleChat = () => setIsChatOpen(!isChatOpen)

    if (typeof window === "undefined") {
      return null;
    }
    return (
      <>
       {isChatOpen && (
        <div className="fixed bottom-24 right-4 z-50">
          <Chat />
        </div>
      )}
      
      <FloatingButton onClick={toggleChat} />
      
      </>
    );
  };