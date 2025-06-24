import React, { useState } from 'react';
import Heading from './common/Heading';
import productImage from '../assets/images/png/product.png';
import { DeleteIcon, IncreaseIcon, ReduceIcon } from '../utils/Icons';
import CustomButton from '../components/common/CustomButton'

const AddToCart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Gaming Chair',
            image: productImage,
            price: 5935.16,
            quantity: 1
        },
        {
            id: 2,
            name: 'Gaming Chair',
            image: productImage,
            price: 5935.16,
            quantity: 1
        }
    ]);

    const increment = (id) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decrement = (id) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const handleDelete = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };
    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);


    return (
        <div className="mt-23.5 px-4 md:px-7 mb-[132px]">
            <div className="max-w-[1140px] mx-auto">
                <div className="flex justify-between items-center">
                    <Heading headingClass="!text-2xl md:text-[34px] leading-[100%]" headingText="Your cart" />
                    <a className='font-medium leading-[100%] underline text-[#112D49]' href='/'>Continue Shopping</a>
                </div>
                {cartItems.length > 0 ? (
                    <div className="mt-13 w-full rounded-xl bg-[#F4F8F7] ">
                        <div className="max-xl:overflow-x-scroll">
                            <table className="w-full text-left whitespace-nowrap">
                                <thead className='bg-[#F5F5F5] border-b border-[#112D491A]'>
                                    <tr>
                                        <th className='w-[451px] pl-5 font-medium text-lg leading-[150%] text-[#112D49] py-[18.5px]'>Product</th>
                                        <th className="text-start font-medium text-lg leading-[150%] text-[#112D49] w-[290px] py-[18.5px]">Quantity</th>
                                        <th className="text-start pr-5 font-medium text-lg leading-[150%] text-[#112D49] py-[18.5px]">Total</th>
                                    </tr>
                                </thead>
                                <tbody className=''>
                                    {cartItems.map(item => (
                                        <tr key={item.id} className=''>
                                            <td className="flex items-center gap-4 px-5 w-[451px] pt-[47px]">
                                                <div className="min-w-[85px] min-h-[85px] border-[#00000033] rounded-[7px] relative flex items-center justify-center border">
                                                    <img src={item.image} alt="product" className="object-fit rounded" />
                                                    <div className="size-[34.24px] left-[68.47px] -top-4 bg-[#C7C7C7] rounded-[39.94px] flex items-center justify-center text-[#112D49] absolute">
                                                        {item.quantity}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-xl leading-[150%] text-[#112D49]">{item.name}</h4>
                                                    <p className="text-sm leading-[150%] opacity-50 text-[#112D49]">₹ {item.price.toFixed(2)}</p>
                                                </div>
                                            </td>
                                            <td className="text-start w-[222px] whitespace-nowrap pr-20 pt-[47px]">
                                                <div className="flex items-center justify-start gap-[17px]">
                                                    <div className="flex items-center">
                                                        <button
                                                            onClick={() => decrement(item.id)}
                                                            className="w-[44px] h-[40px] flex items-center justify-center bg-[#73A4E0] hover:bg-[#73A4E0]/60 text-white rounded-l"
                                                        >
                                                            <ReduceIcon />
                                                        </button>
                                                        <div className="w-[60px] h-[40px] border-y flex items-center justify-center text-[#112D49] opacity-70 text-xl">
                                                            {item.quantity}
                                                        </div>
                                                        <button
                                                            onClick={() => increment(item.id)}
                                                            className="w-[44px] h-[40px] flex items-center justify-center bg-[#112D49] hover:bg-[#112D49]/60 text-white rounded-r"
                                                        >
                                                            <IncreaseIcon />
                                                        </button>
                                                    </div>
                                                    <div
                                                        onClick={() => handleDelete(item.id)}
                                                        className="cursor-pointer delete-svg inline-flex items-center justify-center transition-all duration-200 ease-linear"
                                                    >
                                                        <DeleteIcon />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-start pr-5 w-[150px] text-[#112D49] pt-[47px] opacity-80 whitespace-nowrap">₹ {(item.price * item.quantity).toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="border w-full mt-[49px]"></div>
                        <div className="flex justify-end">
                            <div className="mt-5 max-w-[328px] pr-5">
                                <div className="flex justify-between items-center">
                                    <p className='text-[#112D49] leading-[150%]'>Estimated total </p>
                                    <p className='text-[#112D49] font-semibold leading-[100%]'>₹ {totalAmount.toFixed(2)}</p>
                                </div>
                                <p className='pt-2 leading-[150%] text-[#112D49] opacity-80'>Taxes, discounts and shipping calculated at checkout. </p>
                                <CustomButton btnClass="w-full bg-[#112D49] text-white mt-6 mb-5 hover:bg-[#112D49]/80" btnText="Check out" />
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className="mt-10 text-[#112D49] opacity-80 text-2xl text-center">Your cart is empty.</p>
                )}
            </div>
        </div>
    );
};

export default AddToCart;