import React from 'react'
import Backend from './Backend'
import Frontend from './Frontend'
import './skills.css'

function Skills() {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">
            Habilidades
        </h2>

        <span className="section__subtitle">
            Nível técnico
        </span>

        <div className="skills__container container grid">
            <Frontend />
            <Backend />
        </div>
    </section>
  )
}

export default Skills