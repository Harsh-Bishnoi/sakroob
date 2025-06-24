import React from 'react';
import Heading from '../components/common/Heading';
import Description from '../components/common/Description';
import { LinkArrowIcon } from '../utils/Icons';
import storageImg from '../assets/images/png/storage-system-img.png';
import fiveToolsImg from '../assets/images/png/five-tools-img.png';
import fiveToolsMobileImg from '../assets/images/png/five-tools-mobile-img.png';
import motherboardeImg from '../assets/images/png/motherboard-img.png';
import playerImg from '../assets/images/png/computer-player-img.png';
const Blog = () => {
    return (
        <>
            <div className="flex justify-center items-center px-6 sm:px-7 mt-[132px]">
                <div className="max-w-[1386px] mx-auto w-full">
                    <Heading headingClass="max-w-[700px] mx-auto" headingText="Blog, Guides, Build Logs & More" />
                    <div className="xl:flex xl:mb-6 mt-8 sm:mt-12 md:mt-16 gap-6.5">
                        <div className="xl:max-w-[680px] max-xl:mb-6 w-full p-3.5 sm:pt-8 sm:pl-8 bg-[#E5E4E2] rounded-[8px] relative min-h-[335px]">
                            <img className='max-w-[202px] sm:hidden mx-auto pb-5.5' src={storageImg} alt="storage img" />
                            <Description descriptionClass="max-sm:text-2xl max-sm:max-w-[194px]" descriptionText="How to Build a Mini NAS" />
                            <p className='opacity-80 max-sm:text-sm text-[#112D49] leading-[150%] max-w-[407px] pt-2 sm:pt-3'>Learn to build your own network storage system with simple components.</p>
                            <a className='flex items-center leading-[100%] font-medium text-[#112D49] mt-6 sm:mt-7 gap-[7px] max-w-max' href="">Read Guide <span><LinkArrowIcon /></span> </a>
                            <img className='hidden sm:block max-w-[250px] md:max-w-[281px] sm:absolute right-0 bottom-0' src={storageImg} alt="storage img" />
                        </div>
                        <div className="xl:max-w-[680px] pb-3.5 pl-3.5 pr-3.5 max-xl:mb-6 w-full sm:pt-[75px] sm:pl-8 bg-[#EEF4FB] rounded-[8px] relative min-h-[335px]">
                            <img className='sm:hidden max-w-[288px] mx-auto mb-10.5' src={fiveToolsMobileImg} alt="five tools img" />
                            <Description descriptionClass="max-sm:text-2xl max-w-[360px]" descriptionText="5 Tools Every Maker Should Own" />
                            <p className='opacity-80 max-sm:text-sm text-[#112D49] leading-[150%] max-w-[407px] pt-2 sm:pt-3'>The essential toolkit for every DIY electronics enthusiast.</p>
                            <a className='flex items-center leading-[100%] font-medium text-[#112D49] mt-6 sm:mt-7 gap-[7px] max-w-max' href="">Read Article <span><LinkArrowIcon /></span> </a>
                            <img className='absolute max-sm:hidden max-w-[199px] right-0 bottom-0 ' src={fiveToolsImg} alt="five tools img" />
                        </div>
                    </div>
                    <div className="w-full xl:pt-[50px] xl:pl-4.5 xl:pb-[34px] xl:pr-[27px] bg-[#D5E8FF] rounded-[8px] min-h-[388px] xl:flex gap-[50px] xl:gap-[95.92px] items-center">
                        <img className='max-w-[212px] max-xl:mb-[17px] sm:max-w-[250px] xl:max-w-[300px] 2xl:max-w-[367px]' src={motherboardeImg} alt="five tools img" />
                        <div className="px-3.5">
                            <Description descriptionClass="max-w-[360px] max-sm:text-2xl mx-auto text-center" descriptionText=" Inside a Raspberry Pi Retro Console" />
                            <p className='opacity-80 text-[#112D49] max-sm:max-w-[260px] max-sm:text-sm leading-[150%] max-w-[410px] mx-auto pt-2 sm:pt-3 text-center'>Step-by-step log of building a retro game machine.</p>
                            <a className='flex items-center leading-[100%] mx-auto font-medium text-[#112D49] mt-6 sm:mt-7 gap-[7px] max-w-max text-center' href="">View Build Log <span><LinkArrowIcon /></span> </a>
                        </div>
                        <img className='max-w-[182px] max-xl:mt-9.5 sm:max-w-[250px] xl:max-w-[300px] 2xl:max-w-[367px] ml-auto' src={playerImg} alt="five tools img" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog