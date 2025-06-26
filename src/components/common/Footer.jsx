import React from 'react'
import { FooterLogo } from '../../utils/Icon'
import Description from './Description'
import { FOOTER_LINKS, SOCIAL_LINKS } from '../../utils/helper'
import SakroobCircle from '../SakroobCircle'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
    const location = useLocation();

    return (
        <>
            <div className={`bg-[#112D49] ${location.pathname === '/' ? "mt-[253px] sm:mt-[376px] " : " mt-[200px] md:mt-[300px]"}`}>
                {location.pathname === '/' && <SakroobCircle />}
                <div className="max-w-[1440px] mx-auto px-3">
                    <div className="py-10 mt-[-170px]">
                        <Link className='mx-auto flex justify-center max-w-max max-sm:max-w-[130px]' to="/">
                            <FooterLogo />
                        </Link>
                        <Description
                            descriptionClass="text-white max-w-[338px] mx-auto mt-4 sm:mt-6 text-center"
                            descriptionText="Commodo egestas etiam arcu curabitur aliquam volutpat a gravida."
                        />
                        <ul className="flex flex-wrap gap-4 sm:gap-6 justify-center pt-4.5 sm:pt-[27px] mx-auto max-sm:max-w-[246px]">
                            {FOOTER_LINKS.map((links, index) => (
                                <li key={index}>
                                    <a className='text-sm sm:text-base relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-white after:rounded hover:after:w-full after:duration-300 after:ease-linear after:transition-all text-white font-medium leading-[150%]' href="#">
                                        {links}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex gap-2.5 mx-auto justify-center mt-[27px]">
                            {SOCIAL_LINKS.map((links, index) => (
                                <div key={index}>
                                    <a href={links.link} target="_blank" className="h-[32px] hover:scale-105 transition-all duration-200 ease-linear w-[32px] flex justify-center items-center border border-white rounded-full cursor-pointer" rel="noopener noreferrer">
                                        <links.icon />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="border-gradient relative"></div>
                <div className="flex flex-col sm:flex-row justify-between items-center max-w-[1140px] px-3 mx-auto py-4.5 sm:py-7.5 gap-3 text-center text-sm text-white">
                    <p className="text-xs sm:text-sm leading-[100%]">
                        Terms of Service | Privacy Policy
                    </p>
                    <p className="text-xs sm:text-sm leading-[100%]">
                        © {new Date().getFullYear()} Skaroob. All Rights Reserved.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer
