import ChatBot from "react-chatbotify";


export const MyComponent = () => {
    if (typeof window === "undefined") {
      return null;
    }
    return (
      <ChatBot/>
    );
  };