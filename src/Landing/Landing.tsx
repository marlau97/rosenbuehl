import styles from './Landing.module.css'
import {useTranslation} from "react-i18next";

function Landing() {

    const { t } = useTranslation();

    return (
        <div id={styles['container']}>
            <p id={styles['subHeadline']}>{t("landingSubHeadline")}</p>
            <p id={styles['text']}>{t("landingText")}</p>
            <img src={require("../assets/landing.png")}/>
        </div>
    )
}

export default Landing;