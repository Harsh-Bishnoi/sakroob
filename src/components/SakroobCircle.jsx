import React from 'react';
import Heading from '../components/common/Heading';
import Description from '../components/common/Description';
import CustomButton from '../components/common/CustomButton';
import CustomInput from './common/CustomInput';

const SakroobCircle = () => {
    return (
        <>
            <div className="px-6 -translate-y-40 sm:-translate-y-55">
                <div className="bg-[url(src/assets/images/png/sakroob-bg-img.png)] max-sm:min-h-[412px] relative bg-cover bg-no-repeat bg-center h-[386px] max-w-[1140px] mx-auto rounded-3xl pt-[68px] max-sm:py-[68px] ">
                    <div className="w-full h-full bg-[#73A4E0] opacity-75 rounded-3xl absolute top-0 left-0"></div>
                    <div className="z-1 relative px-[23.5px]">
                        <Heading headingClass="!text-white max-sm:max-w-[239px] mx-auto" headingText="Join the Sakroob Circle" />
                        <Description descriptionClass="!text-white pt-4.5 sm:pt-4 !font-normal text-center max-sm:max-w-[239px] mx-auto !text-sm sm:!text-base" descriptionText="Exclusive drops, early access, and maker tips in your inbox." />
                        <div className="mx-auto sm:flex justify-center mt-[46px] sm:relative max-w-[489px]">
                            <CustomInput inputClass="max-sm:py-[12.5px] max-sm:px-5" type="email" placeholder="Enter your email...." />
                            <CustomButton btnClass="bg-[#112D49] hover:bg-[#112D49]/80 z-1 max-sm:w-full max-sm:mt-4 max-sm:text-sm text-white sm:absolute right-[7px] top-[8px]" btnText="Join Now" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SakroobCircle