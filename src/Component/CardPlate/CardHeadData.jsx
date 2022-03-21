import React from 'react'
import './CardPlate.css'

const CardHeadData = (props) => {
    return (
        <>
            <div className="plate">
                <div className='plate_img'><img src={props.img} alt="image" /></div>
                
                <div className="plate_data">
                <h3>{props.heading}</h3>
                    <p> {props.para} <span>{props.date}</span>
                    </p>
                    
                    </div>

            </div>
        </>
    )
}

export default CardHeadData