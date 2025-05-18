import React from 'react';
import img1 from '../src/assets/foodone.jpg';
import img2 from '../src/assets/foodtwo.jpg';
import img3 from '../src/assets/foodthree.jpg';
import img4 from '../src/assets/foodfour.jpg';
import { Button } from 'react-bootstrap';

function Gallery() {
    return (
        <div id='gallery' className="bg-white px-4 py-4">
            <h2 className="text-center text-amber-700 text-xl tracking-widest mt-10 mb-2">OUR GALLERY</h2>
            <h1 className="text-center text-4xl font-bold text-black mb-10">Gallery of our cooked food</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <div className="relative w-full h-[800px] group rounded-2xl overflow-hidden">
                        <img
                            src={img1}
                            alt="Gallery 1"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 p-6 
                  flex flex-col justify-end rounded-2xl 
                  transform translate-y-full group-hover:translate-y-0 
                  opacity-0 group-hover:opacity-50 
                  transition-all duration-500 ease-in-out">

                            <h1 className="text-white text-2xl">
                                <span className="font-bold">Name:</span> Caesar Salad (187 Kcal)
                            </h1>

                            <div className="flex justify-between mt-4">
                                <h1 className="text-white text-2xl">
                                    <span className="font-bold">Price:</span> $35
                                </h1>
                                <Button className="px-4 py-2 border text-white bg-amber-700 hover:text-amber-700 hover:bg-white hover:border-amber-700 text-sm lg:text-lg font-medium rounded-full">
                                    Learn more
                                </Button>
                            </div>
                        </div>
                    </div>


                    <div className="relative w-full h-[300px] mt-6 rounded-2xl group overflow-hidden">
                        <img src={img2} alt="Gallery 2" className="w-full h-full object-cover rounded-2xl" />
                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 p-6 
                  flex flex-col justify-end rounded-2xl 
                  transform translate-y-full group-hover:translate-y-0 
                  opacity-0 group-hover:opacity-50 
                  transition-all duration-500 ease-in-out">
                     <h1 className="text-white text-2xl">
                                <span className="font-bold">Name:</span> Christmas salad(118 Kcal)
                            </h1>

                            <div className="flex justify-between mt-4">
                                <h1 className="text-white text-2xl">
                                    <span className="font-bold">Price:</span> $17
                                </h1>
                                <Button className="px-4 py-2 border text-white bg-amber-700 hover:text-amber-700 hover:bg-white hover:border-amber-700 text-sm lg:text-lg font-medium rounded-full">
                                    Learn more
                                </Button>
                            </div>
                  </div>
                    </div>
                </div>

                <div>
                    <div className="relative w-full h-[300px] rounded-2xl group overflow-hidden ">
                        <img src={img3} alt="Gallery 3" className="w-full h-full object-cover rounded-2xl" />
                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 p-6 
                  flex flex-col justify-end rounded-2xl 
                  transform translate-y-full group-hover:translate-y-0 
                  opacity-0 group-hover:opacity-50 
                  transition-all duration-500 ease-in-out">
                     <h1 className="text-white text-2xl">
                                <span className="font-bold">Name:</span>  Sauteed mushrooms with pumpkin and sweet pepper(238 kcal)
                            </h1>

                            <div className="flex justify-between mt-4">
                                <h1 className="text-white text-2xl">
                                    <span className="font-bold">Price:</span> $45
                                </h1>
                                <Button className="px-4 py-2 border text-white bg-amber-700 hover:text-amber-700 hover:bg-white hover:border-amber-700 text-sm lg:text-lg font-medium rounded-full">
                                    Learn more
                                </Button>
                            </div>
                  </div>
                    </div>

                    <div className="relative w-full h-[800px] mt-6 rounded-2xl group overflow-hidden">
                        <img src={img4} alt="Gallery 4" className="w-full h-full object-cover rounded-2xl" />
                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 p-6 
                  flex flex-col justify-end rounded-2xl 
                  transform translate-y-full group-hover:translate-y-0 
                  opacity-0 group-hover:opacity-50 
                  transition-all duration-500 ease-in-out">
                     <h1 className="text-white text-2xl">
                                <span className="font-bold">Name:</span> BBQ Chicken Feast Pizza(272 kcal)
                            </h1>

                            <div className="flex justify-between mt-4">
                                <h1 className="text-white text-2xl">
                                    <span className="font-bold">Price:</span> $27
                                </h1>
                                <Button className="px-4 py-2 border text-white bg-amber-700 hover:text-amber-700 hover:bg-white hover:border-amber-700 text-sm lg:text-lg font-medium rounded-full">
                                    Learn more
                                </Button>
                            </div>
                  </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Gallery;

