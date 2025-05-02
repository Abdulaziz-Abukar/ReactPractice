import React from "react";

const hourChecker = () => {
    const hour = new Date().getHours();

    if (hour < 12) {
        return 'Good Morning!';
    } else if(hour < 18) {
        return 'Good Afternoon!';
    } else {
        return 'Good Evening!'
    }
}

function MiniGreeting() {

    return (
        <p>{hourChecker()}, Abdulaziz. It's currently {new Date().toLocaleTimeString()}</p>
    )
}

export default MiniGreeting;