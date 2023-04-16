import React from 'react'
import './header.scss'
import Logo from '../Header/Logo.png'
import Group from '../Header/group.png'
const Header = () => {
  return (
    <div className='header-c'>
      <h3>Cover</h3>
      <div className="header">
        <div className="header-title">
          <img src={Logo} alt="" />
          <h1>Morent</h1>
        </div>
        <div className="header-p">
          <h1>Car Rent</h1>
          <span>Website + Dashboard</span>
        </div>
        <div className="header-button">
          <button type='submit'>10+ Screens</button>
        </div>
        <div className="header-category">
        <div className="headers-c">
          <div className="header-card">
            <img src={Group} alt="" />
            <h1>Fully Customizable</h1>
          </div><div className="header-card">
            <img src={Group} alt="" />
            <h1>Figma Component</h1>
          </div><div className="header-card">
            <img src={Group} alt="" />
            <h1>Responsive Ready</h1>
          </div>
            </div>
          <div className="headers-c">
          <div className="header-card">
            <img src={Group} alt="" />
            <h1>Minimalist & Modern</h1>
            
            </div>
          <div className="header-card">
            <img src={Group} alt="" />
            <h1>Figma Auto Layout</h1>
          </div><div className="header-card">
            <img src={Group} alt="" />
            <h1>Organized layer</h1>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header