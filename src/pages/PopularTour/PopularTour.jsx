import React from 'react';
import styles from './PopularTour.module.css'
import Container from "../../components/Container/Container.jsx";
import Title from "../../UI/Title/Title.jsx";
import Card from "../../UI/Card/Card.jsx";
import cardImg from '../../assets/allCard.webp'

function PopularTour() {
    const card = [
        {
            img: cardImg,
            rating: "4.8",
            country: "Uzbekistan",
            tourName: "Three Capitals of ",
            discount: "3500",
            cost: "2499",
            days: "7",
        },
        {
            img: cardImg,
            rating: "4.8",
            country: "Uzbekistan",
            tourName: "Three Capitals of ",
            discount: "3500",
            cost: "2499",
            days: "7",
        },
        {
            img: cardImg,
            rating: "4.8",
            country: "Uzbekistan",
            tourName: "Three Capitals of ",
            discount: "3500",
            cost: "2499",
            days: "7",
        },
        {
            img: cardImg,
            rating: "4.8",
            country: "Uzbekistan",
            tourName: "Three Capitals of ",
            discount: "3500",
            cost: "2499",
            days: "7",
        },
    ]
    return (
        <div className={styles.popularTour}>
            <Container>
                <div className={styles.popularTour__inner}>
                    <div className={styles.popularTour__inner_title}>
                        <Title title='Popular tours'/>
                    </div>
                    <div className={styles.popularTour__inner_cards}>
                        {card.map((el, i) => (
                            <Card key={i} cost={el.cost} country={el.country} days={el.days} discount={el.discount}
                                  id={i}
                                  img={el.img}
                                  rating={el.rating} tourName={el.tourName}/>
                        ))}
                    </div>
                    <div className={styles.popularTour__inner_adventure}>
                        <h2 className={styles.popularTour__inner_adventure__title}>Ready for an adventure ?</h2>
                        <p className={styles.popularTour__inner_adventure__subtitle}>Новый взгляд на отпуск с нашим
                            туристическим сервисом.
                            Удобное бронирование, выгодные предложения и приключения, которые останутся в памяти.</p>
                        <button className={styles.popularTour__inner_adventure__button}>find your tour</button>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default PopularTour;