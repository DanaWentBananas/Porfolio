import React from 'react';
import './About.css'
import ME from '../../assets/about-me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About me</h2>

            <div className="container about-container">

                <div className="about-me">
                    <div className="about-me-img">
                        <img src={ME} alt="" />
                    </div>
                </div>

                <div className="about-content">
                    <div className="about-cards">

                        <article className="about-card">
                            <FaAward className='about-icon' />
                            <h5>Experience</h5>
                            <small>1 Year Working</small>
                        </article>

                        <article className="about-card">
                            <FiUsers className='about-icon' />
                            <h5>Clients</h5>
                            <small>1M+ WorldWide</small>
                        </article>

                        <article className="about-card">
                            <VscFolderLibrary className='about-icon' />
                            <h5>Projects</h5>
                            <small>100+ Completed</small>
                        </article>

                        <p>meow meow meow</p>

                    </div>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                    
                </div>

            </div>
        </section>  
    )
}

export default About