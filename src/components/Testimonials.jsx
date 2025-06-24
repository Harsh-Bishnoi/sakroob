import React from 'react';
import Heading from './common/Heading';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { TESTMONIAL_DATA } from '../utils/helper';
import starImg from '../assets/images/png/star-img.png';

const Testimonials = () => {
    return (
        <div className="px-4 md:px-6 lg:px-8 mt-20">
            <div className="max-w-screen-xl mx-auto">
                <p className="text-center italic text-lg md:text-xl text-[#112D49] mb-2">
                    Testimonials
                </p>
                <Heading headingText="What our client’s says " />

                <div className="flex items-center gap-4 justify-center mt-4">
                    <div className="swiper-arrow prev-btn cursor-pointer">
                        {/* <LeftArrow /> */}
                    </div>
                    <div className="swiper-arrow next-btn cursor-pointer">
                        {/* <RightArrow /> */}
                    </div>
                </div>
                <div className="mt-10">
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
                            <SwiperSlide
                                key={index}
                                className="flex justify-center"
                            >
                                <div className="w-full max-w-[558px] px-4 py-6 rounded-md mx-auto text-center">
                                    <img className="mx-auto w-20 h-20 object-cover rounded-full" src={data.img} alt="client-img" />
                                    <p className="pt-4 leading-[150%] text-[#112D49] opacity-80"> But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, </p>
                                    <img
                                        className="mx-auto mt-2 md:mt-3"
                                        src={starImg}
                                        alt="star rating"
                                    />
                                    <p className="font-semibold text-xl md:text-2xl text-[#112D49] mt-2 md:mt-3">
                                        {data.title}
                                    </p>
                                    <p className="text-[#112D49]">
                                        {data.job}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
