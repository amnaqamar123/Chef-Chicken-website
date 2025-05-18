import React from 'react';
import Navbar from '../navbar';
import About from './about'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import bannerimg from '../src/assets/banner-image.png';
import pizzaimg from '../src/assets/pizza.svg'
import Recipe from './recipe';
import Carouselslider from '../components/carouselslider'
import Gallery from './gallery';
import Newsletter from './newsletter';
import Footer from './footer'

function Home() {
    return (
        <div id='home'>
            <Navbar />
            <div className="flex flex-col lg:flex-row min-h-screen pt-24 lg:pt-28">
                {/* Left Card */}
                <div className="flex items-center justify-center w-full lg:w-1/2 p-8">
                    <Card className="w-full border-0">
                        <Card.Body>
                            <Card.Title className="text-4xl lg:text-7xl font-bold text-black mt-10 lg:mt-36 text-center lg:text-left">
                                Cook anything with the experts
                            </Card.Title>
                            <Card.Text className="text-lg lg:text-xl text-gray-500 mt-6 text-center lg:text-left">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam
                            </Card.Text>
                            <div className="flex flex-col lg:flex-row gap-4 mt-10 justify-center lg:justify-start">
                                <Button className="px-10 py-4 border text-white bg-amber-700 hover:text-amber-700 hover:bg-white hover:border-amber-700 text-lg lg:text-xl font-medium rounded-full">
                                    Let's cook
                                </Button>
                                <Button className="px-10 py-4 text-amber-700 border border-amber-700 hover:text-white hover:bg-amber-700 text-lg lg:text-xl font-medium rounded-full">
                                    Explore now
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>

                {/* Right Image */}
                <div className="w-full lg:w-1/2">
                    <div className='h-full w-full relative'>
                        <Card className="w-full h-full border-0">
                            <div className='h-full w-full relative'>
                                <img
                                    src={bannerimg}
                                    alt="bannerimg"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className='h-20 w-64 rounded-2xl bg-white absolute z-10 bottom-8 left-10 flex justify-between items-center gap-4'>
                                <div className='h-18 w-24 border rounded-3xl ml-3 mt-2 border-amber-400'>
                                    <img className='h-full w-full object-cover' src={pizzaimg} />
                                </div>
                                <h1 className='text-xl text-black '>More than 500+
                                    recipes.</h1>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
            <About />
            <Recipe />
            <Carouselslider />
            <Gallery/>
            <Newsletter/>
            <Footer/>
        </div>
    );
}

export default Home;

