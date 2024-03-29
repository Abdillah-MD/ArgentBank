import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'
import Header from './components/Header/main.jsx'
import Home from './pages/Home/main.jsx'
import Footer from './components/Footer/main'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/accueil' element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
