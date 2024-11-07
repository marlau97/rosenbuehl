import styles from './Sidebar.module.css'
import {useTranslation} from "react-i18next";

function Sidebar() {

    const { t } = useTranslation();

    return(
        <div id={styles['sidebarContainer']}>
        </div>
    )
}

export default Sidebar;