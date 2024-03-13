
import logo from '../assets/logo.svg'
import cart from '../assets/cart.svg'
const Navbar = () => {
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
                <div className='last-buttons-div'>
                    <button>Login</button>
                    <p>/</p>
                    <button>Sign up</button>
                </div>
                <button className='cart'><img src={cart} alt="cart-chopraverse" /></button>
            </div>
        </div>
    </section>
  )
}

export default Navbar