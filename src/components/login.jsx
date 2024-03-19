
import { useEffect, useState } from 'react'
import bg3 from '../assets/bg/image 3.png'
import apple from '../assets/logos_apple.svg'
import meta from '../assets/image 18.svg'
import google from '../assets/flat-color-icons_google.svg'

const Login = ({clase,renderizar,datos,setTextoRecibido3}) => {
    const [text, setText]= useState(renderizar)
    const [text2, setText2]= useState(renderizar=='Sign in' ?  'Login' : 'Sign up')
    const [text3, setText3]= useState(false)
    const [text4, setText4]= useState(false)
    const [datosUsuario, setDatosUsuario]= useState({
        email: '',
        password: ''
    })

    const handleChangetext=()=>{
        setText3( text3 ? false: true)
        setText(text!=='Sign in' ?  'Sign in' : 'Sign up' )
        setText2(text2!=='Login' ? 'Login'  : 'Sign up' )
    }

    const handleChange=(e)=>{
        console.log(e.target.name)
        const value=e.target.value
        const target=e.target.name
        setDatosUsuario({...datosUsuario,[target]:value})
    }

    useEffect(()=>{
        setText(renderizar)
        setText2(renderizar=='Sign in' ?  'Login' : 'Sign up')
    },[renderizar])

    useEffect(()=>{
        datos(datosUsuario.email)
        console.log(datos)
    },[text4])

    const handleSubmit=(e)=>{
        e.preventDefault()
        setText4(true)
        console.log(datosUsuario)
        setTextoRecibido3(true)
    }   

  return (
    <div className={`login ${clase}`}>
        <img className="bg-login" src={bg3} alt="" />
        
        <div className='div-form'>
        <div className='opacity-login'></div>
            <div className='div-form-content'>
                <h2>{text} to Chopraverse</h2>
                <div className='formulario-chopraverse' >
                    <div className='input'>
                        <label htmlFor="email">E-mail</label>
                        <input value={datosUsuario.email} onChange={(e)=>handleChange(e)} type="email" name='email' />
                    </div>
                    <div className='input'>
                        <label htmlFor="password">Password</label>
                        <input value={datosUsuario.password} onChange={(e)=>handleChange(e)} type="password" name='password' />
                    </div>
                    <button onClick={(e)=>handleSubmit(e)}>{text2}</button>
                </div>
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