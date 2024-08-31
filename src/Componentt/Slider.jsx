
import { Carousel } from 'react-bootstrap';
import React from 'react'

export const Slider = () => {

  return (
    <>
    <Carousel>
        <Carousel.Item>
            <img src='https://images.pexels.com/photos/13634354/pexels-photo-13634354.jpeg?auto=compress&cs=tinysrgb&w=600' className='d-block w-100' alt='image' style={{maxHeight:"90vh"}}></img>
            <Carousel.Caption>
                <h3 className='text-dark'>AJIO FASHION</h3>
                <p className='text-dark'>40% OFF</p>
            </Carousel.Caption>
        </Carousel.Item>
       
        <Carousel.Item>
            <img src='https://images.pexels.com/photos/896291/pexels-photo-896291.jpeg?auto=compress&cs=tinysrgb&w=600' className='d-block w-100' alt='image' style={{maxHeight:"90vh"}}></img>
            <Carousel.Caption>
                <h3 className='text-dark'>OCASSIONAL WEAR</h3>
                <p className='text-dark'>25% OFF</p>
            </Carousel.Caption>
        </Carousel.Item> <Carousel.Item>
            <img src='https://images.pexels.com/photos/5325716/pexels-photo-5325716.jpeg?auto=compress&cs=tinysrgb&w=600' className='d-block w-100' alt='image' style={{maxHeight:"90vh"}}></img>
            <Carousel.Caption>
                <h3 className='text-dark'>NEW ARIVALS</h3>
                <p className='text-dark'>50%-70% OFF</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>

    </>
   
  )
}
