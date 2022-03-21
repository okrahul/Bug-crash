import React from 'react'
import Slider from './Component/Slider/Slider'
import CardHead from './Component/CardPlate/CardHead'
import NavTile from './Component/NavTile/NavTile'
import {BrowserRouter} from 'react-router-dom'
import Footer from './Component/Footer/Footer'
import './index.css'






const App = () => {

  return (
    <>
    <BrowserRouter>
    <NavTile />
    <CardHead />
    <h4 className='topic'>Trending</h4>
    <Slider /> 
    <h4 className='topic'>Web App testing</h4>
    <Slider /> 
    <h4 className='topic'>User Interview</h4>
    <Slider /> 
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App