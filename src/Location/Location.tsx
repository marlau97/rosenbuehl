import styles from './Location.module.css'
import {useTranslation} from "react-i18next";

function Location() {

    const { t } = useTranslation();

    return (
        <div id={styles['container']}>
            <p id={styles['text']}>Cooler Location Text</p>
            <p id={styles['text']}>Cooler Location Text</p>
            <p id={styles['text']}>Cooler Location Text</p>
            <p id={styles['text']}>Cooler Location Text</p>
            <p id={styles['text']}>Cooler Location Text</p>
            <p id={styles['text']}>Cooler Location Text</p>
            <p id={styles['text']}>Cooler Location Text</p>
        </div>
    )
}

export default Location;