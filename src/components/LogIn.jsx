import React, { useState } from 'react'
import Heading from './common/Heading'
import Description from './common/Description'
import CustomInput from './common/CustomInput';
import CustomButton from './common/CustomButton';
import { PasswordEye, ShowPasswordEye } from '../utils/Icons';

const LogIn = () => {
    const initialValues = {
        email: "",
        password: "",
    }
    const [inputValue, setInputValue] = useState(initialValues);
    const [showPassword, setShowPassword] = useState(false);


    const handelSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", inputValue);
        setInputValue(initialValues);
    };
    return (
        <>
            <div className="flex min-h-screen justify-center items-center px-4 bg-[url(src/assets/images/png/login-bg-img.png)]">
                <div className="max-w-[590px] w-full bg-white border border-[#E3E3E3] rounded-[15px] shadow-[0px_10px_30px_0px_#0000000D] mx-auto px-4 py-6 sm:p-16">
                    <form onSubmit={handelSubmit}>
                        <div className="max-w-[462px] mx-auto">
                            <Heading headingClass="!text-[32px]" headingText="Welcome back!" />
                            <Description descriptionClass="text-center mx-auto pt-2 max-w-[326px]" descriptionText="Log in below to access your account and keep things running smoothly." />
                            <CustomInput inputClass="!py-3.5 !px-7 mt-6"
                                name="email"
                                value={inputValue.email}
                                type="email"
                                placeholder="Email address"
                                onChange={(e) => setInputValue({ ...inputValue, email: e.target.value })}
                            />
                            <div className="relative">
                                <CustomInput inputClass="!py-3.5 !px-7 my-3"
                                    name="password"
                                    value={inputValue.password}
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    onChange={(e) => setInputValue({ ...inputValue, password: e.target.value })}
                                />
                                <div onClick={() => setShowPassword(!showPassword)} className="absolute cursor-pointer top-[25px] right-[15px]">{showPassword ? <ShowPasswordEye /> : <PasswordEye />}</div>
                            </div>
                            <div className="text-end">
                                <a className='font-medium leading-[100%] text-end underline text-[#112D49] hover:text-red-400 transition-all duration-200 ease-linear' href="">Forgot password?</a>
                            </div>
                            <CustomButton type="submit" btnClass="bg-[#112D49] w-full text-white hover:bg-[#112D49]/80 mt-6" btnText="Log in" />
                            <p className='text-[#112D49] leading-[150%] mt-5 text-center'>Don’t have an account?<span className='max-sm:hidden'><a className='underline hover:text-red-400 transition-all duration-200 ease-linear font-semibold' href=""> Create account</a></span></p>
                            <div className="mx-auto text-center">
                                <a className='underline font-semibold text-center sm:hidden hover:text-red-400 transition-all duration-200 ease-linear' href=""> Create account</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LogIn