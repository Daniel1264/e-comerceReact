import axios from 'axios';
import React, { useState } from 'react'
import { BsFillCartPlusFill } from 'react-icons/bs';
import getConfig from '../../utils/getConfig';
import './styles/productinfo.css'

const ProductInfo = ({product}) => {

  const [counter, setCounter] = useState(1)

  const handleMinus = () => {
    if (counter -1 > 0) {
    setCounter(counter - 1)
    }
  }
  const handlePlus = () => {
    setCounter(counter + 1)
  }
  
  const handleAddCart = () => {
    const data = {
      id: product.id,
      quantity: counter 
    }
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    axios.post(URL, data, getConfig())
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }



  return (
    <article className='product_info'>
        <h3 className='product_info_title'>{product?.title}</h3>
        <p className='product_info_description'>{product?.description}</p>
        <footer className='product_info_footer'>
          <div className='product_info_price_container'>
            <h3 className='product_info_price_label'>price</h3>
            <span className='product_info_price_number'>{product?.price}</span>
          </div>
          <div className='product_info_quantity_container'>
            <h3 className='product_info_quantity_label'>Quantity</h3>
            <div className='counter'>
              <div className='counter_minus' onClick={handleMinus}>-</div>
              <div className='counter_number'>{counter}</div>
              <div className='counter_plus'  onClick={handlePlus}>+</div>
            </div>
          </div>
          <button onClick={handleAddCart} className='product_info_btn'>Add to cart  <BsFillCartPlusFill  className='product_info_icon' /></button>
        </footer>
    </article>
  )
}

export default ProductInfo
