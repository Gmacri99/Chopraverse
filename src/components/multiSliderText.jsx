import React, { useContext } from 'react'
import  '../styles/multi2.css' 
import star from '../assets/star.svg'
import { Link } from 'react-router-dom'
import { UserContext } from '../App'
const MultiSliderText = ({book}) => {

  return (
    <swiper-slide>
    <div className='slideInfo'>
      <h3>{book.title}</h3>
      <div className='authorStars'>
      <span className='author'><span style={{color:'white'}}>By: </span> {book.author}</span>
      |
      <div className='stars'>
          <img src={star} alt="star_review_icon" />
          <img src={star} alt="star_review_icon" />
          <img src={star} alt="star_review_icon" />
          <img src={star} alt="star_review_icon" />
          <img src={star} alt="star_review_icon" />
      </div>
      </div>
      <p className='description4'>{book.description}</p>
      <Link to='/singleBook'  className='read-more'>
        Read more
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
          <path d="M9.6705 0.301025C4.76972 0.301025 0.796875 4.27387 0.796875 9.17465C0.796875 14.0754 4.76972 18.0484 9.6705 18.0484C14.5713 18.0484 18.5443 14.0754 18.5443 9.17465C18.5388 4.27615 14.5692 0.30655 9.6705 0.301025ZM9.6705 17.161C5.25977 17.161 1.68419 13.5854 1.68419 9.17465C1.68419 4.76392 5.25977 1.18834 9.6705 1.18834C14.0812 1.18834 17.6568 4.76392 17.6568 9.17465C17.6518 13.5833 14.0791 17.1559 9.6705 17.161Z" fill="white"/>
          <path d="M8.63149 5.73491C8.44692 5.57357 8.16663 5.59242 8.00529 5.77683C7.84411 5.96141 7.86296 6.2417 8.04737 6.40304L11.2151 9.17466L8.04721 11.9464C7.86263 12.1078 7.84394 12.3881 8.00513 12.5725C8.16647 12.7571 8.44675 12.7759 8.63133 12.6146L12.1808 9.50872C12.2771 9.42455 12.3323 9.30269 12.3323 9.17466C12.3323 9.04662 12.2771 8.92492 12.1808 8.84059L8.63149 5.73491Z" fill="white"/>
        </svg>
      </Link>
    </div>
  </swiper-slide>
  )
}

export default MultiSliderText