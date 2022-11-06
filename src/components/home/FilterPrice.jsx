import React from 'react'
import './styles/filterprice.css'

const FilterPrice = ({setFilterByPrice}) => {

    const handleSubmit = (e) => {
        e.preventDefault()

        const from = +e.target.from.value
        const to = +e.target.to.value
        const obj = {
            from: from,
            to: to != 0 ? to : Infinity
        }
        setFilterByPrice(obj)
    }


  return (
    <form className='form_filter' onSubmit={handleSubmit}>
        <h3 className='form_title_filter'>Price</h3>
        <div className='form_container'>
            <div className='form_information'>
                <label htmlFor='from'>from</label>
                <input className='form_input_filter' type='text' id='from'/>
            </div>
            <div className='form_information'>
                <label htmlFor='to'>to</label>
                <input className='form_input_filter' type='text' id='to'/>
            </div>
        </div>
        <button className='form_btn_filter'>Filter</button>
    </form>
  )
}

export default FilterPrice
