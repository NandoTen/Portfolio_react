import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/fer_222.jpg'

const Header = () => {
    return (
        <header>
            <div className='container header_container'>
                <h5>Hello I'm</h5>
                <h1>Fernando Tenreiro</h1>
                <h5 className='text-light'>Fullstack Development</h5>
                <CTA />
                <div className='me'>
                    <img src={ME} alt='' />

                </div>

            </div>


        </header>
    )
}

export default Header