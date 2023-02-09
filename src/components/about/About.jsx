import React from 'react'
import './about.css'
import AboutImg from '../../assets/profile2.jpg'
import CV from '../../assets/John-Cv.pdf'
import FilesIcon from '../../assets/files.svg'
import Info from './Info'

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">
            Sobre Mim
        </h2>

        <span className="section__subtitle">
            Introdução
        </span>

        <div className="about__container container grid">
            <img src={AboutImg} className="about__img" />

            <div className="about__data">
                <Info />

                <p className="about__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor debitis facilis pariatur qui in expedita cumque corporis earum asperiores praesentium et.
                </p>

                <a download="" href={CV} className="button button--flex">
                    Baixar Curriculo

                    <img src={FilesIcon} className='button__icon'/>
                </a>
            </div>
        </div>
    </section>
  )
}

export default About