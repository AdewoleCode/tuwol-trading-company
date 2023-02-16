import React from 'react'
import "./About.css"
import IMG2 from "../../assests/cocoa2.jpg"

const About = () => {
  return (
    <div className='about'>
      <h1>About the founder</h1>
      <div className="about-header">

        <div className="about-img">
          <img src={IMG2} alt="" />
        </div>
        <div className="about-text">
          <h2>ALH. A. A. ADEWOLE</h2>
          <h3>CHAIRMAN/MANAGING DIRECTOR</h3>
          <p>Lorem, ipsum dolor sit ame
            t consectetur adipisicing elit. Nam vero ut alias expl
            icabo adipisci iusto dicta incidunt aperiam quas, rem hic facilis odit veritatis sint,
            in, saepe cupiditate repudiandae accusamus?
            consectetur adipisicing elit. Nam vero ut alias expl
            icabo adipisci iusto dicta incidunt aperiam quas, rem hic facilis odit veritatis sint,
            in, saepe cupiditate repudiandae accusamu
            consectetur adipisicing elit. Nam vero ut alias expl
            icabo adipisci iusto dicta incidunt aperiam quas, rem hic facilis odit veritatis sint,
            in, saepe cupiditate repudiandae accusamu</p>
        </div>
      </div>

    </div>
  )
}

export default About