import avatar from '../assets/Avatar.svg'
import logout from '../assets/logout.svg'
import bookFace from '../assets/Rectangle8.webp'
import background from '../assets/Rectangle75.png'
import Book from '../assets/book.webp'
import wireless from '../assets/wireless.svg'
import card from '../assets/card.png'
import garrapata from '../assets/garrapata.svg'
import plus from '../assets/plus.svg'
import visa from '../assets/visa.svg'
import add from '../assets/Vector.svg'
import trash from '../assets/trash.svg'
import yellow from '../assets/yellow-book.png'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { Footer } from './footer'
import { useEffect, useRef, useState } from 'react'
import { cursos } from '../db/bd'
import { register } from 'swiper/element'

const Account = ({clase}) => {

  const [miVariable2, setMiVariable2] = useState(false);
  const [clase2, setclase2] = useState('');

  const swiperRef = useRef(null);
  

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
            slidesPerView: 1.5,
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
              slidesPerView: 4,
              spaceBetween:30,
              initialSlides:0
            },
          1440:{
            slidesPerView: 4,
            spaceBetween:20,
            initialSlides:0
          },
          1600:{
              slidesPerView: 4.5,
              spaceBetween:30,
              initialSlides:0
            },
            1921:{
              slidesPerView: 5,
              spaceBetween:30,
              initialSlides:0
            },
        }
      };
  
      Object.assign(swiperRef.current, swiperParams);
      swiperRef.current.initialize();



    }, []);

    const [index,setIndex]= useState(0)
    const handlePrev=()=>{
      swiperRef?.current.swiper.slidePrev()
      setIndex(swiperRef.current.swiper.realIndex)
   }
   
   const handleNext=()=>{
      swiperRef?.current.swiper.slideNext()
      setIndex(swiperRef.current.swiper.realIndex)
   }

    useEffect(()=>{
      const elemento = document.querySelector('.div-left-account ul');
      const elemento3 = document.querySelector('.div-left-account');
      const elemento2 = document.querySelector('.right-account');
      const elemento4 = document.querySelector('.div-noticia');
      const elemento5 = document.querySelector('#libros-cursor');
      const elemento6 = document.querySelector('#libros');
      console.log(elemento.childNodes)
      console.log(elemento2.childNodes)
      console.log(elemento4.childNodes[0])
      elemento.childNodes.forEach((element,indice) => {
        element.addEventListener('click',()=>{
          elemento3.classList.add('move-right2')
          elemento2.classList.remove('move-left2')
          console.log(indice)
          
          const elementoNuevo=elemento2.childNodes[0]?.childNodes?.forEach((element,index)=>{
            if(index===indice){
              console.log(index)
              element.classList.remove('move-left')
              console.log(elemento4.childNodes[0])
              if(indice===1) { 
                elemento5.classList.add('move-left')
              elemento6.classList.remove('move-left') } else if(indice===2){
               elemento6.classList.add('move-left') 
               elemento5.classList.remove('move-left') 
              }
            }else{
              element.classList.add('move-left')
            }
          })

            console.log(elementoNuevo)

          
          elemento.childNodes.forEach(innerElemento => {
            innerElemento?.classList.remove('active-opac');
            innerElemento?.querySelectorAll('*').forEach(hijo => {
              hijo.style.opacity = '';
              hijo.style.color = '';
          });
        });

        element.classList.add('active-opac');

        })
      });

    },[])

    useEffect(()=>{


const element = document.querySelector('.account'); // Reemplaza '#elemento' con el selector de tu elemento
const element2 = document.querySelector('.div-left-account'); // Reemplaza '#elemento' con el selector de tu elemento
const element3 = document.querySelector('.right-account'); // Reemplaza '#elemento' con el selector de tu elemento

let touchstartX = 0;
let touchendX = 0;

element.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
}, false);

