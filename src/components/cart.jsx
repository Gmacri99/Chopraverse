import { useEffect } from 'react'
import Book from '../assets/book.webp'

const Cart = ({clase,handleClose}) => {




  return (
    <div id='cart' className={`section-cart ${clase}`}>
        <div className="cart-content">
            <div className="cart-content-1">
                <h3>My cart</h3>
                <svg onClick={handleClose} xmlns="http://www.w3.org/2000/svg" width="32" height="25" viewBox="0 0 32 25" fill="none">
                    <path d="M31.6698 0L19.5948 12.3281L31.6698 24.62H24.4031L24.3308 24.5477L15.8349 16.0157L7.2667 24.62H0L12.075 12.2919L0 0H7.2667L7.339 0.0723045L15.8349 8.6405L24.4031 0H31.6698Z" fill="white"/>
                </svg>
            </div>
            <div className="cart-content-2">
                <div className="products-in-cart2">
                    <div className="product products-in-cart2-2">
                        <div className='product2 products-in-cart2-1'>
                            <img src={Book} alt="" />
                            <div className='info-product'>
                        <div className='init-product'>
                          <span className="product-description">Meta human</span>
                          <span className="product-price">$100</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur. Arcu sollicitudin quis nulla proin in.</p>
                            </div>
                            <div className='flecha-cierre'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="white">
                        <path d="M15.069 0L9.32349 5.95701L15.069 11.8966H11.6114L11.577 11.8616L7.53448 7.73887L3.4576 11.8966H0L5.74547 5.93954L0 0H3.4576L3.49201 0.034938L7.53448 4.17515L11.6114 0H15.069Z" fill="white"/>
                        </svg>
                            </div>
                        </div>
                    </div>
                    <div className="product products-in-cart2-2">
                        <div className='product2 products-in-cart2-1'>
                            <img src={Book} alt="" />
                            <div className='info-product'>
                        <div className='init-product'>
                          <span className="product-description">Meta human</span>
                          <span className="product-price">$100</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur. Arcu sollicitudin quis nulla proin in.</p>
                            </div>
                            <div className='flecha-cierre'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="white">
                        <path d="M15.069 0L9.32349 5.95701L15.069 11.8966H11.6114L11.577 11.8616L7.53448 7.73887L3.4576 11.8966H0L5.74547 5.93954L0 0H3.4576L3.49201 0.034938L7.53448 4.17515L11.6114 0H15.069Z" fill="white"/>
                        </svg>
                            </div>
                        </div>
                    </div>
                    <div className="product products-in-cart2-2">
                        <div className='product2 products-in-cart2-1'>
                            <img src={Book} alt="" />
                            <div className='info-product'>
                        <div className='init-product'>
                          <span className="product-description">Meta human</span>
                          <span className="product-price">$100</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur. Arcu sollicitudin quis nulla proin in.</p>
                            </div>
                            <div className='flecha-cierre'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="white">
                        <path d="M15.069 0L9.32349 5.95701L15.069 11.8966H11.6114L11.577 11.8616L7.53448 7.73887L3.4576 11.8966H0L5.74547 5.93954L0 0H3.4576L3.49201 0.034938L7.53448 4.17515L11.6114 0H15.069Z" fill="white"/>
                        </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='cart-content-3'>
                <div className="total">
                    <div className='total-1'><h3>Total</h3></div>
                    <div className='total-2'><h6>Total</h6> <p>$0</p></div>
                    <div className='total-2'><h6>Sub - Total </h6> <p>$300</p></div>
                    <div className='total-2'><h4>Total (Including Tax)</h4> <span>$300</span></div>
                    <button>View my cart</button>
                    <button>Checkout</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Cart