import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Description from '../components/common/Description'
import CustomButton from '../components/common/CustomButton'

const Hero = () => {
    return (
        <>
            <div className="flex justify-center items-center px-[28px]">
                <div className="max-w-[1384px] mx-auto">
                    <Carousel showArrows={false} showThumbs={false} showStatus={false} infiniteLoop interval={3000}>
                        <div className='bg-[url(src/assets/images/png/hero-bg-img.png)] h-[650px] w-full'>
                            <h1 className='font-bold max-w-[761px] mx-auto text-[60px] leading-[120%] text-center pb-3 pt-[237px] text-[#112D49]'>Where Tinkerers Bring Ideas Alive</h1>
                            <Description descriptionClass={"font-normal max-w-[460px] mx-auto !text-base leading-[150%]"} descriptionText={"Explore niche tech gear, DIY kits, and pro tools — built for creators, gamers, and engineers."} />
                            <div className="flex justify-center items-center gap-4.5 mt-8.5">
                                <CustomButton btnClass="bg-[#112D49] text-white hover:bg-[#112D49]/80" btnText="Browse Products" />
                                <CustomButton btnClass="hover:bg-[#112D49]/80 hover:text-white" btnText="Starter Kits" />
                            </div>
                        </div>
                        <div className='bg-[url(src/assets/images/png/hero-bg-img.png)] h-[650px] w-full'>
                            <h1 className='font-bold max-w-[761px] mx-auto text-[60px] leading-[120%] text-center pb-3 pt-[237px] text-[#112D49]'>Where Tinkerers Bring Ideas Alive</h1>
                            <Description descriptionClass={"font-normal max-w-[460px] mx-auto !text-base leading-[150%]"} descriptionText={"Explore niche tech gear, DIY kits, and pro tools — built for creators, gamers, and engineers."} />
                            <div className="flex justify-center items-center gap-4.5 mt-8.5">
                                <CustomButton btnClass="bg-[#112D49] text-white hover:bg-[#112D49]/80" btnText="Browse Products" />
                                <CustomButton btnClass="hover:bg-[#112D49]/80 hover:text-white" btnText="Starter Kits" />
                            </div>
                        </div>
                        <div className='bg-[url(src/assets/images/png/hero-bg-img.png)] h-[650px] w-full'>
                            <h1 className='font-bold max-w-[761px] mx-auto text-[60px] leading-[120%] text-center pb-3 pt-[237px] text-[#112D49]'>Where Tinkerers Bring Ideas Alive</h1>
                            <Description descriptionClass={"font-normal max-w-[460px] mx-auto !text-base leading-[150%]"} descriptionText={"Explore niche tech gear, DIY kits, and pro tools — built for creators, gamers, and engineers."} />
                            <div className="flex justify-center items-center gap-4.5 mt-8.5">
                                <CustomButton btnClass="bg-[#112D49] text-white hover:bg-[#112D49]/80" btnText="Browse Products" />
                                <CustomButton btnClass="hover:bg-[#112D49]/80 hover:text-white" btnText="Starter Kits" />
                            </div>
                        </div>
                        <div className='bg-[url(src/assets/images/png/hero-bg-img.png)] h-[650px] w-full'>
                            <h1 className='font-bold max-w-[761px] mx-auto text-[60px] leading-[120%] text-center pb-3 pt-[237px] text-[#112D49]'>Where Tinkerers Bring Ideas Alive</h1>
                            <Description descriptionClass={"font-normal max-w-[460px] mx-auto !text-base leading-[150%]"} descriptionText={"Explore niche tech gear, DIY kits, and pro tools — built for creators, gamers, and engineers."} />
                            <div className="flex justify-center items-center gap-4.5 mt-8.5">
                                <CustomButton btnClass="bg-[#112D49] text-white hover:bg-[#112D49]/80" btnText="Browse Products" />
                                <CustomButton btnClass="hover:bg-[#112D49]/80 hover:text-white" btnText="Starter Kits" />
                            </div>
                        </div>
                        <div className='bg-[url(src/assets/images/png/hero-bg-img.png)] h-[650px] w-full'>
                            <h1 className='font-bold max-w-[761px] mx-auto text-[60px] leading-[120%] text-center pb-3 pt-[237px] text-[#112D49]'>Where Tinkerers Bring Ideas Alive</h1>
                            <Description descriptionClass={"font-normal max-w-[460px] mx-auto !text-base leading-[150%]"} descriptionText={"Explore niche tech gear, DIY kits, and pro tools — built for creators, gamers, and engineers."} />
                            <div className="flex justify-center items-center gap-4.5 mt-8.5">
                                <CustomButton btnClass="bg-[#112D49] text-white hover:bg-[#112D49]/80" btnText="Browse Products" />
                                <CustomButton btnClass="hover:bg-[#112D49]/80 hover:text-white" btnText="Starter Kits" />
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Hero