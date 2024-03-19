import video from '../assets/bgVideo.mp4'
import pause from '../assets/pause.svg'
import bg1 from '../assets/bg/fondo1.png'
import bg4 from '../assets/bg/bg4.jpeg'
import logo from '../assets/logo.svg'
import arrow from '../assets/black_arrow.svg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Observer } from 'gsap/all'
import { SliderBook } from './SliderBook'
import { register } from 'swiper/element/bundle';
import { useEffect, useState } from 'react'

const Home = ({clase}) => {

    const [claseArecibir,setClaseArecibir]=useState('move-right')

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
            // xPercent: -100,
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
        y: '-90vh',
    }, "<")
    .to('.meditation-wrapper img', {
        y: '90vh',
        scale: 1.1,
    }, "<")
    .to('.meditation-text', {
        opacity: 0,
        duration: 0.5,
    }, "<25%")
    .from('.journey-slider-buttons', {
        opacity: 0,
        duration: 0.5,
        onComplete: notAnimating,
    }, "<50%")

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


register();

useEffect(()=>{const swiperEl = document.querySelector('#journey');


// swiper parameters
const swiperParams = {
    enabled: true,
    slidesPerView: 4,
    speed: 1500,
    breakpoints: {
        0: {
            spaceBetween: 0,
            slidesPerView: 1.25,
            centeredSlides: true,
            allowTouchMove: true,
        },
        768: {
            spaceBetween: 50,
            slidesPerView: 3,
            allowTouchMove: true,
        },
        1080: {
            spaceBetween: 80,
            slidesPerView: 4,
            allowTouchMove: true,
        },
        1360: {
            spaceBetween: 100,
            slidesPerView: 4,
            allowTouchMove: false,
        },
        1920: {
            spaceBetween: 125,
            slidesPerView: 4,
            allowTouchMove: true,
        },

    },
    loop: true,
};


console.log(swiperEl)
console.log(swiperParams)

Object.assign(swiperEl, swiperParams);
swiperEl.initialize();

const journeyButtons = gsap.utils.toArray('.journey-button');

gsap.set(journeyButtons[1], {
    scale: 1.2
})
let buttonsChange = gsap.timeline({
    paused: true,
})
    .to(journeyButtons[0], {
        scale: 1.2,
    })
    .to(journeyButtons[1], {
        scale: 1,
    }, "<")

journeyButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (swiperEl.swiper.animating) return;
        switch (index) {
            case 0:
                swiperEl.swiper.slidePrev();
                buttonsChange.tweenTo(0)
                break;
            case 1:
                swiperEl.swiper.slideNext();
                buttonsChange.tweenTo(buttonsChange.totalDuration())
                break;
            default:
                swiperEl.swiper.slideNext();
                buttonsChange.reverse(0)
                break;
        }
    })
})
}
,[])




