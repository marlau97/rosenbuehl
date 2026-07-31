import styles from './Header.module.css'
import LocaleSwitcher from "../i18n/LocaleSwitcher";
import { useTranslation } from "react-i18next";
import Hamburger from 'hamburger-react';
import { useEffect, useRef, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import ThemeToggle from "./ThemeToggle";

function Header() {
    const [isOpen, setOpen] = useState(false);
    const { t } = useTranslation();
    const sidebarRef = useRef<HTMLDivElement>(null);
    const menuButtonRef = useRef<HTMLDivElement>(null);
    const hoverCloseTimer = useRef<number | null>(null);

    const clearHoverClose = () => {
        if (hoverCloseTimer.current !== null) {
            window.clearTimeout(hoverCloseTimer.current);
            hoverCloseTimer.current = null;
        }
    };

    const openOnHover = () => {
        if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
        clearHoverClose();
        setOpen(true);
    };

    const closeAfterHover = () => {
        if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
        clearHoverClose();
        hoverCloseTimer.current = window.setTimeout(() => setOpen(false), 140);
    };

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const closeOnOutsideInteraction = (event: PointerEvent) => {
            const target = event.target as Node;

            if (!sidebarRef.current?.contains(target) && !menuButtonRef.current?.contains(target)) {
                setOpen(false);
            }
        };

        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setOpen(false);
            }
        };

        document.addEventListener("pointerdown", closeOnOutsideInteraction);
        document.addEventListener("keydown", closeOnEscape);

        return () => {
            document.removeEventListener("pointerdown", closeOnOutsideInteraction);
            document.removeEventListener("keydown", closeOnEscape);
        };
    }, [isOpen]);

    useEffect(() => () => clearHoverClose(), []);

    return (
        <div id={styles['headerContainer']}>
            <div
                id={styles['headerLeft']}
            >
                <div
                    ref={menuButtonRef}
                    className={styles.menuTrigger}
                    onPointerEnter={openOnHover}
                    onPointerLeave={closeAfterHover}
                >
                    <Hamburger toggled={isOpen} toggle={setOpen} duration={0.15} color="#edf0ea"/>
                </div>
            </div>
            <div id={styles['headerCenter']}>
                <h1 id={styles['headerText']}>{t("houseRosenbuehl")}</h1>
            </div>
            <div id={styles['headerRight']}>
                <LocaleSwitcher />
                <ThemeToggle />
            </div>
            <div
                ref={sidebarRef}
                className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}
                aria-hidden={!isOpen}
                inert={!isOpen}
                onPointerEnter={openOnHover}
                onPointerLeave={closeAfterHover}
            >
                <Sidebar onNavigate={() => setOpen(false)} />
            </div>
        </div>
    );
}

export default Header;
