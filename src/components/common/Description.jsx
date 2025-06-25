import React from 'react'

const Description = ({ descriptionClass, descriptionText }) => {
    return (
        <>
            <p className={`text-[#112D49] max-sm:text-sm leading-[150%] opacity-80 ${descriptionClass}`}>{descriptionText}</p>
        </>
    )
}

export default Description