import React from 'react';
import Heading from './common/Heading';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { TESTMONIAL_DATA } from '../utils/helper';
import starImg from '../assets/images/png/star-img.png';
import { LeftArrow, LeftQuotationIcon, RightArrow, RightQuotationIcon } from '../utils/Icon';

const Testimonials = () => {
    return (
        <div className="px-4 md:px-6 lg:px-8 mt-[54px] sm:mt-33">
            <div className="max-w-[1140px] mx-auto">
                <p className="text-center italic text-lg sm:text-xl md:text-xl text-[#112D49] mb-2">
                    Testimonials
                </p>
                <Heading headingClass=" max-sm:max-w-[250px] mx-auto" headingText="What Our Client’s Says " />
                <div className="mt-8 sm:mt-11 md:mt-[59px] relative">
                    <div className="max-xl:hidden flex xl:absolute top-1/2 xl:-left-14 xl:-right-14 2xl:-left-20 2xl:-right-20 transform -translate-y-1/2 justify-between items-center px-4 z-10">
                        <div className="swiper-arrow prev-btn cursor-pointer size-8 md:size-10 border border-[#112D49] rounded-full flex items-center justify-center hover:bg-[#112D49] transition-all duration-200 ease-linear">
                            <LeftArrow />
                        </div>

                        <div className="swiper-arrow next-btn cursor-pointer size-8 md:size-10 border border-[#112D49] rounded-full flex items-center justify-center hover:bg-[#112D49] transition-all duration-200 ease-linear">
                            <RightArrow />
                        </div>
                    </div>
                    <Swiper
                        navigation={{
                            nextEl: '.next-btn',
                            prevEl: '.prev-btn',
                        }}
                        modules={[Navigation]}
                        spaceBetween={24}
                        slidesPerView={1}
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                        }}
                    >
                        {TESTMONIAL_DATA.map((data, index) => (
                            <SwiperSlide key={index} className="flex justify-center">
                                <div className="w-full transition-all duration-200 ease-linear bg-white hover:shadow-[0px_2px_20px_0px_#112D491A] max-w-[558px] px-4 py-6 rounded-md mx-auto text-center">
                                    <img
                                        className="mx-auto w-20 h-20 object-cover rounded-full"
                                        src={data.img}
                                        alt="client-img"
                                    />
                                    <div className="pt-4 leading-[150%] text-[#112D49] opacity-80">
                                        <div className="flex-1 relative">
                                            <div className="absolute top-[-12px] max-lg:hidden left-[5px]"><LeftQuotationIcon /></div>
                                            <p> But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,</p>
                                            <div className="absolute bottom-[-10px] max-lg:hidden right-[50px]"><RightQuotationIcon /></div>
                                        </div>
                                    </div>
                                    <img
                                        className="mx-auto mt-2 md:mt-3"
                                        src={starImg}
                                        alt="star rating"
                                    />
                                    <p className="font-semibold text-xl md:text-2xl text-[#112D49] mt-2 md:mt-3">
                                        {data.title}
                                    </p>
                                    <p className="text-[#112D49]">{data.job}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="xl:hidden mt-6 flex justify-center gap-3 items-center px-4 z-10">
                        <div className="swiper-arrow prev-btn cursor-pointer size-8 md:size-10 border border-[#112D49] rounded-full flex items-center justify-center hover:bg-[#112D49] transition-all duration-200 ease-linear">
                            <LeftArrow />
                        </div>

                        <div className="swiper-arrow next-btn cursor-pointer size-8 md:size-10 border border-[#112D49] rounded-full flex items-center justify-center hover:bg-[#112D49] transition-all duration-200 ease-linear">
                            <RightArrow />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
