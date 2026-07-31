import {useEffect, useRef, useState, type PointerEvent, type WheelEvent} from "react";
import {flushSync} from "react-dom";
import {useTranslation} from "react-i18next";
import regionalMap from "../assets/fichtelgebirge-map.jpg";
import styles from "./Location.module.css";

const googleMapsUrl = "https://www.google.com/maps/place/Haus+Rosenb%C3%BChl/@50.0098785,11.8117872,17z/data=!4m15!1m8!3m7!1s0x47a1a8bed7beff5f:0xebe052c92453051a!2sStechenberg+3,+95485+Warmensteinach-Fleckl!3b1!8m2!3d50.0099194!4d11.8116978!16s%2Fg%2F11c5hzmk63!3m5!1s0x47a1a8bed7c33079:0xc1ac900491968d9f!8m2!3d50.0098785!4d11.8117872!16s%2Fg%2F1td75l00?entry=ttu";
const googleMapsEmbedUrl = "https://www.google.com/maps?q=Haus+Rosenb%C3%BChl%2C+Stechenberg+3%2C+95485+Warmensteinach-Fleckl&z=15&output=embed";

function Location() {
    const {t} = useTranslation();
    const [isMapOpen, setIsMapOpen] = useState(false);
    const [isGoogleMapsLoaded, setIsGoogleMapsLoaded] = useState(false);
    const [zoom, setZoom] = useState(1);
    const [isDragging, setIsDragging] = useState(false);
    const dialogRef = useRef<HTMLDialogElement>(null);
    const viewportRef = useRef<HTMLDivElement>(null);
    const dragStart = useRef({x: 0, y: 0, scrollLeft: 0, scrollTop: 0});

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isMapOpen && !dialog.open) dialog.showModal();
        if (!isMapOpen && dialog.open) dialog.close();
    }, [isMapOpen]);

    const closeMap = () => {
        setIsMapOpen(false);
        setZoom(1);
        setIsDragging(false);
    };

    const changeZoom = (amount: number) => {
        setZoom((current) => Math.min(4, Math.max(1, current + amount)));
    };

    const resetZoom = () => {
        setZoom(1);
        const viewport = viewportRef.current;
        if (viewport) {
            viewport.scrollLeft = 0;
            viewport.scrollTop = 0;
        }
    };

    const zoomAtPointer = (event: WheelEvent<HTMLDivElement>) => {
        event.preventDefault();

        const viewport = event.currentTarget;
        const nextZoom = Math.min(4, Math.max(1, zoom + (event.deltaY < 0 ? 0.25 : -0.25)));
        if (nextZoom === zoom) return;

        const bounds = viewport.getBoundingClientRect();
        const pointerX = event.clientX - bounds.left;
        const pointerY = event.clientY - bounds.top;
        const imageX = (viewport.scrollLeft + pointerX) / zoom;
        const imageY = (viewport.scrollTop + pointerY) / zoom;

        flushSync(() => setZoom(nextZoom));
        viewport.scrollLeft = imageX * nextZoom - pointerX;
        viewport.scrollTop = imageY * nextZoom - pointerY;
    };

    const startDragging = (event: PointerEvent<HTMLDivElement>) => {
        const viewport = event.currentTarget;
        const canPan = viewport.scrollWidth > viewport.clientWidth || viewport.scrollHeight > viewport.clientHeight;
        if (!canPan || event.button !== 0) return;

        viewport.setPointerCapture(event.pointerId);
        dragStart.current = {
            x: event.clientX,
            y: event.clientY,
            scrollLeft: viewport.scrollLeft,
            scrollTop: viewport.scrollTop,
        };
        setIsDragging(true);
        event.preventDefault();
    };

    const dragImage = (event: PointerEvent<HTMLDivElement>) => {
        if (!isDragging) return;

        const viewport = event.currentTarget;
        viewport.scrollLeft = dragStart.current.scrollLeft - (event.clientX - dragStart.current.x);
        viewport.scrollTop = dragStart.current.scrollTop - (event.clientY - dragStart.current.y);
    };

    const stopDragging = (event: PointerEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
        }
        setIsDragging(false);
    };

    return (
        <main className={styles.container}>
            <div className={styles.locationGrid}>
                <div className={styles.leftColumn}>
                    <section className={styles.introduction}>
                        <p className={styles.eyebrow}>{t("locationRegion")}</p>
                        <h1>{t("locationHeadline")}</h1>
                        <p>{t("locationText")}</p>
                        <address className={styles.address}>
                            <strong>Haus Rosenbühl</strong>
                            <span>Stechenberg 3</span>
                            <span>95485 Warmensteinach-Fleckl</span>
                        </address>
                    </section>

                <section className={styles.section} aria-labelledby="location-map-heading">
                    <div className={styles.sectionHeader}>
                        <h2 id="location-map-heading">{t("locationMapHeadline")}</h2>
                        <a href={googleMapsUrl} target="_blank" rel="noreferrer">
                            {t("openInGoogleMaps")}
                        </a>
                    </div>
                    <div className={styles.mapFrame}>
                        {isGoogleMapsLoaded ? (
                            <iframe
                                src={googleMapsEmbedUrl}
                                title={t("googleMapsTitle")}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                            />
                        ) : (
                            <div className={styles.mapConsent}>
                                <div className={styles.mapPin} aria-hidden="true">●</div>
                                <h3>{t("googleMapsConsentHeadline")}</h3>
                                <p>{t("googleMapsConsentText")}</p>
                                <button type="button" onClick={() => setIsGoogleMapsLoaded(true)}>
                                    {t("loadGoogleMaps")}
                                </button>
                            </div>
                        )}
                    </div>
                </section>
                </div>

                <section className={`${styles.section} ${styles.regionSection}`} aria-labelledby="regional-map-heading">
                    <h2 id="regional-map-heading">{t("regionalMapHeadline")}</h2>
                    <button
                        type="button"
                        className={styles.regionalMap}
                        onClick={() => setIsMapOpen(true)}
                        aria-label={t("expandRegionalMap")}
                    >
                        <img src={regionalMap} alt={t("regionalMapAlt")} />
                        <span className={styles.expandHint} aria-hidden="true">&#x26F6;</span>
                    </button>
                </section>
            </div>

            <dialog
                ref={dialogRef}
                className={styles.lightbox}
                onClose={closeMap}
                onCancel={(event) => {
                    event.preventDefault();
                    closeMap();
                }}
                onClick={(event) => {
                    if (event.target === event.currentTarget) closeMap();
                }}
            >
                <div className={styles.viewerToolbar}>
                    <span>{t("regionalMapHeadline")}</span>
                    <div className={styles.viewerControls}>
                        <button type="button" onClick={() => changeZoom(-0.25)} disabled={zoom <= 1} aria-label={t("zoomOut")}>−</button>
                        <output aria-live="polite">{Math.round(zoom * 100)}%</output>
                        <button type="button" onClick={() => changeZoom(0.25)} disabled={zoom >= 4} aria-label={t("zoomIn")}>+</button>
                        <button type="button" onClick={resetZoom}>{t("resetZoom")}</button>
                        <button type="button" onClick={closeMap} aria-label={t("closeMap")}>&#x2715;</button>
                    </div>
                </div>
                <div
                    ref={viewportRef}
                    className={`${styles.imageViewport} ${isDragging ? styles.dragging : ""}`}
                    onWheel={zoomAtPointer}
                    onPointerDown={startDragging}
                    onPointerMove={dragImage}
                    onPointerUp={stopDragging}
                    onPointerCancel={stopDragging}
                >
                    <img
                        src={regionalMap}
                        alt={t("regionalMapAlt")}
                        style={{width: `${zoom * 100}%`}}
                        draggable={false}
                    />
                </div>
            </dialog>
        </main>
    );
}

export default Location;
