import React, { PureComponent } from 'react'
import CardHeadData from './CardHeadData'
import './CardPlate.css'
const CardHead = (props) => {
  return (
    <>
    <div className="container">
    <CardHeadData 
    img = "./images/girl.png"
    heading = "Heading 1" 
    para = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    date = "18-March-2022"
    /> <br />

<CardHeadData 
    img = "./images/boy.png"
    heading = "Heading 2" 
    para = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    date = "19-March-2022"
    />

<CardHeadData 
    img = "./images/vr.jpg"
    heading = "Heading 3" 
    para = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    date = "20-March-2022"
    />

<CardHeadData 
    img = "./images/table.jpg"
    heading = "Heading 4" 
    para = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    date = "19-March-2022"
    />

    </div>
    </>
  )
}

export default CardHead