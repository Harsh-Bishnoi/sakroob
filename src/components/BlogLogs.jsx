import React from 'react';
import Heading from './common/Heading';
import { LinkArrowIcon } from '../utils/Icon';
import storageImg from '../assets/images/png/storage-system-img.png';
import fiveToolsImg from '../assets/images/png/five-tools-img.png';
import fiveToolsMobileImg from '../assets/images/png/five-tools-mobile-img.png';
import motherboardeImg from '../assets/images/png/motherboard-img.png';
import playerImg from '../assets/images/png/computer-player-img.png';
import CustomButton from './common/CustomButton';
import Description from './common/Description';
import { Link } from 'react-router-dom';

const BlogLogs = () => {
    return (
        <>
            <div className="flex justify-center items-center px-6 sm:px-7 mt-[110px] sm:mt-[132px]">
                <div className="max-w-[1386px] mx-auto w-full">
                    <Heading headingClass="max-w-[700px] mx-auto" headingText="Blog, Guides, Build Logs & More" />
                    <div className="xl:flex xl:mb-6 mt-8 sm:mt-12 md:mt-16 gap-6.5">
                        <div className="xl:max-w-[680px] max-xl:mb-6 w-full p-3.5 sm:pt-8 sm:pl-8 bg-[#E5E4E2] rounded-[8px] relative min-h-[335px]">
                            <img className='pointer-events-none max-w-[202px] sm:hidden mx-auto pb-5.5' src={storageImg} alt="storage img" />
                            <Heading headingClass="max-sm:!text-2xl !text-[32px] !text-start max-sm:max-w-[194px]" headingText="How to Build a Mini NAS" />
                            <Description descriptionClass="max-w-[407px] pt-2 sm:pt-3" descriptionText="Learn to build your own network storage system with simple components." />
                            <Link className='flex items-center leading-[100%] font-medium text-[#112D49] mt-6 sm:mt-7 gap-[7px] max-w-max group transition-all duration-200 ease-linear' to="/">Read Guide <span className='group-hover:translate-x-1 transition-all duration-200 ease-linear'><LinkArrowIcon /></span> </Link>
                            <img className='pointer-events-none hidden sm:block max-w-[250px] md:max-w-[281px] sm:absolute right-0 bottom-0' src={storageImg} alt="storage img" />
                        </div>
                        <div className="xl:max-w-[680px] pb-3.5 pl-3.5 pr-3.5 max-xl:mb-6 w-full sm:pt-[75px] sm:pl-8 bg-[#EEF4FB] rounded-[8px] relative min-h-[335px]">
                            <img className='pointer-events-none sm:hidden max-w-[288px] mx-auto mb-10.5' src={fiveToolsMobileImg} alt="five tools img" />
                            <Heading headingClass="!text-start max-sm:!text-2xl !text-[32px] max-w-[360px]" headingText="5 Tools Every Maker Should Own" />
                            <Description descriptionClass="max-w-[407px] pt-2 sm:pt-3" descriptionText="The essential toolkit for every DIY electronics enthusiast." />
                            <Link className='flex items-center leading-[100%] font-medium text-[#112D49] mt-6 sm:mt-7 gap-[7px] max-w-max group transition-all duration-200 ease-linear' to="/">Read Article <span className='group-hover:translate-x-1 transition-all duration-200 ease-linear'><LinkArrowIcon /></span> </Link>
                            <img className='pointer-events-none absolute max-sm:hidden max-w-[199px] right-0 bottom-0 ' src={fiveToolsImg} alt="five tools img" />
                        </div>
                    </div>
                    <div className="w-full xl:pt-[50px] xl:pl-4.5 xl:pb-[34px] xl:pr-[27px] bg-[#D5E8FF] rounded-[8px] min-h-[388px] xl:flex gap-[50px] xl:gap-[95.92px] items-center">
                        <img className='pointer-events-none max-w-[212px] max-xl:mb-[17px] sm:max-w-[250px] xl:max-w-[300px] 2xl:max-w-[367px]' src={motherboardeImg} alt="five tools img" />
                        <div className="max-sm:px-3.5">
                            <Heading headingClass="max-w-[360px] max-sm:!text-2xl mx-auto !text-[32px]" headingText="Inside a Raspberry Pi Retro Console" />
                            <Description descriptionClass="max-sm:max-w-[260px] max-w-[410px] mx-auto pt-2 sm:pt-3 text-center" descriptionText="Step-by-step log of building a retro game machine." />
                            <Link className='flex items-center leading-[100%] mx-auto font-medium text-[#112D49] mt-6 sm:mt-7 gap-[7px] max-w-max text-center group transition-all duration-200 ease-linear' to="/">View Build Log <span className='group-hover:translate-x-1 transition-all duration-200 ease-linear'><LinkArrowIcon /></span> </Link>
                        </div>
                        <img className='pointer-events-none max-w-[182px] max-xl:mt-9.5 sm:max-w-[250px] xl:max-w-[300px] 2xl:max-w-[367px] ml-auto' src={playerImg} alt="five tools img" />
                    </div>
                    <div className="flex justify-center mt-9.5 sm:mt-14">
                        <CustomButton btnClass="bg-[#112D49] hover:bg-[#112D49]/80 text-white" btnText="View All Blog Posts" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogLogs