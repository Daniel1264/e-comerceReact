import React from 'react'
import { useDispatch } from 'react-redux'
import {setAscendingProducts} from '../../store/slices/products.slice'
import {setDescendingProducts} from '../../store/slices/products.slice'
import './styles/orderbyprice.css'

const OrderByPrice = () => {

    const dispatch = useDispatch()

    const handleAssending = () => {
        dispatch(setAscendingProducts())
    }

    const handleDessending = () => {
        dispatch(setDescendingProducts())
    }
  return (
    <div className='price'>
    <h3 className='price_text'>Order by price</h3>
    <div className='price_buttons'>
      <button className='price_btn' onClick={handleAssending}>Order up</button>
      <button className='price_btn' onClick={handleDessending}>Sort down</button>
      </div>
    </div>
  )
}

export default OrderByPrice
