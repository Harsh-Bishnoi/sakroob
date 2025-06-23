import React from 'react'

const CustomButton = ({ btnText, btnClass }) => {
    return (
        <button className={`py-4 px-5 text-[#112D49] cursor-pointer transition-all duration-200 ease-linear font-medium leading-[100%] rounded-[93px] border-[#112D49] border ${btnClass}`}>{btnText}</button>
    )
}

export default CustomButton