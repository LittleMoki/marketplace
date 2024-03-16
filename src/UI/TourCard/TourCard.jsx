import React from 'react';
import styles from "./TourCard.module.css";

function TourCard({title, tour, img}) {
    return (
        <div className={styles.tour__inner_cards__card}
             style={{backgroundImage: `url(${img})`}}>
            <div className={styles.tour__inner_cards__card_content}>
                <h2 className={styles.tour__inner_cards__card_title}>{title}</h2>
                <div className={styles.tour__inner_cards__card_subtitle}>{tour}</div>
            </div>
        </div>
    );
}

export default TourCard;