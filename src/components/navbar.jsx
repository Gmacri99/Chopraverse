
import logo from '../assets/logo.svg'
import cart from '../assets/cart.svg'
import menu2 from '../assets/menu.svg'
import close from '../assets/closeMenu.svg'
import { useEffect } from 'react'
const Navbar = ({openCart,login,register,data,register2}) => {




    useEffect(()=>{
        console.log(data)
    },[data])
    
    const openDesplegable = ()=>{
        const abrir = document.getElementById('abrir')
        const cerrar = document.getElementById('cerrar')
        const menu = document.getElementById('menu')
        cerrar.classList.add('cart-menu-active')
        abrir.classList.remove('cart-menu-active')
        menu.classList.remove('opacity-0')
    }

    const closeDesplegable = ()=>{
        const abrir = document.getElementById('abrir')
        const cerrar = document.getElementById('cerrar')
        const menu = document.getElementById('menu')
        abrir.classList.add('cart-menu-active')
        cerrar.classList.remove('cart-menu-active')
        menu.classList.add('opacity-0')
    }

  return (
    <section className='navbar'>
        <div className='navbar-divs'>
            <div className='logo-header'><img src={logo} alt="Logo-chopraverse" /></div>
            <div className='navbar-div'>
        
            <div className='first-buttons'>
                <div >
                    <button>Library</button>
                    <button>Meditation Journey</button>
                    <button>About us</button>
                </div>
            </div>
            
            <div className='last-buttons'>
                <div className={`${data?.length === 0 ? '' : 'move-left'} last-buttons-div` }>
                    <button  onClick={login}>Login</button>
                    <p>/</p>
                    <button onClick={register}>Sign up</button> 
                </div>
                <div className={`${data?.length !== 0 ? 'opac-1' : ''} last-buttons-div opac` }> 
                    <button onClick={register2} >Hi, {data}!</button>
                </div>
                <button onClick={openCart} className='cart'><img src={cart} alt="cart-chopraverse" /></button>
            </div>
            <div className='menu-only-Mobile'>
                <button onClick={openCart} className='cart'><img src={cart} alt="cart-chopraverse" /></button>
                <div>
                    <button id='abrir' onClick={()=>openDesplegable()} className='cart cart-menu cart-menu-active'><img src={menu2} alt="cart-chopraverse" /></button>
                    <button id='cerrar' onClick={()=>closeDesplegable()} className='cart cart-menu '><img src={close} alt="cart-chopraverse" /></button>
                </div>
            </div>
            </div>
        <div id='menu' className='menu-desplegable opacity-0'>
            <ul>
                <li>Library 
                    <svg className='svg-opaco2' width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path  d="M0.40673 13.1425C-0.135577 12.6137 -0.135577 11.7565 0.40673 11.2277L4.97952 6.76927L0.40673 2.31081C-0.135577 1.78209 -0.135577 0.924768 0.406729 0.396047C0.94905 -0.132674 1.82831 -0.132674 2.37063 0.396047L7.92533 5.81188C8.46761 6.3406 8.46761 7.1979 7.92533 7.72667L2.37063 13.1425C1.82831 13.6712 0.949051 13.6712 0.40673 13.1425Z" fill="#7C7B7B"/>
                    </svg>
                    <svg className='svg-opaco' width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path  d="M0.40673 13.1425C-0.135577 12.6137 -0.135577 11.7565 0.40673 11.2277L4.97952 6.76927L0.40673 2.31081C-0.135577 1.78209 -0.135577 0.924768 0.406729 0.396047C0.94905 -0.132674 1.82831 -0.132674 2.37063 0.396047L7.92533 5.81188C8.46761 6.3406 8.46761 7.1979 7.92533 7.72667L2.37063 13.1425C1.82831 13.6712 0.949051 13.6712 0.40673 13.1425Z" fill="white"/>
                    </svg>

                    </li>
                <li>Meditation Journey
                <svg className='svg-opaco2' width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path  d="M0.40673 13.1425C-0.135577 12.6137 -0.135577 11.7565 0.40673 11.2277L4.97952 6.76927L0.40673 2.31081C-0.135577 1.78209 -0.135577 0.924768 0.406729 0.396047C0.94905 -0.132674 1.82831 -0.132674 2.37063 0.396047L7.92533 5.81188C8.46761 6.3406 8.46761 7.1979 7.92533 7.72667L2.37063 13.1425C1.82831 13.6712 0.949051 13.6712 0.40673 13.1425Z" fill="#7C7B7B"/>
                    </svg>
                    <svg className='svg-opaco' width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path  d="M0.40673 13.1425C-0.135577 12.6137 -0.135577 11.7565 0.40673 11.2277L4.97952 6.76927L0.40673 2.31081C-0.135577 1.78209 -0.135577 0.924768 0.406729 0.396047C0.94905 -0.132674 1.82831 -0.132674 2.37063 0.396047L7.92533 5.81188C8.46761 6.3406 8.46761 7.1979 7.92533 7.72667L2.37063 13.1425C1.82831 13.6712 0.949051 13.6712 0.40673 13.1425Z" fill="white"/>
                    </svg>
                </li>
                <li>About us
                <svg className='svg-opaco2' width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path  d="M0.40673 13.1425C-0.135577 12.6137 -0.135577 11.7565 0.40673 11.2277L4.97952 6.76927L0.40673 2.31081C-0.135577 1.78209 -0.135577 0.924768 0.406729 0.396047C0.94905 -0.132674 1.82831 -0.132674 2.37063 0.396047L7.92533 5.81188C8.46761 6.3406 8.46761 7.1979 7.92533 7.72667L2.37063 13.1425C1.82831 13.6712 0.949051 13.6712 0.40673 13.1425Z" fill="#7C7B7B"/>
                    </svg>
                    <svg className='svg-opaco' width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path  d="M0.40673 13.1425C-0.135577 12.6137 -0.135577 11.7565 0.40673 11.2277L4.97952 6.76927L0.40673 2.31081C-0.135577 1.78209 -0.135577 0.924768 0.406729 0.396047C0.94905 -0.132674 1.82831 -0.132674 2.37063 0.396047L7.92533 5.81188C8.46761 6.3406 8.46761 7.1979 7.92533 7.72667L2.37063 13.1425C1.82831 13.6712 0.949051 13.6712 0.40673 13.1425Z" fill="white"/>
                    </svg>
                </li>
                <li>Login 
                <svg className='svg-opaco2' width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path  d="M0.40673 13.1425C-0.135577 12.6137 -0.135577 11.7565 0.40673 11.2277L4.97952 6.76927L0.40673 2.31081C-0.135577 1.78209 -0.135577 0.924768 0.406729 0.396047C0.94905 -0.132674 1.82831 -0.132674 2.37063 0.396047L7.92533 5.81188C8.46761 6.3406 8.46761 7.1979 7.92533 7.72667L2.37063 13.1425C1.82831 13.6712 0.949051 13.6712 0.40673 13.1425Z" fill="#7C7B7B"/>
                    </svg>
                    <svg className='svg-opaco' width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path  d="M0.40673 13.1425C-0.135577 12.6137 -0.135577 11.7565 0.40673 11.2277L4.97952 6.76927L0.40673 2.31081C-0.135577 1.78209 -0.135577 0.924768 0.406729 0.396047C0.94905 -0.132674 1.82831 -0.132674 2.37063 0.396047L7.92533 5.81188C8.46761 6.3406 8.46761 7.1979 7.92533 7.72667L2.37063 13.1425C1.82831 13.6712 0.949051 13.6712 0.40673 13.1425Z" fill="white"/>
                    </svg>
                </li>
            </ul>
        </div>
        </div>
    </section>
  )
}

export default Navbar