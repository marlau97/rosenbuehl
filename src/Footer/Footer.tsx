import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <div id={styles["footerContainer"]}>
            <div id={styles["footerLeft"]}></div>
            <div id={styles["footerCenter"]}>
                <img src={require("../assets/logo512.png")} height={70}/>
            </div>
            <div id={styles["footerRight"]}>
                <a href="https://www.booking.com/hotel/de/haus-rosenbuhl-warmensteinach1.de.html?">
                    <button id={styles['button']}>Booking.com</button>
                </a>
            </div>
        </div>
    );
}