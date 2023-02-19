import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './component/About'
import Blog from './component/Blog'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Header from './component/Header'
import Home from './component/Home'
import Loading from './component/Loading'
import Services from './component/Services'


export default function App() {
  return (
    <>
    <Header/>
    <Loading/>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='blog' element={<Blog/>}/>
      </Routes>
      <Footer/>
    </>
  )
}
