import React from 'react'

const Description = ({ descriptionClass, descriptionText }) => {
    return (
        <>
            <p className={`text-[#112D49] text-[32px] font-bold leading-[120%] ${descriptionClass}`}>{descriptionText}</p>
        </>
    )
}

export default Description