import React from 'react'

const Heading = ({ headingClass, headingText }) => {
    return (
        <>
            <h2 className={` font-bold text-5xl leading-[120%] text-center text-[#112D49] ${headingClass}`}>{headingText}</h2>
        </>
    )
}

export default Heading