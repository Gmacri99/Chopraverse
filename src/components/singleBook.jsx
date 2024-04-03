import React, { useEffect, useRef } from 'react'
import books from '../assets/book.webp'
import star from '../assets/star.svg'
import a1 from '../assets/1 (1).svg'
import a2 from '../assets/1 (2).svg'
import a3 from '../assets/1 (3).svg'
import a4 from '../assets/1 (4).svg'
import star1 from '../assets/Star 1.svg'
import avatar from '../assets/Avatar.svg'
import a5 from '../assets/1 (5).svg'
import { Footer } from './footer'

import { useWindowSize } from './useWindowSize'
import { register } from 'swiper/element'
const SingleBook = ({activo}) => {

    const {width}=useWindowSize()
    const book={
        title:'Mindful Moments',
        price:'$100',
        author: 'Deepak Chopra',
        description:'Lorem ipsum dolor sit amet consectetur. Arcu sollicitudin quis nulla proin in. Sed ipsum molestie nulla augue. Porttitor porttitor in non curabitur amet dignissim amet egestas. At sagittis tempus ultrices faucibus elit. Vulputate urna lorem arcu mauris et in elementum.',
        imagen:books
    }

    const swiperRef = useRef(null);

    useEffect(() => {
        
        if(width<768){
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
              slidesPerView: 2.4,
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
              slidesPerView: 7,
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
  
    }
  
      }, []);

      useEffect(() => {

        console.log(activo)
        const infoTitle=document.getElementById('infos-title1')
        const infoTitle2=document.getElementById('infos-title2')
        const info1=document.getElementById('infos-1')
        const info2=document.getElementById('infos-2')
        
        infoTitle.addEventListener('click',(()=>{
            infoTitle.classList.add('active-title-info')
            infoTitle2.classList.remove('active-title-info')
            info1.classList.add('active-info')
            info2.classList.remove('active-info')
        }))

        infoTitle2.addEventListener('click',(()=>{
            infoTitle.classList.remove('active-title-info')
            infoTitle2.classList.add('active-title-info')
            info1.classList.remove('active-info')
            info2.classList.add('active-info')
        }))

      }, []);

    
  return (
    
    <div className='singleBook'>
        <div className='Book'>
            <img className='Book-img' src={book.imagen} alt="book" />
            <div className='Book-div'>
                <h2>{book.title}</h2>
                <p className='Book-div-price'>{book.price}</p>
                <div className='authorStars'>
      <span className='author auth-2'><span >By: </span> {book.author}</span>
      |
      <div className='stars start-2'>
          <img src={star} alt="star_review_icon" />
          <img src={star} alt="star_review_icon" />
          <img src={star} alt="star_review_icon" />
          <img src={star} alt="star_review_icon" />
          <img src={star} alt="star_review_icon" />
      </div>
                </div>
                <p className='description3'>{book.description}</p>
                <div className='buttons-book d-flex-mobile'>
                    <button>Add to cart 
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M9.6705 0.301025C4.76972 0.301025 0.796875 4.27387 0.796875 9.17465C0.796875 14.0754 4.76972 18.0484 9.6705 18.0484C14.5713 18.0484 18.5443 14.0754 18.5443 9.17465C18.5388 4.27615 14.5692 0.30655 9.6705 0.301025ZM9.6705 17.161C5.25977 17.161 1.68419 13.5854 1.68419 9.17465C1.68419 4.76392 5.25977 1.18834 9.6705 1.18834C14.0812 1.18834 17.6568 4.76392 17.6568 9.17465C17.6518 13.5833 14.0791 17.1559 9.6705 17.161Z" fill="white"/>
                    <path d="M8.63149 5.73491C8.44692 5.57357 8.16663 5.59242 8.00529 5.77683C7.84411 5.96141 7.86296 6.2417 8.04737 6.40304L11.2151 9.17466L8.04721 11.9464C7.86263 12.1078 7.84394 12.3881 8.00513 12.5725C8.16647 12.7571 8.44675 12.7759 8.63133 12.6146L12.1808 9.50872C12.2771 9.42455 12.3323 9.30269 12.3323 9.17466C12.3323 9.04662 12.2771 8.92492 12.1808 8.84059L8.63149 5.73491Z" fill="white"/>
                </svg>
                    </button>
                    <button style={{'background-color': '#000', 'color': 'white'}} >Buy now 
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M9.6705 0.301025C4.76972 0.301025 0.796875 4.27387 0.796875 9.17465C0.796875 14.0754 4.76972 18.0484 9.6705 18.0484C14.5713 18.0484 18.5443 14.0754 18.5443 9.17465C18.5388 4.27615 14.5692 0.30655 9.6705 0.301025ZM9.6705 17.161C5.25977 17.161 1.68419 13.5854 1.68419 9.17465C1.68419 4.76392 5.25977 1.18834 9.6705 1.18834C14.0812 1.18834 17.6568 4.76392 17.6568 9.17465C17.6518 13.5833 14.0791 17.1559 9.6705 17.161Z" fill="white"/>
                    <path d="M8.63149 5.73491C8.44692 5.57357 8.16663 5.59242 8.00529 5.77683C7.84411 5.96141 7.86296 6.2417 8.04737 6.40304L11.2151 9.17466L8.04721 11.9464C7.86263 12.1078 7.84394 12.3881 8.00513 12.5725C8.16647 12.7571 8.44675 12.7759 8.63133 12.6146L12.1808 9.50872C12.2771 9.42455 12.3323 9.30269 12.3323 9.17466C12.3323 9.04662 12.2771 8.92492 12.1808 8.84059L8.63149 5.73491Z" fill="white"/>
                </svg>

                    </button>
                </div>
            </div>
        </div>
        <div className='div-ul-single'>
            {width > 767 ? <ul className='ul-single'>
                <li className='li-single'>
                    <p className='p1-singleBook'>Print length</p>
                    <img src={a1} alt="a1" />
                    <p className='p2-singleBook'>480 pages</p>
                </li>
                <li className='li-single'>
                    <p className='p1-singleBook'>Language</p>
                    <img src={a2} alt="a2" />
                    <p className='p2-singleBook'>English</p>
                </li>
                <li className='li-single'>
                    <p className='p1-singleBook'>Publication date</p>
                    <img src={a3} alt="a3" />
                    <p className='p2-singleBook'>February 6, 2024</p>
                </li>
                <li className='li-single'>
                    <p className='p1-singleBook'>Dimensions</p>
                    <img src={a4} alt="a4" />
                    <p className='p2-singleBook'>6.44 x 1.44 x 9.56 inches</p>
                </li>
                <li className='li-single'>
                    <p className='p1-singleBook'>ISBN</p>
                    <img src={a5} alt="a5" />
                    <p className='p2-singleBook'>19283719283</p>
                </li>
            </ul> : 
            <swiper-container ref={swiperRef} init="false">
            <swiper-slide>
                <li className='li-single'>
                    <p className='p1-singleBook'>Print length</p>
                    <img src={a1} alt="a1" />
                    <p className='p2-singleBook'>480 pages</p>
                </li>
                </swiper-slide>
                <swiper-slide>
                <li className='li-single'>
                    <p className='p1-singleBook'>Language</p>
                    <img src={a2} alt="a2" />
                    <p className='p2-singleBook'>English</p>
                </li>
                </swiper-slide>
                <swiper-slide>
                <li className='li-single'>
                    <p className='p1-singleBook'>Publication date</p>
                    <img src={a3} alt="a3" />
                    <p className='p2-singleBook'>February 6, 2024</p>
                </li>
                </swiper-slide>
                <swiper-slide>
                <li className='li-single'>
                    <p className='p1-singleBook'>Dimensions</p>
                    <img src={a4} alt="a4" />
                    <p className='p2-singleBook'>6.44 x 1.44 x 9.56 inches</p>
                </li>
                </swiper-slide>
                <swiper-slide>
                <li className='li-single'>
                    <p className='p1-singleBook'>ISBN</p>
                    <img src={a5} alt="a5" />
                    <p className='p2-singleBook'>19283719283</p>
                </li>
                </swiper-slide>
          </swiper-container>
       
            }
        </div>
        <div  className='infos-single'>
            <div  className='titles-info'>
                <p id='infos-title1' className='active-title-info'>Synopsis
                </p>
                
                <p id='infos-title2'>Ratings & Reviews
                </p>
            </div>
            <div id='infos-1' className='info active-info'>
                <p>Lorem ipsum dolor sit amet consectetur. Amet at praesent lectus sit. Malesuada scelerisque dolor curabitur magnis commodo cursus risus nisi. Sed sit nulla amet sodales dui malesuada. Venenatis duis sagittis suspendisse volutpat pharetra cursus sit lacus morbi. Adipiscing viverra condimentum mi euismod faucibus diam. Mi iaculis elementum libero ipsum fringilla ut velit. Lobortis euismod lorem viverra nunc metus eget nisl. Senectus odio a potenti nibh nisi massa.</p>
                <p>Et tincidunt interdum tristique faucibus tellus commodo. At accumsan ornare pretium egestas cursus varius lorem. Feugiat nunc nisl dictumst a eget donec ac dui. Ullamcorper nisl porttitor sit in eleifend pharetra. Suspendisse hendrerit sit feugiat dui tincidunt faucibus. Diam lorem neque id eget aliquam. Purus tincidunt nullam integer turpis facilisi fermentum enim. Tempus turpis consequat vel consectetur eu. Vivamus faucibus donec et feugiat ac. Tortor tellus nisl ut ut augue. Mauris odio sem purus feugiat.</p>
                <p>Nunc bibendum facilisis et libero mus metus blandit natoque neque. Morbi ridiculus ut egestas fermentum nec nunc habitant quisque. Neque rhoncus varius commodo augue eu. Duis vehicula amet amet odio elementum diam quis facilisi. Gravida sagittis ultrices posuere sed mi. Nec quam et vehicula sit. Volutpat et tincidunt volutpat nec duis sociis eleifend posuere nec.</p>
                <p>In at habitant sed habitasse massa interdum. Lacus sed venenatis habitasse morbi eget amet sit non et. Erat ac congue semper sem et at. Amet dictum luctus augue morbi molestie posuere id commodo fringilla. Malesuada pretium scelerisque ultrices ultricies quisque leo. In tellus ultrices est viverra sed mattis facilisis. Pellentesque sapien ultricies sed vitae quis enim blandit. Est dapibus urna amet mattis. Lectus feugiat volutpat id posuere. Molestie velit sed egestas in aenean mi. Dignissim sagittis eu odio libero amet ut adipiscing nulla enim.</p>
                <p>In cras aliquet dui tristique. Morbi pellentesque consectetur quis auctor viverra nunc dolor. Pharetra sed gravida metus dui cras id quam tortor. Id in tempor nec quis. Donec suspendisse rhoncus parturient donec nec vitae. Quis proin vestibulum nullam eu. Ullamcorper luctus tristique praesent vel diam mattis mattis purus amet. Sem vehicula sit interdum nam massa lobortis ipsum eget. Elit odio luctus etiam justo aliquet ligula ut facilisis. Quisque auctor lorem netus odio urna lectus semper lacus. Nisi nulla sit eget senectus. Eros eget viverra faucibus hendrerit nulla egestas arcu. Volutpat nisl morbi in amet cursus lectus at lobortis mi. Vel consequat enim mauris et donec sodales amet odio. Ultricies sapien eleifend sit gravida sit adipiscing.</p>
                <p>Mi integer nunc nisi purus nibh ipsum. Felis ornare fermentum pellentesque et suspendisse tristique hac at mattis. Eget pretium amet est scelerisque tortor. Leo ipsum erat fermentum pharetra nulla enim lorem. Eu gravida imperdiet eu ornare tellus cras mauris. Mattis fermentum eget blandit a magnis rhoncus nullam arcu facilisi. Nec vel ipsum nec ut ante ut adipiscing purus lacus. Venenatis odio fames mauris turpis sed in semper accumsan. Suscipit mi blandit egestas purus. Pulvinar euismod scelerisque sit elit.</p>
                <p>Purus facilisis integer eget tincidunt diam orci odio porta sodales. Amet ac faucibus ut nulla. Ut pellentesque odio justo felis. Aliquet gravida in rhoncus lorem eros ridiculus. Feugiat bibendum est habitasse et tempor tempus sit adipiscing. Nullam maecenas metus tortor convallis. Massa eu.</p>
            </div>
            <div id='infos-2' className='info'>
                <div className='review-star'>
                    <li>
                        <p>5</p>
                        <img src={star1} alt="star1" />
                        <div className='line-rating'><span className='total-rating'></span></div>
                        <p>(15)</p>
                    </li>
                    <li>
                        <p>4</p>
                        <img src={star1} alt="star1" />
                        <div className='line-rating'><span className='total-rating2'></span></div>
                        <p>(10)</p>
                    </li>
                    <li>
                        <p>3</p>
                        <img src={star1} alt="star1" />
                        <div className='line-rating'><span className='total-rating3'></span></div>
                        <p>(7)</p>
                    </li>
                    <li>
                        <p>2</p>
                        <img src={star1} alt="star1" />
                        <div className='line-rating'><span className='total-rating4'></span></div>
                        <p>(8)</p>
                    </li>
                    <li>
                        <p>1</p>
                        <img src={star1} alt="star1" />
                        <div className='line-rating'><span className='total-rating5'></span></div>
                        <p>(1)</p>
                    </li>
                </div>
                <div className='review'>
                    <img className='review-img' src={avatar} alt="avatar" />
                    <div className='div-info-review'>
                        <h2>John Smith</h2>
                        <h5>November 04, 2024</h5>
                        <div>
                            <h3>All in time</h3>
                            <div className='imagenes-review'>
                                <img src={star} alt="star" />                            
                                <img src={star} alt="star" />                            
                                <img src={star} alt="star" />                            
                                <img src={star} alt="star" />                            
                                <img src={star} alt="star" />    
                            </div>                        
                        </div>
                        <p>Just what I needed at the best price and the best quality!</p>
                    </div>
                </div>
                <div className='your-review'>
                    <h6>Add a review</h6>
                    <div>
                        <h4>Your rating</h4>
                        <div className='imagenes-review'>
                                <img src={star} alt="star" />                            
                                <img src={star} alt="star" />                            
                                <img src={star} alt="star" />                            
                                <img src={star} alt="star" />                            
                                <img src={star} alt="star" />    
                            </div>    
                        <label htmlFor="Add a review">Your  review</label>
                        <textarea name="" id="" cols="30" rows="10">

                        </textarea>
                        <button>Submit

                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M9.6705 0.301025C4.76972 0.301025 0.796875 4.27387 0.796875 9.17465C0.796875 14.0754 4.76972 18.0484 9.6705 18.0484C14.5713 18.0484 18.5443 14.0754 18.5443 9.17465C18.5388 4.27615 14.5692 0.30655 9.6705 0.301025ZM9.6705 17.161C5.25977 17.161 1.68419 13.5854 1.68419 9.17465C1.68419 4.76392 5.25977 1.18834 9.6705 1.18834C14.0812 1.18834 17.6568 4.76392 17.6568 9.17465C17.6518 13.5833 14.0791 17.1559 9.6705 17.161Z" fill="white"/>
                    <path d="M8.63149 5.73491C8.44692 5.57357 8.16663 5.59242 8.00529 5.77683C7.84411 5.96141 7.86296 6.2417 8.04737 6.40304L11.2151 9.17466L8.04721 11.9464C7.86263 12.1078 7.84394 12.3881 8.00513 12.5725C8.16647 12.7571 8.44675 12.7759 8.63133 12.6146L12.1808 9.50872C12.2771 9.42455 12.3323 9.30269 12.3323 9.17466C12.3323 9.04662 12.2771 8.92492 12.1808 8.84059L8.63149 5.73491Z" fill="white"/>
                </svg>
                        </button>
                    </div>
                </div>
                 </div>
        </div>
        <div className='footer-div'>
            <Footer/>
        </div>
    </div>
  )
}

export default SingleBook