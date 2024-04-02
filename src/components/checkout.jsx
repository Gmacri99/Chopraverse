import add from '../assets/Vector.svg'
import trash from '../assets/trash.svg'
import visa from '../assets/visa.svg'
import Moon from '../assets/MoonPay.svg'
import Google from '../assets/Gpay.svg'
import Apple from '../assets/APay.svg'
import Book from '../assets/book.webp'
import credit from '../assets/credit-card.svg'
import cards from '../assets/cardss.svg'
import { useEffect, useState } from 'react'

const Checkout = () => {

    const [miVariable, setMiVariable] = useState(false);
    const [miVariable2, setMiVariable2] = useState(false);

    useEffect(() => {
      const elemento = document.getElementById('primero');
      const elemento2 = document.getElementById('segundo');
      
      if (miVariable) {
        elemento.classList.remove('move-right');
        elemento2.classList.add('move-left');
      } else {
        elemento2.classList.remove('move-left');
       elemento.classList.add('move-right');
      }
    }, [miVariable]);

    useEffect(() => {
        const elemento3 = document.getElementById('tercero');
        const elemento4 = document.getElementById('cuarto');
        
        if (miVariable2) {
            elemento3.classList.add('desaparece');
            elemento4.classList.remove('desaparece');
        } else {
            elemento4.classList.add('desaparece');
          elemento3.classList.remove('desaparece');
        }
      }, [miVariable2]);

  return (
    <section className="checkout">
                <div id='primero' className="div-checkout move-right">
            <div className="left-checkout">
                <div id='tercero' className="credit-card">
                    <h3 className='title-credits'>Credit Cart</h3>
                    <div className='lista-tarjetas'>
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
                </div>  
                <div id='cuarto' className="credit-card22 desaparece">
                    <div className="credit-card2">
                        <div className='div-add-1'>
                        <div className='div-titles-card'><span onClick={()=>setMiVariable2(false)} className='titless'>X</span><h3 className='title-credits'>Credit Cart</h3></div>
                            <p>Lorem ipsum dolor sit amet consectetur. Vitae pharetra tortor ipsum in sem lorem vestibulum orci. </p>
                        </div>
                        <div>
                            <img src={credit} alt="" />
                        </div>
                    </div>
                    <div className='credit-card3'>
                        <h3>Card details</h3>
                        <div className='credit-card4'>
                            <div className='credit-card5'>
                                <input type="text" placeholder='John'/>
                                <input type="text" placeholder='Doe'/>
                            </div>
                            <div className='credit-card6'>
                                <img src={cards} alt="" />
                                <input className='credit-card6-input1' type="text" placeholder='5189 - 5385 - 6122 -  4442'/>
                                <input className='credit-card6-input2' type="text" placeholder='29 / 25'/>
                                <input className='credit-card6-input3' type="text" placeholder='191'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="payment-options">
                    <h3 className='title-credits'>Pay with</h3>
                    <div className='lista-tarjetas gap-3'>
                        <div className='tarjeta'>
                            <div className='tarjeta-div-3'>
                                <img src={Moon} alt="" />
                            </div>
                            <div className='tarjeta-div-4'>
                            <label className="custom-checkbox">
                                    <input type="checkbox" />
                                    <span className="checkmark" />
                                </label>
                            </div>
                        </div>
                        <div className='tarjeta'>
                            <div className='tarjeta-div-3'>
                                <img src={Google} alt="" />
                            </div>
                            <div className='tarjeta-div-4'>
                            <label className="custom-checkbox">
                                    <input type="checkbox" />
                                    <span className="checkmark" />
                                </label>
                            </div>
                        </div>
                        <div className='tarjeta'>
                            <div className='tarjeta-div-3'>
                                <img src={Apple} alt="" />
                            </div>
                            <div className='tarjeta-div-4'>
                                <label className="custom-checkbox">
                                    <input type="checkbox" />
                                    <span className="checkmark" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right-checkout'>
                <div className='content-checkout-right'>
                    <h3>Products in cart</h3>
                    <div className="products-in-cart">
                    <div className="product">
                        <div className='product2'>
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
                    <div className="product">
                        <div className='product2'>
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
                    <div className="total">
                    <div className='total-1'><h3>Total</h3></div>
                    <div className='total-2'><h6>Total</h6> <p>$0</p></div>
                    <div className='total-2'><h6>Sub - Total </h6> <p>$300</p></div>
                    <div className='total-2'><h4>Total (Including Tax)</h4> <span>$300</span></div>
                    <button >Make Payment</button>
                    </div>
                </div>
            </div>
                </div>


            <div id='segundo' className='contenido-checkout content-contenido '>
                <div className='padre-checkout-right'>
                    <div className='right-checkout2 '>
                        <div className='content-checkout-right2'>
                            <h3>Products in cart</h3>
                            <div className="products-in-cart">
                            <div className='pedidos no-pd-pedidos'>
                                <div className="product ">
                        <div className='product2'>
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
                                <div className="product no-border">
                        <div className='product2'>
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
                        </div>
                    </div>
                </div>
                    <div className='segundo-div-total'>
                        <div className='total-pedido2'>
                            <h3>Total</h3>
                            <div className='contenido-total-pedido2'>
                                <div>
                                    <p>Total</p>
                                    <p>$0</p>
                                </div>
                                <div>
                                    <p>Sub - Total </p>
                                    <p>$300</p>
                                </div>
                                <div>
                                    <h4>Total (Including Tax)</h4>
                                    <h4>$300</h4>
                                </div>
                            </div>   
                            <button onClick={()=>setMiVariable(true)}>Make Payment</button>             
                        </div>
                </div>
            </div>
  </section>
  )
}

export default Checkout