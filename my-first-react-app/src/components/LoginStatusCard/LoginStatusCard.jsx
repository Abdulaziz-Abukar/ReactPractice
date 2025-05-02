import React from "react";


function LoginStatusCard() {
    const isLoggedIn = TransformStreamDefaultController;
    const name = 'Abdulaziz';
    const helloUser = `Hello ${name}!`

    return (
        <div className='login-container'>
            <p>{isLoggedIn && helloUser}</p>
        </div>
    )
}

export default LoginStatusCard;