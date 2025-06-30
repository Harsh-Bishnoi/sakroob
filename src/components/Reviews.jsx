import React from 'react'
import fullStar from '../assets/images/png/full-star.png'
import { ProfileStar, ReviewArrow, ReviewStar } from '../utils/Icon'
import CustomButton from './common/CustomButton'
import { Link } from 'react-router-dom'
import profileImg from '../assets/images/png/profile-img.png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Reviews = () => {
    return (
        <>
            <div className="mt-20 sm:mt-[85px] md:mt-[124px] px-3">
                <div className="max-w-[1140px] mx-auto">
                    <Tabs>
                        <TabList className="justify-between flex md:pl-8.5 md:pr-8.5 xl:pr-[135px]">
                            <Tab className='outline-0 cursor-pointer texxt-xl md:text-2xl font-medium leading-[100%] text-[#112D49]'>Reviews</Tab>
                            <Tab className="outline-0 cursor-pointer texxt-xl md:text-2xl font-medium leading-[100%] text-[#112D49]">Specifications</Tab>
                            <Tab className="outline-0 cursor-pointer texxt-xl md:text-2xl font-medium leading-[100%] text-[#112D49]">FAQ’s</Tab>
                        </TabList>
                        <div className="border-[#EEF4FB] h-[7px] mt-3 rounded-[13px] border-[0.5px] shadow-[0px_0px_8.4px_0px_#73A4E01A]"></div>
                        <TabPanel>
                            <div className="shadow-[0px_0px_11.4px_0px_#73A4E033] rounded-xl bg-white p-6 mt-[34px]">
                                <div className="md:flex max-xl:justify-between xl:gap-[165px]">
                                    <div className="xl:flex w-full max-w-[360px] lg:max-w-[570px]">
                                        <div>
                                            <h3 className='text-[#112D49] text-[22px] font-semibold leading-[170%]'>Customer Reviews</h3>
                                            <img className='mt-2' src={fullStar} alt="star-img" />
                                            <p className='text-[#112D49] text-sm font-medium leading-[170%]'>Based on 1 review</p>
                                        </div>
                                        <div className="w-full max-w-[359px] mt-6 md:mt-[45px]">
                                            <div className="max-w-[359px] flex items-center gap-4 justify-start">
                                                <div className="flex items-center gap-1">
                                                    <p className='text-[#112D49] font-medium text-sm leading-[170%]'>5</p>
                                                    <ReviewStar />
                                                </div>
                                                <div className="max-w-[257px] w-full bg-[#FFD900] h-2 rounded-3xl">
                                                </div>
                                                <p className='text-sm leading-[170%] text-[#112D49]'>100%</p>
                                            </div>
                                            <div className="max-w-[359px] flex items-center gap-4 mt-[9px] justify-start">
                                                <div className="flex items-center gap-1">
                                                    <p className='text-[#112D49] font-medium text-sm leading-[170%]'>4</p>
                                                    <ReviewStar />
                                                </div>
                                                <div className="max-w-[257px] w-full bg-[#F7F7F7] h-2 rounded-3xl">
                                                    <div className="bg-[#FFD900] h-2 rounded-3xl max-w-[206px]" ></div>
                                                </div>
                                                <p className='text-sm leading-[170%] text-[#112D49]'>88%</p>
                                            </div>
                                            <div className="max-w-[359px] flex items-center gap-4 mt-[9px] justify-start">
                                                <div className="flex items-center gap-1">
                                                    <p className='text-[#112D49] font-medium text-sm leading-[170%]'>3</p>
                                                    <ReviewStar />
                                                </div>
                                                <div className="max-w-[257px] w-full bg-[#F7F7F7] h-2 rounded-3xl">
                                                    <div className="bg-[#FFD900] h-2 rounded-3xl max-w-[100px]" ></div>
                                                </div>
                                                <p className='text-sm leading-[170%] text-[#112D49]'>42%</p>
                                            </div>
                                            <div className="max-w-[359px] flex items-center gap-4 mt-[9px] justify-start">
                                                <div className="flex items-center gap-1">
                                                    <p className='text-[#112D49] font-medium text-sm leading-[170%]'>2</p>
                                                    <ReviewStar />
                                                </div>
                                                <div className="max-w-[257px] w-full bg-[#F7F7F7] h-2 rounded-3xl">
                                                    <div className="bg-[#FFD900] h-2 rounded-3xl max-w-[112px]" ></div>
                                                </div>
                                                <p className='text-sm leading-[170%] text-[#112D49]'>58%</p>
                                            </div>
                                            <div className="max-w-[359px] flex items-center gap-4 mt-[9px] justify-start">
                                                <div className="flex items-center gap-1">
                                                    <p className='text-[#112D49] font-medium text-sm leading-[170%]'>1</p>
                                                    <ReviewStar />
                                                </div>
                                                <div className="max-w-[257px] w-full bg-[#F7F7F7] h-2 rounded-3xl">
                                                    <div className="bg-[#FFD900] h-2 rounded-3xl max-w-[47px]" ></div>
                                                </div>
                                                <p className='text-sm leading-[170%] text-[#112D49]'>20%</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="justify-center flex flex-col mt-6 md:mt-[105px]">
                                        <p className='font-semibold text-[22px] leading-[170%] text-[#112D49'>Review this Product</p>
                                        <p className='pt-1.5 font-medium text-sm leading-[170%] text-[#112D49]'>Share your thought with other customers</p>
                                        <CustomButton btnClass="bg-[#112D49] max-w-[250px] text-white hover:bg-[#112D49]/80 mt-4 md:mt-[25px]" btnText="Write a Customer Review" />
                                    </div>
                                </div>
                                <Link className='mt-4 md:mt-[11px] underline font-medium leading-[100%] flex items-center max-w-max gap-[13px] group' to="#">See all Customers Reviews <span className='group-hover:translate-x-1 transition-all duration-200 ease-linear'><ReviewArrow /></span> </Link>
                                <div className="vertical-gradient relative mt-8 sm:mt-14 h-0.5"></div>
                                <div className="flex gap-3.5 mt-8 sm:mt-8.5 items-center">
                                    <img src={profileImg} alt="profile-img" />
                                    <div>
                                        <div className="flex gap-[9px] items-center">
                                            <ProfileStar />
                                            <p className='text-[#112D49] text-sm leading-[170%] font-medium'>23/05/2025</p>
                                        </div>
                                        <h2 className='text-[#112D49] leading-[120%] font-semibold text-xl pt-1'>Kathryn Murphy</h2>
                                    </div>
                                </div>
                                <p className='max-w-[971px] leading-[150%] text-[#112D49] pt-4'>Excellent router that offers great value for its price. The setup process is straightforward and user-friendly, making it easy even for non-technical users. With two powerful 5 dBi antennas, the router delivers a strong and stable network connection throughout the home or office, ensuring no lag or disconnections during browsing, streaming, or gaming. Its compact design fits well in any space, making it both efficient and unobtrusive. Highly recommended for reliable everyday internet use.</p>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="shadow-[0px_0px_11.4px_0px_#73A4E033] rounded-xl bg-white p-6 mt-[34px]">
                                Comming Soon...</div>
                        </TabPanel>
                        <TabPanel>
                            <div className="shadow-[0px_0px_11.4px_0px_#73A4E033] rounded-xl bg-white p-6 mt-[34px]">
                                Comming Soon</div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </>
    )
}

export default Reviews