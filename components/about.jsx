import Button from 'react-bootstrap/Button';
import feature1 from '../src/assets/featureOne.svg'
import feature2 from '../src/assets/featureTwo.svg'
import feature3 from '../src/assets/featureThree.svg'
import feature4 from '../src/assets/featureFour.svg'


function about() {
    return (
        <div id='about'>
            <p className='text-center text-amber-700 text-xl tracking-widest mt-32'>Features</p>
            <h1 className='text-center text-5xl font-bold text-black mt-2'>Get a many of interesting <br /> features.</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-10  px-4  mt-28 place-items-center">


                <div className=' rounded-3xl pb-5' style={{ width: '18rem', backgroundColor: '#F1F1F1' }}>
                    <div className='h-72 w-72 rounded-full -mt-28 '>
                        <img className='h-full w-full object-cover' src={feature1} />
                    </div>
                    <div>
                        <h1 className='text-2xl text-black font-bold  text-center -mt-20 '>Menu variations</h1>
                        <p className='text-xl text-gray-500 text-center mt-3'>
                            Sed ut perspiciatis unde <br /> omnis iste natus error
                        </p>
                        <Button className='text-amber-700 text-xl font-semibold mt-3 ml-20 hover:underline cursor-pointer'>Learn More &gt;</Button>
                    </div>
                </div>
                <div className=' rounded-3xl pb-5' style={{ width: '18rem', backgroundColor: '#F1F1F1' }}>
                    <div className='h-72 w-72 rounded-full -mt-28 '>
                        <img className='h-full w-full object-cover' src={feature2} />
                    </div>
                    <div>
                        <h1 className='text-2xl text-black font-bold  text-center -mt-20 '>Cooking warw</h1>
                        <p className='text-xl text-gray-500 text-center mt-3'>
                            Sed ut perspiciatis unde <br /> omnis iste natus error
                        </p>
                        <Button className='text-amber-700 text-xl font-semibold mt-3 ml-20 hover:underline cursor-pointer'>Learn More &gt;</Button>
                    </div>
                </div>
                <div className=' rounded-3xl pb-5' style={{ width: '18rem', backgroundColor: '#F1F1F1' }}>
                    <div className='h-72 w-72 rounded-full -mt-28 '>
                        <img className='h-full w-full object-cover' src={feature3} />
                    </div>
                    <div>
                        <h1 className='text-2xl text-black font-bold  text-center -mt-20 '>Best chef</h1>
                        <p className='text-xl text-gray-500 text-center mt-3'>
                            Sed ut perspiciatis unde <br /> omnis iste natus error
                        </p>
                        <Button className='text-amber-700 text-xl font-semibold mt-3 ml-20 hover:underline cursor-pointer'>Learn More &gt;</Button>
                    </div>
                </div>
                <div className=' rounded-3xl pb-5 ' style={{ width: '18rem', backgroundColor: '#F1F1F1' }}>
                    <div className='h-72 w-72 rounded-full -mt-28 '>
                        <img className='h-full w-full object-cover' src={feature4} />
                    </div>
                    <div>
                        <h1 className='text-2xl text-black font-bold  text-center -mt-20 '>Fast food</h1>
                        <p className='text-xl text-gray-500 text-center mt-3'>
                            Sed ut perspiciatis unde <br /> omnis iste natus error
                        </p>
                        <Button className='text-amber-700 text-xl font-semibold mt-3 ml-20 hover:underline cursor-pointer'>Learn More &gt;</Button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default about