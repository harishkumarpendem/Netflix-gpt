import React, { useRef, useState } from 'react'
import { checkValidData } from '../utils/validate'

const Login = () => {
    const [isSignInForm, setISsignInForm] = useState(true)

    const email = useRef(null)
    const password = useRef(null)

    const toggleSignInForm = () => {
        setISsignInForm(!isSignInForm)
    }

    const handleButtonClick = (e) => {
       const valid =  checkValidData(email.current.value, password.current.value)
    }

  return (
    <div className='login-container'>
        <h1>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
        <form onClick={(e) => e.preventDefault()}>
            {!isSignInForm ? <input type="text" placeholder='Enter your Name' className='nameinInput'/> : ''}
            <input ref={email} type="email" placeholder='Enter your Email' className='emalinInput'/>
            <input ref={password}  type="password" placeholder='Enter your Password' className='passwordInput'/>
            <button
                className='signInButton' onClick={handleButtonClick}>
                {isSignInForm ? 'Sign In' : 'Sign Up'}

            </button>
            <p className='paraText' onClick={toggleSignInForm}>{isSignInForm ? 'Are you new to Netflix Sign up here' : 'Already registered Sign in Now'}</p>
        </form>
    </div>
  )
}

export default Login