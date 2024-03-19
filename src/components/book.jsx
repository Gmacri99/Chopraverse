import star from '../assets/star.svg'

export const Book=({ book })=> {
  return (
    <swiper-slide>
      <div className='bookImageContainer'>
        <img src={book.imageUrl} alt="book_image" />
      </div>
      <div className='bookInfo'>
        <h3>{book.title}</h3>
        <div className='authorStars'>
        <span className='author'>By: {book.author}</span>
        |
        <div className='stars'>
            <img src={star} alt="star_review_icon" />
            <img src={star} alt="star_review_icon" />
            <img src={star} alt="star_review_icon" />
            <img src={star} alt="star_review_icon" />
            <img src={star} alt="star_review_icon" />
        </div>
        </div>
        <p className='description'>{book.description}</p>
        <span className='price'>${book.price}</span>
      </div>
    </swiper-slide>
  );
}