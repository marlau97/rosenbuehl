import styles from './Privacy.module.css'
import {useTranslation} from "react-i18next";

function Privacy() {

    const { t } = useTranslation();

    return (
        <div id={styles['container']}>
            <p id={styles['text']}>Cooler Privacy Text</p>
            <p id={styles['text']}>Cooler Privacy Text</p>
            <p id={styles['text']}>Cooler Privacy Text</p>
            <p id={styles['text']}>Cooler Privacy Text</p>
            <p id={styles['text']}>Cooler Privacy Text</p>
            <p id={styles['text']}>Cooler Privacy Text</p>
            <p id={styles['text']}>Cooler Privacy Text</p>
            <p id={styles['text']}>Cooler Privacy Text</p>
            <p id={styles['text']}>Cooler Privacy Text</p>
            <p id={styles['text']}>Cooler Privacy Text</p>
        </div>
    )
}

export default Privacy;