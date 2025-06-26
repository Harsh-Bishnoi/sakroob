import React, { useState } from "react";
import {
    AmericanCard,
    InformationIcon,
    MasterCard,
    Paypal,
    VisaCard,
} from "../utils/Icon";
import CustomButton from "./common/CustomButton";

const CheckOut = () => {
    const [checked, setChecked] = useState(false);
    const [selected, setSelected] = useState("");
    const [couponApplied, setCouponApplied] = useState(false);
    const [coupon, setCoupon] = useState("");
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        country: "",
        firstName: "",
        lastName: "",
        address: "",
        apartment: "",
        city: "",
        emirate: "",
    });

    const [formErrors, setFormErrors] = useState({});

    const handleApplyCoupon = () => {
        if (coupon.trim() !== "") {
            setCouponApplied(true);
            setTimeout(() => {
                setCouponApplied(false);
            }, 1000);
        }
    };

    const handleChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
        setFormErrors((prev) => ({
            ...prev,
            [field]: "",
        }));
    };

    const validateForm = () => {
        const errors = {};

        if (!formData.email.trim()) {
            errors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = "Invalid email format.";
        }

        if (!formData.country.trim()) errors.country = "Country is required.";
        if (!formData.address.trim()) errors.address = "Address is required.";
        if (!formData.city.trim()) errors.city = "City is required.";
        if (!formData.emirate.trim()) errors.emirate = "Emirate is required.";
        if (!selected) errors.payment = "Please select a payment method.";

        return errors;
    };

    const handleSubmit = () => {
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }
        setShowSuccessPopup(true);

        setFormData({
            email: "",
            country: "",
            firstName: "",
            lastName: "",
            address: "",
            apartment: "",
            city: "",
            emirate: "",
        });
        setSelected("");
        setChecked(false);
        setCoupon("");

        setTimeout(() => {
            setShowSuccessPopup(false);
        }, 2000);
    };

    return (
        <div className="min-h-screen py-[120px] overflow-hidden">
            <div className="max-w-[1140px] mx-auto px-3">
                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="w-full lg:w-8/12">
                        <div className="flex flex-wrap justify-between">
                            <p className="font-bold text-2xl text-[#112D49]">Contact</p>
                            <div className="bg-[#F4F8F7] py-[13px] px-[26px] rounded-xl w-full mt-[20px]">
                                <label className="text-xs text-[#8393A0]">
                                    Email or mobile phone number
                                </label>
                                <input
                                    type="text"
                                    placeholder="tim.jennings@example.com"
                                    value={formData.email}
                                    onChange={(e) => handleChange("email", e.target.value)}
                                    className={`outline-0 text-[#112D49] w-full ${formErrors.email ? "border border-red-500" : ""}`}
                                />
                                {formErrors.email && (
                                    <p className="text-red-500 text-xs">{formErrors.email}</p>
                                )}
                            </div>
                        </div>
                        <p className="font-bold text-2xl text-[#112D49] pt-[35px]">Delivery</p>
                        <div className="bg-[#F4F8F7] py-[13px] px-[26px] rounded-xl w-full mt-[20px]">
                            <label className="text-xs text-[#8393A0]">Country/ Region</label>
                            <input
                                type="text"
                                placeholder="Guinea"
                                value={formData.country}
                                onChange={(e) => handleChange("country", e.target.value)}
                                className={`outline-0 text-[#112D49] w-full ${formErrors.country ? "border border-red-500" : ""}`}
                            />
                            {formErrors.country && (
                                <p className="text-red-500 text-xs">{formErrors.country}</p>
                            )}
                        </div>

                        <div className="flex flex-col md:flex-row gap-[30px] mt-[26px]">
                            {["firstName", "lastName"].map((field, index) => (
                                <div key={index} className="bg-[#F4F8F7] py-[13px] px-[26px] rounded-xl w-full">
                                    <label className="text-xs text-[#8393A0] capitalize">
                                        {field === "firstName" ? "First name (Optional)" : "Last name (Optional)"}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder={field === "firstName" ? "First name" : "Last name"}
                                        value={formData[field]}
                                        onChange={(e) => handleChange(field, e.target.value)}
                                        className="outline-0 text-[#112D49] w-full"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="bg-[#F4F8F7] py-[13px] px-[26px] rounded-xl w-full mt-[20px]">
                            <label className="text-xs text-[#8393A0]">Address</label>
                            <input
                                type="text"
                                placeholder="123 Main St"
                                value={formData.address}
                                onChange={(e) => handleChange("address", e.target.value)}
                                className={`outline-0 text-[#112D49] w-full ${formErrors.address ? "border border-red-500" : ""}`}
                            />
                            {formErrors.address && (
                                <p className="text-red-500 text-xs">{formErrors.address}</p>
                            )}
                        </div>

                        <div className="flex gap-[8px] pt-[16px] items-center">
                            <InformationIcon />
                            <p className="text-[#41576D]">Add a house number if you have one</p>
                        </div>

                        <div className="bg-[#F4F8F7] py-[13px] px-[26px] rounded-xl w-full mt-[20px]">
                            <label className="text-xs text-[#8393A0]">
                                Apartment, Suit, etc. (optional)
                            </label>
                            <input
                                type="text"
                                placeholder="Apartment 4B"
                                value={formData.apartment}
                                onChange={(e) => handleChange("apartment", e.target.value)}
                                className="outline-0 text-[#112D49] w-full"
                            />
                        </div>

                        <div className="flex flex-col md:flex-row gap-[30px] mt-[26px]">
                            {["city", "emirate"].map((field, index) => (
                                <div key={index} className="bg-[#F4F8F7] py-[13px] px-[26px] rounded-xl w-full">
                                    <label className="text-xs text-[#8393A0] capitalize">{field}</label>
                                    <input
                                        type="text"
                                        placeholder={field === "city" ? "Ajman" : "Abu Dhabi"}
                                        value={formData[field]}
                                        onChange={(e) => handleChange(field, e.target.value)}
                                        className={`outline-0 text-[#112D49] w-full ${formErrors[field] ? "border border-red-500" : ""}`}
                                    />
                                    {formErrors[field] && (
                                        <p className="text-red-500 text-xs">{formErrors[field]}</p>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-[8px] items-center pt-[16px]">
                            <input
                                type="checkbox"
                                checked={checked}
                                onChange={() => setChecked(!checked)}
                            />
                            <p className="text-[#41576D]">Save this information for next time</p>
                        </div>

                        <p className="text-lg text-[#112D49] pt-[42px]">Shipping method</p>
                        <div className="bg-[#F4F8F7] py-[13px] px-[26px] rounded-xl w-full mt-[20px] flex justify-between items-center">
                            <input
                                type="text"
                                placeholder="Standard (Example)"
                                className="outline-0 text-[#112D49] w-full"
                                disabled
                            />
                            <p className="font-semibold text-[#112D49] ml-4 whitespace-nowrap">
                                AED 20.00
                            </p>
                        </div>

                        <p className="font-bold text-2xl text-[#112D49] pt-[42px]">Payment</p>
                        <p className="text-[#41576D] pt-[4px]">
                            All transactions are secure and encrypted.
                        </p>

                        <div className="border border-[#E8EBED] py-[20px] px-[28px] mt-[20px]">
                            {formErrors.payment && (
                                <p className="text-red-500 text-xs mb-2">{formErrors.payment}</p>
                            )}
                            <div className="flex flex-wrap justify-between">
                                <label className="flex items-center gap-[8px] cursor-pointer">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="paypal"
                                        checked={selected === "paypal"}
                                        onChange={() => setSelected("paypal")}
                                        className="sr-only"
                                    />
                                    <div
                                        className={`w-6 h-6 rounded-full flex items-center justify-center ${selected === "paypal"
                                            ? "border-4 border-blue-400"
                                            : "border-2 border-gray-300"
                                            }`}
                                    >
                                        {selected === "paypal" && (
                                            <div className="w-3 h-3 bg-blue-400 rounded-full" />
                                        )}
                                    </div>
                                    <Paypal />
                                </label>

                                <div className="flex gap-1.5">
                                    <VisaCard />
                                    <MasterCard />
                                    <AmericanCard />
                                </div>
                            </div>

                            {["card", "bank"].map((method, index) => (
                                <label key={index} className="flex items-center gap-[8px] pt-[34px] cursor-pointer">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value={method}
                                        checked={selected === method}
                                        onChange={() => setSelected(method)}
                                        className="sr-only"
                                    />
                                    <div
                                        className={`w-6 h-6 rounded-full flex items-center justify-center ${selected === method
                                            ? "border-4 border-blue-400"
                                            : "border-2 border-gray-300"
                                            }`}
                                    >
                                        {selected === method && (
                                            <div className="w-3 h-3 bg-blue-400 rounded-full" />
                                        )}
                                    </div>
                                    <p className="text-[#40566D]">
                                        {method === "card" ? "Credit Card/ Debit Card" : "Bank Transfer"}
                                    </p>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12 relative overflow-visible mt-10 lg:mt-0">
                        <div className={`absolute top-[-100px] right-0 px-4 py-2 rounded-md text-sm transition-all duration-300 ${couponApplied
                            ? "opacity-100 bg-green-100 border border-green-400 text-green-700"
                            : "opacity-0"
                            }`}>
                            Coupon Applied Successfully!
                        </div>

                        {showSuccessPopup && (
                            <div className="absolute top-[-50px] right-0 bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-md text-sm shadow-md transition-all duration-300">
                                Order placed successfully!
                            </div>
                        )}

                        <div className="p-3.5 shadow-lg rounded-[8px]">
                            <div className="flex items-center justify-between pb-[26px]">
                                <p className="text-[#112D49]">Gaming Chair</p>
                                <p className="text-[#112D49]">AED 357.99</p>
                            </div>
                            <a className="text-[#73A4E0] text-[13px] font-medium" href="#">
                                Have a coupon? Click here to enter your code
                            </a>
                            <div className="flex flex-col sm:flex-row gap-[10px] mt-[10px]">
                                <input
                                    type="text"
                                    placeholder="Coupon code"
                                    value={coupon}
                                    onChange={(e) => setCoupon(e.target.value)}
                                    className="outline-0 text-[#112D49] bg-[#F4F8F7] py-[13px] px-[26px] rounded-full w-full"
                                />
                                <CustomButton
                                    onClick={handleApplyCoupon}
                                    btnClass="font-medium whitespace-nowrap text-[#112D49] border border-[#112D49] max-w-[119px] w-full py-2 px-[15px] rounded-[93px] hover:bg-[#112D49]/80 hover:text-white transition-all"
                                    btnText="Apply Now"
                                />
                            </div>
                            <CustomButton
                                onClick={handleSubmit}
                                btnClass="hover:bg-[#112D49]/80 hover:text-white !w-full !max-w-[330px] mt-5"
                                btnText="Buy Now"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;
