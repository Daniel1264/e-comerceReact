import axios from 'axios'
import React from 'react'
import {FiTrash2} from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { getAllProductsCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import './styles/cartproduct.css'

const CartProduct = ({product}) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
        axios.delete(URL, getConfig())
        .then(res => {
            console.log(res.data)
            dispatch(getAllProductsCart())
        })
        .catch(err => console.log(err))
    }

    console.log(product);
  return (
    <article className='cart_p'>
        <h2 >{product.title}</h2>
        <ul>
            <li>Price<span>{product.price}</span></li>
            <li>Quantity<span>{product.productsInCart.quantity}</span></li>
        </ul>
        <button onClick={handleDelete} className='cart_p_btn'>
        <FiTrash2 className='cart_p_icon '/>
        </button>
        
    </article>
  )
}

export default CartProduct
