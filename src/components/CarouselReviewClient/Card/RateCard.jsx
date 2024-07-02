import React from 'react';
import styles from './RateCard.module.css';

function RateCard({ src, name, title, comment }) {
  return (
    <div className={styles.rateCard}>
      <div className={styles.infoUser}>
        <div className={styles.userIcon}>
          <img src={src} alt="Usuária avaliador" />
        </div>
        <div className={styles.userInfo}>
          <h3>{name}</h3>
          <p>{title}</p>
        </div>
      </div>
      <div className={styles.rateInfo}>
        <p>{comment}</p>
      </div>
      <div className={styles.stars}>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
    </div>
  );
}

export default RateCard;
