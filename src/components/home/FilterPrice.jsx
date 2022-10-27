import React from 'react'

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
    <form onSubmit={handleSubmit}>
        <h3>Price</h3>
        <div>
            <div>
                <label htmlFor='from'>from</label>
                <input type='text' id='from'/>
            </div>
            <div>
                <label htmlFor='to'>to</label>
                <input type='text' id='to'/>
            </div>
        </div>
        <button>Filter</button>
    </form>
  )
}

export default FilterPrice
