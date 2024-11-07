import styles from './Sidebar.module.css'
import {useTranslation} from "react-i18next";

function Sidebar() {

    const { t } = useTranslation();

    return(
        <div id={styles['sidebarContainer']}>
            <p className={styles.bigText}>{t("landingPage")}</p>
            <p className={styles.optionText}>{t("vacationApartments")}</p>
            <p className={styles.optionText}>{t("location")}</p>
            <p className={styles.optionText}>{t("ourHouse")}</p>
            <p className={styles.optionText}>{t("tripTips")}</p>
            <p className={styles.optionText}>{t("legal")}</p>
            <p className={styles.optionText}>{t("dataPrivacy")}</p>
        </div>
    )
}

export default Sidebar;