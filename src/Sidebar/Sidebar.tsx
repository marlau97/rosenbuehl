import { useContext } from "react";
import { AppContext } from "../Provider";
import { useTranslation } from "react-i18next";
import styles from './Sidebar.module.css';
import type { Page } from "../Provider";

type SidebarProps = {
    onNavigate?: () => void;
};

const navigationItems: Array<{ page: Page; label: string }> = [
    { page: "landing", label: "landingPage" },
    { page: "apartment", label: "vacationApartments" },
    { page: "location", label: "location" },
    { page: "house", label: "ourHouse" },
    { page: "tips", label: "tripTips" },
    { page: "legal", label: "legal" },
    { page: "privacy", label: "dataPrivacy" },
];

const Sidebar: React.FC<SidebarProps> = ({ onNavigate }) => {
    const { t } = useTranslation();
    const context = useContext(AppContext);

    if (!context) {
        throw new Error("useContext must be used within an AppProvider");
    }

    const { pageToShow, setPageToShow } = context;

    const navigateTo = (page: Page) => {
        setPageToShow(page);
        onNavigate?.();
    };

    return (
        <nav id={styles.sidebarContainer} aria-label="Main navigation">
            {navigationItems.map(({ page, label }) => (
                <button
                    type="button"
                    key={page}
                    className={pageToShow === page ? styles.activeOption : styles.option}
                    aria-current={pageToShow === page ? "page" : undefined}
                    onClick={() => navigateTo(page)}
                >
                    {t(label)}
                </button>
            ))}
        </nav>
    );
};

export default Sidebar;
