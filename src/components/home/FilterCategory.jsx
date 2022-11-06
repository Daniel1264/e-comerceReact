import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getProductsByCatgory } from '../../store/slices/products.slice'
import { getAllProducts } from '../../store/slices/products.slice'
import { useDispatch } from 'react-redux'
import './styles/filtercategory.css'
const FilterCategory = () => {

    const [categories, setCategories] = useState()


    useEffect (() => {
        const URL  = `https://ecommerce-api-react.herokuapp.com/api/v1/products/categories`
        axios.get(URL)
        .then(res => setCategories(res.data.data.categories))
        .catch(err => console.log(err))
    }, [])

    console.log(categories);
    const dispatch = useDispatch()


    const handleFetchCategorie = id => {
        if (id) {
            dispatch(getProductsByCatgory(id))
        } else {
            dispatch(getAllProducts())
        }
    }


  return (
    <div className='filter_category'>
      <h2>categoryes</h2>
      <ul className='filter_category_list'>
      <li className='filter_category_option' onClick={()=> handleFetchCategorie()}>All products</li>
        {
            categories?.map(categorie => (
                <li className='filter_category_option' style={{cursor: 'pointer'}} onClick={() => handleFetchCategorie(categorie.id)} key= {categorie.id}>{categorie.name}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default FilterCategory
