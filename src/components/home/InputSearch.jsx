import React from 'react'
import './styles/inputsearch.css'

const InputSearch = ({setInputText, inputText, setFilterMenu, filterMenu}) => {


    const handleChange = (e) => {
        setInputText(e.target.value);
    }
    const handleFilterShow = () => {
      setFilterMenu(!filterMenu)
    }
  return (
    <div className='input_container'>
        <input className='input' placeholder='Busca tu producto' value={inputText} onChange={handleChange} type='text' />
        <button onClick={handleFilterShow} className='filter_search'>Filter</button>
    </div>
  )
}

export default InputSearch
