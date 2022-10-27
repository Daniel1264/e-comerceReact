import React, { useState } from 'react'
import { getAllProductsCart } from '../store/slices/cart.slice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {useEffect} from 'react'
import CartProduct from '../components/cart/CartProduct.jsx'
import axios from 'axios'
import { setCartGlobal } from '../store/slices/cart.slice'
import getConfig from '../utils/getConfig'
import './styles/cart.css'


const Cart = () => {

  const [total, setTotal] = useState(0)

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)

  useEffect(() => {
    dispatch(getAllProductsCart())
  },[])

  const handlePurchase = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    const data = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
  }
  
    axios.post(URL, data, getConfig())
    .then(res => {
      console.log(res.data)
      dispatch(setCartGlobal(null))
    })
    .catch(err => console.log(err))

    setTotal(0)

  }

  useEffect(() => {

    if (cart) {
      const result = cart.products.reduce((acc, cv) => {
        return acc + Number(cv.price)  * cv.productsInCart.quantity
      }, 0)
      setTotal(result)
    }
  }, [cart])


  return (
    <div className='cart'>
      <div className='cart_container'>
      {
          cart?.products.map((product) => (
            <CartProduct 
              key= {product.id}
              product ={product}
            />
          ))
      }
      </div>
      <h2>Total: {total}</h2>
      <button className='cart_btn' onClick= {handlePurchase}>buy now!!</button>
    </div>
  )
}

export default Cart
