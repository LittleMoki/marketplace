import React from 'react';
import styles from './Tours.module.css'
import Container from "../../components/Container/Container.jsx";
import Title from "../../UI/Title/Title.jsx";
import card from '../../assets/card.webp'
import TourCard from "../../UI/TourCard/TourCard.jsx";
import {useTranslation} from "react-i18next";

function Tours() {
    const toursCard = [
        {
            title: 'Uzbekistan',
            tour: '423 tours',
            img: card
        },
        {
            title: 'Uzbekistan',
            tour: '423 tours',
            img: card
        },
        {
            title: 'Uzbekistan',
            tour: '423 tours',
            img: card
        },
        {
            title: 'Uzbekistan',
            tour: '423 tours',
            img: card
        },
        {
            title: 'Uzbekistan',
            tour: '423 tours',
            img: card
        },
        {
            title: 'Uzbekistan',
            tour: '423 tours',
            img: card
        },
        {
            title: 'Uzbekistan',
            tour: '423 tours',
            img: card
        },
        {
            title: 'Uzbekistan',
            tour: '423 tours',
            img: card
        },
    ]
    const {t} = useTranslation();
    return (
        <div className={styles.tours}>
            <Container>
                <div className={styles.tours__inner}>
                    <div className={styles.tours__inner_content}>
                        <Title title={t('tourTitle.title')}
                               subtitle={t('tourTitle.subtitle')}/>
                    </div>
                    <div className={styles.tour__inner_cards}>
                        {toursCard.map((el, i) => (
                            <TourCard key={i} tour={el.tour} img={el.img} title={el.title}/>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Tours;