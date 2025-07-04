import React, { useState } from 'react'
import Heading from './common/Heading'
import Description from './common/Description'
import { CheckArrow, IncreaseIcon, RatingIcon, ReduceIcon } from '../utils/Icon'
import CustomButton from './common/CustomButton'
import routerImg from '../assets/images/png/router-img.png'
import smallRouter from '../assets/images/png/small-router.png'
import PopularProduct from './PopularProduct'
import Reviews from './Reviews'
import { useNavigate } from 'react-router-dom'
import { useCart } from "../context/CartContext"

const ProductDetail = () => {
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const [count, setCount] = useState(1);
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => (prev > 1 ? prev - 1 : 1));

    const handleCheckClick = () => {
        navigate("/checkout");
    };

    const item = {
        id: "dsl-2790u",
        name: "D-Link ADSL Wireless Router DSL2790U",
        price: 1281.08,
        quantity: count,
    };

    const handleAddToCart = (item) => {
        addToCart(item);
        setPopupMessage("Added to cart 🛒");
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
    };
    const [activeIndex, setActiveIndex] = useState(null);

    const colors = ["#010101", "#112D49", "#20E572", "#FFFFFF", "#73A4E0"];
    return (
        <>
            <div className="px-3 mt-12.5 sm:mt-[91px]">
                <div className="max-w-[1140px] mx-auto">
                    <div className="flex flex-wrap gap-[55px]">
                        <div className="mx-auto">
                            <div className={`max-w-[517px] bg-[#EEF4FB] px-10.5 py-11 rounded-lg`}>
                                <img className='w-full max-w-[432px] pointer-events-none' src={routerImg} alt="router-img" />
                            </div>
                            <div className="flex gap-5.5 mt-4 mx-auto">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="bg-[#F5F5F5] rounded-sm px-7.5 py-[8.5px]">
                                        <img className='pointer-events-none' src={smallRouter} alt="router-img" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="max-w-[568px] mx-auto">
                            <Heading headingClass="!text-xl sm:!text-[34px] !text-start" headingText={item.name} />
                            <Description descriptionClass="max-w-[560px] pt-4" descriptionText="The D-Link DSL-2790U is a high-speed ADSL2+ wireless router with speeds up to 300 Mbps—ideal for browsing, streaming, and gaming. It features four Ethernet ports, strong security, and guest network support. Perfect for reliable internet in homes and small offices" />
                            <p className='pt-4 font-bold text-[32px] text-[#112D49]'>₹ {item.price.toFixed(2)}</p>
                            <div className="mt-4 max-w-[197px] w-full"><RatingIcon /></div>
                            <p className='font-semibold leading-[100%] text-[#112D49] mt-6'>Select Color</p>
                            <div className="flex gap-1.5 mt-2.5">
                                {colors.map((color, index) => (
                                    <div
                                        key={index}
                                        className="size-[29px] cursor-pointer rounded-full flex items-center justify-center"
                                        style={{
                                            backgroundColor: color,
                                            boxShadow:
                                                color === "#FFFFFF" ? "0px 4px 6px 0px #01010114" : "none",
                                        }}
                                        onClick={() => setActiveIndex(index)} >
                                        {activeIndex === index && <CheckArrow />}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-[35px]">
                                <p className="leading-[100%] font-semibold text-[#112D49]">Select Quantity</p>
                                <div className="flex max-w-[181px] mt-[15px]">
                                    <button className='bg-[#73A4E0] hover:bg-[#73A4E0]/60 w-[48px] cursor-pointer transition-all duration-200 ease-linear h-[44px] flex items-center justify-center rounded-tl-[7px] rounded-bl-[7px]'
                                        onClick={decrement}><ReduceIcon />
                                    </button>
                                    <div className="border-y border-[#0000003D] w-[85px] h-[44px] flex justify-center items-center">{count}</div>
                                    <button className='bg-[#112D49] hover:bg-[#112D49]/60 cursor-pointer transition-all duration-200 ease-linear w-[48px] h-[44px] flex items-center rounded-br-[7px] rounded-tr-[7px] justify-center'
                                        onClick={increment}>
                                        <IncreaseIcon />
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5 mt-[78px]">
                                <CustomButton onClick={handleCheckClick} btnClass="w-full bg-[#112D49] hover:bg-[#112D49]/80 text-white" btnText="Buy Now" />
                                <CustomButton onClick={() => handleAddToCart(item)} btnClass="w-full hover:bg-[#112D49]/80 hover:text-white" btnText="Add to cart" />
                            </div>
                            {showPopup && (
                                <div className="fixed bottom-5 right-20 bg-[#112D49] text-white px-4 py-2 rounded">
                                    {popupMessage}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Reviews />
            <PopularProduct />
        </>
    )
}

export default ProductDetail
