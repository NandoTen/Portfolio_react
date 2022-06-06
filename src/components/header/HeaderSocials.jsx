import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'

import { AiFillGithub } from 'react-icons/ai'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href='https://github.com/NandoTen' target='blank'><FaLinkedinIn /></a>
            <a href='https://www.linkedin.com/in/fernando-tenreiro/' target='blank'><AiFillGithub /></a>


        </div>
    )
}

export default HeaderSocials