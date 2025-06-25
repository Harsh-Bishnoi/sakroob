import React from 'react'
import { FooterLogo } from '../utils/Icons'
import Description from './common/Description'
import { FOOTER_LINKS, SOCIAL_LINKS } from '../utils/helper'
import SakroobCircle from './SakroobCircle'

const Footer = () => {
    return (
        <>
            <div className="bg-[#112D49] mt-[253px] sm:mt-[376px]">
                <SakroobCircle />
                <div className="max-w-[1440px] mx-auto px-3">
                    <div className="py-10 mt-[-170px]">
                        <a className='mx-auto flex justify-center max-w-max max-sm:max-w-[130px]' href=""> <FooterLogo /></a>
                        <Description descriptionClass="text-white max-w-[338px] mx-auto mt-4 sm:mt-6 text-center" descriptionText="Commodo egestas etiam arcu curabitur aliquam volutpat a gravida." />
                        <ul className="flex flex-wrap gap-4 sm:gap-6 justify-center pt-4.5 sm:pt-[27px] mx-auto max-sm:max-w-[246px]">
                            {FOOTER_LINKS.map((links, index) => (
                                <li key={index}>
                                    <a className='text-sm sm:text-base relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-white after:rounded hover:after:w-full after:duration-300 after:ease-linear after:transition-all text-white font-medium leading-[150%]' href="#">{links}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex gap-2.5 mx-auto justify-center mt-[27px]">
                            {SOCIAL_LINKS.map((links, index) => (
                                <div key={index}>
                                    <a href={links.link} target="_blank" className="h-[32px] hover:scale-105 transition-all duration-200 ease-linear w-[32px] flex justify-center items-center border border-white rounded-full cursor-pointer">
                                        <links.icon />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* <div className="w-full mx-auto mt-[82px] relative z-0 pt-[1px] rounded-[12px] after:content-[''] after:absolute after:inset-0 after:rounded-[12px] after:bg-[linear-gradient(90deg,_#ffffff003.37%,#ffffffcc51.44%,#ffffff00_100%)] after:-z-10"></div> */}
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