import { useEffect, useState } from 'react'
import './App.css'
import Account from './components/account'
import Checkout from './components/checkout'
import { Footer } from './components/footer'
import Login from './components/login'
import Navbar from './components/navbar'
import Cart from './components/cart'
import Home from './components/home'

function App() {

 /*
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    if (renderCount < 2) {
      setRenderCount(prevCount => prevCount + 1);
    }
  }, [renderCount]);
*/
  
  const [claseRecibida,setClaseRecibida]= useState('move-left')
  const [claseRecibida2,setClaseRecibida2]= useState('')
  const [claseRecibida3,setClaseRecibida3]= useState(false)
  const [claseRecibida4,setClaseRecibida4]= useState(false)
  const [textoRecibido,setTextoRecibido]= useState('Sign in')
  const [textoRecibido2,setTextoRecibido2]= useState(true)
  const [textoRecibido3,setTextoRecibido3]= useState(false)
  const [textoRecibido4,setTextoRecibido4]= useState(false)
  const [datos,setDatos]= useState('')
  
  const openCart=()=>{
    setClaseRecibida('')
  }
  
  const handleClose=() => {
    setClaseRecibida('move-left')
}

const login=()=>{
  setTextoRecibido2(true)
}

const register=() => {
  setTextoRecibido2(false)
}

const register2=() => {
  setTextoRecibido4(true)
}

useEffect(()=>{
  console.log(datos)
},[setDatos])

useEffect(()=>{
  console.log(textoRecibido3)
  textoRecibido3 ? setClaseRecibida2('desaparece') : null
},[textoRecibido3])

useEffect(()=>{
  textoRecibido2 ? setTextoRecibido('Sign in') : setTextoRecibido('Sign up')
},[textoRecibido2])

useEffect(()=>{
  console.log(textoRecibido4)
  textoRecibido4 ? setClaseRecibida4(true) && setTextoRecibido3(false) : setClaseRecibida4(false) && setTextoRecibido3(true)
},[textoRecibido4])

  return (
    <>
      
      <Navbar openCart={openCart} login={login} register={register} register2={register2}  data={datos}/>
      <Cart clase={claseRecibida} handleClose={handleClose} /> 
      {/*<Login renderizar={textoRecibido} clase={claseRecibida2} datos={setDatos} setTextoRecibido3={setTextoRecibido3}/>*/}
      {/*<Checkout/>*/}
      {<Home clase={textoRecibido3}/>}
      {/*<Account clase={claseRecibida4}/>*/}
    
    </>
  )
}

export default App
