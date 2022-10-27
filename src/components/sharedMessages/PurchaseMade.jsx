import React from 'react'
import {BsFillCheckSquareFill} from 'react-icons/bs'
import './styles/purchasemade.css'

const PurchaseMade = ({showMessage, setShowMessage}) => {

  const handleShowMessage = () => {
    setShowMessage(!showMessage)
  }

  return (
    <div className={showMessage ? 'purchase_made' : 'purchase_made_show'}>
    <div className='purchase_made_container'>
      <h3 className='purchase_made_title'>Tu compra ha sido exitosa</h3>
      <BsFillCheckSquareFill className='purchase_made_icon' />
      <button onClick={handleShowMessage} className='purchase_made_btn'>Aceptar y regresar</button>
    </div>
    </div>
  )
}

export default PurchaseMade
