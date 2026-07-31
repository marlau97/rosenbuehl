import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { supportedLngs } from "./config";
import styles from "./LocaleSwitcher.module.css"

export default function LocaleSwitcher() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const switcherRef = useRef<HTMLDivElement>(null);
    const currentLanguage = i18n.resolvedLanguage ?? i18n.language;

    useEffect(() => {
        const closeOnOutsideClick = (event: MouseEvent) => {
            if (!switcherRef.current?.contains(event.target as Node)) setIsOpen(false);
        };

        document.addEventListener("mousedown", closeOnOutsideClick);
        return () => document.removeEventListener("mousedown", closeOnOutsideClick);
    }, []);

    return (
        <div
            ref={switcherRef}
            className={`${styles.switcher} ${isOpen ? styles.open : ""}`}
            onKeyDown={(event) => {
                if (event.key === "Escape") setIsOpen(false);
            }}
        >
            <svg
                className={styles.languageIcon}
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21M12 3C9.6 5.5 8.4 8.5 8.4 12s1.2 6.5 3.6 9" />
            </svg>
            <button
                type="button"
                className={styles.dropdown}
                aria-label="Language"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((open) => !open)}
            >
                {supportedLngs[currentLanguage as keyof typeof supportedLngs] ?? "English"}
            </button>
            <svg
                className={styles.chevron}
                viewBox="0 0 12 8"
                aria-hidden="true"
            >
                <path d="m1 1 5 5 5-5" />
            </svg>
            {isOpen && (
                <div className={styles.optionMenu} role="listbox" aria-label="Language">
                    {Object.entries(supportedLngs).map(([code, name]) => (
                        <button
                            type="button"
                            role="option"
                            aria-selected={currentLanguage === code}
                            className={`${styles.option} ${currentLanguage === code ? styles.selected : ""}`}
                            key={code}
                            onClick={() => {
                                void i18n.changeLanguage(code);
                                setIsOpen(false);
                            }}
                        >
                            {name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
