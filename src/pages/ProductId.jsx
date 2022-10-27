import axios from 'axios'
import React, { useEffect,  useState } from 'react'
import {  useParams } from 'react-router-dom'
import ProductInfo from '../components/productid/ProductInfo'
import SimilarProducts from '../components/productid/SimilarProducts'
import SliderImg from '../components/productid/SliderImg'
import './styles/productid.css'

const ProductId = () => {

  const [product, setProduct] = useState()
  const {id} =  useParams()
  
  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
    axios.get(URL)
    .then(res => setProduct(res.data.data.product))
    .catch(err => console.log(err))
  }, [id])
  
  return (
    <div>
    <div className='productid_product'>
    {
      product && <SliderImg product = {product}/>
    }
      <ProductInfo 
        product={product}
      />
    </div>

      <SimilarProducts 
        product = {product}
      />
    </div>
  )
}

export default ProductId
