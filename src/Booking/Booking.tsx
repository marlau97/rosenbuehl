import styles from './Booking.module.css'
import {useTranslation} from "react-i18next";

function Booking() {

    const { t } = useTranslation();

    return (
        <div>
            <p id={styles['text']}>{t("bookingText")}</p>

        </div>
    )
}

export default Booking;