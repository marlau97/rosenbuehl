import {useContext, useLayoutEffect, useRef, useState, type CSSProperties} from "react";
import {useTranslation} from "react-i18next";
import {AppContext} from "../Provider";
import ochsenkopfFloorPlan from "../assets/ochsenkopf-floor-plan.jpg";
import schneebergFloorPlan from "../assets/schneeberg-floor-plan.jpg";
import styles from "./ApartmentDetail.module.css";

type ApartmentDetailProps = {
    apartment: "ochsenkopf" | "schneeberg";
};

function ApartmentDetail({apartment}: ApartmentDetailProps) {
    const {i18n} = useTranslation();
    const context = useContext(AppContext);
    const containerRef = useRef<HTMLElement>(null);
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const [backPosition, setBackPosition] = useState({x: 0, y: 0});
    const isGerman = i18n.resolvedLanguage?.startsWith("de");
    const isOchsenkopf = apartment === "ochsenkopf";

    if (!context) throw new Error("useContext must be used within an AppProvider");

    const name = isOchsenkopf
        ? (isGerman ? "Ferienwohnung Ochsenkopf" : "Ochsenkopf apartment")
        : (isGerman ? "Ferienwohnung Schneeberg" : "Schneeberg apartment");
    const description = isOchsenkopf
        ? (isGerman ? "Für maximal 4 Personen mit zwei Schlafzimmern." : "For up to 4 guests, with two bedrooms.")
        : (isGerman ? "Für maximal 4 Personen mit einem Schlafzimmer." : "For up to 4 guests, with one bedroom.");
    const floorPlan = isOchsenkopf ? ochsenkopfFloorPlan : schneebergFloorPlan;

    useLayoutEffect(() => {
        const updatePosition = () => {
            const container = containerRef.current;
            const headline = headlineRef.current;
            if (!container || !headline || window.innerWidth <= 768) return;

            const containerBounds = container.getBoundingClientRect();
            const headlineBounds = headline.getBoundingClientRect();
            const sidebarEdge = window.innerWidth * 0.16;
            setBackPosition({
                x: (sidebarEdge + headlineBounds.left) / 2 - containerBounds.left,
                y: headlineBounds.top + headlineBounds.height / 2 - containerBounds.top,
            });
        };

        updatePosition();
        const observer = new ResizeObserver(updatePosition);
        if (headlineRef.current) observer.observe(headlineRef.current);
        window.addEventListener("resize", updatePosition);
        return () => {
            observer.disconnect();
            window.removeEventListener("resize", updatePosition);
        };
    }, [name]);

    const positionStyle = {
        "--back-x": `${backPosition.x}px`,
        "--back-y": `${backPosition.y}px`,
    } as CSSProperties;

    return (
        <main ref={containerRef} className={styles.container} style={positionStyle}>
            <button type="button" className={styles.back} onClick={() => context.setPageToShow("apartment")}>
                <span aria-hidden="true">←</span>
                <span className={styles.backLabel}>{isGerman ? "Alle Ferienwohnungen" : "All apartments"}</span>
            </button>
            <header className={styles.introduction}>
                <h1 ref={headlineRef}>{name}</h1>
                <p>{description}</p>
            </header>
            <figure className={styles.floorPlan}>
                <img src={floorPlan} alt={isGerman ? `Grundriss der ${name}` : `Floor plan of the ${name}`} />
            </figure>
        </main>
    );
}

export default ApartmentDetail;
