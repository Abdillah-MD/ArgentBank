import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from "./redux/store"
import './index.css'
import Header from './components/Header/main.jsx'
import Home from './pages/Home/main.jsx'
import Footer from './components/Footer/main'
import SignIn from './pages/SignIn/main'
import Admin from './pages/Admin/main'
import SignUp from './pages/SignUp/main'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import Error404 from './pages/Error404/main'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
    <Router>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/accueil' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='*' element={<Error404 /> }/>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
  </Provider>
)