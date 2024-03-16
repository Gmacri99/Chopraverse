
import { useState } from 'react'
import bg3 from '../assets/bg/image 3.png'
import apple from '../assets/logos_apple.svg'
import meta from '../assets/image 18.svg'
import google from '../assets/flat-color-icons_google.svg'

const Login = () => {
    const [text, setText]= useState('Sign in')
    const [text2, setText2]= useState('Login')
    const [text3, setText3]= useState(false)

    const handleChangetext=()=>{
        setText3( text3 ? false: true)
        setText(text!=='Sign in' ?  'Sign in' : 'Sign up' )
        setText2(text2!=='Login' ? 'Login'  : 'Sign up' )
    }

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
                    <button>{text2}</button>
                </form>
                <div className="container">
                    <div className="line"></div>
                    <p className='text'>Or <span>{text2}</span> using</p>
                    <div className="line"></div>
                </div>        
                <div className='buttons-login'>
                    <div><button> <img src={google}alt="" /> {text2} with Google</button></div>
                    <div><button><img src={meta}alt="" /> {text2} with Metamask</button></div>
                    <div>  <button> <img src={apple}alt="" /> {text2} with Apple</button></div>
                </div>
                <p className='have-account'>{text2==='Login' ? "Don't have an account?" : "have an account?" } <span onClick={()=>handleChangetext()}> {text}</span></p>
            </div>
        </div>
    </div>
  )
}

export default Login