import React from 'react'
import './styles/cardpurchase.css'

const CardPurchase = ({purchase}) => {
    console.log(purchase);
  return (
    <article className='purchase'>
        <header className='header_purchase'>{purchase.updatedAt}</header>
        <div className='purchase_info'>
            {
                purchase.cart.products.map(product => (
                    <section className='purchase_products' key={product.id}>
                        <h3 className='purchase_title'>{product.title}</h3>
                        <div className='purchase_quantity'>{product.productsInCart.quantity}</div>
                        <div className='purchase_price'>{product.price}</div>
                    </section>
                ))
            }
        </div>
    </article>
  )
}

export default CardPurchase
