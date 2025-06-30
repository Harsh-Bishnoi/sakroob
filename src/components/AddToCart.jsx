import React from 'react';
import Heading from './common/Heading';
import { NavLink, useNavigate } from 'react-router-dom';
import CustomButton from '../components/common/CustomButton';
import { useCart } from '../context/CartContext';
import { DeleteIcon, IncreaseIcon, ReduceIcon } from '../utils/Icon';

const AddToCart = () => {
    const navigate = useNavigate();
    const { cartItems, increment, decrement, removeFromCart } = useCart();

    const handleCheckout = () => {
        navigate('/checkout');
    };

    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="mt-23.5 px-4 md:px-7 mb-[132px]">
            <div className="max-w-[1140px] mx-auto">
                <div className="flex justify-between items-center">
                    <Heading headingClass="!text-2xl md:text-[34px] leading-[100%]" headingText="Your cart" />
                    <NavLink className='font-medium leading-[100%] underline text-[#112D49]' to='/'>Continue Shopping</NavLink>
                </div>

                {cartItems.length > 0 ? (
                    <div className="mt-13 w-full rounded-xl bg-[#F4F8F7]">
                        <div className="max-xl:overflow-x-scroll">
                            <table className="w-full text-left">
                                <thead className='bg-[#F5F5F5] border-b border-[#112D491A]'>
                                    <tr>
                                        <th className='w-[451px] pl-5 font-medium text-lg text-[#112D49] py-[18.5px]'>Product</th>
                                        <th className="text-start font-medium text-lg text-[#112D49] w-[290px] py-[18.5px]">Quantity</th>
                                        <th className="text-start pr-5 font-medium text-lg text-[#112D49] py-[18.5px]">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map(item => (
                                        <tr key={item.id}>
                                            <td className="flex items-center gap-5 px-5 w-[451px] pt-[47px]">
                                                <div className="min-w-[85px] min-h-[85px] border rounded-[7px] relative flex items-center justify-center">
                                                    <img src={item.img} alt="product" className="pointer-events-none object-fit rounded max-w-[50px] max-h-[72px]" />
                                                    <div className="size-[34.24px] left-[68.47px] -top-4 bg-[#C7C7C7] rounded-full flex items-center justify-center text-[#112D49] absolute">
                                                        {item.quantity}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-xl text-[#112D49] max-w-[300px]">{item.title}</h4>
                                                    <p className="text-sm text-[#112D49] opacity-50">₹ {item.price.toFixed(2)}</p>
                                                </div>
                                            </td>
                                            <td className="text-start w-[222px] pr-20 pt-[47px]">
                                                <div className="flex items-center gap-[17px]">
                                                    <div className="flex items-center">
                                                        <button onClick={() => decrement(item.id)} className="w-[44px] h-[40px] bg-[#73A4E0] hover:bg-[#73A4E0]/60 text-white rounded-l flex items-center justify-center cursor-pointer transition-a;l duration-200 ease-linear">
                                                            <ReduceIcon />
                                                        </button>
                                                        <div className="w-[60px] h-[40px] border-y border-[#0000003D] flex items-center justify-center text-[#112D49] text-xl"> {item.quantity < 10 ? `0${item.quantity}` : item.quantity}</div>
                                                        <button onClick={() => increment(item.id)} className="w-[44px] h-[40px] bg-[#112D49] hover:bg-[#112D49]/60 text-white rounded-r flex items-center justify-center cursor-pointer transition-a;l duration-200 ease-linear">
                                                            <IncreaseIcon />
                                                        </button>
                                                    </div>
                                                    <div onClick={() => removeFromCart(item.id)} className="cursor-pointer delete-svg">
                                                        <DeleteIcon />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-start pr-5 w-[150px] text-[#112D49] pt-[47px] opacity-80">₹ {(item.price * item.quantity).toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="vertical-gradient w-full mt-[49px] relative"></div>
                        <div className="flex justify-end">
                            <div className="mt-5 max-w-[328px] pr-5">
                                <div className="flex justify-between items-center">
                                    <p className='text-[#112D49]'>Estimated total</p>
                                    <p className='text-[#112D49] font-semibold'>₹ {totalAmount.toFixed(2)}</p>
                                </div>
                                <p className='pt-2 text-[#112D49] opacity-80'>Taxes, discounts and shipping calculated at checkout.</p>
                                <CustomButton onClick={handleCheckout} btnClass="w-full bg-[#112D49] text-white mt-6 mb-5 hover:bg-[#112D49]/80" btnText="Check out" />
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