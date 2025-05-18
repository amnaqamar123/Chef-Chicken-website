import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cookimg from '../src/assets/cook.png'


function recipe() {
    return (
        <div id='recipe' className="flex flex-col lg:flex-row min-h-screen">
           
            <div className="w-full lg:w-1/2">

                <Card className="w-full h-full border-0">

                    <img
                        src={cookimg}
                        className="h-full w-full object-cover"
                    />
                </Card>

            </div>


          
            <div className="flex items-center justify-center w-full lg:w-1/2 p-7">
                <Card className="w-full border-0">
                    <Card.Body>
                        <p className=' text-amber-700 text-xl tracking-widest'>COOK WITH US</p>
                        <Card.Title className="text-3xl lg:text-5xl font-bold text-black mt-3">
                            Cooking together with <br /> the expert.
                        </Card.Title>
                        <Card.Text className="text-lg lg:text-xl text-gray-500 mt-6 text-center lg:text-left">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                            <br /><br />Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium....
                        </Card.Text>
                        <div className="flex flex-col lg:flex-row gap-4 mt-10 justify-center lg:justify-start">
                            <Button className="px-10 py-4 border text-white bg-amber-700 hover:text-amber-700 hover:bg-white hover:border-amber-700 text-lg lg:text-xl font-medium rounded-full">
                                Learn more
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
               
            </div>
        </div>
    )
}

export default recipe