useEffect(() => {
    clase ? setClaseArecibir(claseArecibir==='move-right' ? '' : 'move-right') : null
    console.log(clase)
},[clase])




  return (
    <>
        <main className={`home ${claseArecibir}`}>
            <section id="hero-section">
                <video
                  className="hero-video" muted autoPlay playsInline loop>
                  <source src={video} type="video/mp4" />
                </video>
                <span className="video-blur"></span>
                <div className="contenido-hero">
                    <h2>CHOPRAVERSE</h2>
                    <p>
                      An immersive metaverse experience crafted by Dr. Deepak Chopra, a 
                      pioneer in integrative medicine and personal transformation
                    </p>
                    <div className="div-home-buttons">
                        <div className='column-buttons-phone'>
                            <button>Buy book
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                            <path d="M9.6705 0.301025C4.76972 0.301025 0.796875 4.27387 0.796875 9.17465C0.796875 14.0754 4.76972 18.0484 9.6705 18.0484C14.5713 18.0484 18.5443 14.0754 18.5443 9.17465C18.5388 4.27615 14.5692 0.30655 9.6705 0.301025ZM9.6705 17.161C5.25977 17.161 1.68419 13.5854 1.68419 9.17465C1.68419 4.76392 5.25977 1.18834 9.6705 1.18834C14.0812 1.18834 17.6568 4.76392 17.6568 9.17465C17.6518 13.5833 14.0791 17.1559 9.6705 17.161Z" fill="white"/>
                            <path d="M8.63149 5.73491C8.44692 5.57357 8.16663 5.59242 8.00529 5.77683C7.84411 5.96141 7.86296 6.2417 8.04737 6.40304L11.2151 9.17466L8.04721 11.9464C7.86263 12.1078 7.84394 12.3881 8.00513 12.5725C8.16647 12.7571 8.44675 12.7759 8.63133 12.6146L12.1808 9.50872C12.2771 9.42455 12.3323 9.30269 12.3323 9.17466C12.3323 9.04662 12.2771 8.92492 12.1808 8.84059L8.63149 5.73491Z" fill="white"/>
                        </svg>
                            </button>
                            <button>Buy Meditation Package
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                            <path d="M9.6705 0.301025C4.76972 0.301025 0.796875 4.27387 0.796875 9.17465C0.796875 14.0754 4.76972 18.0484 9.6705 18.0484C14.5713 18.0484 18.5443 14.0754 18.5443 9.17465C18.5388 4.27615 14.5692 0.30655 9.6705 0.301025ZM9.6705 17.161C5.25977 17.161 1.68419 13.5854 1.68419 9.17465C1.68419 4.76392 5.25977 1.18834 9.6705 1.18834C14.0812 1.18834 17.6568 4.76392 17.6568 9.17465C17.6518 13.5833 14.0791 17.1559 9.6705 17.161Z" fill="white"/>
                            <path d="M8.63149 5.73491C8.44692 5.57357 8.16663 5.59242 8.00529 5.77683C7.84411 5.96141 7.86296 6.2417 8.04737 6.40304L11.2151 9.17466L8.04721 11.9464C7.86263 12.1078 7.84394 12.3881 8.00513 12.5725C8.16647 12.7571 8.44675 12.7759 8.63133 12.6146L12.1808 9.50872C12.2771 9.42455 12.3323 9.30269 12.3323 9.17466C12.3323 9.04662 12.2771 8.92492 12.1808 8.84059L8.63149 5.73491Z" fill="white"/>
                        </svg>
                            </button>
                        </div>
                        <div >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M28.751 6.968L28.281 7.117L25.778 7.34L25.071 8.469L24.558 8.306L22.566 6.51L22.277 5.576L21.89 4.58L20.638 3.457L19.161 3.168L19.127 3.844L20.574 5.256L21.282 6.09L20.486 6.506L19.838 6.315L18.867 5.91L18.9 5.127L17.626 4.603L17.203 6.444L15.919 6.735L16.046 7.762L17.719 8.084L18.008 6.443L19.389 6.647L20.031 7.023H21.061L21.766 8.435L23.635 10.331L23.498 11.068L21.991 10.876L19.387 12.191L17.512 14.44L17.268 15.436H16.595L15.341 14.858L14.123 15.436L14.426 16.721L14.956 16.11L15.888 16.081L15.823 17.235L16.595 17.461L17.366 18.327L18.625 17.973L20.063 18.2L21.733 18.649L22.567 18.747L23.981 20.352L26.71 21.957L24.945 25.329L23.082 26.195L22.375 28.122L19.679 29.922L19.392 30.96C26.284 29.3 31.411 23.109 31.411 15.707C31.409 12.474 30.429 9.465 28.751 6.968Z" fill="white"/>
                            <path d="M17.511 23.917L16.367 21.796L17.417 19.608L16.367 19.294L15.188 18.11L12.576 17.524L11.709 15.71V16.787H11.327L9.076 13.735V11.228L7.426 8.54501L4.806 9.01201H3.041L2.153 8.43001L3.286 7.53201L2.156 7.79301C0.794 10.119 0 12.818 0 15.709C0 24.382 7.031 31.416 15.705 31.416C16.373 31.416 17.028 31.357 17.676 31.279L17.512 29.376C17.512 29.376 18.233 26.55 18.233 26.454C18.232 26.357 17.511 23.917 17.511 23.917Z" fill="white"/>
                            <path d="M5.8358 5.065L8.6258 4.676L9.9118 3.971L11.3588 4.388L13.6708 4.26L14.4628 3.015L15.6178 3.205L18.4228 2.942L19.1958 2.09L20.2858 1.362L21.8278 1.594L22.3898 1.509C20.3588 0.553 18.0988 0 15.7038 0C10.8288 0 6.4698 2.222 3.5918 5.711H3.5998L5.8358 5.065ZM16.3678 1.562L17.9718 0.679L19.0018 1.274L17.5108 2.409L16.0868 2.552L15.4458 2.136L16.3678 1.562ZM11.6168 1.691L12.3248 1.986L13.2518 1.691L13.7568 2.566L11.6168 3.128L10.5878 2.526C10.5878 2.526 11.5938 1.878 11.6168 1.691Z" fill="white"/>
                        </svg>
                            <span className='activacion-span'>English</span>
                            <span>Spanish</span>
                            
                        </div>
                        
                    </div>
                    <button className='pause-music'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                                    <path d="M11.5343 12.8729C11.3551 12.8706 11.1838 12.7983 11.0571 12.6716C10.9304 12.5449 10.8581 12.3737 10.8558 12.1944L10.8558 1.33865C10.8558 1.1587 10.9273 0.986123 11.0545 0.858882C11.1818 0.731641 11.3543 0.660158 11.5343 0.660158C11.7142 0.660158 11.8868 0.731641 12.014 0.858883C12.1413 0.986124 12.2128 1.1587 12.2128 1.33865L12.2128 12.1944C12.2104 12.3737 12.1382 12.5449 12.0114 12.6716C11.8847 12.7983 11.7135 12.8706 11.5343 12.8729ZM15.8314 9.02816L15.8314 4.50492C15.8314 4.32497 15.7599 4.1524 15.6326 4.02516C15.5054 3.89792 15.3328 3.82643 15.1529 3.82643C14.9729 3.82643 14.8004 3.89792 14.6731 4.02516C14.5459 4.1524 14.4744 4.32497 14.4744 4.50492L14.4744 9.02816C14.4744 9.20811 14.5459 9.38069 14.6731 9.50793C14.8004 9.63517 14.9729 9.70665 15.1529 9.70665C15.3328 9.70665 15.5054 9.63517 15.6326 9.50793C15.7599 9.38069 15.8314 9.20811 15.8314 9.02816ZM1.35697 9.02816L1.35697 4.50492C1.35697 4.32497 1.28549 4.15239 1.15825 4.02515C1.03101 3.89791 0.858432 3.82643 0.678486 3.82643C0.498541 3.82643 0.325965 3.89791 0.198724 4.02515C0.0714825 4.15239 -6.40776e-07 4.32497 -6.72239e-07 4.50492L-1.46311e-06 9.02816C-1.49457e-06 9.20811 0.0714816 9.38068 0.198723 9.50793C0.325964 9.63517 0.498539 9.70665 0.678485 9.70665C0.858431 9.70665 1.03101 9.63517 1.15825 9.50793C1.28549 9.38068 1.35697 9.20811 1.35697 9.02816ZM4.97557 12.1944L4.97557 1.33864C4.97557 1.1587 4.90409 0.986122 4.77685 0.858881C4.64961 0.73164 4.47703 0.660157 4.29708 0.660157C4.11714 0.660157 3.94456 0.73164 3.81732 0.858881C3.69008 0.986122 3.6186 1.1587 3.6186 1.33864L3.6186 12.1944C3.6186 12.3744 3.69008 12.547 3.81732 12.6742C3.94456 12.8014 4.11714 12.8729 4.29708 12.8729C4.47703 12.8729 4.6496 12.8014 4.77684 12.6742C4.90409 12.547 4.97557 12.3744 4.97557 12.1944ZM8.59417 10.8375L8.59417 2.69562C8.59417 2.51567 8.52268 2.3431 8.39544 2.21586C8.2682 2.08861 8.09563 2.01713 7.91568 2.01713C7.73574 2.01713 7.56316 2.08861 7.43592 2.21586C7.30868 2.3431 7.23719 2.51567 7.23719 2.69562L7.23719 10.8375C7.23719 11.0174 7.30868 11.19 7.43592 11.3172C7.56316 11.4445 7.73573 11.5159 7.91568 11.5159C8.09563 11.5159 8.2682 11.4445 8.39544 11.3172C8.52268 11.19 8.59417 11.0174 8.59417 10.8375Z" fill="white"/>
                                </svg>
                                <img src={pause} alt="pause" />
                            </button>
                </div>
            </section>
            <section id="welcome-section">
                <div className="welcome-before">
                  <p>MetaHuman adventures <br />unleashing infinite <br />possibilites</p>
                  <img src={logo} alt="logo" />
                </div>
                <div className="welcome-chopra">
                  <div className="welcome-wrapper">
                    <img
                      src={bg1}
                      alt="mountain_background"
                      loading="lazy"
                    />
                    <div className="welcome-text">
                      <h2>Welcome to ChopraVerse</h2>
                      <p>
                        Dr. Deepak Chopra has crafted an immersive metaverse that merges
                        ancient wisdom with cutting-edge technology. It offers
                        peace, learning, and self- discovery in the digital age,
                        guiding users toward inner peace and enlightenment.
                      </p>
                      <button>
                        About us
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                            <path d="M9.6705 0.301025C4.76972 0.301025 0.796875 4.27387 0.796875 9.17465C0.796875 14.0754 4.76972 18.0484 9.6705 18.0484C14.5713 18.0484 18.5443 14.0754 18.5443 9.17465C18.5388 4.27615 14.5692 0.30655 9.6705 0.301025ZM9.6705 17.161C5.25977 17.161 1.68419 13.5854 1.68419 9.17465C1.68419 4.76392 5.25977 1.18834 9.6705 1.18834C14.0812 1.18834 17.6568 4.76392 17.6568 9.17465C17.6518 13.5833 14.0791 17.1559 9.6705 17.161Z" fill="white"/>
                            <path d="M8.63149 5.73491C8.44692 5.57357 8.16663 5.59242 8.00529 5.77683C7.84411 5.96141 7.86296 6.2417 8.04737 6.40304L11.2151 9.17466L8.04721 11.9464C7.86263 12.1078 7.84394 12.3881 8.00513 12.5725C8.16647 12.7571 8.44675 12.7759 8.63133 12.6146L12.1808 9.50872C12.2771 9.42455 12.3323 9.30269 12.3323 9.17466C12.3323 9.04662 12.2771 8.92492 12.1808 8.84059L8.63149 5.73491Z" fill="white"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
            </section>
            <section id="book-slider-section">
                <SliderBook/>
            </section>
            <section id="meditation-section">
      <div className="meditation-wrapper">
        <img
          src={bg4}
          alt="mountains_background"
          loading="lazy"
        />
        <div className="meditation-text">
          <h2>Our meditation Journey</h2>
          <p>
            Discover the Art of Meditation with Deepak Chopra. Our meditation
            section <br />offers a variety of practices suitable for beginners
            and seasoned practitioners <br />alike.
          </p>
        </div>
      </div>
      <div className="meditation-slider-wrapper">
        <div className="journey-slider-wrapper">
          <swiper-container className="journey-slider" id='journey' init="false">
            <swiper-slide className="journey-slide">
              <img
                src={bg1}
                alt="journey_slide"
                loading="lazy"
              />
            </swiper-slide>
            <swiper-slide className="journey-slide">
              <img
                src={bg1}
                alt="journey_slide"
                loading="lazy"
              />
            </swiper-slide>
            <swiper-slide className="journey-slide">
              <img
                src={bg1}
                alt="journey_slide"
                loading="lazy"
              />
            </swiper-slide>
            <swiper-slide className="journey-slide">
              <img
                src={bg1}
                alt="journey_slide"
                loading="lazy"
              />
            </swiper-slide>
            <swiper-slide className="journey-slide">
              <img
                src={bg1}
                alt="journey_slide"
                loading="lazy"
              />
            </swiper-slide>
          </swiper-container>
          <div className="journey-slider-buttons">
            <button className="journey-button">
              <img src={arrow} alt="slider_arrow" />
            </button>
            <button className="journey-button">
              <img src={arrow} alt="slider_arrow" />
            </button>
          </div>
        </div>
      </div>
    </section>

        </main>
    </>
  )
}

export default Home