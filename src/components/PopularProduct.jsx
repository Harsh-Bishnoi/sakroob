import React from 'react'
import Heading from './common/Heading'
import { POPULAR_PRODUCT } from '../utils/helper'
import CustomButton from './common/CustomButton'

const PopularProduct = () => {

    const handleAddToCart = (item) => {
        const newItem = { ...item, quantity: 1 };
        addToCart(newItem);

        setPopupMessage("Added to cart 🛒");
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
    };
    return (
        <>
            <div className="px-3 mt-[132px]">
                <div className="max-w-[1140px] mx-auto">
                    <Heading headingText="Popular Products" />
                    <div className="flex flex-wrap gap-6 flex-row mt-[87px]">
                        {POPULAR_PRODUCT.map((item, index) => (
                            <div id={index} className="w-full !max-w-[364px] mx-auto md:w-6/12 lg:w-4/12 mb-6 md:mb-19">
                                <div className="max-w-[364px] border border-[#112D4914] bg-white rounded-lg p-4">
                                    <div className="bg-[#E5E4E2] justify-center items-center flex md:relative max-h-[242px] min-h-[242px] rounded-sm max-w-[332px]">
                                        <img className={`mx-auto md:absolute right-[50%] md:translate-x-1/2 ${index === 1 ? "-top-[15px] " : "-top-[70px] max-md:max-w-[150px]"}`} src={item.img} alt="product img" />
                                    </div>
                                    <div className="max-w-[332px] mt-[19px]">
                                        <h3 className='font-bold text-xl xl:text-2xl leading-[120%] text-[#112D49'>{item.title}</h3>
                                        <p className='leading-[150%] text-[#112D49] opacity-80 pt-2'>{item.description}</p>
                                        <div className={`flex items-center justify-between ${index === 1 ? "mt-12.5 xl:mt-5.5" : "mt-[51px] "}`}>
                                            <p className='font-semibold text-2xl leading-[100%] text-[#112D49]'>{item.price}</p>
                                            <img className='max-w-[128px]' src={item.star} alt="star-img" />
                                        </div>
                                        <div className="flex items-center mt-[25px] gap-6">
                                            <CustomButton btnClass="w-full hover:bg-[#112D49]/80 hover:text-white" btnText="Shop Now" />
                                            <div
                                                onClick={() => handleAddToCart(item)}
                                                className="cursor-pointer flex justify-center items-center bg-[#73A4E0] min-w-[48px] min-h-[48px] rounded-full hover:bg-[#112D49] transition-colors"
                                            >
                                                <item.shop />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularProduct