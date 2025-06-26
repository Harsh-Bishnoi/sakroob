import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CustomButton from "./common/CustomButton";
import { FilledHeart, HeartIcon, LeftArrow, RightArrow } from "../utils/Icons";
import { BESTSELLER_DATA } from "../utils/helper";
import Heading from "./common/Heading";
import { useNavigate } from 'react-router-dom';

const BestSellers = () => {
    const navigate = useNavigate();

    const handleShopNowClick = () => {
        navigate("/checkout");
    };

    const [favoriteItems, setFavoriteItems] = useState(() => {
        const storedFavorites = localStorage.getItem("favoriteItems");
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    });

    const [popupMessage, setPopupMessage] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const showFavoritePopup = (message) => {
        setPopupMessage(message);
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 2000);
    };

    const handleFavoriteClick = (index) => {
        setFavoriteItems((prev) => {
            const isAlreadyFavorite = prev.includes(index);
            const updatedFavorites = isAlreadyFavorite
                ? prev.filter((i) => i !== index)
                : [...prev, index];

            const message = isAlreadyFavorite
                ? "Removed from favorites 💔"
                : "Added to favorites ❤️";

            showFavoritePopup(message);
            localStorage.setItem("favoriteItems", JSON.stringify(updatedFavorites));

            return updatedFavorites;
        });
    };

    const topPositionimg = [
        "bottom-[21px]", "bottom-3", "bottom-[5px]",
        "bottom-[21px]", "-top-[80px]", "bottom-[5px]",
    ];

    return (
        <div className="px-3 mt-[132px] relative">
            {showPopup && (
                <div className="absolute top-5 right-5 transform bg-[#112D49] text-white px-4 py-2 rounded shadow-lg z-50 transition-all duration-300">
                    {popupMessage}
                </div>
            )}
            <div className="max-w-[1272px] mx-auto relative">
                <Heading headingText="Bestsellers" />
                <div className="max-[1440px]:hidden flex justify-center xl:justify-between items-center gap-3 px-4 z-10 min-[1440px]:absolute xl:top-1/2 xl:-left-15 xl:-right-20 transform xl:-translate-y-1/2">
                    <div className="swiper-arrow prev-buttonBestSellers cursor-pointer size-8 md:size-10 border border-[#112D49] rounded-full flex items-center justify-center hover:bg-[#112D49] transition-all duration-200 ease-linear">
                        <LeftArrow />
                    </div>
                    <div className="swiper-arrow next-buttonBestSellers cursor-pointer size-8 md:size-10 border border-[#112D49] rounded-full flex items-center justify-center hover:bg-[#112D49] transition-all duration-200 ease-linear">
                        <RightArrow />
                    </div>
                </div>

                <div className="max-w-[1170px] mx-auto">
                    <Swiper
                        modules={[Navigation]}
                        loop
                        navigation={{
                            nextEl: ".next-buttonBestSellers",
                            prevEl: ".prev-buttonBestSellers",
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1.1,
                                spaceBetween: 10,
                            },
                            480: {
                                slidesPerView: 1.3,
                                spaceBetween: 12,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            768: {
                                slidesPerView: 2.5,
                                spaceBetween: 0,
                            },
                            1024: {
                                slidesPerView: 2.8,
                                spaceBetween: 0,
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 0,
                            },
                        }}
                    >
                        {BESTSELLER_DATA.map((item, i) => (
                            <SwiperSlide className="pt-[100px]" key={item.id}>
                                <div className="w-full sm:max-w-[364px] hover:shadow-[0px_0px_11.4px_0px_#73A4E033] border border-[#112D4914] hover:border-transparent duration-300 rounded-[8px] p-4 flex flex-col justify-between h-full min-h-[536px]">
                                    <div>
                                        <div className={`w-full h-[242px] flex items-center justify-center relative ${i === 1 ? "bg-[#EEF4FB]" : "bg-[#E5E4E2]"}`}>
                                            <img
                                                src={item.img}
                                                alt={item.title}
                                                className={`absolute max-sm:max-w-[230px] ${topPositionimg[i]} left-1/2 -translate-x-1/2`}
                                            />
                                            <div
                                                className="absolute top-[10px] right-[10px] cursor-pointer text-xl w-8 h-8 flex justify-center items-center rounded-full bg-[#73A4E01F]"
                                                onClick={() => handleFavoriteClick(i)}
                                            >
                                                {favoriteItems.includes(i) ? <FilledHeart /> : <HeartIcon />}
                                            </div>
                                        </div>
                                        <p className="font-bold text-xl leading-[120%] sm:text-2xl text-[#112D49] pt-4">{item.title}</p>
                                        <p className="max-sm:text-sm text-[#41576D] pt-2">{item.description}</p>
                                    </div>
                                    <div>
                                        <div className="flex flex-wrap justify-between items-center mt-4">
                                            <p className="font-semibold text-xl xl:text-2xl text-[#112D49]">₹ {Number(item.price).toFixed(2)}</p>
                                            <img className="max-xl:max-w-[98px] max-w-[128px]" src={item.star} alt="" />
                                        </div>
                                        <div className="mt-[25px] flex justify-between items-center gap-6">
                                            <CustomButton
                                                btnClass="hover:bg-[#112D49] hover:text-white max-w-[260px] w-full"
                                                btnText="Shop Now"
                                                onClick={handleShopNowClick}
                                            />
                                            <div className="flex justify-center items-center bg-[#73A4E0] min-w-[48px] min-h-[48px] rounded-full">
                                                <item.shop />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="min-[1440px]:hidden flex justify-center items-center gap-3 px-4 z-10 mt-6">
                    <div className="swiper-arrow prev-buttonBestSellers cursor-pointer size-8 md:size-10 border border-[#112D49] rounded-full flex items-center justify-center hover:bg-[#112D49] transition-all duration-200 ease-linear">
                        <LeftArrow />
                    </div>
                    <div className="swiper-arrow next-buttonBestSellers cursor-pointer size-8 md:size-10 border border-[#112D49] rounded-full flex items-center justify-center hover:bg-[#112D49] transition-all duration-200 ease-linear">
                        <RightArrow />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSellers;
