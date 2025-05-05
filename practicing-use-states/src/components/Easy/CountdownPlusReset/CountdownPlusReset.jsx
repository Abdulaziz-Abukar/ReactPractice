import React, {useState} from "react";

export function CountdownPlusReset(props) {

    const [number, setNumber] = useState(10);
    const [isVisible, setVisibility] = useState(false);

    function decrementNumber() {
        const nextValue = number - 1;
        if (number === 0) {
            setNumber(0);
            setVisibility(true)
        } else {
            setNumber(nextValue)
        }
    }

    function resetCountdown() {
        setNumber(10);
        setVisibility(false)
    }

    return (
        <div>
            <h1>Countdown and Reset!</h1>
            <button onClick={decrementNumber}>{props.countDown}</button>
            <button onClick={resetCountdown}>{props.reset}</button>
            <p>{number}</p>
            <p>{isVisible ? "Countdown is at zero! reset to countdown again!" : ""}</p>
        </div>
    )
}
