import React from 'react'
import './index.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Products from './pages/Products'
import PlaceOrder from './pages/PlaceOrder'
import Login from './pages/Login'
import Orders from './pages/Orders'
import NavBar from './components/NavBar'
import Footer from './components/Footer'



const App = () => {
  return (
      <div className='home-section'>
       <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/products/:productId' element={<Products/>}/>
          <Route path='/place-order' element={<PlaceOrder/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/orders' element={<Orders/>}/>

        </Routes>
        <Footer/>

      </div>
  )
}

export default App
