import React, { useContext } from 'react'
import productContext from "../../Context/ProductContext";

export default function Toast() {
    const contextData= useContext(productContext)
  return (
      <div className='toast-container position-fixed bottom-0 me-4 end-0 mb-4'>
          <div className={`toast align-items-center ${contextData.isShowToast ? 'show' : ''} text-white bg-primary`}> {/* add show class to show toast */}
              <div className='d-flex justify-content-between align-items-center'>
                  <button type='button' className='btn-close btn-close-wsite ms-3' onClick={()=>{
                    contextData.setIsShowToast(false)
                  }}></button>
                  <div className='toast-body'>Added to Cart</div>
              </div>
          </div>
      </div>
  )
}
