import {useContext, useEffect, useRef, useState} from "react";
import {AppContext, type Page} from "../Provider";
import {useTranslation} from "react-i18next";
import styles from "./Sidebar.module.css";

type SidebarProps = {onNavigate?: () => void};

const navigationItems: Array<{page: Page; label: string}> = [
    {page: "landing", label: "landingPage"},
    {page: "location", label: "location"},
    {page: "house", label: "ourHouse"},
    {page: "tips", label: "tripTips"},
    {page: "legal", label: "legal"},
    {page: "privacy", label: "dataPrivacy"},
];

const apartmentPages: Page[] = ["apartment", "apartment-ochsenkopf", "apartment-schneeberg"];

const Sidebar: React.FC<SidebarProps> = ({onNavigate}) => {
    const {t} = useTranslation();
    const context = useContext(AppContext);
    const [apartmentsExpanded, setApartmentsExpanded] = useState(false);
    const submenuTimer = useRef<number | null>(null);

    if (!context) throw new Error("useContext must be used within an AppProvider");
    const {pageToShow, setPageToShow} = context;
    const isApartmentPage = apartmentPages.includes(pageToShow);
    const isApartmentDetailPage = pageToShow === "apartment-ochsenkopf" || pageToShow === "apartment-schneeberg";

    useEffect(() => {
        if (isApartmentDetailPage) setApartmentsExpanded(true);
    }, [isApartmentDetailPage]);

    useEffect(() => () => {
        if (submenuTimer.current !== null) window.clearTimeout(submenuTimer.current);
    }, []);

    const scheduleSubmenu = (expanded: boolean) => {
        if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
        if (submenuTimer.current !== null) window.clearTimeout(submenuTimer.current);
        submenuTimer.current = window.setTimeout(
            () => setApartmentsExpanded(expanded),
            expanded ? 180 : 280,
        );
    };

    const navigateTo = (page: Page) => {
        setPageToShow(page);
        onNavigate?.();
    };

    const item = ({page, label}: {page: Page; label: string}) => (
        <button type="button" key={page}
                className={pageToShow === page ? styles.activeOption : styles.option}
                aria-current={pageToShow === page ? "page" : undefined}
                onClick={() => navigateTo(page)}>{t(label)}</button>
    );

    return (
        <nav id={styles.sidebarContainer} aria-label="Main navigation">
            {item(navigationItems[0])}
            <div
                className={styles.navigationGroup}
                onPointerEnter={() => scheduleSubmenu(true)}
                onPointerLeave={() => scheduleSubmenu(false)}
            >
                <div className={styles.groupRow}>
                    <button type="button" className={isApartmentPage ? styles.activeOption : styles.option}
                            aria-current={pageToShow === "apartment" ? "page" : undefined}
                            onClick={() => navigateTo("apartment")}>
                        <span>{t("vacationApartments")}</span>
                        <span className={apartmentsExpanded ? styles.chevronOpen : styles.chevron} aria-hidden="true">›</span>
                    </button>
                </div>
                <div className={`${styles.submenu} ${apartmentsExpanded ? styles.submenuOpen : ""}`}>
                    <div className={styles.submenuInner}>
                        <button type="button" className={pageToShow === "apartment-ochsenkopf" ? styles.activeChild : styles.childOption}
                                aria-current={pageToShow === "apartment-ochsenkopf" ? "page" : undefined}
                                onClick={() => navigateTo("apartment-ochsenkopf")}>{t("apartmentOchsenkopf")}</button>
                        <button type="button" className={pageToShow === "apartment-schneeberg" ? styles.activeChild : styles.childOption}
                                aria-current={pageToShow === "apartment-schneeberg" ? "page" : undefined}
                                onClick={() => navigateTo("apartment-schneeberg")}>{t("apartmentSchneeberg")}</button>
                    </div>
                </div>
            </div>
            {navigationItems.slice(1).map(item)}
        </nav>
    );
};

export default Sidebar;
