import styles from "./Footer.module.css"
import logo from "../assets/logo512.png";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <div id={styles["footerContainer"]}>
            <div id={styles["footerLeft"]}></div>
            <div id={styles["footerCenter"]}>
                <img src={logo} height={50} alt="Haus Rosenbühl"/>
            </div>
            <div id={styles["footerRight"]}>
                <a
                    id={styles['button']}
                    href="https://www.booking.com/hotel/de/haus-rosenbuhl-warmensteinach1.de.html?"
                    target="_blank"
                    rel="noreferrer"
                >
                    {t("bookNow")}
                </a>
            </div>
        </div>
    );
}
