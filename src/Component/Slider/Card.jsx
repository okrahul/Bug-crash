import React from 'react'
import './Slider.css';





const Card = (props) => {
  return (
    <>
   
<div className="wrapper">
<div className='card'>
    <div className="card_body">
        <img className='card_img' src={props.img} alt = "imag"/>
        <h2 className='card_title'>{props.title}</h2>
        <p className="card_description">{props.para}</p>
        <p className="dates">{props.date}</p>
    </div>
   </div>    
   </div>
    </>
  )
}

export default Card