import React from 'react'
import "./login.css"

const Login = () => {
    return (
        <div>
            <h1>Login form</h1>
            <div className='username'>
                <input type='email' placeholder='Username' />
            </div>
            <div>
                <input type='password' placeholder='Password' />
            </div>
            <button className='login-button'>Login</button>
        </div>
    )
}

export default Login