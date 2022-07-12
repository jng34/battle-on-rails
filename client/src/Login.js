import { React, useState } from 'react'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

function Login() {
    const [toggleLogin, setToggleLogin] = useState(true)

  return (
    <div>
        {toggleLogin ? (
            <>
                <LoginForm />
                <br />
                <p>
                    Don't have an account? &nbsp;
                    <button className='btn btn-primary' onClick={()=>setToggleLogin(false)}>Sign Up</button>
                </p>
            </>
        ) : (
            <>
                <SignUpForm />
                <br />
                <p>
                    Have an account already? &nbsp;
                    <button className='btn btn-secondary' onClick={()=>setToggleLogin(true)}>Login</button>
                </p>
            </>
        )}
    </div>
  )
}

export default Login;