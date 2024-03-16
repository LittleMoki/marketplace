import React from 'react';
import styles from './TourWithDiscount.module.css'
import Title from "../../UI/Title/Title.jsx";
import {useTranslation} from "react-i18next";
import Card from "../../UI/Card/Card.jsx";
import Container from "../../components/Container/Container.jsx";
import lock from '../../assets/lock.svg'
import shield from '../../assets/shield.svg'
import group from '../../assets/group.svg'
import check from '../../assets/check.svg'
import cardImg from '../../assets/allCard.webp'

function TourWithDiscount() {
    const {t} = useTranslation()
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
    const cardBottom = [
        {
            img: lock,
            title: 'Secure payment',
            subtitle: 'Use the search and filters to find your ideal trip'
        },
        {
            img: shield,
            title: 'Guaranteed Tours',
            subtitle: 'Choose the best travel expert in the direction of travel'
        },
        {
            img: group,
            title: 'Small groups',
            subtitle: 'Check the details of the tour you like with a travel expert'
        },
        {
            img: check,
            title: 'Verified travel experts',
            subtitle: 'Book a tour through a secure system payment'
        },
    ]
    return (
        <div className={styles.tourWithDiscount}>
            <Container>
                <div className={styles.tourWithDiscount__inner}>
                    <div className={styles.tourWithDiscount__inner_content}>
                        <Title title={t('tourDiscountTitle.title')}/>
                    </div>
                    <div className={styles.tourWithDiscount__inner_cards}>
                        {card.map((el, i) => (
                            <Card key={i} rating={el.rating} country={el.country} tourName={el.tourName}
                                  id={i}
                                  img={el.img}
                                  discount={el.discount}
                                  cost={el.cost}
                                  days={el.days}/>
                        ))}
                    </div>
                </div>
            </Container>
            <div className={styles.tourWithDiscount__bottom}>
                <Container>
                    <div className={styles.tourWithDiscount__bottom_inner}>
                        {cardBottom.map((el, i) => (
                            <div key={i} className={styles.tourWithDiscount__bottom_inner__card}>
                                <img className={styles.tourWithDiscount__bottom_inner__card_img} src={el.img}
                                     alt="icon"/>
                                <h3 className={styles.tourWithDiscount__bottom_inner__card_title}>{el.title}</h3>
                                <p className={styles.tourWithDiscount__bottom_inner__card_subtitle}>{el.subtitle}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default TourWithDiscount;