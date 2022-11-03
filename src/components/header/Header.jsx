import React from 'react';
import './Header.css'
import HeaderBtns from './HeaderBtns';
import ME from '../../assets/me2.jpg'
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header>
            <div className="container header-container">
                <h5>Hello I'm</h5>
                <h1>Dana Alsani</h1>
                <h5 className='text-light'>Developer</h5>
                <HeaderBtns />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="" className='me-img'/>
                </div>

                <a href="#contact" className='scroll-down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header