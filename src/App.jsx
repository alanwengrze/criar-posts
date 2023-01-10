import { useState } from 'react'

import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'

import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500 flex flex-col justify-between">
      <NavBar />
    <div className="max-w-5xl mx-auto mt-8 px-8">
      <Outlet />
    </div>
      <Footer />
    </div>
  )
}

export default App
