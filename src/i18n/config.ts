import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

export const supportedLngs = {
    en: "English",
    de: "German",
};

i18n
    .use(LanguageDetector)
    // Add React bindings as a plugin.
    .use(initReactI18next)
    // Initialize the i18next instance.
    .init({

        // Fallback locale used when a translation is
        // missing in the active locale. Again, use your
        // preferred locale here.
        fallbackLng: "en",

        // Enables useful output in the browser’s
        // dev console.
        debug: true,

        supportedLngs: Object.keys(supportedLngs),
        // Normally, we want `escapeValue: true` as it
        // ensures that i18next escapes any code in
        // translation messages, safeguarding against
        // XSS (cross-site scripting) attacks. However,
        // React does this escaping itself, so we turn
        // it off in i18next.
        interpolation: {
            escapeValue: false,
        },

        // Translation messages. Add any languages
        // you want here.
        resources: {
            // English
            en: {
                // `translation` is the default namespace.
                // More details about namespaces shortly.
                translation: {
                    hello_world: "Hello, World!",
                    landingHeadline: "Home",
                    houseRosenbuehl: "Haus Rosenbühl",
                    landingPage: "Homepage",
                    landingSubHeadline: "Welcome to House Rosenbühl",
                    landingText: "Experience relaxing days in our cozy holiday apartments, surrounded by the picturesque nature of the region.\n" +
                        "Whether you’re seeking a peaceful retreat or a base for exploration, our accommodations offer the perfect home for your getaway.\n" +
                        "Enjoy fresh air, hiking trails just outside your door, and proximity to local attractions.\n" +
                        "Leave the everyday behind and create unforgettable memories in the heart of Warmensteinach.",
                    vacationApartments: "Holiday Apartments",
                    location: "Location",
                    ourHouse: "Our House",
                    tripTips: "Tips for your trip",
                    legal: "Legal notice and Contact",
                    dataPrivacy: "Data Privacy",
                    address: "Haus Rosenbühl Privatvermietung\n" +
                        "Jutta Lautenschlager-Rühle\n" +
                        "Fleckl - Stechenberg 3\n" +
                        "95485 Warmensteinach\n" +
                        "Phone: +49 170 4787138\n",
                    email: "Email: ",
                    responsible: "Responsible for content according to § 10, paragraph 3 MDStV:\n" +
                        "Jutta Lautenschlager-Rühle (address as above)",
                    liabilityNotice: "Liability Notice",
                    contentControlled: "Despite careful content control, we accept no liability for the content of external links.\n" +
                        "The operators of the linked pages are solely responsible for their content.",
                    disputeResolution: "Online Dispute Resolution in accordance with Art. 14(1) ODR-VO",
                    disputeText: "The European Commission provides a platform for online dispute resolution (ODR).\n" +
                        "Accessible at: ",
                    complaintText: "For complaints related to insurance mediation, you can contact:",
                    addressInsurance: "Versicherungsombudsmann e.V.\n" +
                        "Postfach 080632, 10006 Berlin\n" +
                        "Phone: 0800 3696000\n" +
                        "Fax: 0800 3699000\n" +
                        "E-Mail: beschwerde@versicherungsombudsmann.de",
                },
            },

            de: {
                translation: {
                    hello_world: "Hallo, Welt!",
                    landingHeadline: "Startseite",
                    houseRosenbuehl: "Haus Rosenbühl",
                    landingPage: "Startseite",
                    landingSubHeadline: "Willkommen im Haus Rosenbühl",
                    landingText: "Erleben Sie entspannte Urlaubstage in unseren gemütlichen Ferienwohnungen, umgeben von der malerischen Natur der Region.\n" +
                        "Ob für einen ruhigen Rückzugsort oder als Ausgangspunkt für Ihre Entdeckungstouren – bei uns finden Sie das perfekte Zuhause für Ihre Auszeit.\n" +
                        "Genießen Sie die frische Luft, Wanderwege direkt vor der Tür und die Nähe zu Sehenswürdigkeiten.\n" +
                        "Lassen Sie den Alltag hinter sich und erleben Sie eine unvergessliche Zeit im Herzen von Warmensteinach.",
                    vacationApartments: "Ferienwohnungen",
                    location: "Lage",
                    ourHouse: "Unser Haus",
                    tripTips: "Ausflugstipps",
                    legal: "Impressum und Kontakt",
                    dataPrivacy: "Datenschutz",
                    address: "Haus Rosenbühl Privatvermietung\n" +
                        "Jutta Lautenschlager-Rühle\n" +
                        "Fleckl - Stechenberg 3\n" +
                        "95485 Warmensteinach\n" +
                        "Telefon: +49 170 4787138\n",
                    email: "Email: ",
                    responsible: "Inhaltlich Verantwortlicher gemäß § 10 Absatz 3 MDStV:\n" +
                    "Jutta Lautenschlager-Rühle (Anschrift wie oben)",
                    liabilityNotice: "Haftungshinweis",
                    contentControlled: "Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.\n" +
                        " Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.",
                    disputeResolution: "Online-Streitbeilegung gemäß Art. 14 Abs. 1 ODR-VO",
                    disputeText: "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit.\n" +
                        "Diese finden Sie unter: ",
                    complaintText: "Bei Beschwerden im Zusammenhang mit der Versicherungsvermittlung wenden Sie sich an:",
                    addressInsurance: "Versicherungsombudsmann e.V.\n" +
                        "Postfach 080632, 10006 Berlin\n" +
                        "Telefon: 0800 3696000\n" +
                        "Fax: 0800 3699000\n" +
                        "E-Mail: beschwerde@versicherungsombudsmann.de",
                },
            },
        },
    });

export default i18n;