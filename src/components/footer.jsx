import { useEffect } from 'react'
import '../App.css'
import logo from '../assets/logo.svg'

export const Footer= ()=>{

useEffect(()=>{
    
},[])

    return (
    <>
    <footer className="footer">
   
        <div className='content footer-top'>
        <img src={logo} alt="Logo-chopraverse" className='only-mobile' />
        <div className='footer-top-div'>
            <h1>MetaHuman adventures  unleashinh infinite possibilites</h1>
            <p>Join us in exploring a universe where spirituality meets technology, offering you a unique journey toward inner peace and enlightenment</p>
        </div>
        <div className='footer-top-div2'>
            <button>Join us</button>
        </div>
        </div>
        <div className='footer-sub'>
            <div className='content flex-sub'>
                <img src={logo} alt="Logo-chopraverse" />
                <ul>
                <li>Community</li>
                <li>House of enlightenment</li>
                <li>Library</li>
                <li>Privacy policy</li>
                <li>Cookies policy</li>
                </ul>
                <div className='all-rights'>
                <p><span>© 2023 Chopraverse.</span>  All rights reserved. Designed by <a href=""> MDX </a></p>
                </div>
            </div>
        </div>
    </footer>
    </>)
}