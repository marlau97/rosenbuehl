import styles from './Apartments.module.css'
import {useTranslation} from "react-i18next";

function Apartments() {

    const { t } = useTranslation();

    return (
        <div id={styles['container']}>
            <p id={styles['text']}>Cooler Apartment Text</p>
            <p id={styles['text']}>Cooler Apartment Text</p>
            <p id={styles['text']}>Cooler Apartment Text</p>
            <p id={styles['text']}>Cooler Apartment Text</p>
            <p id={styles['text']}>Cooler Apartment Text</p>
            <p id={styles['text']}>Cooler Apartment Text</p>
            <p id={styles['text']}>Cooler Apartment Text</p>
        </div>
    )
}

export default Apartments;