import React from 'react'
import Hand from '../../assets/hand.svg'
import Send from '../../assets/send.svg'
import Typed from 'react-typed'

function Data() {
  return (
    <div className="home__data">
        <h1 className="home__title">
            Breno Proti
            
            <img src={Hand} className="home__hand"/>
        
        </h1>

        <h3 className='home__subtitle'>
            Desenvolvedor Full Stack
        </h3>

        <p className="home__description">
        <Typed 
                strings={[
                    "Olá, que bom ver você aqui! Meu nome é Breno, tenho 23 anos e sou programador!",
                    "Se quiser falar comigo, é só clicar no botão abaixo =D"]}
                typeSpeed={30}
                backSpeed={20}
                backDelay={3000}
                loop
                loopCount={3}
            />
        </p>

        <a href="#contact" className="button button--flex">
            Fale comigo
            <img className='button__icon' src={Send}/>
        </a>
    </div>
  )
}

export default Data