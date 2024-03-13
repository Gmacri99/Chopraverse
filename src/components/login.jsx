
import { useState } from 'react'
import bg3 from '../assets/bg/image 3.png'

const Login = () => {
    const [text, setText]= useState('Sign in')
  return (
    <div className='login'>
        <img className="bg-login" src={bg3} alt="" />
        
        <div className='div-form'>
        <div className='opacity-login'></div>
            <div className='div-form-content'>
                <h2>{text} to Chopraverse</h2>
                <form className='formulario-chopraverse' action="">
                    <div className='input'>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name='email' />
                    </div>
                    <div className='input'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login