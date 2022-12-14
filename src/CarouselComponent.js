import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Item from './Item';
import slider from './Helper/slider.json';


const CarouselComponent = () => {

    return (
        <Carousel>
            {
                slider.map(item => <Item key={item.id} item={item} />)
            } 
        </Carousel>
    )
}


export default CarouselComponent;