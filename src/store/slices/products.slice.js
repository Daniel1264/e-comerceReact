import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
    name : 'products',
    initialState: null,
    reducers: {
        setProductsGlobal : (state, action) => action.payload,
        setAscendingProducts: state => {
            state.sort((a, b) => a.price - b.price)
        },
        setDescendingProducts: state => {
            state.sort((a, b) => b.price - a.price)
        }
    }
})

export const {setProductsGlobal, setAscendingProducts, setDescendingProducts} = productsSlice.actions

export default  productsSlice.reducer

export const getAllProducts = () => (dispatch) => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products`
    axios.get(URL)
    .then(res => dispatch(setProductsGlobal(res.data.data.products)))
    .catch(err => console.log(err))
}

export const getProductsByCatgory = id => (dispatch) => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${id}`
    axios.get(URL)
    .then(res => dispatch(setProductsGlobal(res.data.data.products)))
    .catch(err => console.log(err))

}