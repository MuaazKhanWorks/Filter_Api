import React from 'react'
import Category from './Components/Category'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Form from './Addcard/Form'
import './App.css'

const App = () => {
  return (
    <>

      <Router>
        <button><Link style={{color:"white", textDecoration:"none"}} to='/Addcard/Form'>Add Card</Link></button>
        <Routes>
          <Route path='/Addcard/Form' element={<Form />} />
        </Routes>
      </Router>
      
      <Category />
    </>
  )
}

export default App
