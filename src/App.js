import React from 'react'
import './App.css'
import {Box} from '@mui/material'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import ExerciseDetail from './pages/ExerciseDetail'
import  Home  from './pages/Home'
import {Route, Routes} from 'react-router-dom'


const App = () => {
  return (
   <Box width='400px' sx={{ width: { xl: '1488px' } }} m="auto">
        <Navbar/>
       

        <Routes>
            {/* it has to be imported in index.js also as browserrouter */}
            <Route path='/' element={<Home></Home>} />
            <Route path='/exercise/:id' element={<ExerciseDetail/>} />
        </Routes>
        <Footer/>

   </Box> 
  )
}

export default App
