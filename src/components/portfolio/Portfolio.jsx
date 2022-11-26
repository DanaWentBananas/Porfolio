import React from 'react';
import './Portfolio.css'
import IMG1 from '../../assets/proj1.png'
import IMG2 from '../../assets/proj2.png'
import IMG3 from '../../assets/proj3.png'
import IMG4 from '../../assets/proj4.png'
import IMG5 from '../../assets/proj5.png'
import IMG6 from '../../assets/proj6.png'

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio-container">

                <article className="portfolio-item">
                    <div className="portfolio-item-img">
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>S3 Static Website</h3>
                    <div className="portfolio-item-cta">
                        <a href="https://github.com/DanaWentBananas/s3Website.git" target='_blank' className='btn' rel="noreferrer">github link</a>
                        <a href="https://s3.danaalsani.com" target='_blank' className="btn btn-primary" rel="noreferrer">Live Demo</a>
                    </div>
                </article>

                <article className="portfolio-item">
                    <div className="portfolio-item-img">
                        <img src={IMG2} alt="" />
                    </div>
                    <h3>Bloggly</h3>
                    <div className="portfolio-item-cta">
                        <a href="https://github.com/DanaWentBananas/Bloggly.git" target='_blank' className='btn' rel="noreferrer">github link</a>
                        <a href="https://bloggly.danaalsani.com" target='_blank' className="btn btn-primary" rel="noreferrer">Live Demo</a>
                    </div>
                </article>

                <article className="portfolio-item">
                    <div className="portfolio-item-img">
                        <img src={IMG4} alt="" />
                    </div>
                    <h3>Python Projects</h3>
                    <div className="portfolio-item-cta">
                        <a href="https://github.com/DanaWentBananas/PythonProjects.git" target='_blank' className='btn' rel="noreferrer">github link</a>
                    </div>
                </article>

                <article className="portfolio-item">
                    <div className="portfolio-item-img">
                        <img src={IMG5} alt="" />
                    </div>
                    <h3>AI projects</h3>
                    <div className="portfolio-item-cta">
                        <a href="https://github.com/DanaWentBananas/CVandML/tree/main/Projects" target='_blank' className='btn' rel="noreferrer">github link</a>
                    </div>
                </article>



            </div>
        </section>
    )
}

export default Portfolio