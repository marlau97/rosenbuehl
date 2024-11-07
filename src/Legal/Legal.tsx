import styles from './Legal.module.css'
import {useTranslation} from "react-i18next";

function Legal() {

    const { t } = useTranslation();

    return (
        <div id={styles['container']}>
            <h1 id={styles['headline']}>{t("legal")}</h1>
            <p id={styles['text']}>{t("address")}</p>
            <p id={styles['text']}>{t("email")}<a href={"mailto:haus.rosenbuehl@web.de"}>haus.rosenbuehl@web.de</a></p>
            <br/>
            <p id={styles['text']}>{t("responsible")}</p>
            <p id={styles['subHeadline']}>{t("liabilityNotice")}</p>
            <p id={styles['text']}>{t("contentControlled")}</p>
            <p id={styles['subHeadline']}>{t("disputeResolution")}</p>
            <p id={styles['text']}>{t("disputeText")}<a
                href={"http://ec.europa.eu/consumers/odr/"}>http://ec.europa.eu/consumers/odr/</a></p>
            <p id={styles['subHeadline']}>{t("complaintText")}</p>
            <p id={styles['text']}>{t("addressInsurance")}</p>
            <p id={styles['text']}><a href={"https://www.versicherungsombudsmann.de/"}>https://www.versicherungsombudsmann.de/</a></p>
        </div>
    )
}

export default Legal;