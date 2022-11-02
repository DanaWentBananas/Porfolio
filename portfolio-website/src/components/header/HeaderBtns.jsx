import React from 'react'
import CV from '../../assets/CV.pdf'

const HeaderBtns = () => {
    return (
        <div className="header-btns">
            <a href={CV} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Get In Touch</a>
        </div>
        
    )
}

export default HeaderBtns