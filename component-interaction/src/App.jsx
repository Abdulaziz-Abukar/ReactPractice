import MessageCard from "./Components/MessageCard/MessageCard";
import ToggleSwitch from "./Components/ToggleSwitch/ToggleSwitch";
import ParentControlsChildren from "./Components/ParentControlsChildren/ParentControlsChildren";
import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  function alertMessage() {
    return alert('This button has been clicked!');
  }

  function onToggle() {
    return alert('Toggled!')
  }

  function handleClick() {
    setCounter(counter + 1);
  }

  function DisplayCount(props) {
    return <p>The count is: {props.count}</p>
  }
  
    return (
      <>
        <CustomButton label="Button" onClick={alertMessage} />
        <MessageCard>
          <h2>Hello Abdulaziz</h2>
          <p>This is inside the card!</p>
        </MessageCard>
        <ToggleSwitch isOn={true} onToggle={onToggle} />
        <ParentControlsChildren>
          <button onClick={handleClick}>Click Me!</button>
          <DisplayCount count={counter} />
        </ParentControlsChildren>
      </>
  );
}

export default App
