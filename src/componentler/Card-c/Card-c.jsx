import React from 'react'
import group from '../Header/group.png'
import Pickola from '../Card-c/Pickola.png'
import './Card-c.scss'
const Card = () => {
  return (
    <div>
      <div className="card-c">
       <div className="card-c-title">
        <h1>License Agreement & Terms of use</h1>
        <img src={Pickola} alt="" />
       </div>
       <div className="card-c-p">
       <p> <img src={group} alt="" /> Use for your moodboard or your exploration project </p>
       <p> <img src={group} alt="" /> You can use in personal or commercial projects</p>
       <p> <img src={group} alt="" />Selling this kit on the marketplace </p>
        <p> <img src={group} alt="" /> To be used in paid UI Kit </p>
       </div>
       <div className="div-bottom">

       </div>
       <div className="card-c-info">
        <h5>Have an amazing project? Send to our email :</h5>
          <h5>📧 hellopickolab@gmail.com</h5>
       </div>
       <div className="card-c-info-c">
       <div> <h3>Thanks for your attention!</h3></div>
        <div className='img'>                     🙌</div>
       </div>
       <div className="card-c-finish">
        <h1>
        Follow us to know more 
        </h1>
       </div>
      </div>
    </div>
  )
}

export default Card