import React from 'react'

const CustomInput = ({ type, placeholder, inputClass }) => {
    return (
        <input className={`py-[21px] w-full z-1 outline-none bg-white border-[0.5px] border-[#112D491A] px-4.5 text-[#112D49] rounded-[50px] leading-[140%]  ${inputClass}`} type={type} placeholder={placeholder} required />
    )
}

export default CustomInput