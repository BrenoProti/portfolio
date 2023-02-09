import React from 'react'
import Hand from '../../assets/hand.svg'
import Send from '../../assets/send.svg'

function Data() {
  return (
    <div className="home__data">
        <h1 className="home__title">
            Breno Proti
            
            <img src={Hand} className="home__hand"/>
        
        </h1>

        <h3 className='home__subtitle'>
            Fullstack Developer
        </h3>

        <p className="home__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi maxime eaque
             aperiam perspiciatis, sequi.
        </p>

        <a href="#contact" className="button button--flex">
            Fale comigo
            <img className='button__icon' src={Send}/>
        </a>
    </div>
  )
}

export default Data