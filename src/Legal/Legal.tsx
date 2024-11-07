import styles from './Legal.module.css'
import {useTranslation} from "react-i18next";

function Legal() {

    const { t } = useTranslation();

    return (
        <div id={styles['container']}>
            <p id={styles['text']}>Cooler Legal Text</p>
            <p id={styles['text']}>Cooler Legal Text</p>
            <p id={styles['text']}>Cooler Legal Text</p>
            <p id={styles['text']}>Cooler Legal Text</p>
            <p id={styles['text']}>Cooler Legal Text</p>
            <p id={styles['text']}>Cooler Legal Text</p>
            <p id={styles['text']}>Cooler Legal Text</p>
            <p id={styles['text']}>Cooler Legal Text</p>
        </div>
    )
}

export default Legal;