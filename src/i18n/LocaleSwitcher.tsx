import { useTranslation } from "react-i18next";
import { supportedLngs } from "./config";
import styles from "./LocaleSwitcher.module.css"

export default function LocaleSwitcher() {
    const { i18n } = useTranslation();

    return (
        <div className="flex items-center">
            <div className="locale-switcher">
                <select id={styles['dropdown']}
                    value={i18n.resolvedLanguage}
                    onChange={(e) => i18n.changeLanguage(e.target.value)}
                >
                    {Object.entries(supportedLngs).map(([code, name]) => (
                        <option value={code} key={code}>
                            {name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}