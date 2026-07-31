import { useTranslation } from "react-i18next";
import styles from "./Apartments.module.css";

function Apartments() {
    const { i18n } = useTranslation();
    const isGerman = i18n.resolvedLanguage?.startsWith("de");

    return (
        <main className={styles.container}>
            <header className={styles.introduction}>
                <h1>{isGerman ? "Ferienwohnungen" : "Holiday apartments"}</h1>
                <p>
                    {isGerman
                        ? "Wählen Sie eine unserer beiden geräumigen Ferienwohnungen. Weitere Bilder und ausführliche Informationen folgen."
                        : "Choose one of our two spacious holiday apartments. More photos and detailed information will follow."}
                </p>
            </header>

            <section id="ochsenkopf" className={styles.apartmentSection}>
                <h2>{isGerman ? "Ferienwohnung Ochsenkopf" : "Ochsenkopf apartment"}</h2>
                <p>{isGerman ? "Für maximal 4 Personen mit zwei Schlafzimmern." : "For up to 4 guests, with two bedrooms."}</p>
            </section>

            <section id="schneeberg" className={styles.apartmentSection}>
                <h2>{isGerman ? "Ferienwohnung Schneeberg" : "Schneeberg apartment"}</h2>
                <p>{isGerman ? "Für maximal 4 Personen mit einem Schlafzimmer." : "For up to 4 guests, with one bedroom."}</p>
            </section>
        </main>
    );
}

export default Apartments;
