import {useCallback} from 'react';
import styles from './Menu.module.css'
import {useStoreMenu} from "../../store/store.js";

function Menu() {
    const {menu, changeMenuStatus} = useStoreMenu(state => state)

    const handleClick = useCallback(
        () => {
            changeMenuStatus(!menu)
        },
        [menu],
    );
    return (
        <div className={styles.menu} onClick={handleClick}>
            <div className={styles.menu__wrapper}>
                <div className={`${styles.menu__item} ${menu ? styles.active : ''}`}></div>
            </div>
        </div>
    );
}

export default Menu;