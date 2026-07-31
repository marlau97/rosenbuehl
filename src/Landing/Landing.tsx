import styles from './Landing.module.css'
import {useTranslation} from "react-i18next";
import landingImage from "../assets/landing.png";

function Landing() {

    const { t } = useTranslation();

    return (
        <div id={styles['container']}>
            <p id={styles['subHeadline']}>{t("landingSubHeadline")}</p>
            <p id={styles['text']}>{t("landingText")}</p>
            <img src={landingImage} alt="Haus Rosenbühl"/>
        </div>
    )
}

export default Landing;
