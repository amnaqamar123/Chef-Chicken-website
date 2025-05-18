import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import logo from '../src/assets/Logo.svg'

const Footer = () => {
    return (
        <footer className="bg-white text-black px-6 md:px-16 py-12 mt-20">
            <div className="flex flex-col md:flex-row justify-between gap-10">
                
                <div className="md:w-1/3 space-y-6">
                    <div className="flex items-center gap-3">
                        <img src={logo} className="w-10 h-10" />
                        <h1 className="text-2xl font-bold">Chef's Kitchen.</h1>
                    </div>
                    <p className="text-gray-600 max-w-sm">
                        Open an account in minutes, get full financial control for much longer.
                    </p>
                    <div className="flex gap-4">
                        <div className='group'>
                            <div className="bg-white shadow-md p-3 rounded-full group-hover:bg-amber-700">
                                <FacebookIcon className="text-black group-hover:text-white cursor-pointer" />
                            </div></div>
                        <div className='group'>
                            <div className="bg-white shadow-md p-3 rounded-full  group-hover:bg-amber-700">
                                <InstagramIcon className="text-black group-hover:text-white cursor-pointer" />
                            </div></div>
                        <div className='group'>
                            <div className="bg-white shadow-md p-3 rounded-full  group-hover:bg-amber-700">
                                <TwitterIcon className="text-black group-hover:text-white cursor-pointer" />
                            </div></div>
                    </div>
                </div>

                
                <div className="flex flex-1 justify-between flex-wrap gap-10">
                    <div>
                        <h2 className="font-bold text-lg mb-4">Company</h2>
                        <ul className="space-y-2 text-gray-700 ">
                            <li className='hover:text-amber-700 cursor-pointer'>About</li>
                            <li className='hover:text-amber-700 cursor-pointer'>Careers</li>
                            <li className='hover:text-amber-700 cursor-pointer'>Mobile</li>
                            <li className='hover:text-amber-700 cursor-pointer'>Blog</li>
                            <li className='hover:text-amber-700 cursor-pointer'>How we work?</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold text-lg mb-4">Information</h2>
                        <ul className="space-y-2 text-gray-700">
                            <li className='hover:text-amber-700 cursor-pointer'>Help/FAQ</li>
                            <li className='hover:text-amber-700 cursor-pointer'>Press</li>
                            <li className='hover:text-amber-700 cursor-pointer'>Affiliates</li>
                            <li className='hover:text-amber-700 cursor-pointer'>Hotel owners</li>
                            <li className='hover:text-amber-700 cursor-pointer'>Partners</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold text-lg mb-4">More</h2>
                        <ul className="space-y-2 text-gray-700">
                            <li className='hover:text-amber-700 cursor-pointer'>Home</li>
                            <li className='hover:text-amber-700 cursor-pointer'>About Us</li>
                            <li className='hover:text-amber-700 cursor-pointer'>Recipe</li>
                            <li className='hover:text-amber-700 cursor-pointer'>Gallery</li>
                        </ul>
                    </div>
                </div>
            </div>

           
            <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-600">
                <p>@2025 - Chef's kitchen. Distributed By ThemeWagon and Developed by <span className='hover:text-amber-700 cursor-pointer'>GetNextjsTemplates</span></p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <p className='hover:text-amber-700 cursor-pointer'>Privacy policy</p>
                    <p className='hover:text-amber-700 cursor-pointer'>Terms & condition</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
