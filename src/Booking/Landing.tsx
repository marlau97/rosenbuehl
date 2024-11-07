import styles from './Landing.module.css'
import {useTranslation} from "react-i18next";

function Landing() {

    const { t } = useTranslation();

    return (
        <div id={styles['container']}>
            <p id={styles['text']}>{t("bookingText")}</p>

        </div>
    )
}

export default Landing;