import { useContext } from "react";
import { AppContext } from "../Provider";
import { useTranslation } from "react-i18next";
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
    const { t } = useTranslation();
    const context = useContext(AppContext);

    if (!context) {
        throw new Error("useContext must be used within an AppProvider");
    }

    const { pageToShow, setPageToShow } = context;

    const getClassName = (option: string) => {
        return pageToShow === option ? styles.bigText : styles.optionText;
    };

    return (
        <div id={styles['sidebarContainer']}>
            <p className={getClassName('landing')} onClick={() => setPageToShow('landing')}>{t("landingPage")}</p>
            <p className={getClassName('apartment')} onClick={() => setPageToShow('apartment')}>{t("vacationApartments")}</p>
            <p className={getClassName('location')} onClick={() => setPageToShow('location')}>{t("location")}</p>
            <p className={getClassName('house')} onClick={() => setPageToShow('house')}>{t("ourHouse")}</p>
            <p className={getClassName('tips')} onClick={() => setPageToShow('tips')}>{t("tripTips")}</p>
            <p className={getClassName('legal')} onClick={() => setPageToShow('legal')}>{t("legal")}</p>
            <p className={getClassName('privacy')} onClick={() => setPageToShow('privacy')}>{t("dataPrivacy")}</p>
        </div>
    );
};

export default Sidebar;
