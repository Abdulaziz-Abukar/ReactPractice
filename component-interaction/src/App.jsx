import React from "react";
import CustomButton from "./Components/CustomButton/CustomButton";
import MessageCard from "./Components/MessageCard/MessageCard";

function App() {
    function alertMessage() {
        return alert('This button has been clicked!');
    }
    return (
      <>
        <CustomButton label="Button" onClick={alertMessage} />
        <MessageCard>
          <h2>Hello Abdulaziz</h2>
          <p>This is inside the card!</p>
        </MessageCard>
      </>
  );
}

export default App
