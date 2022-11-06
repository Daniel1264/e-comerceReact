import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './styles/loginscreen.css'

const LoginScreen = () => {

   const {register, handleSubmit, reset} =  useForm()
   const [isLogged, setIsLogged] = useState(false)

   const submit = data => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
    axios.post(URL, data)
    .then(res => {
        console.log(res.data);
        localStorage.setItem('token', res.data.data.token)
    setIsLogged(true)
    })
    .catch(err => console.log(err))
   }

   useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLogged(true)
    } else {
      setIsLogged(false)
    }
   }, [])

   const handleLoput = () => {
    localStorage.removeItem('token')
    setIsLogged(false)
   }


   if (isLogged) {
    return (
      <div className='login_message'>
        <h1 className='login_title'>your are login</h1>
        <button className='login_btn' onClick={handleLoput}>logout </button>
      </div>
    )
   }
 
  return (
    <div className='form_container_login'>
      <form className='form_login' onSubmit={handleSubmit(submit)}>
        <h3 className='form_title'>Bienvenido a e-commerce</h3>
      <div className='form_container_login_data'>
        <ul>
          <li>Correo: <span>ramosdaniel014@academlo.com</span></li>
          <li>contraseña: <span>crypt0</span></li>
        </ul>
      </div>
        <div className='form_container_information'>
            <label className='form_label' htmlFor='email'>Email</label>
            <input placeholder='email'  className='form_input' type='email' id='email' {...register('email')} />
        </div>
        <div className='form_container_information'>
            <label className='form_label' htmlFor='password'>Password</label>
            <input placeholder='password' className='form_input' type='password' id='password' {...register('password')} />
        </div>
        <button className='form_btn'>Login</button>
      </form>
    </div>
  )
}

export default LoginScreen
