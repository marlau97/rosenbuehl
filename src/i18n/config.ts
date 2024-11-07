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
                    bookingText: "Book your stay through booking.com now!",
                    houseRosenbuehl: "House Rosenbühl",
                },
            },

            de: {
                translation: {
                    hello_world: "Hallo, Welt!",
                    bookingText: "Buchen Sie jetzt Ihren Aufenthalt über booking.com!",
                    houseRosenbuehl: "Haus Rosenbühl",
                },
            },
        },
    });

export default i18n;