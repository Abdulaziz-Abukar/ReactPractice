import React from "react";
import CustomButton from "./Components/CustomButton/CustomButton";
import MessageCard from "./Components/MessageCard/MessageCard";
import ToggleSwitch from "./Components/ToggleSwitch/ToggleSwitch";

function App() {
  function alertMessage() {
      return alert('This button has been clicked!');
  }

  function onToggle() {
    return alert('Toggled!')
  }
  
    return (
      <>
        <CustomButton label="Button" onClick={alertMessage} />
        <MessageCard>
          <h2>Hello Abdulaziz</h2>
          <p>This is inside the card!</p>
        </MessageCard>
        <ToggleSwitch isOn={true} onToggle={onToggle} />
      </>
  );
}

export default App
