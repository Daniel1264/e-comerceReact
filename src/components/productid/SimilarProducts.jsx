import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CardProduct from '../home/CardProduct'
import './styles/similarproduct.css'

const SimilarProducts = ({product}) => {
    const [categories, setCategories] = useState()
    const [idCategory, setIdCategory] = useState()
    const [similarProducts, setSimilarProducts] = useState()

    useEffect(() => {
      const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/categories`
      axios.get(URL)
      .then(res => setCategories(res.data.data.categories))
      .catch(err => console.log(err))
    }, [])

    useEffect (() => {
        if (categories && product) {
            const cb = category => category.name === product.category
            setIdCategory(categories.filter(cb)[0].id)
        }
    }, [categories, product])


    useEffect(() => {
      if (idCategory) {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${idCategory}`
        axios.get(URL)
        .then(res => setSimilarProducts(res.data.data.products))
        .catch(err => console.log(err))
      }
    }, [idCategory])
  
  return (
    <div>
      <h2 className='similar_products_title'>Discoveer</h2>
      <div className='similar_products_container'>
        {
          similarProducts?.map(prod => {
            if(product.id !== prod.id) {
              return <CardProduct 
                product={prod}
                key = {prod.id}
              />
            }
          })
        }
      </div>
    </div>
  )
}

export default SimilarProducts
