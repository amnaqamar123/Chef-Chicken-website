import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import soupimg from '../src/assets/soup.svg'
import lec from '../src/assets/lec.svg'
import yellowdot from '../src/assets/yellow.svg'
import bluedot from '../src/assets/blue.svg'
import onion from '../src/assets/onion.svg'

const NewsletterSection = () => {
  return (
    <div className="flex items-center justify-between bg-[#de624f] h-[500px] w-full rounded-tr-[300px] px-10 mt-40 relative">
      
     
      <div className="max-w-xl text-white space-y-4">
        <p className="uppercase text-sm">Newsletter</p>
        <h1 className="text-5xl font-bold">Subscribe our newsletter.</h1>

        
        <div className="flex items-center bg-white rounded-full overflow-hidden w-[90%] mt-6">
          <input
            type="email"
            placeholder="@ enter your email-address"
            className="flex-grow px-6 py-4 text-gray-500 outline-none"
          />
          <button className="bg-gray-900 text-white p-1 lg:p-4 rounded-full m-1">
            <ArrowRightAltIcon />
          </button>
        </div>
      </div>

     
      <div className="w-1/2 flex justify-center relative">
        <img
          src={soupimg} 
          
          className="w-[550px] h-[550px] rounded-full object-cover absolute -top-80 left-20 hidden md:block"
        />
        <img className=' object-cover h-[300px] w-[300px] absolute left-[450px] -top-44 hidden md:block ' src={lec} />
        <img className='object-cover h-[60px] w-[60px] absolute left-20 top-40 hidden md:block' src={yellowdot} />
        <img className='object-cover h-[25px] w-[25px] absolute right-14 top-16 hidden md:block' src={bluedot} />
        <img className='object-cover h-[200px] w-[200px] absolute top-40 right-60 hidden md:block' src={onion} />
      </div>
    </div>
  );
};

export default NewsletterSection;
