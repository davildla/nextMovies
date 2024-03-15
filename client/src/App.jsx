import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Main from './components/Main/Main'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Main />
      <Footer />
    </div>
  )
}

export default App
