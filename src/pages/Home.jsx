import  { useEffect, useState} from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import CardProduct from '../components/home/CardProduct'
import InputSearch from '../components/home/InputSearch'
import { getAllProducts } from '../store/slices/products.slice'
import './styles/home.css'
import PurchaseMade from '../components/sharedMessages/PurchaseMade'
import FilterCategory from '../components/home/FilterCategory'
import FilterPrice from '../components/home/FilterPrice'
import OrderByPrice from '../components/home/OrderByPrice'
const Home = () => {
  
  const [inputText, setInputText] = useState('')
  const [filterByText, setFilterByText] = useState()
  const [showMessage, setShowMessage] = useState(false)
  const [filterByPrice, setFilterByPrice] = useState({
    from: 0,
    to: Infinity
  })
  const [filterMenu, setFilterMenu] = useState(false)


  const products = useSelector(state => state.products )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  useEffect(() => {
    if (inputText !== '' && products) {
      const cb = (product) => product.title.toLowerCase().includes(inputText.toLowerCase().trim())
      setFilterByText(products.filter(cb))
    } else {
      setFilterByText(products)
    }
  }, [inputText, products])

  const calbackFilterPrice  =(product) => {
        return +product.price >= filterByPrice.from && +product.price <= filterByPrice.to
  }




  return (
    <main className='home'>
    <InputSearch 
    setFilterMenu = {setFilterMenu}
    filterMenu = {filterMenu}
      setInputText = {setInputText}
      inputText = {inputText}
    />
    <div className='home_container_info'>

    <div className={filterMenu ? 'home_filters' : 'home_filters_show'}>
    <FilterPrice 
        setFilterByPrice = {setFilterByPrice}
      />
      <FilterCategory />
      <OrderByPrice />
      </div>
      <div className='home_container'>
        {
          filterByText?.filter(calbackFilterPrice).map(product => (
            <CardProduct 
              setShowMessage = {setShowMessage}
              showMessage = {showMessage}
              key={product.id}
              product = {product}
            />
          ))
        }
      </div>
    </div>

    <PurchaseMade 
      showMessage = {showMessage}
      setShowMessage = {setShowMessage}
    />


    </main>
  )
}

export default Home
