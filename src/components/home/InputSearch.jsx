import React from 'react'
import './styles/inputsearch.css'

const InputSearch = ({setInputText, inputText}) => {

    const handleChange = (e) => {
        setInputText(e.target.value);
    }
  return (
    <div className='input_container'>
      <input className='input' placeholder='Busca tu producto' value={inputText} onChange={handleChange} type='text' />
    </div>
  )
}

export default InputSearch
