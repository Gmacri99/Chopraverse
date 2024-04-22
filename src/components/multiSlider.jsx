import React, { useEffect, useRef } from 'react'
import { libros } from '../db/bd';
import { MultiSliderImagen } from './multiSliderImagen';
import MultiSliderText from './multiSliderText';
import { register } from 'swiper/element';
import  '../styles/sliderPadre.css' 
import arrowWhite from '../assets/line_arrow_white.svg'

const MultiSlider = () => {
    const infosSwiperRef = useRef(null);
    const booksSwiperRef = useRef(null);
  
    useEffect(() => {
      register();
      const swiperParams = {
        enabled: true,
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        allowTouchMove: false,
      };
      Object.assign(infosSwiperRef.current, swiperParams);
      infosSwiperRef.current.initialize();
    }, []);
  
    useEffect(() => {
      register();

      const elementsToStyle = document.querySelectorAll('.swiper');
      console.log(elementsToStyle)
      
      for (const element of elementsToStyle) {
        element.style.overflow = 'visible'; // Example: Change text color to re
      }

      const swiperParams = {
        enabled: true,
        speed: 1500,
        loop: true,
        allowTouchMove: false,
        breakpoints: {
            180: {
              slidesPerView: 1.35,
              spaceBetween: 5,
              centeredSlides: false,
              allowTouchMove: true,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 5,
              allowTouchMove: false,
            },
        }
      };
      Object.assign(booksSwiperRef.current, swiperParams);
      booksSwiperRef.current.initialize();
    }, []);
  
    return (
      <div className='multiSliderBooksLibrary'>
        <div className='infosSliderWrapper'>
          <swiper-container ref={infosSwiperRef} init="false">
            {libros.map((book, index) => (
              <MultiSliderText book={book} key={`${index}-book`} />
            ))}
          </swiper-container>
        </div>
        <div className='booksSliderWrapper'>
          <button className='btn-swiper-multi'
            onClick={() => {
              booksSwiperRef.current.swiper.slidePrev();
              infosSwiperRef.current.swiper.slidePrev();
            }}
          >
            <img src={arrowWhite} alt="arrow_button" />
          </button>
          <swiper-container ref={booksSwiperRef} init="false">
            {libros.map((book, index) => (
              <MultiSliderImagen book={book} key={`${index}-book`} />
            ))}
          </swiper-container>
          <button className='btn-swiper-multi'
            onClick={() => {
              booksSwiperRef.current.swiper.slideNext();
              infosSwiperRef.current.swiper.slideNext();
            }}
          >
            <img src={arrowWhite} alt="arrow_button" />
          </button>
        </div>
      </div>
    );
}

export default MultiSlider