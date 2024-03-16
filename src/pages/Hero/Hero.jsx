import {useTranslation} from "react-i18next";
import styles from './Hero.module.css'
import Container from "../../components/Container/Container.jsx";

function Hero() {
    const {t} = useTranslation();
    return (
        <div className={styles.hero}>
            <Container>
                <div className={styles.hero__inner}>
                    <h4 className={styles.hero__inner_subtitle}>{t("hero.subtitle")}</h4>
                    <h1 className={styles.hero__inner_title}>{t("hero.title")}</h1>
                    <button className={styles.hero__inner_button}>{t("hero.button")}</button>
                </div>
            </Container>
        </div>
    );
}

export default Hero;