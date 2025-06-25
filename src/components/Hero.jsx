import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Description from '../components/common/Description'
import CustomButton from '../components/common/CustomButton'

const Hero = () => {
    const slides = Array(5).fill(0)

    return (
        <div className="flex justify-center items-center px-4 sm:px-6 lg:px-7 hero">
            <div className="w-full max-w-[1384px] mx-auto">
                <Carousel
                    showArrows={false}
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop
                    autoPlay
                    interval={3000}>
                    {slides.map((_, index) => (
                        <div key={index} className="bg-[url(src/assets/images/png/hero-bg-img.png)] bg-no-repeat bg-cover bg-center h-[415px] sm:h-[500px] md:h-[600px] lg:h-[650px] w-full rounded-[8px] flex flex-col items-center justify-center text-center px-4 sm:px-6" >
                            <h1 className="font-bold max-w-[264px] sm:max-w-[761px] mx-auto text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[120%] text-center pb-2 sm:pb-3 pt-[122px] sm:pt-[200px] md:pt-[220px] lg:pt-[237px] text-[#112D49]">
                                Where Tinkerers Bring Ideas Alive
                            </h1>
                            <Description descriptionClass="font-normal max-w-[460px] mx-auto !text-sm sm:!text-base leading-[150%]"
                                descriptionText="Explore niche tech gear, DIY kits, and pro tools — built for creators, gamers, and engineers."
                            />
                            <div className="flex justify-center items-center gap-3 mt-6 sm:gap-4.5 sm:mt-8.5">
                                <CustomButton
                                    btnClass="bg-[#112D49] max-sm:!text-sm text-white hover:bg-[#112D49]/80"
                                    btnText="Browse Products"
                                />
                                <CustomButton
                                    btnClass="hover:bg-[#112D49]/80 max-sm:!text-sm hover:text-white"
                                    btnText="Starter Kits"
                                />
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default Hero