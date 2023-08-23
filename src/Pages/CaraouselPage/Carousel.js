import { Carousel } from '@trendyol-js/react-carousel';
import React from 'react';
import ReactDOM from 'react-dom';
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import { Item } from './yourItem';

ReactDOM.render(
    <>
    <ScrollingCarousel />
        <Item />
        <Item />
        <Item />
        <Item />
    <ScrollingCarousel />,
    document.getElementById('root'),
    </>
);