import styles from './TripTips.module.css'
import {useTranslation} from "react-i18next";

function TripTips() {

    const { t } = useTranslation();

    return (
        <div id={styles['container']}>
            <p id={styles['text']}>Cooler Tips Text</p>
            <p id={styles['text']}>Cooler Tips Text</p>
            <p id={styles['text']}>Cooler Tips Text</p>
            <p id={styles['text']}>Cooler Tips Text</p>
            <p id={styles['text']}>Cooler Tips Text</p>
            <p id={styles['text']}>Cooler Tips Text</p>
            <p id={styles['text']}>Cooler Tips Text</p>
            <p id={styles['text']}>Cooler Tips Text</p>
        </div>
    )
}

export default TripTips;