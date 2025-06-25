import React, { useState } from 'react';
import Heading from './common/Heading';
import Description from './common/Description';
import CustomInput from './common/CustomInput';
import CustomButton from './common/CustomButton';
import { PasswordEye, ShowPasswordEye } from '../utils/Icons';

const SignUp = () => {
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    };

    const [inputValue, setInputValue] = useState(initialValues);
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const validateEmail = (email) =>
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/.test(email);

    const validatePassword = (password) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(password);

    const validateName = (name) =>
        /^[A-Za-z]{2,}$/.test(name.trim());

    const validateForm = () => {
        const isFirstNameValid = validateName(inputValue.firstName);
        const isLastNameValid = validateName(inputValue.lastName);
        const isEmailValid = validateEmail(inputValue.email);
        const isPasswordValid = validatePassword(inputValue.password);

        setFirstNameError(isFirstNameValid ? "" : "First name must be at least 2 letters.");
        setLastNameError(isLastNameValid ? "" : "Last name must be at least 2 letters.");
        setEmailError(isEmailValid ? "" : "Please enter a valid email address.");
        setPasswordError(
            isPasswordValid
                ? ""
                : "Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
        );

        return isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        console.log("Form submitted:", inputValue);

        setInputValue(initialValues);
        setFirstNameError("");
        setLastNameError("");
        setEmailError("");
        setPasswordError("");
        setShowPopup(true);

        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    };

    return (
        <div className="flex min-h-screen justify-center items-center px-4 bg-[url(src/assets/images/png/login-bg-img.png)]">
            <div className="max-w-[590px] w-full bg-white border border-[#E3E3E3] rounded-[15px] shadow-[0px_10px_30px_0px_#0000000D] mx-auto px-4 py-6 sm:p-16">
                <form onSubmit={handleSubmit}>
                    <div className="max-w-[462px] mx-auto">
                        <Heading headingClass="!text-[32px]" headingText="Sign up" />
                        <Description
                            descriptionClass="text-center mx-auto pt-2 max-w-[374px]"
                            descriptionText="Create your account to unlock access and stay updated with everything we offer."
                        />

                        <CustomInput
                            inputClass="!py-3.5 !px-7 mt-6"
                            name="firstName"
                            value={inputValue.firstName}
                            type="text"
                            placeholder="First name"
                            required
                            onChange={(e) =>
                                setInputValue({ ...inputValue, firstName: e.target.value })
                            }
                        />
                        {firstNameError && (
                            <p className="text-red-500 text-sm mt-1">{firstNameError}</p>
                        )}

                        <CustomInput
                            inputClass="!py-3.5 !px-7 mt-3"
                            name="lastName"
                            value={inputValue.lastName}
                            type="text"
                            placeholder="Last name"
                            required
                            onChange={(e) =>
                                setInputValue({ ...inputValue, lastName: e.target.value })
                            }
                        />
                        {lastNameError && (
                            <p className="text-red-500 text-sm mt-1">{lastNameError}</p>
                        )}

                        <CustomInput
                            inputClass="!py-3.5 !px-7 mt-3"
                            name="email"
                            value={inputValue.email}
                            type="email"
                            placeholder="Email address"
                            required
                            onChange={(e) =>
                                setInputValue({ ...inputValue, email: e.target.value })
                            }
                        />
                        {emailError && (
                            <p className="text-red-500 text-sm mt-1">{emailError}</p>
                        )}

                        <div className="relative">
                            <CustomInput
                                inputClass="!py-3.5 !px-7 my-3"
                                name="password"
                                value={inputValue.password}
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                required
                                onChange={(e) =>
                                    setInputValue({ ...inputValue, password: e.target.value })
                                }
                            />
                            <div
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute cursor-pointer top-[25px] right-[15px]"
                            >
                                {showPassword ? <ShowPasswordEye /> : <PasswordEye />}
                            </div>
                        </div>
                        {passwordError && (
                            <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                        )}

                        <CustomButton
                            type="submit"
                            btnClass="bg-[#112D49] w-full text-white hover:bg-[#112D49]/80 mt-6"
                            btnText="Sign up"
                        />

                        <p className="text-[#112D49] leading-[150%] mt-5 text-center">
                            Already a member?
                            <span>
                                <a className="underline hover:text-red-400 transition-all duration-200 ease-linear font-semibold" href="#">
                                    {" "}Log in
                                </a>
                            </span>
                        </p>
                    </div>
                </form>
            </div>

            {showPopup && (
                <div className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-2 rounded shadow-md z-50 transition-all duration-300">
                    <p className='font-semibold'>SignUp successful!</p>
                </div>
            )}
        </div>
    );
};

export default SignUp;