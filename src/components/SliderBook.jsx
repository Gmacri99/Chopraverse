import { register } from "swiper/element/bundle";
import { useEffect, useRef, useState } from "react";
import { Book } from "./book";
import  '../styles/swiperStyle.css'
import { libros } from "../db/bd";
import arrow from '../assets/arrow2.svg'

export  const SliderBook=()=> {
    const swiperRef = useRef(null);
    const [index,setIndex]= useState(0)
  
    useEffect(() => {
      register()
  
      const swiperParams = {
        enabled: true,
        speed: 1000,
        centeredSlides: true,
        loop: true,
        slideToClickedSlide: true,
        allowTouchMove: false,
        breakpoints: {
          200: {
            slidesPerView: 2,
          },
          767:{
            slidesPerView: 2.05,
          },
          1024:{
            slidesPerView: 2.15,
          },
          1920:{
            slidesPerView: 2.5,
          }
        }
      };
  
      Object.assign(swiperRef.current, swiperParams);
      swiperRef.current.initialize();



    }, []);



   

     const handlePrev=()=>{
        swiperRef?.current.swiper.slidePrev()
        setIndex(swiperRef.current.swiper.realIndex)
     }
     
     const handleNext=()=>{
        swiperRef?.current.swiper.slideNext()
        setIndex(swiperRef.current.swiper.realIndex)
     }
      
  
    return (
      <div className='sliderBooksHome'>
        <button onClick={() => handlePrev()}>
          <img src={arrow} alt="arrow_button" />
          {`${index+1}/ ${libros.length}`}
        </button>
        <swiper-container  ref={swiperRef} init="false">
          {libros.map((book, index) => (
            <Book book={book} key={`${index}-book`} />
          ))}
        </swiper-container>
        <button onClick={() => handleNext()}>
          <img src={arrow} alt="arrow_button" />
          {`${index+1 < libros.length ? index+2 : index+1-libros.length} / ${libros.length}`}
        </button>
            <button id='btn-store'>Visit our book store
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                            <path d="M9.6705 0.301025C4.76972 0.301025 0.796875 4.27387 0.796875 9.17465C0.796875 14.0754 4.76972 18.0484 9.6705 18.0484C14.5713 18.0484 18.5443 14.0754 18.5443 9.17465C18.5388 4.27615 14.5692 0.30655 9.6705 0.301025ZM9.6705 17.161C5.25977 17.161 1.68419 13.5854 1.68419 9.17465C1.68419 4.76392 5.25977 1.18834 9.6705 1.18834C14.0812 1.18834 17.6568 4.76392 17.6568 9.17465C17.6518 13.5833 14.0791 17.1559 9.6705 17.161Z" fill="white"/>
                            <path d="M8.63149 5.73491C8.44692 5.57357 8.16663 5.59242 8.00529 5.77683C7.84411 5.96141 7.86296 6.2417 8.04737 6.40304L11.2151 9.17466L8.04721 11.9464C7.86263 12.1078 7.84394 12.3881 8.00513 12.5725C8.16647 12.7571 8.44675 12.7759 8.63133 12.6146L12.1808 9.50872C12.2771 9.42455 12.3323 9.30269 12.3323 9.17466C12.3323 9.04662 12.2771 8.92492 12.1808 8.84059L8.63149 5.73491Z" fill="white"/>
                        </svg>
            </button>
      </div>
    );
  }