element.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    const distance = Math.abs(touchendX - touchstartX); // Calcula la distancia absoluta del deslizamiento
    if (distance > 60) { // Verifica si el deslizamiento es mayor a 60px
        if (touchendX > touchstartX) {
            element2.classList.remove('move-right2');
            element3.classList.add('move-left2');
        } else {
            element2.classList.add('move-right2');
            element3.classList.remove('move-left2');
        }
    }
    console.log('no');
}

    },[])

    useEffect(()=>{
     console.log(clase)
      clase ? setclase2('') : setclase2('')
    },[clase])

  return (
    <section id='account' className={`account ${clase2}`} >
      <div className="contenido-account">
        <div className="divs-account">
          <div className="div-left-account ">
                <div className='info-perfil'>
                  <img src={avatar} alt="avatar" />
                  <div className='presentacion-perfil'>
                    <h5>Welcome</h5>
                    <p>John Rumsfeld</p>
                  </div>
                </div>
                <ul>
                  <li className='active-opac'><span ></span> 
                   Account Setting 
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="14" viewBox="0 0 10 14" fill="none">
                      <path  d="M1.34521 13.1425C0.8029 12.6137 0.8029 11.7565 1.34521 11.2277L5.918 6.76927L1.34521 2.31081C0.802899 1.78209 0.802899 0.924768 1.34521 0.396047C1.88753 -0.132674 2.76678 -0.132674 3.3091 0.396047L8.8638 5.81188C9.40608 6.3406 9.40608 7.1979 8.8638 7.72667L3.3091 13.1425C2.76678 13.6712 1.88753 13.6712 1.34521 13.1425Z" fill="white"/>
                    </svg>
                  </li>
                  <li><span></span> My Meditation Journey
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="14" viewBox="0 0 10 14" fill="none">
                      <path  d="M1.34521 13.1425C0.8029 12.6137 0.8029 11.7565 1.34521 11.2277L5.918 6.76927L1.34521 2.31081C0.802899 1.78209 0.802899 0.924768 1.34521 0.396047C1.88753 -0.132674 2.76678 -0.132674 3.3091 0.396047L8.8638 5.81188C9.40608 6.3406 9.40608 7.1979 8.8638 7.72667L3.3091 13.1425C2.76678 13.6712 1.88753 13.6712 1.34521 13.1425Z" fill="white"/>
                    </svg>
                  </li>
                  <li><span></span> My Books
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="14" viewBox="0 0 10 14" fill="none">
                      <path  d="M1.34521 13.1425C0.8029 12.6137 0.8029 11.7565 1.34521 11.2277L5.918 6.76927L1.34521 2.31081C0.802899 1.78209 0.802899 0.924768 1.34521 0.396047C1.88753 -0.132674 2.76678 -0.132674 3.3091 0.396047L8.8638 5.81188C9.40608 6.3406 9.40608 7.1979 8.8638 7.72667L3.3091 13.1425C2.76678 13.6712 1.88753 13.6712 1.34521 13.1425Z" fill="white"/>
                    </svg>
                  </li>
                  <li><span></span> Payment Options
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="14" viewBox="0 0 10 14" fill="none">
                      <path  d="M1.34521 13.1425C0.8029 12.6137 0.8029 11.7565 1.34521 11.2277L5.918 6.76927L1.34521 2.31081C0.802899 1.78209 0.802899 0.924768 1.34521 0.396047C1.88753 -0.132674 2.76678 -0.132674 3.3091 0.396047L8.8638 5.81188C9.40608 6.3406 9.40608 7.1979 8.8638 7.72667L3.3091 13.1425C2.76678 13.6712 1.88753 13.6712 1.34521 13.1425Z" fill="white"/>
                    </svg>
                  </li>
                  <li><span></span> Downloads
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="14" viewBox="0 0 10 14" fill="none">
                      <path  d="M1.34521 13.1425C0.8029 12.6137 0.8029 11.7565 1.34521 11.2277L5.918 6.76927L1.34521 2.31081C0.802899 1.78209 0.802899 0.924768 1.34521 0.396047C1.88753 -0.132674 2.76678 -0.132674 3.3091 0.396047L8.8638 5.81188C9.40608 6.3406 9.40608 7.1979 8.8638 7.72667L3.3091 13.1425C2.76678 13.6712 1.88753 13.6712 1.34521 13.1425Z" fill="white"/>
                    </svg>
                  </li>
                  <li className='close-session'><img src={logout} alt="" />Logout</li>
                </ul>
          </div>
          <div className='right-account move-left2'>
              <div className='padre-divs'>
                <div className='info-edit '>
                  <div className='photo-edit'>
                    <img src={avatar} alt="avatar" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                      <circle cx="13" cy="13" r="13" fill="#A58842"/>
                      <path d="M14.4256 8.96149L7.74967 15.6449C7.71609 15.6786 7.69184 15.7212 7.68029 15.767L6.94032 18.7401C6.91819 18.8296 6.94446 18.9248 7.00971 18.9901C7.05908 19.0396 7.12635 19.0669 7.19516 19.0669C7.21624 19.0669 7.23779 19.0643 7.25877 19.059L10.2288 18.3182C10.2751 18.3066 10.3172 18.2824 10.3508 18.2488L17.0273 11.5659L14.4256 8.96149Z" fill="#F2F3FE"/>
                      <path d="M18.6812 8.05023L17.9381 7.30631C17.4414 6.80911 16.5757 6.8096 16.0796 7.30631L15.1693 8.21757L17.7709 10.8219L18.6812 9.91061C18.9293 9.66235 19.066 9.33191 19.066 8.98047C19.066 8.62903 18.9293 8.29859 18.6812 8.05023Z" fill="#F2F3FE"/>
                    </svg>
                  </div>
                  <form action="">
                    <div className='div-form-1'>
                      <div className='div-input'>
                      <label htmlFor="">First Name</label>
                      <input type="text" />
                      </div>
                      <div className='div-input'>
                      <label htmlFor="">Last Name</label>
                      <input type="text" />
                      </div>
                    </div>
                    <div className='div-form-1'>
                      <div className='div-input'>
                      <label htmlFor="">Phone Number</label>
                      <input type="text" />
                      </div>
                      <div className='div-input'>
                      <label htmlFor="">Address</label>
                      <input type="text" />
                      </div>
                    </div>
                    <div className='div-form-1'>
                      <div className='div-input2'>
                      <label htmlFor="">E-mail</label>
                      <input type="text" />
                      </div>
                    </div>
                    <div className='div-form-1'>
                      <div className='div-input'>
                      <label htmlFor="">Change password</label>
                      <input type="text" />
                      </div>
                      <div className='div-input'>
                      <label htmlFor="">Repeat password</label>
                      <input type="text" />
                      </div>
                    </div>
                    <button>Update info</button>
                  </form>
                </div>
                <div className='meditations meditations-people move-left'>
                  <div className='div-Journey'>
                    <img src={bookFace} alt="bookface" />
                    <div>
                      <h3>The metahuman Journey</h3>
                      <p>Risus urna blandit condimentum platea adipiscing risus donec dignissim. </p>
                      <button>View more 
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M9.70716 0.457031C4.39295 0.457031 0.0849609 4.76502 0.0849609 10.0792C0.0849609 15.3934 4.39295 19.7016 9.70716 19.7016C15.0214 19.7016 19.3295 15.3934 19.3295 10.0792C19.3235 4.76749 15.0191 0.463022 9.70716 0.457031ZM9.70716 18.7393C4.92434 18.7393 1.04713 14.8621 1.04713 10.0792C1.04713 5.29641 4.92434 1.4192 9.70716 1.4192C14.49 1.4192 18.3672 5.29641 18.3672 10.0792C18.3617 14.8598 14.4877 18.7338 9.70716 18.7393Z" fill="white"/>
                          <path d="M8.59007 6.35138C8.38992 6.17642 8.08599 6.19686 7.91104 6.39683C7.73626 6.59698 7.75669 6.90091 7.95667 7.07587L11.3916 10.0813L7.95649 13.0869C7.75634 13.2619 7.73608 13.5658 7.91086 13.7658C8.08581 13.9659 8.38974 13.9863 8.58989 13.8114L12.4387 10.4435C12.5432 10.3523 12.6031 10.2201 12.6031 10.0813C12.6031 9.94246 12.5432 9.81049 12.4387 9.71905L8.59007 6.35138Z" fill="white"/>
                        </svg>
                      </button>
                    </div>
                    <span className='special2'></span>
                  </div>
                  
                  <div className='div-Journey'>
                    <img src={bookFace} alt="bookface" />
                    <div>
                      <h3>The metahuman Journey</h3>
                      <p>Risus urna blandit condimentum platea adipiscing risus donec dignissim. </p>
                      <button>View more 
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M9.70716 0.457031C4.39295 0.457031 0.0849609 4.76502 0.0849609 10.0792C0.0849609 15.3934 4.39295 19.7016 9.70716 19.7016C15.0214 19.7016 19.3295 15.3934 19.3295 10.0792C19.3235 4.76749 15.0191 0.463022 9.70716 0.457031ZM9.70716 18.7393C4.92434 18.7393 1.04713 14.8621 1.04713 10.0792C1.04713 5.29641 4.92434 1.4192 9.70716 1.4192C14.49 1.4192 18.3672 5.29641 18.3672 10.0792C18.3617 14.8598 14.4877 18.7338 9.70716 18.7393Z" fill="white"/>
                          <path d="M8.59007 6.35138C8.38992 6.17642 8.08599 6.19686 7.91104 6.39683C7.73626 6.59698 7.75669 6.90091 7.95667 7.07587L11.3916 10.0813L7.95649 13.0869C7.75634 13.2619 7.73608 13.5658 7.91086 13.7658C8.08581 13.9659 8.38974 13.9863 8.58989 13.8114L12.4387 10.4435C12.5432 10.3523 12.6031 10.2201 12.6031 10.0813C12.6031 9.94246 12.5432 9.81049 12.4387 9.71905L8.59007 6.35138Z" fill="white"/>
                        </svg>
                      </button>
                    </div>
                    <span className='special2'></span>
                  </div>
                  
                  <div className='div-Journey'>
                    <img src={bookFace} alt="bookface" />
                    <div>
                      <h3>The metahuman Journey</h3>
                      <p>Risus urna blandit condimentum platea adipiscing risus donec dignissim. </p>
                      <button>View more 
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M9.70716 0.457031C4.39295 0.457031 0.0849609 4.76502 0.0849609 10.0792C0.0849609 15.3934 4.39295 19.7016 9.70716 19.7016C15.0214 19.7016 19.3295 15.3934 19.3295 10.0792C19.3235 4.76749 15.0191 0.463022 9.70716 0.457031ZM9.70716 18.7393C4.92434 18.7393 1.04713 14.8621 1.04713 10.0792C1.04713 5.29641 4.92434 1.4192 9.70716 1.4192C14.49 1.4192 18.3672 5.29641 18.3672 10.0792C18.3617 14.8598 14.4877 18.7338 9.70716 18.7393Z" fill="white"/>
                          <path d="M8.59007 6.35138C8.38992 6.17642 8.08599 6.19686 7.91104 6.39683C7.73626 6.59698 7.75669 6.90091 7.95667 7.07587L11.3916 10.0813L7.95649 13.0869C7.75634 13.2619 7.73608 13.5658 7.91086 13.7658C8.08581 13.9659 8.38974 13.9863 8.58989 13.8114L12.4387 10.4435C12.5432 10.3523 12.6031 10.2201 12.6031 10.0813C12.6031 9.94246 12.5432 9.81049 12.4387 9.71905L8.59007 6.35138Z" fill="white"/>
                        </svg>
                      </button>
                    </div>
                    <span className='special2'></span>
                  </div>
                </div>
                <div className='meditations div-books move-left'>
                  <div className='div-Journey2'>
                    <div id='jorney'>
                      <div className='books'>
                      <img src={Book} alt="bookface" />
                      <div>
                      <h3>Meta human</h3>
                      <p>Lorem ipsum dolor sit amet consectetur. Arcu sollicitudin quis nulla proin in.</p>
                      <button>Continue reading
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M9.70716 0.457031C4.39295 0.457031 0.0849609 4.76502 0.0849609 10.0792C0.0849609 15.3934 4.39295 19.7016 9.70716 19.7016C15.0214 19.7016 19.3295 15.3934 19.3295 10.0792C19.3235 4.76749 15.0191 0.463022 9.70716 0.457031ZM9.70716 18.7393C4.92434 18.7393 1.04713 14.8621 1.04713 10.0792C1.04713 5.29641 4.92434 1.4192 9.70716 1.4192C14.49 1.4192 18.3672 5.29641 18.3672 10.0792C18.3617 14.8598 14.4877 18.7338 9.70716 18.7393Z" fill="white"/>
                          <path d="M8.59007 6.35138C8.38992 6.17642 8.08599 6.19686 7.91104 6.39683C7.73626 6.59698 7.75669 6.90091 7.95667 7.07587L11.3916 10.0813L7.95649 13.0869C7.75634 13.2619 7.73608 13.5658 7.91086 13.7658C8.08581 13.9659 8.38974 13.9863 8.58989 13.8114L12.4387 10.4435C12.5432 10.3523 12.6031 10.2201 12.6031 10.0813C12.6031 9.94246 12.5432 9.81049 12.4387 9.71905L8.59007 6.35138Z" fill="white"/>
                        </svg>
                      </button>
                      
                      </div>
                      </div>
                      <span className='special'></span>
                      <div className='books'>
                      <img src={Book} alt="bookface" />
                      <div>
                      <h3>Meta human</h3>
                      <p>Lorem ipsum dolor sit amet consectetur. Arcu sollicitudin quis nulla proin in.</p>
                      <button>Continue reading
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M9.70716 0.457031C4.39295 0.457031 0.0849609 4.76502 0.0849609 10.0792C0.0849609 15.3934 4.39295 19.7016 9.70716 19.7016C15.0214 19.7016 19.3295 15.3934 19.3295 10.0792C19.3235 4.76749 15.0191 0.463022 9.70716 0.457031ZM9.70716 18.7393C4.92434 18.7393 1.04713 14.8621 1.04713 10.0792C1.04713 5.29641 4.92434 1.4192 9.70716 1.4192C14.49 1.4192 18.3672 5.29641 18.3672 10.0792C18.3617 14.8598 14.4877 18.7338 9.70716 18.7393Z" fill="white"/>
                          <path d="M8.59007 6.35138C8.38992 6.17642 8.08599 6.19686 7.91104 6.39683C7.73626 6.59698 7.75669 6.90091 7.95667 7.07587L11.3916 10.0813L7.95649 13.0869C7.75634 13.2619 7.73608 13.5658 7.91086 13.7658C8.08581 13.9659 8.38974 13.9863 8.58989 13.8114L12.4387 10.4435C12.5432 10.3523 12.6031 10.2201 12.6031 10.0813C12.6031 9.94246 12.5432 9.81049 12.4387 9.71905L8.59007 6.35138Z" fill="white"/>
                        </svg>
                      </button>
                      </div>
                      </div>
                      <span className='special'></span>
                    </div>
                    <span></span>
                    <div id='jorney'>
                      <div className='books'>
                      <img src={Book} alt="bookface" />
                      <div>
                      <h3>Meta human</h3>
                      <p>Lorem ipsum dolor sit amet consectetur. Arcu sollicitudin quis nulla proin in.</p>
                      <button>Continue reading
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M9.70716 0.457031C4.39295 0.457031 0.0849609 4.76502 0.0849609 10.0792C0.0849609 15.3934 4.39295 19.7016 9.70716 19.7016C15.0214 19.7016 19.3295 15.3934 19.3295 10.0792C19.3235 4.76749 15.0191 0.463022 9.70716 0.457031ZM9.70716 18.7393C4.92434 18.7393 1.04713 14.8621 1.04713 10.0792C1.04713 5.29641 4.92434 1.4192 9.70716 1.4192C14.49 1.4192 18.3672 5.29641 18.3672 10.0792C18.3617 14.8598 14.4877 18.7338 9.70716 18.7393Z" fill="white"/>
                          <path d="M8.59007 6.35138C8.38992 6.17642 8.08599 6.19686 7.91104 6.39683C7.73626 6.59698 7.75669 6.90091 7.95667 7.07587L11.3916 10.0813L7.95649 13.0869C7.75634 13.2619 7.73608 13.5658 7.91086 13.7658C8.08581 13.9659 8.38974 13.9863 8.58989 13.8114L12.4387 10.4435C12.5432 10.3523 12.6031 10.2201 12.6031 10.0813C12.6031 9.94246 12.5432 9.81049 12.4387 9.71905L8.59007 6.35138Z" fill="white"/>
                        </svg>
                      </button>
  
                      </div>
                      </div>
                      <span className='special'></span>
                      <div className='books'>
                      <img src={Book} alt="bookface" />
                      <div>
                      <h3>Meta human</h3>
                      <p>Lorem ipsum dolor sit amet consectetur. Arcu sollicitudin quis nulla proin in.</p>
                      <button>Continue reading
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M9.70716 0.457031C4.39295 0.457031 0.0849609 4.76502 0.0849609 10.0792C0.0849609 15.3934 4.39295 19.7016 9.70716 19.7016C15.0214 19.7016 19.3295 15.3934 19.3295 10.0792C19.3235 4.76749 15.0191 0.463022 9.70716 0.457031ZM9.70716 18.7393C4.92434 18.7393 1.04713 14.8621 1.04713 10.0792C1.04713 5.29641 4.92434 1.4192 9.70716 1.4192C14.49 1.4192 18.3672 5.29641 18.3672 10.0792C18.3617 14.8598 14.4877 18.7338 9.70716 18.7393Z" fill="white"/>
                          <path d="M8.59007 6.35138C8.38992 6.17642 8.08599 6.19686 7.91104 6.39683C7.73626 6.59698 7.75669 6.90091 7.95667 7.07587L11.3916 10.0813L7.95649 13.0869C7.75634 13.2619 7.73608 13.5658 7.91086 13.7658C8.08581 13.9659 8.38974 13.9863 8.58989 13.8114L12.4387 10.4435C12.5432 10.3523 12.6031 10.2201 12.6031 10.0813C12.6031 9.94246 12.5432 9.81049 12.4387 9.71905L8.59007 6.35138Z" fill="white"/>
                        </svg>
                      </button>
                      </div>
                      </div>
                      <span className='special'></span>
                    </div>
                  </div>
                </div>
                <div className='payments move-left'>
                    <div className='tarjeta-pay'>
                      <div className='tarjeta-actual'>
                        <div className='options'>
                          <button className='button-default'> <img src={garrapata} alt="garrapata" />Default</button>
                          <button>Edit</button>
                          <button>Delete</button>
                        </div>
                        <div className='data-tarjeta'>
                          <img src={card} alt="card" />
                          <img src={wireless} alt="wireless" />
                        </div>
                        <div className='tipo-tarjeta'>
                          <p>****    ****    ****    7654</p>
                          <svg xmlns="http://www.w3.org/2000/svg" width="110" height="69" viewBox="0 0 110 69" fill="none">
                            <path d="M69.5975 8.125L40.2373 8.125L40.2373 60.8886L69.5975 60.8886V8.125Z" fill="#FF5F00"/>
                            <path d="M42.0985 34.5039C42.0941 29.4226 43.2457 24.4069 45.4663 19.8365C47.6869 15.2661 50.9183 11.2608 54.9157 8.1238C49.9654 4.23271 44.0203 1.81289 37.7598 1.1409C31.4993 0.4689 25.176 1.57186 19.5128 4.3237C13.8495 7.07555 9.07468 11.3652 5.73413 16.7025C2.39358 22.0397 0.62207 28.2092 0.62207 34.5056C0.62207 40.8021 2.39358 46.9715 5.73413 52.3088C9.07468 57.646 13.8495 61.9357 19.5128 64.6876C25.176 67.4394 31.4993 68.5424 37.7598 67.8704C44.0203 67.1984 49.9654 64.7785 54.9157 60.8875C50.9182 57.7498 47.6868 53.7439 45.4663 49.1729C43.2457 44.602 42.0941 39.5857 42.0985 34.5039Z" fill="#EB001B"/>
                            <path d="M109.208 34.5045C109.208 40.8009 107.437 46.9703 104.097 52.3076C100.756 57.6448 95.9817 61.9346 90.3186 64.6866C84.6555 67.4386 78.3324 68.5418 72.072 67.8701C65.8115 67.1984 59.8664 64.7788 54.916 60.8881C58.9101 57.7477 62.139 53.7415 64.3593 49.1715C66.5795 44.6015 67.7331 39.587 67.7331 34.5062C67.7331 29.4254 66.5795 24.411 64.3593 19.841C62.139 15.271 58.9101 11.2647 54.916 8.12439C59.8658 4.23242 65.8108 1.81178 72.0714 1.13923C78.332 0.466678 84.6556 1.56936 90.319 4.3212C95.9825 7.07303 100.757 11.363 104.098 16.7005C107.438 22.0381 109.209 28.2079 109.208 34.5045ZM106.007 55.2976V54.2191H106.443V54.0142H105.335V54.2359H105.768V55.3143L106.007 55.2976ZM108.16 55.2976V54.0142H107.824L107.431 54.9078L107.041 54.0142H106.705V55.3143H106.944V54.3165L107.31 55.1632H107.562L107.928 54.3132V55.2976H108.16Z" fill="#F79E1B"/>
                          </svg>
                        </div>
                      </div>
                      <div className='añadir-tarjeta'>
                        <img src={plus} alt="" />
                        <h4>Add New Card</h4>
                      </div>
                    </div>
                    <div className='lista-tarjetas si-mobile'>
                        <div className='tarjeta'>
                            <div className='tarjeta-div-1'>
                                <img src={visa} alt="" />
                                <p type="text" id="card-number">Visa ending in 2506</p>
                            </div>
                            <div className='tarjeta-div-2'>
                                <p>09/27</p>
                                <button className='edit' type="button" id="edit-card">Edit</button>
                                <button className='delete' type="button" id="delete-card"><img src={trash} alt="" /></button>
                            </div>
                        </div>
                        <div className='tarjeta'>
                            <div className='tarjeta-div-1'>
                                <img src={visa} alt="" />
                                <p type="text" id="card-number">Visa ending in 1198</p>
                            </div>
                            <div className='tarjeta-div-2'>
                                <p>08/25</p>
                                <button className='edit' type="button" id="edit-card">Edit</button>
                                <button className='delete' type="button" id="delete-card"><img src={trash} alt="" /></button>
                            </div>
                        </div>
                        <div className='add-new'>
                            <button onClick={()=>setMiVariable2(true)}><img src={add} alt="" /> Add new card</button>
                        </div>
                    </div>
                    <div className='historial-pagos'>
                      <h3>My Payments</h3>
                      <div className='pagosRealizados'>
                        <div className='pagosRealizados-div'>
                          <div className='no-mobile'>
                            <p>7 Moons with Eva Longoria</p>
                            <span>|</span>
                            <p>06/03/2024</p>
                          </div>
                          <p className='resta no-mobile'>- $1500</p>
                          <div className='si-mobile'>
                            <p>7 Moons with Eva Longoria</p>
                            <span></span>
                            <p>06/03/2024</p>
                            <span></span>
                            <p className='resta-si'>- $1500</p>
                          </div>
                        </div>
                        <div className='pagosRealizados-div'>
                          <div className='no-mobile'>
                            <p>7 Moons with Eva Longoria</p>
                            <span>|</span>
                            <p>06/03/2024</p>
                          </div>
                          <p className='resta no-mobile'>- $1500</p>
                          <div className='si-mobile'>
                            <p>7 Moons with Eva Longoria</p>
                            <span></span>
                            <p>06/03/2024</p>
                            <span></span>
                            <p className='resta-si'>- $1500</p>
                          </div>
                        </div>
                        <div className='pagosRealizados-div'>
                          <div className='no-mobile'>
                            <p>7 Moons with Eva Longoria</p>
                            <span>|</span>
                            <p>06/03/2024</p>
                          </div>
                          <p className='resta no-mobile'>- $1500</p>
                          <div className='si-mobile'>
                            <p>7 Moons with Eva Longoria</p>
                            <span></span>
                            <p>06/03/2024</p>
                            <span></span>
                            <p className='resta-si'>- $1500</p>
                          </div>
                        </div>
                      </div>
                      <div className='pagination'>
                        <p className='pagination-active'>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p>6</p>
                      </div>
                    </div>
                </div>
                <div className='downloads move-left'>
                  <div className='div-downloads'>
                    <div className='body-downloads'>
                    <img src={background} alt="" />
                    <div className='info-downloads'>
                      <h4>Meta human Journey</h4>
                      <p>03 Caps | 2.5 GB</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 16 24" fill="none">
                      <path d="M1.8855 2.6875L13.6744 11.2613C14.3291 11.7374 14.3291 12.7136 13.6744 13.1897L1.8855 21.7634" stroke="white" stroke-width="3.57674" stroke-linecap="round"/>
                    </svg>
                    </div>
                    <span></span>
                  </div>
                  <div className='div-downloads'>
                    <div className='body-downloads'>
                    <img src={background} alt="" />
                    <div className='info-downloads'>
                      <h4>Meta human Journey</h4>
                      <p>03 Caps | 2.5 GB</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 16 24" fill="none">
                      <path d="M1.8855 2.6875L13.6744 11.2613C14.3291 11.7374 14.3291 12.7136 13.6744 13.1897L1.8855 21.7634" stroke="white" stroke-width="3.57674" stroke-linecap="round"/>
                    </svg>
                    </div>
                    <span></span>
                  </div>
                  <div className='div-downloads'>
                    <div className='body-downloads'>
                    <img src={background} alt="" />
                    <div className='info-downloads'>
                      <h4>Meta human Journey</h4>
                      <p>03 Caps | 2.5 GB</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 16 24" fill="none">
                      <path d="M1.8855 2.6875L13.6744 11.2613C14.3291 11.7374 14.3291 12.7136 13.6744 13.1897L1.8855 21.7634" stroke="white" stroke-width="3.57674" stroke-linecap="round"/>
                    </svg>
                    </div>
                    <span></span>
                  </div>
                  <div className='div-downloads'>
                    <div className='body-downloads'>
                    <img src={background} alt="" />
                    <div className='info-downloads'>
                      <h4>Meta human Journey</h4>
                      <p>03 Caps | 2.5 GB</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 16 24" fill="none">
                      <path d="M1.8855 2.6875L13.6744 11.2613C14.3291 11.7374 14.3291 12.7136 13.6744 13.1897L1.8855 21.7634" stroke="white" stroke-width="3.57674" stroke-linecap="round"/>
                    </svg>
                    </div>
                    <span></span>
                  </div>
                </div>
              </div>
              
          </div>
         
        </div>
        <div className='div-noticia'>
          <div id='libros' className='libro-nuevo move-left'>
            <h3>Upcoming Book</h3>
            <div className='libro-nuevo-div'>
              <img src={yellow} alt="book-yellow" />
              <div>
                <h4>Mindful Moments</h4>
                <p>Lorem ipsum dolor sit amet consectetur. Arcu sollicitudin quis nulla proin in. Sed ipsum molestie nulla augue. Porttitor porttitor in non curabitur amet dignissim amet egestas. At sagittis tempus ultrices faucibus elit. Vulputate urna lorem arcu mauris et in elementum.</p>
              </div>
            </div>
          </div>
          <div id='libros-cursor' className='libro-nuevo'>
            <h3>Coming soon</h3>
            <div className='div-slider-meditations slider-soon'>
    <swiper-container  ref={swiperRef}  init="false">
            {cursos.map((el,index)=>
            <>
              <swiper-slide  key={index}>
                <div  className='info-slide-meditations height-more'>
                    <span className='bg-slide'></span>
                  <img src={el.imageUrl} alt="journey_slide" loading="lazy"/>
                  <div>
                    <h2>{el.title}</h2>
                  </div>
                </div>
              </swiper-slide>
            </>)}
            {cursos.map((el,index)=>
            <>
              <swiper-slide  key={index}>
                <div  className='info-slide-meditations height-more'>
                <span className='bg-slide'></span>
                  <img src={el.imageUrl} alt="journey_slide" loading="lazy"/>
                  <div>
                    <h2>{el.title}</h2>
                  </div>
                </div>
              </swiper-slide>
            </>)}

          </swiper-container>
          <div className='boton-account'>
            <button onClick={() => handlePrev()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
  <path d="M28 56C43.4397 56 56 43.4397 56 28C56 12.5603 43.4397 -1.09806e-06 28 -2.44784e-06C12.5603 -3.79762e-06 3.79762e-06 12.5603 2.44784e-06 28C1.09806e-06 43.4397 12.5603 56 28 56ZM19.3503 26.3503L31.017 14.6837C31.472 14.2287 32.0693 14 32.6667 14C33.264 14 33.8614 14.2287 34.3164 14.6837C35.2287 15.596 35.2287 17.0707 34.3164 17.983L24.2993 28L34.3163 38.017C35.2286 38.9293 35.2286 40.404 34.3163 41.3163C33.404 42.2286 31.9293 42.2286 31.017 41.3163L19.3503 29.6496C18.438 28.7373 18.438 27.2627 19.3503 26.3503Z" fill="#9C9C9C" fill-opacity="0.67"/>
</svg>
            </button>
              <button onClick={() => handleNext()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
              <path d="M28 56C43.4397 56 56 43.4397 56 28C56 12.5603 43.4397 -1.09806e-06 28 -2.44784e-06C12.5603 -3.79762e-06 3.79762e-06 12.5603 2.44784e-06 28C1.09806e-06 43.4397 12.5603 56 28 56ZM19.3503 26.3503L31.017 14.6837C31.472 14.2287 32.0693 14 32.6667 14C33.264 14 33.8614 14.2287 34.3164 14.6837C35.2287 15.596 35.2287 17.0707 34.3164 17.983L24.2993 28L34.3163 38.017C35.2286 38.9293 35.2286 40.404 34.3163 41.3163C33.404 42.2286 31.9293 42.2286 31.017 41.3163L19.3503 29.6496C18.438 28.7373 18.438 27.2627 19.3503 26.3503Z" fill="#9C9C9C" fill-opacity="0.67"/>
              </svg>
            </button>
        </div>
    </div>
          </div>
        </div>
      </div>
      <div className='footer-div'>
        <Footer/>
      </div>
    </section>
  )
}

export default Account