import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {AppContext, type Page} from "../Provider";
import styles from "./Apartments.module.css";

function Apartments() {
    const {i18n} = useTranslation();
    const context = useContext(AppContext);
    const isGerman = i18n.resolvedLanguage?.startsWith("de");

    if (!context) throw new Error("useContext must be used within an AppProvider");

    const apartments: Array<{page: Page; name: string; detail: string}> = [
        {
            page: "apartment-ochsenkopf",
            name: isGerman ? "Ferienwohnung Ochsenkopf" : "Ochsenkopf apartment",
            detail: isGerman ? "Für maximal 4 Personen mit zwei Schlafzimmern" : "For up to 4 guests, with two bedrooms",
        },
        {
            page: "apartment-schneeberg",
            name: isGerman ? "Ferienwohnung Schneeberg" : "Schneeberg apartment",
            detail: isGerman ? "Für maximal 4 Personen mit einem Schlafzimmer" : "For up to 4 guests, with one bedroom",
        },
    ];

    return (
        <main className={styles.container}>
            <header className={styles.introduction}>
                <h1>{isGerman ? "Ferienwohnungen" : "Holiday apartments"}</h1>
                <p>
                    {isGerman
                        ? "Wählen Sie eine unserer beiden geräumigen Ferienwohnungen und erfahren Sie mehr über Grundriss und Ausstattung."
                        : "Choose one of our two spacious holiday apartments and learn more about its floor plan and amenities."}
                </p>
            </header>

            <section className={styles.overview} aria-label={isGerman ? "Unsere Ferienwohnungen" : "Our holiday apartments"}>
                {apartments.map((apartment) => (
                    <button
                        type="button"
                        className={styles.apartment}
                        key={apartment.page}
                        onClick={() => context.setPageToShow(apartment.page)}
                    >
                        <h2>{apartment.name}</h2>
                        <p>{apartment.detail}</p>
                        <span className={styles.apartmentLink}>
                            {isGerman ? "Wohnung ansehen" : "View apartment"}
                            <span aria-hidden="true"> →</span>
                        </span>
                    </button>
                ))}
            </section>
        </main>
    );
}

export default Apartments;
