
import logo from '../assets/logo.svg'
import cart from '../assets/cart.svg'
import { useEffect } from 'react'
const Navbar = ({openCart,login,register,data,register2}) => {

    useEffect(()=>{
        console.log(data)
    },[data])
  return (
    <section className='navbar'>
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
        </div>
    </section>
  )
}

export default Navbar