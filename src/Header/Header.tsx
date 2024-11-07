import styles from './Header.module.css'
import LocaleSwitcher from "../i18n/LocaleSwitcher";
import {useTranslation} from "react-i18next";

function Header() {

    const { t } = useTranslation();

    return(
        <div id={styles['header']}>
            <h1 id={styles['headerText']}>{t("houseRosenbuehl")}</h1>
            <div>
                <LocaleSwitcher></LocaleSwitcher>
            </div>
        </div>
    )
}

export default Header;