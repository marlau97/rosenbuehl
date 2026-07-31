import { useTranslation } from "react-i18next";
import { supportedLngs } from "./config";
import styles from "./LocaleSwitcher.module.css"

export default function LocaleSwitcher() {
    const { i18n } = useTranslation();

    return (
        <div className={styles.switcher}>
            <svg
                className={styles.languageIcon}
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21M12 3C9.6 5.5 8.4 8.5 8.4 12s1.2 6.5 3.6 9" />
            </svg>
            <select
                className={styles.dropdown}
                aria-label="Language"
                value={i18n.resolvedLanguage ?? i18n.language}
                onChange={(event) => i18n.changeLanguage(event.target.value)}
            >
                {Object.entries(supportedLngs).map(([code, name]) => (
                    <option value={code} key={code}>
                        {name}
                    </option>
                ))}
            </select>
            <svg
                className={styles.chevron}
                viewBox="0 0 12 8"
                aria-hidden="true"
            >
                <path d="m1 1 5 5 5-5" />
            </svg>
        </div>
    );
}
