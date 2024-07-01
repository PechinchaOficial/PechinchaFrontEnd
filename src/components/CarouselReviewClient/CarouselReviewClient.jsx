import React, { useState, useRef } from 'react';
import styles from './CarouselReviewClient.module.css';
import RateCard from './Card/RateCard';

function CarouselReviewClient() {
  const [options, setOptions] = useState(['farLeft', 'left', 'center', 'right', 'farRight']);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const carouselRef = useRef(null);

  const reviews = [
    {
      src: 'https://media.licdn.com/dms/image/D4D03AQG1EFTN1o1MWA/profile-displayphoto-shrink_800_800/0/1694273409957?e=1723075200&v=beta&t=OmgLSaUwmM2X8Vz2aKmdSpSmPcSrp0W6g5p0_BPvBlg',
      name: 'Gabriel Gallo',
      title: 'Estudante',
      comment: 'Comentario01',
    },
    {
      src: 'https://placeimg.com/75/75/tech/grayscale',
      name: 'Kaique Oliveira Mota',
      title: 'Estudante',
      comment: 'Comentario02',
    },
    {
        src: 'https://placeimg.com/75/75/tech/grayscale',
        name: 'Kaique Oliveira Mota',
        title: 'Estudante',
        comment: 'Comentario02',
      },
      {
        src: 'https://placeimg.com/75/75/tech/grayscale',
        name: 'Kaique Oliveira Mota',
        title: 'Estudante',
        comment: 'Comentario02',
      },
      {
        src: 'https://placeimg.com/75/75/tech/grayscale',
        name: 'Kaique Oliveira Mota',
        title: 'Estudante',
        comment: 'Comentario02',
      },
    // Adicione mais avaliações conforme necessário
  ];

  const handleCardClick = (index) => {
    let newOptions;
    if (index > 2) {
      newOptions = options.map((_, idx) => options[(idx - 1 + options.length) % options.length]);
    } else {
      newOptions = options.map((_, idx) => options[(idx + 1) % options.length]);
    }
    setOptions(newOptions);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const moveX = e.clientX - startX;
    if (moveX > 50) {
      handleCardClick(2); // Move to the left
      setStartX(e.clientX);
    } else if (moveX < -50) {
      handleCardClick(0); // Move to the right
      setStartX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section className={styles.background}>
      <div
        className={styles.carouselContainer}
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`${styles.carouselCard} ${styles[options[index]]}`}
            onClick={() => handleCardClick(index)}
          >
            <RateCard 
              src={review.src}
              name={review.name}
              title={review.title}
              comment={review.comment}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default CarouselReviewClient;
