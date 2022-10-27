import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardPurchase from '../components/purchases/CardPurchase'
import getConfig from '../utils/getConfig'
import './styles/purchases.css'

const Purchases = () => {

  const [purchases, setPurchases] = useState()

  useEffect(() => {
    const URL ='https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    axios.get(URL, getConfig())
    .then(res => setPurchases(res.data.data.purchases))
    .catch(err => console.log(err))
  },[])

  console.log(purchases);

  return (
    <div className='purchases'>
      <h2 className='purchases_title'>my purchases</h2>
      <div className='purchases_container'>
        {
          purchases?.map (purchase => (
            <CardPurchase 
              purchase = {purchase}
              key = {purchase.id}
            />
          )) 
        }
      </div>
    </div>
  )
}

export default Purchases
