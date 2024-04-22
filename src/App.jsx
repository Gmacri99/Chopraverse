import { createContext,useContext, useEffect, useState } from 'react'
import './App.css'
import Account from './components/account'
import Checkout from './components/checkout'
import { Footer } from './components/footer'
import Login from './components/login'
import Navbar from './components/navbar'
import Navbar2 from './components/navbar2'
import Cart from './components/cart'
import Home from './components/home'
import Meditation from './components/Meditation'
import Library from './components/library'
import SingleBook from './components/singleBook'
import About from './components/about'
import MeditationSingle from './components/meditationSingle'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Observer } from 'gsap/all'
import { BrowserRouter, Routes, Route } from 'react-router-dom';




export const UserContext = createContext();


function App() {

 
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    if (renderCount < 2) {
      setRenderCount(prevCount => prevCount + 1);
    }
  }, [renderCount]);


  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(true);
  
  const [claseRecibida,setClaseRecibida]= useState('move-left')
  const [claseRecibida2,setClaseRecibida2]= useState('')
  const [claseRecibida3,setClaseRecibida3]= useState(false)
  const [claseRecibida4,setClaseRecibida4]= useState(false)
  const [claseRecibida5,setClaseRecibida5]= useState(true)
  const [textoRecibido,setTextoRecibido]= useState('Sign in')
  const [textoRecibido2,setTextoRecibido2]= useState(true)
  const [textoRecibido3,setTextoRecibido3]= useState(false)
  const [textoRecibido4,setTextoRecibido4]= useState(false)
  const [textoRecibido5,setTextoRecibido5]= useState(false)
  const [datos,setDatos]= useState('')
  const [activo,setActivo]= useState(false)
  
  const openCart=()=>{
    setClaseRecibida('')
  }

  const openMeditation=()=>{
    setTextoRecibido5(true)

    console.log('holaa')
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
  console.log('cambio')
  if(textoRecibido5){
    setClaseRecibida5(true)
    setTextoRecibido3(false)
  } 
},[textoRecibido5])

useEffect(()=>{
  console.log(textoRecibido4)
  textoRecibido4 ? setClaseRecibida4(true) && setTextoRecibido3(false) : setClaseRecibida4(false) && setTextoRecibido3(true)
},[textoRecibido4])

  return (
    <>
    <UserContext.Provider value={{ user, setUser, users,setUsers }}>
      <BrowserRouter>
      {user ? <Navbar2 openCart={openCart} login={login} register={register} register2={register2} meditation={()=>openMeditation()}  data={datos}/> : <Navbar openCart={openCart} meditation={()=>openMeditation()} login={login} register={register} register2={register2}  data={datos}/>}
      <Cart clase={claseRecibida} handleClose={handleClose} /> 
      <Routes>
        <Route path="/" element={<Home clase={true}/>} />
        <Route path="/about" element={<About key="about"/>} />
        <Route path="/login" element={<Login renderizar={textoRecibido} clase={claseRecibida2} datos={setDatos} setTextoRecibido3={setTextoRecibido3}/>} />
        <Route path="/library" element={<Library key="library"/>} />
        <Route path="/singleBook" element={<SingleBook />} />
        <Route path="/meditation" element={<Meditation activo={claseRecibida5}/>} />
        <Route path="/meditationSingle" element={<MeditationSingle texto={'The Metahuman Journey'}/>} />
        <Route path="/account" element={<Account clase={claseRecibida4}/>} />
        <Route path="/checkout" element={<Checkout/>} />
        
      </Routes>
      
   {/*<Checkout/>*/}

      {/*<Account clase={claseRecibida4}/>*/}


      </BrowserRouter>
      </UserContext.Provider>
    </>
  )
}

export default App
