import React, { useState, useEffect, useRef, useContext } from 'react'
import { register } from "swiper/element/bundle";
import video from '../assets/bgVideo.mp4'
import video2 from '../assets/Video2.mp4'
import audio from '../assets/Group.svg'
import video3 from '../assets/Vector (3).svg'
import vr from '../assets/Vector (5).svg'
import { cursos } from '../db/bd'
import { Link } from 'react-router-dom';
import { UserContext } from '../App';

const Meditation = ({activo}) => {

    const [registers,setRegisters]= useState(false)
    const [videoset,setVideoSet]= useState(true)
    const [texto,setTexto]= useState('The metahuman Journey')
    const [clase,setClase]= useState('circle')
    const [claseArecibir,setClaseArecibir]=useState('move-right')
    const [clase2,setClase2]= useState('')
    const [clipPath, setClipPath] = useState('0%');
    const [clipPath2, setClipPath2] = useState('100%');

    const [activeIndex, setActiveIndex] = useState(0);

    const swiperRef = useRef(null);

  const handleChange = (e,index) => {
    setActiveIndex(index);
    setTexto(e.title)
         setClipPath( clipPath==='0%' ? '100%' : '0%');

  };


    const {setUser} = useContext(UserContext)

    useEffect(()=>{
      setUser(false)
  },[])

    useEffect(() => {
        register()
    
        const swiperParams = {
          enabled: true,
          speed: 1000,
          centeredSlides: false,
          loop: true,
          slideToClickedSlide: false,
          allowTouchMove: true,
          breakpoints: {
            200: {
              slidesPerView: 2.2,
              spaceBetween:15,
            },
            480:{
                slidesPerView: 3,
                spaceBetween:20,
            },
            767:{
                slidesPerView: 3.5,
                spaceBetween:20,
            },
            1024:{
                slidesPerView: 4.5,
                spaceBetween:30,
                initialSlides:0
              },
              1280:{
                slidesPerView: 5.5,
                spaceBetween:20,
                initialSlides:0
              },
            1440:{
              slidesPerView: 6.5,
              spaceBetween:20,
              initialSlides:0
            },
            1600:{
                slidesPerView: 8,
                spaceBetween:30,
                initialSlides:0
              },
          }
        };
    
        Object.assign(swiperRef.current, swiperParams);
        swiperRef.current.initialize();
  
  
  
      }, []);
  
      useEffect(() => {
        setClase(clase==='circle' ? '' : 'circle')
        setClase2(clase2!=='circle' ? 'circle' : '')
  
      }, [texto]);
  
      const elementoRef = useRef(null);
useEffect(() => {
  activo ? setClaseArecibir(claseArecibir==='move-right' ? '' : 'move-right') : null
  console.log(activo)
},[activo])


  return (
    <section className={`meditation-section `}>
    <video
      className={`hero-video`} muted autoPlay playsInline loop>
      <source src={video} type="video/mp4" />
    </video>

    <video className={`hero-video2`} style={{ clipPath: `circle(${clipPath})` }} muted autoPlay playsInline loop>
      <source src={video2} type="video/mp4" />
    </video>
    <span className="video-blur"></span>
    <div className="contenido-hero2">
        <h2>{texto}</h2>
        <p>
        Lorem ipsum dolor sit amet consectetur. Arcu sollicitudin quis nulla proin in. Sed ipsum molestie nulla augue. Porttitor porttitor in non curabitur amet dignissim amet egestas. At sagittis tempus ultrices faucibus elit. Vulputate urna lorem arcu mauris et in elementum.
        </p>
        <ul>
            <li> <img src={audio} alt="audio" /> Audio</li>
            <li><img src={video3} alt="video3" /> Video</li>
            <li><img src={vr} alt="vr" style={{marginBottom:'.1rem'}}/>VR</li>
        </ul>
        {!registers ?<div className="div-home-buttons w-buttons">
            <Link to='/login'>Register to view
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                <path d="M9.6705 0.301025C4.76972 0.301025 0.796875 4.27387 0.796875 9.17465C0.796875 14.0754 4.76972 18.0484 9.6705 18.0484C14.5713 18.0484 18.5443 14.0754 18.5443 9.17465C18.5388 4.27615 14.5692 0.30655 9.6705 0.301025ZM9.6705 17.161C5.25977 17.161 1.68419 13.5854 1.68419 9.17465C1.68419 4.76392 5.25977 1.18834 9.6705 1.18834C14.0812 1.18834 17.6568 4.76392 17.6568 9.17465C17.6518 13.5833 14.0791 17.1559 9.6705 17.161Z" fill="white"/>
                <path d="M8.63149 5.73491C8.44692 5.57357 8.16663 5.59242 8.00529 5.77683C7.84411 5.96141 7.86296 6.2417 8.04737 6.40304L11.2151 9.17466L8.04721 11.9464C7.86263 12.1078 7.84394 12.3881 8.00513 12.5725C8.16647 12.7571 8.44675 12.7759 8.63133 12.6146L12.1808 9.50872C12.2771 9.42455 12.3323 9.30269 12.3323 9.17466C12.3323 9.04662 12.2771 8.92492 12.1808 8.84059L8.63149 5.73491Z" fill="white"/>
            </svg>
            </Link>
        </div> :
        <div className="div-home-buttons">
            <div className='column-buttons-phone'>
                <button>Buy now
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                <path d="M9.6705 0.301025C4.76972 0.301025 0.796875 4.27387 0.796875 9.17465C0.796875 14.0754 4.76972 18.0484 9.6705 18.0484C14.5713 18.0484 18.5443 14.0754 18.5443 9.17465C18.5388 4.27615 14.5692 0.30655 9.6705 0.301025ZM9.6705 17.161C5.25977 17.161 1.68419 13.5854 1.68419 9.17465C1.68419 4.76392 5.25977 1.18834 9.6705 1.18834C14.0812 1.18834 17.6568 4.76392 17.6568 9.17465C17.6518 13.5833 14.0791 17.1559 9.6705 17.161Z" fill="white"/>
                <path d="M8.63149 5.73491C8.44692 5.57357 8.16663 5.59242 8.00529 5.77683C7.84411 5.96141 7.86296 6.2417 8.04737 6.40304L11.2151 9.17466L8.04721 11.9464C7.86263 12.1078 7.84394 12.3881 8.00513 12.5725C8.16647 12.7571 8.44675 12.7759 8.63133 12.6146L12.1808 9.50872C12.2771 9.42455 12.3323 9.30269 12.3323 9.17466C12.3323 9.04662 12.2771 8.92492 12.1808 8.84059L8.63149 5.73491Z" fill="white"/>
            </svg>
                </button>
                <button>Trailer
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                <path d="M9.6705 0.301025C4.76972 0.301025 0.796875 4.27387 0.796875 9.17465C0.796875 14.0754 4.76972 18.0484 9.6705 18.0484C14.5713 18.0484 18.5443 14.0754 18.5443 9.17465C18.5388 4.27615 14.5692 0.30655 9.6705 0.301025ZM9.6705 17.161C5.25977 17.161 1.68419 13.5854 1.68419 9.17465C1.68419 4.76392 5.25977 1.18834 9.6705 1.18834C14.0812 1.18834 17.6568 4.76392 17.6568 9.17465C17.6518 13.5833 14.0791 17.1559 9.6705 17.161Z" fill="white"/>
                <path d="M8.63149 5.73491C8.44692 5.57357 8.16663 5.59242 8.00529 5.77683C7.84411 5.96141 7.86296 6.2417 8.04737 6.40304L11.2151 9.17466L8.04721 11.9464C7.86263 12.1078 7.84394 12.3881 8.00513 12.5725C8.16647 12.7571 8.44675 12.7759 8.63133 12.6146L12.1808 9.50872C12.2771 9.42455 12.3323 9.30269 12.3323 9.17466C12.3323 9.04662 12.2771 8.92492 12.1808 8.84059L8.63149 5.73491Z" fill="white"/>
            </svg>
                </button>
            </div>
            
        </div>}

    </div>
    <div className='div-slider-meditations'>
    <swiper-container ref={swiperRef}  init="false">
            {cursos.map((el,index)=>
            <>
              <swiper-slide  key={index}>
                <div  ref={elementoRef} onClick={()=>handleChange(el,index)} className='info-slide-meditations'>
                    <span className={activeIndex === index ? '' : 'bg-slide'}></span>
                  <img src={el.imageUrl} alt="journey_slide" loading="lazy"/>
                  <div>
                    <h2>{el.title}</h2>
                  </div>
                </div>
              </swiper-slide>
            </>)}
            {cursos.map((el,index)=>
            <>
              <swiper-slide  key={index+5}>
                <div  ref={elementoRef} onClick={()=>handleChange(el,index+5)} className='info-slide-meditations'>
                <span className={activeIndex === index+5 ? '' : 'bg-slide'} ></span>
                  <img src={el.imageUrl} alt="journey_slide" loading="lazy"/>
                  <div>
                    <h2>{el.title}</h2>
                  </div>
                </div>
              </swiper-slide>
            </>)}

          </swiper-container>
    </div>
</section>
  )
}

export default Meditation