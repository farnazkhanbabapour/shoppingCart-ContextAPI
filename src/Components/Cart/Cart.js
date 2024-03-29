import React, { useContext } from 'react'
import productContext from '../../Context/ProductContext'
import { BsBag } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import './Cart.css'

export default function Cart() {
    const contextData = useContext(productContext)
    return (
     
    
         <aside className={`bag-sidebar ${contextData.isShowCart ? "active" : ""}`}> 
       
     
         <h3 className="bag-title">
             <span>
                 <BsBag />
                 Bag
             </span>
             <span>
                 <AiOutlineClose className='close-icon' onClick={()=>{
                   contextData.setIsShowCart(false)
                 }} />
             </span>
         </h3>
         {contextData.userCart.map((product) =>(
         <div className="row bag-wrapper">
             <div className='col-12 mt-5'>
                 <div className='card py-3 px-3'>
                     <div className='col-12 text-center'>
                         <img src="/images/1.jpg" alt="Product Image" className='cart-img-top w-75' />
                     </div>
                     <div className='card-body d-flex flex-column justify-content-center align-items-center'>
                         <p className="card-text">{product.title}</p>
                         <p className="price">{product.price}$</p>
                         <br />
                         <a href="#" className='btn btn-danger'>Buy</a>
                         <a href="#" className='btn btn-outline-dark mt-3 text-capitalize'>
                             More Information
                         </a>
                         <p className="number">{product.count}</p>
                     </div>
                 </div>
             </div>
         </div>
           ))}

                    
         </aside>

   
     
    
  )
}
