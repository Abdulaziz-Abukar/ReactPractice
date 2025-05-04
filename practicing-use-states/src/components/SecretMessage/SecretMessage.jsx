import React, {useState} from "react";

function SecretMessage(props) {
    
    const [isVisible, setIsVisible] = useState(false)
    
    function renderSecret() {
        setIsVisible(true)
    }

    function destroySecret() {
        setIsVisible(false)
    }

    return (
        <div>
            <h1>Show/Hide Secret Message!</h1>
            <p>{isVisible ? "🕵️ This is a secret!" : ""}</p>
            <button onClick={renderSecret}>{props.visibleButton}</button>
            <button onClick={destroySecret}>{props.invisibleButton}</button>
        </div>
    )
}
export default SecretMessage;