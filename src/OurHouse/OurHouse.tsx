import styles from './OurHouse.module.css'
import {useTranslation} from "react-i18next";

function OurHouse() {

    const { t } = useTranslation();

    return (
        <div id={styles['container']}>
            <p id={styles['text']}>Cooler House Text</p>
            <p id={styles['text']}>Cooler House Text</p>
            <p id={styles['text']}>Cooler House Text</p>
            <p id={styles['text']}>Cooler House Text</p>
            <p id={styles['text']}>Cooler House Text</p>
            <p id={styles['text']}>Cooler House Text</p>
            <p id={styles['text']}>Cooler House Text</p>
            <p id={styles['text']}>Cooler House Text</p>
        </div>
    )
}

export default OurHouse;