import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Navigate from './components/Navigate'

function App() {

  return (
  <main>
    <Header/>
    <div className='divider'></div>
    <Navigate/>
    <Footer/>
  </main>
  )
}

export default App
