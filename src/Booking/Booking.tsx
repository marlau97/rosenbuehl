import styles from './Booking.module.css'

function Booking() {
    return (
        <div>
            <p id={styles['text']}>Buchen sie jetzt Ihren Aufenthalt über Booking.com!</p>
            <a href="https://www.booking.com/hotel/de/haus-rosenbuhl-warmensteinach1.de.html?">
                <button id={styles['button']}>Booking.com</button>
            </a>
        </div>
    )
}

export default Booking;