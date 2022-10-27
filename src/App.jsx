
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Cart from './pages/Cart'
import Purchases from './pages/Purchases'
import ProductId from './pages/ProductId'
import LoginScreen from './pages/LoginScreen'
import Header from './components/shared/Header'

function App() {




  return (
    <div className="App">
    <Header />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/product/:id' element ={<ProductId />} />
        <Route path='/login' element={<LoginScreen />} />

        <Route element ={<ProtectedRoutes />}>
          <Route path='/cart'  element ={<Cart />} />
          <Route path='/purchases' element ={<Purchases />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
