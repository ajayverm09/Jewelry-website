import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Blogs from './Pages/Blogs'
import Contact from './Pages/Contact'
import BlogPost from './Pages/SingleBlog'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <div className='overflow-hidden'>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/blogs/:id' element={<BlogPost/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
