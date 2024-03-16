import React, {useCallback, useState} from 'react';
import styles from './Card.module.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import EastIcon from '@mui/icons-material/East';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Card({rating, country, tourName, discount, cost, days, id,img}) {
    const [favorite, setFavorite] = useState([]);
    const updateFavorite = useCallback(
        (itemId) => {
            let updatedFavorite = [...favorite]
            if (!updatedFavorite.includes(itemId)) {
                updatedFavorite = [...favorite, itemId]
            } else {
                updatedFavorite = updatedFavorite.filter(favoriteItem => itemId !== favoriteItem)
            }
            setFavorite(updatedFavorite)
        },
        [favorite],
    );

    return (
        <div className={styles.card} style={{backgroundImage: `url(${img})`}}>
            <div className={styles.card__rating}>
                <div className={styles.card__rating_favourite} onClick={() => updateFavorite(id)}>
                    {favorite.includes(id) ? <FavoriteIcon style={{color: 'red'}}/> : <  FavoriteBorderIcon/>}
                </div>
                <div className={styles.card__rating_item}>
                    <StarBorderIcon/>
                    {rating}
                </div>
            </div>
            <div className={styles.card__content}>
                <div className={styles.card__content_country}>
                    <p className={styles.card__content_country__item}>{country}</p>
                </div>
                <div className={styles.card__content_name}>
                    <h3 className={styles.card__content_name_item}>
                        Tour <span className={styles.card__content_name_item__span}>{tourName}</span>
                    </h3>
                </div>
                <div className={styles.card__content_cost}>
                    <p className={styles.card__content_cost__discount}>{discount}</p>
                    <h2 className={styles.card__content_cost_title}>${cost} /<span
                        className={styles.card__content_cost__days}> {days} Days</span></h2>
                    <EastIcon/>
                </div>
            </div>
        </div>
    );
}

export default Card;