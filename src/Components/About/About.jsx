import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt=""/>
        </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt=""/>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I was confident and determined about the fact that we could win because my passion helped me give my 100% input in the task.</p>
                        <p>I am a dedicated person with an urge to learn and grow.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}}/></div>
                        <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}}/></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>Years Of Experience</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>90+</h1>
                <p>Projects Completed</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>Happy Client</p>
            </div>
            <div />
            </div>
    </div>
  )
}

export default About