import React from 'react'
import bg from '../assets/bg/image 3.png'
import book from '../assets/book.webp'
import star from '../assets/star.svg'
import cuadrilla from '../assets/Group 79.svg'
import cuadrilla2 from '../assets/Group 78.svg'
import { Footer } from './footer'
import { SliderBook } from './SliderBook'
import MultiSlider from './multiSlider'
const Library = () => {
  return (
    <div style={{backgroundColor:'#EAE5DF'}}>
        <div className='mb-bolie'>
            <img className='mb-bolie-img' src={bg} style={{width:'100vw'}} alt="bg" />
 
                <MultiSlider/>
         
        </div>
        <div className='info-books'>
            <div className='h3-div'><h3>All books</h3></div>
            <div className='class-options'>
                <div>
                    <img className='imagenes-nuevas' src={cuadrilla} alt="" />
                    <img className='imagenes-nuevas' src={cuadrilla2} alt="" />
                    <select className='custom-select' name="" id="">
                        <option value="">Sort by latest</option>
                        <option value="">Sort by price</option>
                        
                    </select>
                </div>
                <p className='libros-mostrados'>Showing 1–8 of 20 results</p>
            </div>
            <div className='div-father-books'>
                <div className='div-book'>
                    <div className='bookImageContainer2'>
        <img src={book} alt="book_image" />
                    </div>
                    <div className='bookInfo2'>
        <h3>Meta human</h3>
        <div className='authorStars'>
        <span className='author'>By: Deepak Chopra</span>
        |
        <div className='stars'>
            <img src={star} alt="star_review_icon" />
            <img src={star} alt="star_review_icon" />
            <img src={star} alt="star_review_icon" />
            <img src={star} alt="star_review_icon" />
            <img src={star} alt="star_review_icon" />
        </div>
        </div>
        <p className='description2'>Lorem ipsum dolor sit amet consectetur. Arcu sollicitudin quis nulla proin in.</p>
        <div className='buttons-book'>
            <button>Add to cart 
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M9.6705 0.301025C4.76972 0.301025 0.796875 4.27387 0.796875 9.17465C0.796875 14.0754 4.76972 18.0484 9.6705 18.0484C14.5713 18.0484 18.5443 14.0754 18.5443 9.17465C18.5388 4.27615 14.5692 0.30655 9.6705 0.301025ZM9.6705 17.161C5.25977 17.161 1.68419 13.5854 1.68419 9.17465C1.68419 4.76392 5.25977 1.18834 9.6705 1.18834C14.0812 1.18834 17.6568 4.76392 17.6568 9.17465C17.6518 13.5833 14.0791 17.1559 9.6705 17.161Z" fill="white"/>
                    <path d="M8.63149 5.73491C8.44692 5.57357 8.16663 5.59242 8.00529 5.77683C7.84411 5.96141 7.86296 6.2417 8.04737 6.40304L11.2151 9.17466L8.04721 11.9464C7.86263 12.1078 7.84394 12.3881 8.00513 12.5725C8.16647 12.7571 8.44675 12.7759 8.63133 12.6146L12.1808 9.50872C12.2771 9.42455 12.3323 9.30269 12.3323 9.17466C12.3323 9.04662 12.2771 8.92492 12.1808 8.84059L8.63149 5.73491Z" fill="white"/>
                </svg>
            </button>
            <button>Read more 
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group 4">
<path id="Vector" d="M7.89634 0.765625C3.60568 0.765625 0.127441 4.24387 0.127441 8.53452C0.127441 12.8252 3.60568 16.3036 7.89634 16.3036C12.187 16.3036 15.6654 12.8252 15.6654 8.53452C15.6605 4.24586 12.1851 0.770462 7.89634 0.765625ZM7.89634 15.5266C4.03472 15.5266 0.904288 12.3961 0.904288 8.53452C0.904288 4.6729 4.03472 1.54247 7.89634 1.54247C11.758 1.54247 14.8884 4.6729 14.8884 8.53452C14.884 12.3943 11.7561 15.5222 7.89634 15.5266Z" fill="black"/>
<path id="Vector_2" d="M6.98713 5.52182C6.82553 5.38057 6.58015 5.39707 6.43889 5.55853C6.29777 5.72013 6.31427 5.96551 6.47573 6.10677L9.24911 8.53333L6.47559 10.96C6.31399 11.1013 6.29763 11.3467 6.43875 11.5081C6.58 11.6697 6.82539 11.6862 6.98699 11.545L10.0945 8.82581C10.1789 8.75212 10.2272 8.64543 10.2272 8.53333C10.2272 8.42124 10.1789 8.31469 10.0945 8.24086L6.98713 5.52182Z" fill="black"/>
</g>
</svg>

                        </button>
        </div>
                    </div>
                </div>
                <div className='div-book'>
                    <div className='bookImageContainer2'>
        <img src={book} alt="book_image" />
                    </div>
                    <div className='bookInfo2'>
        <h3>Meta human</h3>
        <div className='authorStars'>
        <span className='author'>By: Deepak Chopra</span>
        |
        <div className='stars'>
            <img src={star} alt="star_review_icon" />
            <img src={star} alt="star_review_icon" />
            <img src={star} alt="star_review_icon" />
            <img src={star} alt="star_review_icon" />
            <img src={star} alt="star_review_icon" />
        </div>
        </div>
        <p className='description2'>Lorem ipsum dolor sit amet consectetur. Arcu sollicitudin quis nulla proin in.</p>
        <div className='buttons-book'>
            <button>Add to cart 
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M9.6705 0.301025C4.76972 0.301025 0.796875 4.27387 0.796875 9.17465C0.796875 14.0754 4.76972 18.0484 9.6705 18.0484C14.5713 18.0484 18.5443 14.0754 18.5443 9.17465C18.5388 4.27615 14.5692 0.30655 9.6705 0.301025ZM9.6705 17.161C5.25977 17.161 1.68419 13.5854 1.68419 9.17465C1.68419 4.76392 5.25977 1.18834 9.6705 1.18834C14.0812 1.18834 17.6568 4.76392 17.6568 9.17465C17.6518 13.5833 14.0791 17.1559 9.6705 17.161Z" fill="white"/>
                    <path d="M8.63149 5.73491C8.44692 5.57357 8.16663 5.59242 8.00529 5.77683C7.84411 5.96141 7.86296 6.2417 8.04737 6.40304L11.2151 9.17466L8.04721 11.9464C7.86263 12.1078 7.84394 12.3881 8.00513 12.5725C8.16647 12.7571 8.44675 12.7759 8.63133 12.6146L12.1808 9.50872C12.2771 9.42455 12.3323 9.30269 12.3323 9.17466C12.3323 9.04662 12.2771 8.92492 12.1808 8.84059L8.63149 5.73491Z" fill="white"/>
                </svg>
            </button>
            <button>Read more 
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group 4">
<path id="Vector" d="M7.89634 0.765625C3.60568 0.765625 0.127441 4.24387 0.127441 8.53452C0.127441 12.8252 3.60568 16.3036 7.89634 16.3036C12.187 16.3036 15.6654 12.8252 15.6654 8.53452C15.6605 4.24586 12.1851 0.770462 7.89634 0.765625ZM7.89634 15.5266C4.03472 15.5266 0.904288 12.3961 0.904288 8.53452C0.904288 4.6729 4.03472 1.54247 7.89634 1.54247C11.758 1.54247 14.8884 4.6729 14.8884 8.53452C14.884 12.3943 11.7561 15.5222 7.89634 15.5266Z" fill="black"/>
<path id="Vector_2" d="M6.98713 5.52182C6.82553 5.38057 6.58015 5.39707 6.43889 5.55853C6.29777 5.72013 6.31427 5.96551 6.47573 6.10677L9.24911 8.53333L6.47559 10.96C6.31399 11.1013 6.29763 11.3467 6.43875 11.5081C6.58 11.6697 6.82539 11.6862 6.98699 11.545L10.0945 8.82581C10.1789 8.75212 10.2272 8.64543 10.2272 8.53333C10.2272 8.42124 10.1789 8.31469 10.0945 8.24086L6.98713 5.52182Z" fill="black"/>
</g>
</svg>

                        </button>
        </div>
                    </div>
                </div>
                <div className='div-book'>
                    <div className='bookImageContainer2'>
        <img src={book} alt="book_image" />
                    </div>
                    <div className='bookInfo2'>
        <h3>Meta human</h3>
        <div className='authorStars'>
        <span className='author'>By: Deepak Chopra</span>
        |
        <div className='stars'>
            <img src={star} alt="star_review_icon" />
            <img src={star} alt="star_review_icon" />
            <img src={star} alt="star_review_icon" />
            <img src={star} alt="star_review_icon" />
            <img src={star} alt="star_review_icon" />
        </div>
        </div>
        <p className='description2'>Lorem ipsum dolor sit amet consectetur. Arcu sollicitudin quis nulla proin in.</p>
        <div className='buttons-book'>
            <button>Add to cart 
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M9.6705 0.301025C4.76972 0.301025 0.796875 4.27387 0.796875 9.17465C0.796875 14.0754 4.76972 18.0484 9.6705 18.0484C14.5713 18.0484 18.5443 14.0754 18.5443 9.17465C18.5388 4.27615 14.5692 0.30655 9.6705 0.301025ZM9.6705 17.161C5.25977 17.161 1.68419 13.5854 1.68419 9.17465C1.68419 4.76392 5.25977 1.18834 9.6705 1.18834C14.0812 1.18834 17.6568 4.76392 17.6568 9.17465C17.6518 13.5833 14.0791 17.1559 9.6705 17.161Z" fill="white"/>
                    <path d="M8.63149 5.73491C8.44692 5.57357 8.16663 5.59242 8.00529 5.77683C7.84411 5.96141 7.86296 6.2417 8.04737 6.40304L11.2151 9.17466L8.04721 11.9464C7.86263 12.1078 7.84394 12.3881 8.00513 12.5725C8.16647 12.7571 8.44675 12.7759 8.63133 12.6146L12.1808 9.50872C12.2771 9.42455 12.3323 9.30269 12.3323 9.17466C12.3323 9.04662 12.2771 8.92492 12.1808 8.84059L8.63149 5.73491Z" fill="white"/>
                </svg>
            </button>
            <button>Read more 
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group 4">
<path id="Vector" d="M7.89634 0.765625C3.60568 0.765625 0.127441 4.24387 0.127441 8.53452C0.127441 12.8252 3.60568 16.3036 7.89634 16.3036C12.187 16.3036 15.6654 12.8252 15.6654 8.53452C15.6605 4.24586 12.1851 0.770462 7.89634 0.765625ZM7.89634 15.5266C4.03472 15.5266 0.904288 12.3961 0.904288 8.53452C0.904288 4.6729 4.03472 1.54247 7.89634 1.54247C11.758 1.54247 14.8884 4.6729 14.8884 8.53452C14.884 12.3943 11.7561 15.5222 7.89634 15.5266Z" fill="black"/>
<path id="Vector_2" d="M6.98713 5.52182C6.82553 5.38057 6.58015 5.39707 6.43889 5.55853C6.29777 5.72013 6.31427 5.96551 6.47573 6.10677L9.24911 8.53333L6.47559 10.96C6.31399 11.1013 6.29763 11.3467 6.43875 11.5081C6.58 11.6697 6.82539 11.6862 6.98699 11.545L10.0945 8.82581C10.1789 8.75212 10.2272 8.64543 10.2272 8.53333C10.2272 8.42124 10.1789 8.31469 10.0945 8.24086L6.98713 5.52182Z" fill="black"/>
</g>
</svg>

                        </button>
        </div>
                    </div>
                </div>
                <div className='div-book'>
                    <div className='bookImageContainer2'>
        <img src={book} alt="book_image" />
                    </div>
                    <div className='bookInfo2'>
        <h3>Meta human</h3>
        <div className='authorStars'>
        <span className='author'>By: Deepak Chopra</span>
        |
        <div className='stars'>
            <img src={star} alt="star_review_icon" />
            <img src={star} alt="star_review_icon" />
            <img src={star} alt="star_review_icon" />
            <img src={star} alt="star_review_icon" />
            <img src={star} alt="star_review_icon" />
        </div>
        </div>
        <p className='description2'>Lorem ipsum dolor sit amet consectetur. Arcu sollicitudin quis nulla proin in.</p>
        <div className='buttons-book'>
            <button>Add to cart 
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M9.6705 0.301025C4.76972 0.301025 0.796875 4.27387 0.796875 9.17465C0.796875 14.0754 4.76972 18.0484 9.6705 18.0484C14.5713 18.0484 18.5443 14.0754 18.5443 9.17465C18.5388 4.27615 14.5692 0.30655 9.6705 0.301025ZM9.6705 17.161C5.25977 17.161 1.68419 13.5854 1.68419 9.17465C1.68419 4.76392 5.25977 1.18834 9.6705 1.18834C14.0812 1.18834 17.6568 4.76392 17.6568 9.17465C17.6518 13.5833 14.0791 17.1559 9.6705 17.161Z" fill="white"/>
                    <path d="M8.63149 5.73491C8.44692 5.57357 8.16663 5.59242 8.00529 5.77683C7.84411 5.96141 7.86296 6.2417 8.04737 6.40304L11.2151 9.17466L8.04721 11.9464C7.86263 12.1078 7.84394 12.3881 8.00513 12.5725C8.16647 12.7571 8.44675 12.7759 8.63133 12.6146L12.1808 9.50872C12.2771 9.42455 12.3323 9.30269 12.3323 9.17466C12.3323 9.04662 12.2771 8.92492 12.1808 8.84059L8.63149 5.73491Z" fill="white"/>
                </svg>
            </button>
            <button>Read more 
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group 4">
<path id="Vector" d="M7.89634 0.765625C3.60568 0.765625 0.127441 4.24387 0.127441 8.53452C0.127441 12.8252 3.60568 16.3036 7.89634 16.3036C12.187 16.3036 15.6654 12.8252 15.6654 8.53452C15.6605 4.24586 12.1851 0.770462 7.89634 0.765625ZM7.89634 15.5266C4.03472 15.5266 0.904288 12.3961 0.904288 8.53452C0.904288 4.6729 4.03472 1.54247 7.89634 1.54247C11.758 1.54247 14.8884 4.6729 14.8884 8.53452C14.884 12.3943 11.7561 15.5222 7.89634 15.5266Z" fill="black"/>
<path id="Vector_2" d="M6.98713 5.52182C6.82553 5.38057 6.58015 5.39707 6.43889 5.55853C6.29777 5.72013 6.31427 5.96551 6.47573 6.10677L9.24911 8.53333L6.47559 10.96C6.31399 11.1013 6.29763 11.3467 6.43875 11.5081C6.58 11.6697 6.82539 11.6862 6.98699 11.545L10.0945 8.82581C10.1789 8.75212 10.2272 8.64543 10.2272 8.53333C10.2272 8.42124 10.1789 8.31469 10.0945 8.24086L6.98713 5.52182Z" fill="black"/>
</g>
</svg>

                        </button>
        </div>
                    </div>
                </div>
                <div className='div-book'>
                    <div className='bookImageContainer2'>
        <img src={book} alt="book_image" />
                    </div>
                    <div className='bookInfo2'>
        <h3>Meta human</h3>
        <div className='authorStars'>
        <span className='author'>By: Deepak Chopra</span>
        |
        <div className='stars'>
            <img src={star} alt="star_review_icon" />
            <img src={star} alt="star_review_icon" />
            <img src={star} alt="star_review_icon" />
            <img src={star} alt="star_review_icon" />
            <img src={star} alt="star_review_icon" />
        </div>
        </div>
        <p className='description2'>Lorem ipsum dolor sit amet consectetur. Arcu sollicitudin quis nulla proin in.</p>
        <div className='buttons-book'>
            <button>Add to cart 
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M9.6705 0.301025C4.76972 0.301025 0.796875 4.27387 0.796875 9.17465C0.796875 14.0754 4.76972 18.0484 9.6705 18.0484C14.5713 18.0484 18.5443 14.0754 18.5443 9.17465C18.5388 4.27615 14.5692 0.30655 9.6705 0.301025ZM9.6705 17.161C5.25977 17.161 1.68419 13.5854 1.68419 9.17465C1.68419 4.76392 5.25977 1.18834 9.6705 1.18834C14.0812 1.18834 17.6568 4.76392 17.6568 9.17465C17.6518 13.5833 14.0791 17.1559 9.6705 17.161Z" fill="white"/>
                    <path d="M8.63149 5.73491C8.44692 5.57357 8.16663 5.59242 8.00529 5.77683C7.84411 5.96141 7.86296 6.2417 8.04737 6.40304L11.2151 9.17466L8.04721 11.9464C7.86263 12.1078 7.84394 12.3881 8.00513 12.5725C8.16647 12.7571 8.44675 12.7759 8.63133 12.6146L12.1808 9.50872C12.2771 9.42455 12.3323 9.30269 12.3323 9.17466C12.3323 9.04662 12.2771 8.92492 12.1808 8.84059L8.63149 5.73491Z" fill="white"/>
                </svg>
            </button>
            <button>Read more 
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group 4">
<path id="Vector" d="M7.89634 0.765625C3.60568 0.765625 0.127441 4.24387 0.127441 8.53452C0.127441 12.8252 3.60568 16.3036 7.89634 16.3036C12.187 16.3036 15.6654 12.8252 15.6654 8.53452C15.6605 4.24586 12.1851 0.770462 7.89634 0.765625ZM7.89634 15.5266C4.03472 15.5266 0.904288 12.3961 0.904288 8.53452C0.904288 4.6729 4.03472 1.54247 7.89634 1.54247C11.758 1.54247 14.8884 4.6729 14.8884 8.53452C14.884 12.3943 11.7561 15.5222 7.89634 15.5266Z" fill="black"/>
<path id="Vector_2" d="M6.98713 5.52182C6.82553 5.38057 6.58015 5.39707 6.43889 5.55853C6.29777 5.72013 6.31427 5.96551 6.47573 6.10677L9.24911 8.53333L6.47559 10.96C6.31399 11.1013 6.29763 11.3467 6.43875 11.5081C6.58 11.6697 6.82539 11.6862 6.98699 11.545L10.0945 8.82581C10.1789 8.75212 10.2272 8.64543 10.2272 8.53333C10.2272 8.42124 10.1789 8.31469 10.0945 8.24086L6.98713 5.52182Z" fill="black"/>
</g>
</svg>

                        </button>
        </div>
                    </div>
                </div>
                <div className='div-book'>
                    <div className='bookImageContainer2'>
        <img src={book} alt="book_image" />
                    </div>
                    <div className='bookInfo2'>
        <h3>Meta human</h3>
        <div className='authorStars'>
        <span className='author'>By: Deepak Chopra</span>
        |
        <div className='stars'>
            <img src={star} alt="star_review_icon" />
            <img src={star} alt="star_review_icon" />
            <img src={star} alt="star_review_icon" />
            <img src={star} alt="star_review_icon" />
            <img src={star} alt="star_review_icon" />
        </div>
        </div>
        <p className='description2'>Lorem ipsum dolor sit amet consectetur. Arcu sollicitudin quis nulla proin in.</p>
        <div className='buttons-book'>
            <button>Add to cart 
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M9.6705 0.301025C4.76972 0.301025 0.796875 4.27387 0.796875 9.17465C0.796875 14.0754 4.76972 18.0484 9.6705 18.0484C14.5713 18.0484 18.5443 14.0754 18.5443 9.17465C18.5388 4.27615 14.5692 0.30655 9.6705 0.301025ZM9.6705 17.161C5.25977 17.161 1.68419 13.5854 1.68419 9.17465C1.68419 4.76392 5.25977 1.18834 9.6705 1.18834C14.0812 1.18834 17.6568 4.76392 17.6568 9.17465C17.6518 13.5833 14.0791 17.1559 9.6705 17.161Z" fill="white"/>
                    <path d="M8.63149 5.73491C8.44692 5.57357 8.16663 5.59242 8.00529 5.77683C7.84411 5.96141 7.86296 6.2417 8.04737 6.40304L11.2151 9.17466L8.04721 11.9464C7.86263 12.1078 7.84394 12.3881 8.00513 12.5725C8.16647 12.7571 8.44675 12.7759 8.63133 12.6146L12.1808 9.50872C12.2771 9.42455 12.3323 9.30269 12.3323 9.17466C12.3323 9.04662 12.2771 8.92492 12.1808 8.84059L8.63149 5.73491Z" fill="white"/>
                </svg>
            </button>
            <button>Read more 
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group 4">
<path id="Vector" d="M7.89634 0.765625C3.60568 0.765625 0.127441 4.24387 0.127441 8.53452C0.127441 12.8252 3.60568 16.3036 7.89634 16.3036C12.187 16.3036 15.6654 12.8252 15.6654 8.53452C15.6605 4.24586 12.1851 0.770462 7.89634 0.765625ZM7.89634 15.5266C4.03472 15.5266 0.904288 12.3961 0.904288 8.53452C0.904288 4.6729 4.03472 1.54247 7.89634 1.54247C11.758 1.54247 14.8884 4.6729 14.8884 8.53452C14.884 12.3943 11.7561 15.5222 7.89634 15.5266Z" fill="black"/>
<path id="Vector_2" d="M6.98713 5.52182C6.82553 5.38057 6.58015 5.39707 6.43889 5.55853C6.29777 5.72013 6.31427 5.96551 6.47573 6.10677L9.24911 8.53333L6.47559 10.96C6.31399 11.1013 6.29763 11.3467 6.43875 11.5081C6.58 11.6697 6.82539 11.6862 6.98699 11.545L10.0945 8.82581C10.1789 8.75212 10.2272 8.64543 10.2272 8.53333C10.2272 8.42124 10.1789 8.31469 10.0945 8.24086L6.98713 5.52182Z" fill="black"/>
</g>
</svg>

                        </button>
        </div>
                    </div>
                </div>
                <div className='div-book'>
                    <div className='bookImageContainer2'>
        <img src={book} alt="book_image" />
                    </div>
                    <div className='bookInfo2'>
        <h3>Meta human</h3>
        <div className='authorStars'>
        <span className='author'>By: Deepak Chopra</span>
        |
        <div className='stars'>
            <img src={star} alt="star_review_icon" />
            <img src={star} alt="star_review_icon" />
            <img src={star} alt="star_review_icon" />
            <img src={star} alt="star_review_icon" />
            <img src={star} alt="star_review_icon" />
        </div>
        </div>
        <p className='description2'>Lorem ipsum dolor sit amet consectetur. Arcu sollicitudin quis nulla proin in.</p>
        <div className='buttons-book'>
            <button>Add to cart 
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M9.6705 0.301025C4.76972 0.301025 0.796875 4.27387 0.796875 9.17465C0.796875 14.0754 4.76972 18.0484 9.6705 18.0484C14.5713 18.0484 18.5443 14.0754 18.5443 9.17465C18.5388 4.27615 14.5692 0.30655 9.6705 0.301025ZM9.6705 17.161C5.25977 17.161 1.68419 13.5854 1.68419 9.17465C1.68419 4.76392 5.25977 1.18834 9.6705 1.18834C14.0812 1.18834 17.6568 4.76392 17.6568 9.17465C17.6518 13.5833 14.0791 17.1559 9.6705 17.161Z" fill="white"/>
                    <path d="M8.63149 5.73491C8.44692 5.57357 8.16663 5.59242 8.00529 5.77683C7.84411 5.96141 7.86296 6.2417 8.04737 6.40304L11.2151 9.17466L8.04721 11.9464C7.86263 12.1078 7.84394 12.3881 8.00513 12.5725C8.16647 12.7571 8.44675 12.7759 8.63133 12.6146L12.1808 9.50872C12.2771 9.42455 12.3323 9.30269 12.3323 9.17466C12.3323 9.04662 12.2771 8.92492 12.1808 8.84059L8.63149 5.73491Z" fill="white"/>
                </svg>
            </button>
            <button>Read more 
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group 4">
<path id="Vector" d="M7.89634 0.765625C3.60568 0.765625 0.127441 4.24387 0.127441 8.53452C0.127441 12.8252 3.60568 16.3036 7.89634 16.3036C12.187 16.3036 15.6654 12.8252 15.6654 8.53452C15.6605 4.24586 12.1851 0.770462 7.89634 0.765625ZM7.89634 15.5266C4.03472 15.5266 0.904288 12.3961 0.904288 8.53452C0.904288 4.6729 4.03472 1.54247 7.89634 1.54247C11.758 1.54247 14.8884 4.6729 14.8884 8.53452C14.884 12.3943 11.7561 15.5222 7.89634 15.5266Z" fill="black"/>
<path id="Vector_2" d="M6.98713 5.52182C6.82553 5.38057 6.58015 5.39707 6.43889 5.55853C6.29777 5.72013 6.31427 5.96551 6.47573 6.10677L9.24911 8.53333L6.47559 10.96C6.31399 11.1013 6.29763 11.3467 6.43875 11.5081C6.58 11.6697 6.82539 11.6862 6.98699 11.545L10.0945 8.82581C10.1789 8.75212 10.2272 8.64543 10.2272 8.53333C10.2272 8.42124 10.1789 8.31469 10.0945 8.24086L6.98713 5.52182Z" fill="black"/>
</g>
</svg>

                        </button>
        </div>
                    </div>
                </div>
                <div className='div-book'>
                    <div className='bookImageContainer2'>
        <img src={book} alt="book_image" />
                    </div>
                    <div className='bookInfo2'>
        <h3>Meta human</h3>
        <div className='authorStars'>
        <span className='author'>By: Deepak Chopra</span>
        |
        <div className='stars'>
            <img src={star} alt="star_review_icon" />
            <img src={star} alt="star_review_icon" />
            <img src={star} alt="star_review_icon" />
            <img src={star} alt="star_review_icon" />
            <img src={star} alt="star_review_icon" />
        </div>
        </div>
        <p className='description2'>Lorem ipsum dolor sit amet consectetur. Arcu sollicitudin quis nulla proin in.</p>
        <div className='buttons-book'>
            <button>Add to cart 
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M9.6705 0.301025C4.76972 0.301025 0.796875 4.27387 0.796875 9.17465C0.796875 14.0754 4.76972 18.0484 9.6705 18.0484C14.5713 18.0484 18.5443 14.0754 18.5443 9.17465C18.5388 4.27615 14.5692 0.30655 9.6705 0.301025ZM9.6705 17.161C5.25977 17.161 1.68419 13.5854 1.68419 9.17465C1.68419 4.76392 5.25977 1.18834 9.6705 1.18834C14.0812 1.18834 17.6568 4.76392 17.6568 9.17465C17.6518 13.5833 14.0791 17.1559 9.6705 17.161Z" fill="white"/>
                    <path d="M8.63149 5.73491C8.44692 5.57357 8.16663 5.59242 8.00529 5.77683C7.84411 5.96141 7.86296 6.2417 8.04737 6.40304L11.2151 9.17466L8.04721 11.9464C7.86263 12.1078 7.84394 12.3881 8.00513 12.5725C8.16647 12.7571 8.44675 12.7759 8.63133 12.6146L12.1808 9.50872C12.2771 9.42455 12.3323 9.30269 12.3323 9.17466C12.3323 9.04662 12.2771 8.92492 12.1808 8.84059L8.63149 5.73491Z" fill="white"/>
                </svg>
            </button>
            <button>Read more 
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group 4">
<path id="Vector" d="M7.89634 0.765625C3.60568 0.765625 0.127441 4.24387 0.127441 8.53452C0.127441 12.8252 3.60568 16.3036 7.89634 16.3036C12.187 16.3036 15.6654 12.8252 15.6654 8.53452C15.6605 4.24586 12.1851 0.770462 7.89634 0.765625ZM7.89634 15.5266C4.03472 15.5266 0.904288 12.3961 0.904288 8.53452C0.904288 4.6729 4.03472 1.54247 7.89634 1.54247C11.758 1.54247 14.8884 4.6729 14.8884 8.53452C14.884 12.3943 11.7561 15.5222 7.89634 15.5266Z" fill="black"/>
<path id="Vector_2" d="M6.98713 5.52182C6.82553 5.38057 6.58015 5.39707 6.43889 5.55853C6.29777 5.72013 6.31427 5.96551 6.47573 6.10677L9.24911 8.53333L6.47559 10.96C6.31399 11.1013 6.29763 11.3467 6.43875 11.5081C6.58 11.6697 6.82539 11.6862 6.98699 11.545L10.0945 8.82581C10.1789 8.75212 10.2272 8.64543 10.2272 8.53333C10.2272 8.42124 10.1789 8.31469 10.0945 8.24086L6.98713 5.52182Z" fill="black"/>
</g>
</svg>

                        </button>
        </div>
                    </div>
                </div>
            </div>
            <div className='pagination'>
                        <p className='pagination-active'>1</p>
                        <p style={{color:'Black'}}>2</p>
                        <p style={{color:'Black'}}>3</p>
                        <p style={{color:'Black'}}>4</p>
                        <p style={{color:'Black'}}>5</p>
                        <p style={{color:'Black'}}>6</p>
                      </div>
        </div>
        <div className='footer-div'>
            <Footer/>
        </div>
    </div>
           
  )
}

export default Library