import React from 'react';
import './About.css'
import ME from '../../assets/about-me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {GiBookshelf} from 'react-icons/gi'
import {BsCodeSlash} from 'react-icons/bs'
import {GiDutchBike} from 'react-icons/gi'

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
                            <small>2 Years</small>
                        </article>

                        <article className="about-card">
                            <VscFolderLibrary className='about-icon' />
                            <h5>Projects</h5>
                            <small>50+ Completed</small>
                        </article>

                        <article className="about-card">
                            <FiUsers className='about-icon' />
                            <h5>Interests</h5>
                            <small>
                                <GiBookshelf className='about-icon' />
                                <BsCodeSlash className='about-icon' />
                                <GiDutchBike className='about-icon' />
                            </small>
                        </article>

                    </div>

                    <p>A detail-oriented Developer and Robotics trainer. With interest in web development and cloud services and infrastructure, have made and will continue making many projects to enhance my skills. Looking for opportunities where I can use my skills while also gaining more knowledge.</p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                    
                </div>

            </div>
        </section>  
    )
}

export default About