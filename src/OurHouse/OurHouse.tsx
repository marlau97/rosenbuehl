import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "../Provider";
import styles from "./OurHouse.module.css";

type HouseLanguage = "de" | "en";

const houseContent = {
    de: {
        title: "Unser Haus",
        introduction: "Unser Haus liegt im Warmensteinacher Ortsteil Fleckl (Stechenberg) auf einer Höhe von ca. 750 Metern. Bei uns können Sie ganzjährig einen ruhigen und erholsamen Urlaub fernab der Durchgangsstraßen verbringen.",
        apartmentHeading: "Zwei geräumige Ferienwohnungen",
        apartments: [
            { name: "Ferienwohnung Ochsenkopf", detail: "Für maximal 4 Personen mit zwei Schlafzimmern" },
            { name: "Ferienwohnung Schneeberg", detail: "Für maximal 4 Personen mit einem Schlafzimmer" },
        ],
        featureHeading: "Alles für einen erholsamen Aufenthalt",
        features: [
            { title: "Natur direkt am Haus", text: "Eine große Liegewiese mit Grillplatz, Spielgeräten, wunderschöner Umgebung und tollem Ausblick lädt zum Verweilen ein." },
            { title: "Bequem ankommen", text: "Parkplätze befinden sich direkt am Haus." },
            { title: "Bayreuth in der Nähe", text: "Bayreuth erreichen Sie in etwa 30 Minuten mit dem Auto oder mit öffentlichen Verkehrsmitteln – ideal für einen Besuch der Richard-Wagner-Festspiele oder des Markgräflichen Opernhauses." },
            { title: "Kostenloses WLAN", text: "Während Ihres Aufenthalts steht Ihnen ein kostenloser Internetzugang zur Verfügung." },
        ],
        closing: "Wir freuen uns auf Ihren Aufenthalt in unserem Haus Rosenbühl.",
    },
    en: {
        title: "Our house",
        introduction: "Our house is located in Fleckl (Stechenberg), a district of Warmensteinach, at an elevation of approximately 750 metres. Here you can enjoy a quiet and relaxing holiday away from through traffic throughout the year.",
        apartmentHeading: "Two spacious holiday apartments",
        apartments: [
            { name: "Ochsenkopf apartment", detail: "For up to 4 guests, with two bedrooms" },
            { name: "Schneeberg apartment", detail: "For up to 4 guests, with one bedroom" },
        ],
        featureHeading: "Everything for a relaxing stay",
        features: [
            { title: "Nature on your doorstep", text: "A large lawn with a barbecue area, play equipment, beautiful surroundings and wonderful views invites you to relax." },
            { title: "Easy arrival", text: "Parking spaces are available directly at the house." },
            { title: "Bayreuth nearby", text: "Bayreuth can be reached in around 30 minutes by car or public transport, making the house an ideal base for the Richard Wagner Festival or the Margravial Opera House." },
            { title: "Free Wi-Fi", text: "Complimentary internet access is available throughout your stay." },
        ],
        closing: "We look forward to welcoming you to Haus Rosenbühl.",
    },
} satisfies Record<HouseLanguage, unknown>;

function OurHouse() {
    const { i18n } = useTranslation();
    const appContext = useContext(AppContext);
    const language: HouseLanguage = i18n.resolvedLanguage?.startsWith("de") ? "de" : "en";
    const content = houseContent[language];

    if (!appContext) {
        throw new Error("useContext must be used within an AppProvider");
    }

    const openApartment = (apartmentId: "ochsenkopf" | "schneeberg") => {
        appContext.setPageToShow(apartmentId === "ochsenkopf" ? "apartment-ochsenkopf" : "apartment-schneeberg");
    };

    return (
        <main className={styles.container}>
            <header className={styles.introduction}>
                <div className={styles.copy}>
                    <h1>{content.title}</h1>
                    <p>{content.introduction}</p>
                </div>
            </header>

            <section className={styles.apartmentSection}>
                <h2>{content.apartmentHeading}</h2>
                <div className={styles.apartmentGrid}>
                    {content.apartments.map((apartment, index) => (
                        <button
                            type="button"
                            className={styles.apartment}
                            key={apartment.name}
                            onClick={() => openApartment(index === 0 ? "ochsenkopf" : "schneeberg")}
                        >
                            <h3>{apartment.name}</h3>
                            <p>{apartment.detail}</p>
                            <span className={styles.apartmentLink}>
                                {language === "de" ? "Wohnung ansehen" : "View apartment"}
                                <span aria-hidden="true"> →</span>
                            </span>
                        </button>
                    ))}
                </div>
            </section>

            <section className={styles.featureSection}>
                <h2>{content.featureHeading}</h2>
                <div className={styles.featureGrid}>
                    {content.features.map((feature) => (
                        <article className={styles.feature} key={feature.title}>
                            <h3>{feature.title}</h3>
                            <p>{feature.text}</p>
                        </article>
                    ))}
                </div>
            </section>

            <p className={styles.closing}>{content.closing}</p>
        </main>
    );
}

export default OurHouse;
