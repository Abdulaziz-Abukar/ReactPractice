import React from "react";
import CustomButton from "./Components/CustomButton/CustomButton";

function App() {
    function alertMessage() {
        return alert('This button has been clicked!');
    }
    return (
    <CustomButton label="Button" onClick={alertMessage} />
  );
}

export default App
