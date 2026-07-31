import styles from './Landing.module.css'
import {useTranslation} from "react-i18next";
import landingImage from "../assets/landing.png";

function Landing() {

    const { t } = useTranslation();

    return (
        <div id={styles['container']}>
            <h1 id={styles['subHeadline']}>{t("landingSubHeadline")}</h1>
            <p id={styles['text']}>{t("landingText")}</p>
            <img src={landingImage} alt="Haus Rosenbühl"/>
        </div>
    )
}

export default Landing;
