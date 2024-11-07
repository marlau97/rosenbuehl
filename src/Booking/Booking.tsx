import styles from './Booking.module.css'
import {useTranslation} from "react-i18next";

function Booking() {

    const { t } = useTranslation();

    return (
        <div>
            <p id={styles['text']}>{t("bookingText")}</p>
            <a href="https://www.booking.com/hotel/de/haus-rosenbuhl-warmensteinach1.de.html?">
                <button id={styles['button']}>Booking.com</button>
            </a>
        </div>
    )
}

export default Booking;