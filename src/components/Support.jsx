import React from 'react';
import { SUPPORT_DATA } from '../utils/helper';

const Support = () => {
    return (
        <div className="flex justify-center px-3 sm:px-6 mt-10 sm:mt-14 md:mt-[67px]">
            <div className="w-full max-w-[1384px]">
                <div className="bg-[#F1F6FC] rounded-[8px] flex flex-wrap justify-center items-center gap-6 sm:gap-4 px-6 sm:px-8 py-6 relative z-0">
                    {SUPPORT_DATA.map((item, index) => (
                        <div
                            key={index}
                            className="relative max-w-[241px] w-full sm:w-auto min-h-[80px] sm:min-h-[61px] z-0"
                        >
                            <div className="flex sm:flex-row flex-col items-center sm:items-start text-center sm:text-left sm:h-[61px] gap-2 sm:gap-4 px-4 py-4 sm:py-0 relative z-10 bg-[#F1F6FC]">
                                <div className="bg-[#73A4E0] size-[47px] rounded-full flex justify-center items-center mb-2 sm:mb-0">
                                    <item.icon />
                                </div>
                                <div>
                                    <h4 className="font-bold text-black text-sm leading-[150%] whitespace-nowrap">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-black leading-[120%] pt-1 whitespace-nowrap">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                            {index !== SUPPORT_DATA.length - 1 && (
                                <div className="relative sm:hidden vertical-gradient h-[1px] w-full" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Support;
