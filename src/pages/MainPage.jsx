import React from 'react'
import './MainPage.scss'
import Nav from '../componentler/Nav/Nav'
import Header from '../componentler/Header/Header'
import Card from '../componentler/Card-c/Card-c'
const MainPage = () => {
  return (
    <div className="con">

    <div className='container'>
      <Nav/>
     <div className="display">
     <div className="card">
     <Header/>
     </div>
      <Card/>
     </div>
    </div>
    </div>
  )
}

export default MainPage