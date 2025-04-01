import React from 'react';
import Card from './card.js';
import './Data.css';


const Gallery = ({ items }) => {
  return (
    <div className="gallery">
      {items.map((item, index) => (
        <Card 
          key={index}
          image={item.image}
          text={item.text}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Gallery;
