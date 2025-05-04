import React, {useState} from "react";

function InputTracker() {
    
    const [text, setText] = useState("");
    const paragraphStyler = {fontWeight: 'bold'}

    return (
        <div>
            <h1>Input Tracker!</h1>
            <textarea 
            name="paragraph" 
            id="paragraph" 
            cols="40" 
            rows="10" 
            onChange={(e) => setText(e.target.value)}
            >
            </textarea>
            <p style={paragraphStyler}>You typed: {text}</p>
        </div>
    )
}
export default InputTracker;