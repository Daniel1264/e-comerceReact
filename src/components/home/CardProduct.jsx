import axios from 'axios';
import React from 'react'
import { BsFillCartPlusFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import './styles/cardproduct.css'
import getConfig from '../../utils/getConfig'
import { useDispatch } from 'react-redux';
import { getAllProductsCart } from '../../store/slices/cart.slice';

const CardProduct = ({product, setShowMessage, showMessage}) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleNavigation = () => {
    navigate(`/product/${product.id}`)
  }

  const handleAddCart = (e) => {
    e.stopPropagation()
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart`
    const data = {
      id: product.id,
      quantity: 1
    }
    axios.post(URL, data, getConfig())
    .then(res => {
      console.log(res.data)
      dispatch(getAllProductsCart())
    })
    .catch(err => console.log(err))

    setShowMessage(!showMessage)
  }

  return (
    <article className='product' onClick={handleNavigation}>
      <header className='product_header'>
        <img className='product_img' src={product.productImgs[0]} />
      </header>
      <div className='product_body'>
        <h3 className='product_title'>{product.title}</h3>
        <div>
          <span className='product_price_label'>Price</span>
          <p className='product_price_number'>{product.price}</p>
        </div>
        <button onClick={handleAddCart} className='product_icon_container'>
          <BsFillCartPlusFill  className='product_icon' />
        </button>

      </div>
    </article>
  )
}

export default CardProduct
