import React from 'react'
import Heading from './common/Heading'

const LogIn = () => {
    return (
        <>
            <div className="flex min-h-screen justify-center items-center">
                <div className="max-w-[590px] bg-white border border-[#E3E3E3] rounded-[15px] shadow-[0px_10px_30px_0px_#0000000D] mx-auto p-16">
                    <Heading headingClass="!text-[32px]" headingText="Welcome back!" />
                </div>
            </div>
        </>
    )
}

export default LogIn