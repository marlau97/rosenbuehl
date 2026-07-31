import { useTranslation } from "react-i18next";
import styles from "./TripTips.module.css";

type TripTipsLanguage = "de" | "en";

type TripTipsContent = {
    title: string;
    introduction: string;
    sections: Array<{
        title: string;
        items: string[];
    }>;
};

const content: Record<TripTipsLanguage, TripTipsContent> = {
    de: {
        title: "Ausflugstipps",
        introduction: "Die folgende Liste ist nur eine kleine Auswahl von Anregungen, Ihren Aufenthalt im Fichtelgebirge abwechslungsreich zu gestalten.",
        sections: [
            {
                title: "In und um Fleckl",
                items: [
                    "Seilschwebebahn Ochsenkopf Süd",
                    "Skipisten und Langlaufloipen; Skischule",
                    "Downhillstrecke am Ochsenkopf",
                    "Mountainbike-Kurse",
                    "Moorbad",
                    "Freilandmuseum Grassemann",
                    "Glasmuseum Warmensteinach",
                    "Devalkartbahn Oberwarmensteinach",
                    "Alpin-Coaster und Sommerrodelbahn Bischofsgrün",
                    "Kletterpark Bischofsgrün",
                    "Besucherbergwerk Fichtelberg",
                    "Automobilmuseum Fichtelberg",
                    "Wildpark Mehlmeisel",
                ],
            },
            {
                title: "Seen in der Umgebung",
                items: [
                    "Moorbad Fleckl",
                    "Fichtelsee (Fichtelberg-Neubau)",
                    "Weißenstädter See",
                    "Untreusee Hof mit Kletterpark",
                ],
            },
            {
                title: "Sehenswertes",
                items: [
                    "Festspielstadt Bayreuth und Besuch der Richard-Wagner-Festspiele",
                    "Luisenburg-Festspiele Wunsiedel",
                    "Felsenlabyrinth Wunsiedel",
                    "Fichtelgebirgsmuseum Wunsiedel",
                    "Schneeberg, höchster Berg im Fichtelgebirge (1.051 m)",
                ],
            },
            {
                title: "Schwimm- und Thermalbäder",
                items: [
                    "Lohengrin-Therme Bayreuth",
                    "GesundZeitResort Siebenquell Weißenstadt",
                    "Therme Obernsees",
                    "ALEXBAD Bad Alexandersbad",
                    "Waldschwimmbad Warmensteinach (Freibad)",
                    "Freibad Bischofsgrün",
                    "Kreuzsteinbad Bayreuth",
                    "SVB- und Stadtbad Bayreuth",
                ],
            },
            {
                title: "Ideen für Tagesausflüge",
                items: [
                    "Fahrt nach Nürnberg, Regensburg oder Bamberg",
                    "Playmobil-FunPark Zirndorf",
                    "Schloss Thurn und Freizeit-Land Geiselwind",
                    "Porzellanikon Selb",
                    "Fahrt nach Franzensbad oder Marienbad (Tschechien)",
                ],
            },
        ],
    },
    en: {
        title: "Tips for your trip",
        introduction: "The following list is a small selection of ideas for making your stay in the Fichtel Mountains varied and memorable.",
        sections: [
            {
                title: "In and around Fleckl",
                items: [
                    "Ochsenkopf South cable car",
                    "Ski slopes, cross-country trails and ski school",
                    "Downhill mountain-bike trail on the Ochsenkopf",
                    "Mountain-bike courses",
                    "Moor swimming pool",
                    "Grassemann open-air museum",
                    "Warmensteinach Glass Museum",
                    "Devalkart track in Oberwarmensteinach",
                    "Alpine coaster and summer toboggan run in Bischofsgrün",
                    "Bischofsgrün climbing park",
                    "Fichtelberg visitor mine",
                    "Fichtelberg Automobile Museum",
                    "Mehlmeisel wildlife park",
                ],
            },
            {
                title: "Nearby lakes",
                items: [
                    "Moor swimming pool in Fleckl",
                    "Fichtelsee (Fichtelberg-Neubau)",
                    "Weißenstadt Lake",
                    "Untreusee near Hof with climbing park",
                ],
            },
            {
                title: "Places to see",
                items: [
                    "Festival city of Bayreuth and the Richard Wagner Festival",
                    "Luisenburg Festival in Wunsiedel",
                    "Wunsiedel rock labyrinth",
                    "Fichtel Mountains Museum in Wunsiedel",
                    "Schneeberg, the highest mountain in the Fichtel Mountains (1,051 m)",
                ],
            },
            {
                title: "Swimming pools and thermal baths",
                items: [
                    "Lohengrin thermal baths in Bayreuth",
                    "Siebenquell health resort in Weißenstadt",
                    "Obernsees thermal baths",
                    "ALEXBAD in Bad Alexandersbad",
                    "Warmensteinach outdoor forest pool",
                    "Bischofsgrün outdoor pool",
                    "Kreuzsteinbad in Bayreuth",
                    "SVB pool and municipal pool in Bayreuth",
                ],
            },
            {
                title: "Day-trip ideas",
                items: [
                    "Visit Nuremberg, Regensburg or Bamberg",
                    "Playmobil FunPark in Zirndorf",
                    "Schloss Thurn and Freizeit-Land Geiselwind theme parks",
                    "Porzellanikon ceramics museum in Selb",
                    "Visit Františkovy Lázně or Mariánské Lázně in the Czech Republic",
                ],
            },
        ],
    },
};

function TripTips() {
    const { i18n } = useTranslation();
    const language: TripTipsLanguage = i18n.resolvedLanguage?.startsWith("de") ? "de" : "en";
    const pageContent = content[language];

    return (
        <main className={styles.container}>
            <header className={styles.introduction}>
                <h1>{pageContent.title}</h1>
                <p>{pageContent.introduction}</p>
            </header>

            <div className={styles.grid}>
                {pageContent.sections.map((section) => (
                    <section className={styles.card} key={section.title}>
                        <h2>{section.title}</h2>
                        <ul>
                            {section.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
        </main>
    );
}

export default TripTips;
