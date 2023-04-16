import React from 'react'
import img1 from '../Nav/command.png'
import './Nav.scss'
const Nav = () => {
    return (
        <div className="div">

<div className="nav">
            <h4>Label</h4>    
             <div className='nav-c'>
                    <div className="nav-title">
                        <img src={img1} alt="" />
                        <h3>Cover</h3>
                    </div>
                    <div className="nav-date">
                        <span>Last Updated:</span> <h3>8 Aug 2022</h3>
                    </div>
            </div>
        </div>
        <div className="nav">
            <h4>Label</h4>    
             <div className='nav-c'>
                    <div className="nav-title">
                        <img src={img1} alt="" />
                        <h3>Licence and Follow</h3>
                    </div>
                    <div className="nav-date">
                        <span>Last Updated:</span> <h3>8 Aug 2022</h3>
                    </div>
            </div>
        </div>
        
        </div>
    )
}

export default Nav