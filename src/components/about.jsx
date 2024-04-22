import React, { useContext, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import video from '../assets/Chopraverse.mp4'
import { useGSAP } from '@gsap/react'

import { Observer } from 'gsap/all'
import { Footer } from './footer';
import { useWindowSize } from './useWindowSize';
import { UserContext } from '../App';


const About = () => {
 
    gsap.registerPlugin(Observer);
    gsap.set('section', {
    position: 'absolute',
    top: 0,
    left: 0,
  })


  const {setUser,user,users,setUsers} = useContext(UserContext)
  


    useEffect(()=>{
      setUser(false)

  },[])

  const texto=' MetaHuman adventures unleashing infinite possibilities'
  const caracteres = texto.split('');
  const spanRefs = useRef([]);
  const spanRefs2 = useRef([]);
  const spanRefs3 = useRef([]);
  const spanRefs4 = useRef([]);

    gsap.registerPlugin(useGSAP);
    
    const {width,height}=useWindowSize()
    

    useGSAP(()=>{ 
         const timer =setTimeout(()=>{

        let animating = false,
        currentIndex = 0,
        nextIndex = -1;
        const maxIndex = 5;
        const isAnimating = () => animating = true;
        const notAnimating = () => animating = false;

        
        gsap.fromTo('.prueba', {
            x: gsap.utils.random(-200, 200,true), // Random horizontal movement
            y: gsap.utils.random(-200,-200,true),// Random vertical movement
            rotation:gsap.utils.random(-90,90,true), // Random rotation
            z:gsap.utils.random(0,5,true), 
        }, {
            x: 0, // Random horizontal movement
            y: 0,// Random vertical movement
            rotation:0, // Random rotation
            z:0, 
            opacity:1,
            onReverseComplete: notAnimating,
            onComplete: notAnimating,
        
        
        })

        const headerTimeline = gsap.timeline({
            paused: true,
            defaults: {
                duration: 1,
            }
        })

        
        let startTime = 0;
        const delayBetweenAnimations = 0.2; // 0.2 segundos entre animaciones
      
        
        const scrollTimeline = gsap.timeline({
            paused: true,
            defaults: {
                duration: 1,
                ease: 'power2.inOut',
              // Agrega un retraso de 2 segundos
            },
        })
      

    
  .to('.prueba', {

        x: gsap.utils.random(-1000, 1000,true), // Random horizontal movement
        y: gsap.utils.random(-1000,-1000,true),// Random vertical movement
        rotation:gsap.utils.random(-1000,1000,true), // Random rotation
        z:gsap.utils.random(0,10,true), //
        onReverseComplete: notAnimating,
    onComplete: notAnimating,

  })

  .from('#span1', {
    backgroundColor:'white',
    onReverseComplete: notAnimating,
    onComplete: notAnimating,

},"<")

  .fromTo('.prueba33', {
    x: gsap.utils.random(-300, 300,true), // Random horizontal movement
    y: gsap.utils.random(-300,-300,true),// Random vertical movement
    rotation:gsap.utils.random(-90,90,true), // Random rotation
    z:gsap.utils.random(0,5,true), 
}, {
    x: 0, // Random horizontal movement
    y: 0,// Random vertical movement
    rotation:0, // Random rotation
    z:0, 
    opacity:1,
    
    onReverseComplete: notAnimating,
    onComplete: notAnimating,


}, "<")
.to('#span1', {
    backgroundColor:'#191919',
    onReverseComplete: notAnimating,
    onComplete: notAnimating,

},"0")
.to('#span2', {
    backgroundColor:'white',
    onReverseComplete: notAnimating,
    onComplete: notAnimating,

},"0.5")
  .to('#parrafo2', {
        top:'0vh',
        opacity:1,
        onReverseComplete: notAnimating,
        onComplete: notAnimating,
      

  },1)
.to('#parrafo2', {
    top:'60vh',

    opacity:0,
    onReverseComplete: notAnimating,
    onComplete: notAnimating,
})
.to('footer', {
    zIndex:1003,
    onReverseComplete: notAnimating,
},"<")
.to('#span2', {
    backgroundColor:'#191919',
    onReverseComplete: notAnimating,
    onComplete: notAnimating,

},"<")
.to('#span3', {
    backgroundColor:'white',
    onReverseComplete: notAnimating,
    onComplete: notAnimating,

},"<")
.to('.prueba33', {
    x: gsap.utils.random(-300, 300,true), // Random horizontal movement
    y: gsap.utils.random(-300,-300,true),// Random vertical movement
    rotation:gsap.utils.random(-90,90,true), // Random rotation
    z:gsap.utils.random(0,5,true), 
    opacity:0,
    onReverseComplete: notAnimating,
    onComplete: notAnimating,

}, "<")
.fromTo('.prueba44', {
    x: gsap.utils.random(-3000, 3000,true), // Random horizontal movement
    y: gsap.utils.random(-3000,-3000,true),// Random vertical movement
    rotation:gsap.utils.random(-90,90,true), // Random rotation
    z:gsap.utils.random(0,5,true), 
}, {
    x: 0, // Random horizontal movement
    y: 0,// Random vertical movement
    rotation:0, // Random rotation
    z:0, 
    opacity:1,
    onReverseComplete: notAnimating,
    onComplete: notAnimating,
}, "<")
.to('#parrafo3', {
    top: '51.5vh',
    opacity:1,       
     onReverseComplete: notAnimating,
    onComplete: notAnimating,
},"<")
.to('.prueba44', {
    x: gsap.utils.random(-300, 300,true), // Random horizontal movement
    y: gsap.utils.random(-300,-300,true),// Random vertical movement
    rotation:gsap.utils.random(-90,90,true), // Random rotation
    z:gsap.utils.random(0,5,true), 
    opacity:0,

    onReverseComplete: notAnimating,
    onComplete: notAnimating,
})

.to('#span3', {
    backgroundColor:'#191919',
    onReverseComplete: notAnimating,
    onComplete: notAnimating,

},"<")
.to('#span4', {
    backgroundColor:'white',
    onReverseComplete: notAnimating,
    onComplete: notAnimating,

},"<")

.fromTo('.prueba55', {
    x: gsap.utils.random(-3000, 3000,true), // Random horizontal movement
    y: gsap.utils.random(-3000,-3000,true),// Random vertical movement
    rotation:gsap.utils.random(-90,90,true), // Random rotation
    z:gsap.utils.random(0,5,true), 
}, {
    x: 0, // Random horizontal movement
    y: 0,// Random vertical movement
    rotation:0, // Random rotation
    z:0, 
    opacity:1,
    onReverseComplete: notAnimating,
    onComplete: notAnimating,

},"<")
.to('#parrafo3', {
    top:'100vh',
    opacity:0,
    onReverseComplete: notAnimating,
    onComplete: notAnimating,

},"<")
.to('#parrafo4', {
    top: width > 767 ? '51.5vh' : '48vh',
    opacity:1,
    onReverseComplete: notAnimating,
    onComplete: notAnimating,
},"<")
.to('#parrafo4', {
    opacity:0,

    onReverseComplete: notAnimating,
    onComplete: notAnimating,
})
.to('.text-div4', {
    opacity:0,
    onReverseComplete: notAnimating,
},"<")
.to('#miTexto', {
    top:'0vh',
    opacity:1,
    onReverseComplete: notAnimating,
},"<")
.to('.circulos-about', {
    opacity:0,
    onReverseComplete: notAnimating,
},"<")
.fromTo('footer', {
    top:'100vh',
    height:'100vh',
},{
    top:'0vh',
    height:'90vh',
    onReverseComplete: notAnimating,
},"<")



  
        function scrollListener(index, direction) {
            if (index > maxIndex || index < 0) return;
            
            if (direction == -1) {
                headerTimeline.play();
                gsap.to('.navbar > #hero-section', {
                    yPercent: -100,
                    opacity: 0,
                })
            }
            else if (direction == 1) {
                headerTimeline.tweenTo(0);
                gsap.to('.navbar > #hero-section', {
                    yPercent: 0,
                    opacity: 1,
                })
                
            }
            isAnimating()
            scrollTimeline.timeScale(0.75).tweenTo(index);
            currentIndex = index;
        }
  
        const observer = Observer.create({
            target: window,
            type: 'wheel, touch, scroll',
            preventDefault:  false,
            onDown: () => !animating && scrollListener(currentIndex - 1, 1),
            onUp: () => !animating && scrollListener(currentIndex + 1, -1),
            wheelSpeed: -1
        })


    },1000)

    })

    useEffect(()=>{
        const texto = spanRefs.current;
        const arreglo = spanRefs.current.innerText.split('');
        var html = "<p  class='prueba22'>";
        for (var i = 0; i < arreglo.length; i++) {
            if (arreglo[i] !== " ") {
                html += '<span  class="prueba">'+arreglo[i]+'</span>';
            } else {
                html += '</p> <p class="prueba22">';
            }
        }
        texto.innerHTML = html + '</p>';

        console.log(spanRefs.current.childNodes[0].childNodes)
    },[])

    
    useEffect(()=>{
        const texto = spanRefs2.current;
        const arreglo = spanRefs2.current.innerText.split('');
        var html = "<p  class='prueba22'>";
        for (var i = 0; i < arreglo.length; i++) {
            if (arreglo[i] !== " ") {
                html += '<span  class="prueba33">'+arreglo[i]+'</span>';
            } else {
                html += '</p> <p class="prueba22">';
            }
        }
        texto.innerHTML = html + '</p>';

        console.log(spanRefs2.current.childNodes[0].childNodes)
    },[])

    useEffect(()=>{
        const texto = spanRefs3.current;
        const arreglo = spanRefs3.current.innerText.split('');
        var html = "<p  class='prueba22'>";
        for (var i = 0; i < arreglo.length; i++) {
            if (arreglo[i] !== " ") {
                html += '<span  class="prueba44">'+arreglo[i]+'</span>';
            } else {
                html += '</p> <p class="prueba22">';
            }
        }
        texto.innerHTML = html + '</p>';

        console.log(spanRefs2.current.childNodes[0].childNodes)
    },[])

    useEffect(()=>{
        const texto = spanRefs4.current;
        const arreglo = spanRefs4.current.innerText.split('');
        var html = "<p  class='prueba22'>";
        for (var i = 0; i < arreglo.length; i++) {
            if (arreglo[i] !== " ") {
                html += '<span  class="prueba55">'+arreglo[i]+'</span>';
            } else {
                html += '</p> <p class="prueba22">';
            }
        }
        texto.innerHTML = html + '</p>';

        console.log(spanRefs2.current.childNodes[0].childNodes)
    },[])

  return <>
  <main>
        <section id="miTexto" style={{height:'100vh',overflow:'hidden'}}>
            <span className='bg-overlay'></span>
  <video
                  className="hero-video" muted autoPlay playsInline loop>
                  <source src={video} type="video/mp4" />
                </video>
                <div className='padre-padre'>
                <div className='father-text'>
                    <div className='text-div' ref={spanRefs}>
                        MetaHuman adventures unleashing infinite possibilities
  
                    </div>
                    <div className='text-div2' ref={spanRefs2}>
                    Welcome to ChopraVerse
                     </div>
                     <div className='text-div3' ref={spanRefs3}>
                     Immerse in the Wisdom of the Metaverse with ChopraVerse
                     </div>
                     <div className='text-div4' ref={spanRefs4}>
                     A Comprehensive Catalog of Dr. Chopra’s Teachings at Your Fingertips
                     </div>
                </div>
                <p  id='parrafo2' className='parrafo-div2'>
                    An immersive metaverse experience crafted by Dr. Deepak Chopra, a pioneer in integrative medicine and personal transformation. Here, we merge the ancient wisdom of meditation and mindfulness with thecutting-edge technology of the digital world. Our platform is an oasis of peace, learning, and self-discovery in the bustling digital age. Through immersive experiences, interactive content, and a community of like-minded individuals, we strive to elevate your consciousness and bring harmony to your life. Join us in exploring a universe where spirituality meets technology, offering you a unique journey toward inner peace and enlightenment
                </p>
                <p id='parrafo3' className='parrafo-div3'>
                ChopraVerse transcends traditional boundaries, offering a revolutionary platform within the metaverse where mindfulness and technology converge. Imagine a world where each step takes you deeper into the realms of meditation and self-awareness, all within a virtual environment. This digital sanctuary is designed for anyone seeking to connect with their inner self, facilitated by the power of immersive technology. Whether you are exploring through VR headsets, mobile apps, or web interfaces, ChopraVerse provides seamless access to a transformative experience that can be tailored to individual needs and preferences
                </p>
                <p id='parrafo4' className='parrafo-div4'>
                ChopraVerse transcends traditional boundaries, offering a revolutionary platform within the metaverse where mindfulness and technology converge. Imagine a world where each step takes you deeper into the realms of meditation and self-awareness, all within a virtual environment. This digital sanctuary is designed for anyone seeking to connect with their inner self, facilitated by the power of immersive technology. Whether you are exploring through VR headsets, mobile apps, or web interfaces, ChopraVerse provides seamless access to a transformative experience that can be tailored to individual needs and preferences
                </p>
                </div>
        </section>
        <div className='circulos-about'>
            <span id='span1' className='circulo-about circulo-about-activo'></span>
            <span id='span2' className='circulo-about'></span>
            <span id='span3' className='circulo-about'></span>
            <span id='span4' className='circulo-about'></span>
        </div>
        <Footer/>

    </main>
  </>
  ;
};

export default About;