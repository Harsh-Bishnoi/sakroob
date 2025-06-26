import React from 'react'
import { SUPPORT_DATA } from '../utils/helper'

const Support = () => {
    return (
        <>
            <div className="flex justify-center items-center max-xl:px-6 px-3 mt-10.5 sm:mt-14 md::mt-[67px]">
                <div className="max-w-[1384px] mx-auto">
                    <div className="bg-[#F1F6FC] px-[71.5px] py-[43px] flex max-[1440px]:gap-4 gap-9 max-[1440px]:px-8 max-xl:flex-wrap rounded-[8px] mx-auto">
                        {SUPPORT_DATA.map((item, index) => (
                            <div key={index} className={`sm:flex gap-2 justify-start max-[773px]:max-w-[241px] max-[773px]:w-full mx-auto items-center sm:h-[61px] ${index === 4 ? "" : " max-sm:border-b sm:border-r md:pr-4 min-[1440px]:pr-9"}`}>
                                <div className="bg-[#73A4E0] size-[47px] rounded-[98px] flex justify-center items-center max-sm:mx-auto"><item.icon /></div>
                                <div className="">
                                    <h4 className='font-bold text-center sm:text-start leading-[150%] text-black whitespace-nowrap'>{item.title}</h4>
                                    <p className='text-sm leading-[120%] text-center sm:text-start text-black whitespace-nowrap pt-1'>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Support