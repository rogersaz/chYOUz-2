import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

function CustomCarousel() {
    const items = [
        {
            name: "Sample Video #1",
            src: "https://www.youtube.com/embed/FSnLtNS7rhQ"
        },
        {
            name: "Sample Video #2",
            src: "https://www.youtube.com/embed/An_CFJ7x-JE"
        },
        {
            name: "Sample Video #3",
            src: "https://www.youtube.com/embed/J3X3gSRlpbY"
        },
        {
            name: "Sample Video #4",
            src: "https://www.youtube.com/embed/QygJ3s4YDr0"
        }
    ];

    return (
        <Carousel>
            {items.map((item, i) => (
                <Item key={i} item={item} />
            ))}
        </Carousel>
    );
}

function Item(props) {
    return (
        <Paper>
            <iframe
                width="100%"
                height="315"
                src={props.item.src}
                title={props.item.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </Paper>
    );
}

export default CustomCarousel;
