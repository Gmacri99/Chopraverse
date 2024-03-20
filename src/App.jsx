import { useEffect, useState } from 'react'
import './App.css'
import Account from './components/account'
import Checkout from './components/checkout'
import { Footer } from './components/footer'
import Login from './components/login'
import Navbar from './components/navbar'
import Cart from './components/cart'
import Home from './components/home'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Observer } from 'gsap/all'
import { register } from 'swiper/element/bundle';
function App() {

  gsap.registerPlugin(Observer);
  gsap.set('section', {
  position: 'absolute',
  top: 0,
  left: 0,
})
  gsap.registerPlugin(useGSAP);

  useGSAP(()=>{

      let animating = false,
      currentIndex = 0,
      nextIndex = -1;
      const maxIndex = 5;
      const isAnimating = () => animating = true;
      const notAnimating = () => animating = false;
  
      const headerTimeline = gsap.timeline({
          paused: true,
          defaults: {
              duration: 1,
              // ease: 'sine.in',
          }
      })
          .to('.navbar', {
              yPercent: -100,
          })

      const scrollTimeline = gsap.timeline({
          paused: true,
          defaults: {
              duration: 1,
              ease: 'power2.inOut',
          },
      })
      .to("#hero-section", {
          yPercent: -100,
          onReverseComplete: notAnimating,
      })
      .from('#welcome-section', {
          yPercent: 100,
      
      }, "<")
      .from('.welcome-before > p', {
          y: '50vh',
      }, "<")
      .from('.welcome-wrapper', {
          y: '150vh',
          onComplete: notAnimating,
      }, "<")
      // INDEX: 2
  .to('.welcome-wrapper', {
      clipPath: 'circle(100%)',
      onReverseComplete: notAnimating,
  })
  .to('.welcome-before', {
      opacity: 0,
  }, "<")
  .from('.welcome-text', {
      y: '50vh',
      opacity: 1,
      onComplete: notAnimating,
  }, "<")
      // INDEX: 3
      .to('.welcome-wrapper', {
           xPercent: -100,
          clipPath: 'circle(50%)',
          onReverseComplete: notAnimating,
          duration: 0.75,
      })
      .to('.welcome-wrapper', {
          xPercent: -100,
          duration: 0.75,
      }, '<0.25')
      .from('#book-slider-section', {
          xPercent: 200,
          duration: 0.75,
          onComplete: notAnimating,
      }, "<")
      // INDEX: 4
  .from('#meditation-section', {
      yPercent: 100,
  })
  .fromTo('.meditation-wrapper', {
      clipPath: 'circle(10%)',
  }, {
      clipPath: 'circle(100%)',
      onReverseComplete: notAnimating,
      onComplete: notAnimating,
  }, "<")
  .from('.meditation-slider-wrapper', {
      opacity: 0,
      scale: 0.75,
      onReverseComplete: notAnimating,
  })
  .to('#book-slider-section', {
      yPercent: -100,
      opacity: 0,
  }, "<")
  .to('.meditation-text', {
      scale: 10,
  }, "<")
  .to('.meditation-wrapper', {
      clipPath: 'circle(40%)',
      y: '-100vh',
  }, "<")
  .to('.meditation-wrapper img', {
      y: '100vh',
      scale: 1.1,
  }, "<")
  .to('.meditation-text', {
      opacity: 0,
      duration: 0.5,
  }, "<25%").from('.journey-slider-buttons', {
    opacity: 0,
    duration: 0.5,
    onComplete: notAnimating,
}, "<50%")
// // INDEX: 6
.to('.meditation-wrapper', {
    y: '-200vh',
    onReverseComplete: notAnimating,
})
.to('.meditation-wrapper > img', {
    y: '200vh',
}, "<")
.to('.journey-slider', {
    y: '-150vh',
    // onStart: () => {
    //     from = from + 1,
    //     gsap.to(gsap.utils.toArray('.journey-slide > img'), {
    //         y: '-35vh',
    //         duration: 0.5,
    //         ease: 'none',
    //         stagger: 0.1,
    //         from: from,
    //     }, "<")
    // },
}, '<')
.to('.journey-slider-buttons', {
    opacity: 0,
    duration: 0.5
}, "<")
.from('#testimonials-section', {
    yPercent: 200,
    onComplete: notAnimating
}, "<")
// INDEX: 7
.from('footer', {
    yPercent: 100,
    onReverseComplete: notAnimating,
})
.to('#testimonials-section', {
    yPercent: -75,
    onComplete: notAnimating,
}, "<")


      function scrollListener(index, direction) {
          if (index > maxIndex || index < 0) return;
          
          if (direction == -1) {
              headerTimeline.play();
              gsap.to('.navbar > #hero-section', {
                  yPercent: -100,
                  opacity: 0,
                  duration: 1,
              })
          }
          else if (direction == 1) {
              headerTimeline.tweenTo(0);
              gsap.to('.navbar > #hero-section', {
                  yPercent: 0,
                  opacity: 1,
                  duration: 2,
              })
          }
          isAnimating()
          scrollTimeline.timeScale(0.75).tweenTo(index);
          currentIndex = index;
      }

      const observer = Observer.create({
          target: window,
          type: 'wheel, touch, scroll',
          preventDefault: true,
          onDown: () => !animating && scrollListener(currentIndex - 1, 1),
          onUp: () => !animating && scrollListener(currentIndex + 1, -1),
          wheelSpeed: -1
      })
      
  })

  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    if (renderCount < 2) {
      setRenderCount(prevCount => prevCount + 1);
    }
  }, [renderCount]);

  
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
