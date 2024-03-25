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
      </div>
    );
  }