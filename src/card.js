
import React, { useState } from 'react';
import './flipcard.css';

const Card = ({ image, text, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = (e) => {
    if (e.target.className === 'modal-overlay') {
      setIsModalOpen(false);
    }
  };

 
  const [title, genre] = text.split(' - ');

  return (
    <>
      <div className="flip-card" onClick={handleModalOpen}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={image} alt={title} className="flip-card-image" />
          </div>
          <div className="flip-card-back">
            <h3>{title}</h3>
            <p>{genre}</p>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-content">
            <img src={image} alt={title} className="modal-image" />
            <div className="modal-text">
              <h3>{title} - <span className="genre">{genre}</span></h3>
              <p className="modal-description">{description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
