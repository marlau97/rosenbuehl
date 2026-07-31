import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./ThemeToggle.module.css";

type Theme = "light" | "dark";

const preferredTheme = (): Theme =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export default function ThemeToggle() {
    const { t } = useTranslation();
    const [theme, setTheme] = useState<Theme>(preferredTheme);
    const isDark = theme === "dark";

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    return (
        <button
            type="button"
            className={styles.toggle}
            aria-label={isDark ? t("switchToLightMode") : t("switchToDarkMode")}
            aria-pressed={isDark}
            onClick={() => setTheme(isDark ? "light" : "dark")}
        >
            {isDark ? (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
                </svg>
            ) : (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.5 15.4A8.5 8.5 0 0 1 8.6 3.5 8.5 8.5 0 1 0 20.5 15.4Z" />
                </svg>
            )}
        </button>
    );
}
