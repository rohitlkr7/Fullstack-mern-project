import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import TopBanner from './components/TopBanner';


const App = () => {
  return (
    <div>
      <TopBanner/>
      <Header/>
         <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
