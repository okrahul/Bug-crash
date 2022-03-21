import React, { useState } from 'react'
import './navs.css'



const BrandTile = () => {

 
  const [modal, setModal] = useState(false);
  const toogleModel = () => {
    setModal(!modal)
  }

  if(modal) {
    document.body.classList.add("active-modal")
  }else{
    document.body.classList.remove("active-modal")

  }


  return (
<>
<div className="head">
<h2>INSIGHT</h2>
<p> If my coworkers at Pop Art motivate me to greatness and inspire my days, my friends
motivate me to deepness and light up my nights. I would sooner trust my deepest secrets to.</p>

<button className='open-model' onClick={toogleModel}> Open to Learn </button>
</div>

{

modal && (
<dialog open className='modal-box' >
  <h2>Subscribe us!!</h2>
  <p>subscribe us to get update knowledge click <a href='#'>Gmail</a></p>
  <button className="close-button" onClick={toogleModel}> close model </button>
</dialog>

)

}




</>

    )
}

export default BrandTile