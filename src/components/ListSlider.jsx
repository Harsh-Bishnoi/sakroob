import React from 'react'
import Marquee from "react-fast-marquee";
import { LISTSLIDER_DATA } from '../utils/helper'

const ListSlider = () => {
    return (
        <>
            <div className='pt-[27px] pb-6 max-w-[1920px] mx-auto'>
                <Marquee>
                    <div className="flex gap-3">
                        {LISTSLIDER_DATA.map((list, index) => (
                            <div key={index} className="px-3 py-3.5 sm:p-4 transition-all duration-200 ease-linear cursor-pointer border hover:shadow-[0px_2px_20px_0px_#112D491A] border-[#112D491A] rounded-[8px] max-w-[159px] min-w-[159px] max-sm:min-h-[69px] max-sm:max-h-[69px] sm:!max-w-[207px] sm:min-w-[207px] w-full flex items-center">
                                <div className="max-w-[134px] sm:max-w-[175px] w-full flex items-center gap-2.5 sm:gap-3.5">
                                    <div className="min-w-[40px] min-h-[40px] sm:min-w-[57px] sm:min-h-[57px] bg-[#112D49] rounded-[124px] flex justify-center items-center icon-size"><list.icon /></div>
                                    <div className="font-bold leading-[120%] max-sm:text-xs text-[#112D49]">{list.title}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </>
    )
}

export default ListSlider