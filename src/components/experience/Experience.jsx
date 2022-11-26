import React from 'react';
import './Experience.css';
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>

            <h5>The skills i have</h5>
            <h2>My Experience</h2>

            <div className="container experience-container">

                <div className="experience1">
                    <h3>Cloud Computing</h3>
                    <div className="experience-content">

                        <article className="experience-details">
                        <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                            <h4>Linux</h4>
                            <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                        <article className="experience-details">
                        <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                            <h4>AWS</h4>
                            <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                        <article className="experience-details">
                        <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                            <h4>Azure</h4>
                            <small className="text-light">Beginner</small>
                            </div>
                        </article>

                        <article className="experience-details">
                        <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                            <h4>Docker</h4>
                            <small className="text-light">Beginner</small>
                            </div>
                        </article>

                    </div>
                </div>

                <div className="experience2">
                <h3>Web Development</h3>
                <div className="experience-content">
                    
                <article className="experience-details">
                <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                            <h4>Node.js</h4>
                            <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                        <article className="experience-details">
                        <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                            <h4>React.js</h4>
                            <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                        <article className="experience-details">
                        <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                            <h4>Django</h4>
                            <small className="text-light">Beginner</small>
                            </div>
                        </article>

                        <article className="experience-details">
                        <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                            <h4>MongoDB</h4>
                            <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                        <article className="experience-details">
                        <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                            <h4>SQL</h4>
                            <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                        <article className="experience-details">
                        <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                            <h4>Postman&Git</h4>
                            <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                </div>
                </div>

                <div className="experience3">
                <h3>Teaching</h3>
                <div className="experience-content">
                    
                <article className="experience-details">
                <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                            <h4>Python</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience-details">
                        <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                            <h4>JavaScript</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience-details">
                        <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                            <h4>Arduino</h4>
                            <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                        <article className="experience-details">
                        <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                            <h4>RaspberryPi</h4>
                            <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                        <article className="experience-details">
                        <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                            <h4>Lego Robotics</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience-details">
                        <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                            <h4>Robotics Competitions</h4>
                            <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                </div>
                </div>
            </div>

        </section>  
    )
}

export default Experience