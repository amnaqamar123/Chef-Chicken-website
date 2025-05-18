import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide'
import img1 from '../src/assets/boyone.svg'
import img2 from '../src/assets/girl.png'
import img3 from '../src/assets/boytwo.svg'
import '@splidejs/react-splide/css';
import linkedin from '../src/assets/Linkedin.svg'
import burgerimg from '../src/assets/burger.png'


const carouselslider = () => {
    return (
        <div style={{backgroundColor:'#FBE9E5'}} className="relative px-4 sm:px-8 lg:px-24 mt-32">
            <p className="text-center text-amber-700 text-xl tracking-widest p-4">EXPERT CHEFS</p>
            <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-black mt-2">
                Let's meet the experts
            </h1>
            <div className="absolute bottom-[-40px] right-2 sm:bottom-[-60px] sm:right-8 lg:bottom-[400px] lg:right-10 w-52 sm:w-80 lg:w-[450px] z-0 opacity-90 pointer-events-none hidden lg:block">
                <img
                    src={burgerimg}
                    alt="Burger"
                    className="w-full h-auto object-contain"
                />
            </div>

            <div className="px-4 my-10 ">
                <Splide
                    options={{
                        type: 'loop',
                        perPage: 3,
                        rewind: true,
                        gap: '1rem',
                        interval: 3000,
                        autoplay: true,
                        pauseOnHover: true,
                        arrows: false,
                        breakpoints: {
                            1024: {
                                perPage: 2,
                            },
                            640: {
                                perPage: 1,
                            },
                        },
                    }}>

                    <SplideSlide>
                        <div className="flex flex-col items-center">
                            <img className="h-full w-full object-cover relative" src={img1} />
                            <div className="h-52 w-52 rounded-full absolute bottom-28 right-6">
                                <img className="h-full w-full object-cover" src={linkedin} /></div>
                            <h1 className="text-black font-bold text-xl sm:text-2xl text-center">Shoo Thar Mien </h1>
                            <p className="text-gray-500 text-base sm:text-lg text-center mt-2 ">Senior Chef</p> </div>
                    </SplideSlide>


                    <SplideSlide>
                        <div className="flex flex-col items-center">
                            <img className="h-full w-full object-cover relative" src={img2} />
                            <div className="h-52 w-52 rounded-full absolute bottom-28 right-6">
                                <img className="h-full w-full object-cover" src={linkedin} /></div>
                            <h1 className="text-black font-bold text-xl sm:text-2xl text-center">Shoo Thar Mien </h1>
                            <p className="text-gray-500 text-base sm:text-lg text-center mt-2 ">Junior Chef</p></div>
                    </SplideSlide>


                    <SplideSlide>
                        <div className="flex flex-col items-center">
                            <img className="h-full w-full object-cover relative" src={img3} />
                            <div className="h-52 w-52 rounded-full absolute bottom-28 right-6">
                                <img className="h-full w-full object-cover" src={linkedin} /></div>
                            <h1 className="text-black font-bold text-xl sm:text-2xl text-center">Shoo Thar Mien </h1>
                            <p className="text-gray-500 text-base sm:text-lg text-center mt-2">Junior Chef</p></div>
                    </SplideSlide>


                    <SplideSlide>
                        <div className="flex flex-col items-center">
                            <img className="h-full w-full object-cover relative" src={img2} />
                            <div className="h-52 w-52 rounded-full absolute bottom-28 right-6">
                                <img className="h-full w-full object-cover " src={linkedin} /></div>
                            <h1 className="text-black font-bold text-xl sm:text-2xl text-center">Shoo Thar Mien </h1>
                            <p className="text-gray-500 text-base sm:text-lg text-center mt-2 ">Junior Chef</p></div>
                    </SplideSlide>


                    <SplideSlide>
                        <div className="flex flex-col items-center">
                            <img className="h-full w-full object-cover relative" src={img3} />
                            <div className="h-52 w-52 rounded-full absolute bottom-28 right-6">
                                <img className="h-full w-full object-cover" src={linkedin} /></div>
                            <h1 className="text-black font-bold text-xl sm:text-2xl text-center">Shoo Thar Mien </h1>
                            <p className="text-gray-500 text-base sm:text-lg text-center mt-2 ">Junior Chef</p> </div>
                    </SplideSlide>


                    <SplideSlide>
                        <div className="flex flex-col items-center">
                            <img className="h-full w-full object-cover relative" src={img1} />
                            <div className="h-52 w-52 rounded-full absolute bottom-28 right-6">
                                <img className="h-full w-full object-cover" src={linkedin} /></div>
                            <h1 className="text-black font-bold text-xl sm:text-2xl text-center">Shoo Thar Mien </h1>
                            <p className="text-gray-500 text-base sm:text-lg text-center mt-2">Senior Chef</p> </div>
                    </SplideSlide>


                    <SplideSlide>
                        <div className="flex flex-col items-center">
                            <img className="h-full w-full object-cover relative" src={img3} />
                            <div className="h-52 w-52 rounded-full absolute bottom-28 right-6">
                                <img className="h-full w-full object-cover" src={linkedin} /></div>
                            <h1 className="text-black font-bold text-xl sm:text-2xl text-center">Shoo Thar Mien </h1>
                            <p className="text-gray-500 text-base sm:text-lg text-center mt-2">Junior Chef</p></div>
                    </SplideSlide>


                    <SplideSlide>
                        <div className="flex flex-col items-center">
                            <img className="h-full w-full object-cover relative" src={img1} />
                            <div className="h-52 w-52 rounded-full absolute bottom-28 right-6">
                                <img className="h-full w-full object-cover" src={linkedin} /></div>
                            <h1 className="text-black font-bold text-xl sm:text-2xl text-center">Shoo Thar Mien </h1>
                            <p className="text-gray-500 text-base sm:text-lg text-center mt-2 ">Senior Chef</p> </div>
                    </SplideSlide>


                    <SplideSlide>
                        <div className="flex flex-col items-center">
                            <img className="h-full w-full object-cover relative" src={img2} />
                            <div className="h-52 w-52 rounded-full absolute bottom-28 right-6">
                                <img className="h-full w-full object-cover" src={linkedin} /></div>
                            <h1 className="text-black font-bold text-xl sm:text-2xl text-center">Shoo Thar Mien </h1>
                            <p className="text-gray-500 text-base sm:text-lg text-center mt-2 pb-20">Junior Chef</p> </div>
                    </SplideSlide>


                </Splide>
            </div>
        </div>
    )
}
export default carouselslider;