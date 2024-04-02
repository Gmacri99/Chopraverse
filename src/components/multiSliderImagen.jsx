
import  '../styles/multi.css' 

export const MultiSliderImagen = ({book}) => {
    
  return (

        <swiper-slide>
      <div className='bookImageSlide'>
        <img src={book.imageUrl} alt="book_image" />
      </div>
    </swiper-slide>

  )
}
