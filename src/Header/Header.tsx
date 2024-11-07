import styles from './Header.module.css'
import LocaleSwitcher from "../i18n/LocaleSwitcher";
import { useTranslation } from "react-i18next";
import Hamburger from 'hamburger-react';
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

function Header() {
    const [isOpen, setOpen] = useState(false);
    const { t } = useTranslation();

    return (
        <div id={styles['headerContainer']}>
            <div id={styles['headerLeft']}>
                <Hamburger toggled={isOpen} toggle={setOpen} duration={0.15}/>
            </div>
            <div id={styles['headerCenter']}>
                <h1 id={styles['headerText']}>{t("houseRosenbuehl")}</h1>
            </div>
            <div id={styles['headerRight']}>
                <LocaleSwitcher />
            </div>
            <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
                <Sidebar />
            </div>
        </div>
    );
}

export default Header;
