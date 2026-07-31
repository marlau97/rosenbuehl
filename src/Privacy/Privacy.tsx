import { useTranslation } from "react-i18next";
import styles from "./Privacy.module.css";

type PrivacyLanguage = "de" | "en";

type PrivacySection = {
    title: string;
    paragraphs?: string[];
    items?: string[];
};

const privacyContent: Record<PrivacyLanguage, { title: string; updated: string; introduction: string; sections: PrivacySection[] }> = {
    de: {
        title: "Datenschutzerklärung",
        updated: "Stand: Juli 2026",
        introduction: "Wir freuen uns sehr über Ihr Interesse an unserem Unternehmen. Datenschutz hat einen besonders hohen Stellenwert für die Geschäftsleitung des Hauses Rosenbühl. Eine Nutzung der Internetseiten des Hauses Rosenbühl ist grundsätzlich ohne jede Angabe personenbezogener Daten möglich. Sofern eine betroffene Person besondere Services unseres Unternehmens in Anspruch nehmen möchte, könnte jedoch eine Verarbeitung personenbezogener Daten erforderlich werden. Ist die Verarbeitung erforderlich und besteht hierfür keine gesetzliche Grundlage, holen wir generell eine Einwilligung der betroffenen Person ein.\n\nDie Verarbeitung personenbezogener Daten erfolgt stets im Einklang mit der Datenschutz-Grundverordnung und den für das Haus Rosenbühl geltenden Datenschutzbestimmungen. Mit dieser Datenschutzerklärung informieren wir über Art, Umfang und Zweck der verarbeiteten personenbezogenen Daten sowie über die Rechte betroffener Personen.\n\nTrotz technischer und organisatorischer Maßnahmen können internetbasierte Datenübertragungen grundsätzlich Sicherheitslücken aufweisen, sodass ein absoluter Schutz nicht gewährleistet werden kann. Personenbezogene Daten können uns daher auch auf alternativen Wegen, beispielsweise telefonisch, übermittelt werden.",
        sections: [
            {
                title: "1. Begriffsbestimmungen",
                paragraphs: [
                    "Diese Datenschutzerklärung beruht auf den Begrifflichkeiten, die beim Erlass der Datenschutz-Grundverordnung (DS-GVO) verwendet wurden. Zur besseren Verständlichkeit erläutern wir die verwendeten Begriffe:",
                ],
                items: [
                    "a) Personenbezogene Daten: alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen.",
                    "b) Betroffene Person: jede identifizierte oder identifizierbare natürliche Person, deren personenbezogene Daten verarbeitet werden.",
                    "c) Verarbeitung: jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang im Zusammenhang mit personenbezogenen Daten, insbesondere Erheben, Erfassen, Ordnen, Speichern, Verändern, Auslesen, Verwenden, Übermitteln, Einschränken, Löschen oder Vernichten.",
                    "d) Einschränkung der Verarbeitung: die Markierung gespeicherter personenbezogener Daten mit dem Ziel, ihre künftige Verarbeitung einzuschränken.",
                    "e) Profiling: jede Art automatisierter Verarbeitung, bei der personenbezogene Daten verwendet werden, um persönliche Aspekte einer natürlichen Person zu bewerten oder vorherzusagen.",
                    "f) Pseudonymisierung: die Verarbeitung personenbezogener Daten in einer Weise, in der sie ohne zusätzliche, gesondert aufbewahrte Informationen nicht mehr einer bestimmten Person zugeordnet werden können.",
                    "g) Verantwortlicher: die natürliche oder juristische Person, Behörde oder andere Stelle, die allein oder gemeinsam über Zwecke und Mittel der Verarbeitung entscheidet.",
                    "h) Auftragsverarbeiter: eine natürliche oder juristische Person, Behörde oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.",
                    "i) Empfänger: eine natürliche oder juristische Person, Behörde oder andere Stelle, der personenbezogene Daten offengelegt werden.",
                    "j) Dritter: eine Stelle außer der betroffenen Person, dem Verantwortlichen, dem Auftragsverarbeiter und den unter deren unmittelbarer Verantwortung befugten Personen.",
                    "k) Einwilligung: eine freiwillig, für den bestimmten Fall, in informierter Weise und unmissverständlich abgegebene Willensbekundung, mit der die betroffene Person der Verarbeitung zustimmt.",
                ],
            },
            {
                title: "2. Verantwortlicher",
                paragraphs: [
                    "Verantwortlicher im Sinne der Datenschutz-Grundverordnung und anderer Bestimmungen mit datenschutzrechtlichem Charakter ist:\n\nHaus Rosenbühl Privatvermietung\nJutta Lautenschlager-Rühle\nFleckl – Stechenberg 3\n95485 Warmensteinach\nDeutschland\nTelefon: +49 170 4787138\nE-Mail: haus.rosenbuehl@web.de\nWebsite: www.rosenbuehl.com",
                ],
            },
            {
                title: "3. Cookies",
                paragraphs: [
                    "Die Internetseiten des Hauses Rosenbühl setzen selbst keine Cookies und verwenden weder Local Storage noch Session Storage. Die eingebettete Karte von Google Maps wird nicht automatisch geladen. Erst nach Ihrer ausdrücklichen Zustimmung kann Google Cookies oder ähnliche Technologien einsetzen. Ihre Entscheidung wird von dieser Website nicht gespeichert.",
                ],
            },
            {
                title: "4. Google Maps",
                paragraphs: [
                    "Auf der Seite „Lage“ kann eine Karte des Dienstes Google Maps geladen werden. Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Ohne Ihre Zustimmung wird keine Verbindung zu Google hergestellt; stattdessen erscheint zunächst ein Hinweis. Erst wenn Sie auf „Google Maps laden“ klicken, wird die Karte eingebunden.",
                    "Beim Laden der Karte werden insbesondere Ihre IP-Adresse, Browser- und Geräteinformationen sowie gegebenenfalls Standort- und Nutzungsdaten an Google übermittelt. Google kann dabei Cookies oder ähnliche Technologien verwenden. Eine Verarbeitung und Übermittlung von Daten in die USA kann nicht ausgeschlossen werden.",
                    "Die Einbindung erfolgt ausschließlich auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DS-GVO und, soweit Informationen auf Ihrem Endgerät gespeichert oder ausgelesen werden, § 25 Abs. 1 TDDDG. Die Einwilligung gilt nur für den jeweils geladenen Kartenaufruf und wird von uns nicht dauerhaft gespeichert. Sie können die weitere Verarbeitung beenden, indem Sie die Seite verlassen oder neu laden.",
                ],
            },
            {
                title: "5. Erfassung von allgemeinen Daten und Informationen",
                paragraphs: [
                    "Die Internetseite des Hauses Rosenbühl wird über GitHub Pages bereitgestellt. Mit jedem Aufruf können in den Server-Logfiles allgemeine Daten und Informationen erfasst werden. Hierzu können Browsertyp und -version, Betriebssystem, Referrer, aufgerufene Seiten, Datum und Uhrzeit des Zugriffs, IP-Adresse, Internet-Service-Provider sowie ähnliche Daten gehören, die der Gefahrenabwehr bei Angriffen auf informationstechnische Systeme dienen.",
                    "Diese Informationen werden benötigt, um die Inhalte korrekt auszuliefern, die dauerhafte Funktionsfähigkeit und Sicherheit der Website zu gewährleisten und im Fall eines Cyberangriffs notwendige Informationen bereitzustellen. Die Verarbeitung beruht auf unserem berechtigten Interesse an einer sicheren und funktionsfähigen Website gemäß Art. 6 Abs. 1 lit. f DS-GVO. Weitere Informationen enthält die Datenschutzerklärung von GitHub.",
                ],
            },
            {
                title: "6. Kontaktaufnahme",
                paragraphs: [
                    "Die Internetseite enthält Angaben, die eine schnelle elektronische Kontaktaufnahme und unmittelbare Kommunikation mit uns ermöglichen. Sofern eine betroffene Person per E-Mail oder telefonisch Kontakt aufnimmt, werden die freiwillig übermittelten personenbezogenen Daten für Zwecke der Bearbeitung oder Kontaktaufnahme gespeichert. Es erfolgt keine Weitergabe dieser personenbezogenen Daten an Dritte, sofern hierfür keine gesetzliche Grundlage besteht.",
                ],
            },
            {
                title: "7. Routinemäßige Löschung und Sperrung von personenbezogenen Daten",
                paragraphs: [
                    "Der für die Verarbeitung Verantwortliche verarbeitet und speichert personenbezogene Daten nur für den Zeitraum, der zur Erreichung des Speicherungszwecks erforderlich ist oder durch geltende Gesetze und Vorschriften vorgesehen wurde.",
                    "Entfällt der Speicherungszweck oder läuft eine vorgeschriebene Speicherfrist ab, werden die personenbezogenen Daten routinemäßig und entsprechend den gesetzlichen Vorschriften gesperrt oder gelöscht.",
                ],
            },
            {
                title: "8. Rechte der betroffenen Person",
                paragraphs: ["Jede betroffene Person kann sich zur Ausübung ihrer Rechte jederzeit an den Verantwortlichen wenden. Zu den Rechten gehören insbesondere:"],
                items: [
                    "a) Recht auf Bestätigung: Auskunft darüber, ob betreffende personenbezogene Daten verarbeitet werden.",
                    "b) Recht auf Auskunft: unentgeltliche Auskunft und eine Kopie der gespeicherten personenbezogenen Daten einschließlich Verarbeitungszwecken, Datenkategorien, Empfängern, Speicherdauer, Herkunft und gegebenenfalls Informationen über automatisierte Entscheidungen sowie Drittlandübermittlungen.",
                    "c) Recht auf Berichtigung: unverzügliche Berichtigung unrichtiger und Vervollständigung unvollständiger personenbezogener Daten.",
                    "d) Recht auf Löschung: unverzügliche Löschung, sofern die Daten nicht mehr notwendig sind, eine Einwilligung wirksam widerrufen wurde, ein berechtigter Widerspruch vorliegt, die Verarbeitung unrechtmäßig ist oder eine rechtliche Löschungspflicht besteht und keine Ausnahme greift.",
                    "e) Recht auf Einschränkung der Verarbeitung: insbesondere bei bestrittener Richtigkeit, unrechtmäßiger Verarbeitung, benötigten Daten zur Rechtsverfolgung oder während der Prüfung eines Widerspruchs.",
                    "f) Recht auf Datenübertragbarkeit: Erhalt bereitgestellter Daten in einem strukturierten, gängigen und maschinenlesbaren Format sowie, soweit technisch machbar, Übermittlung an einen anderen Verantwortlichen.",
                    "g) Recht auf Widerspruch: Widerspruch gegen eine Verarbeitung nach Art. 6 Abs. 1 lit. e oder f DS-GVO aus Gründen der besonderen Situation sowie jederzeit gegen Direktwerbung.",
                    "h) Rechte bei automatisierten Entscheidungen einschließlich Profiling: das Recht, nicht einer ausschließlich automatisierten Entscheidung mit rechtlicher oder ähnlich erheblicher Wirkung unterworfen zu werden, soweit keine gesetzliche Ausnahme gilt.",
                    "i) Recht auf Widerruf einer Einwilligung: eine datenschutzrechtliche Einwilligung kann jederzeit mit Wirkung für die Zukunft widerrufen werden.",
                ],
            },
            {
                title: "9. Rechtsgrundlage der Verarbeitung",
                paragraphs: [
                    "Art. 6 Abs. 1 lit. a DS-GVO dient als Rechtsgrundlage für Verarbeitungsvorgänge, für die eine Einwilligung eingeholt wird. Ist eine Verarbeitung zur Erfüllung eines Vertrags oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, beruht sie auf Art. 6 Abs. 1 lit. b DS-GVO. Bei rechtlichen Verpflichtungen gilt Art. 6 Abs. 1 lit. c DS-GVO, beim Schutz lebenswichtiger Interessen Art. 6 Abs. 1 lit. d DS-GVO. Sonstige erforderliche Verarbeitungsvorgänge können auf Art. 6 Abs. 1 lit. f DS-GVO beruhen, sofern berechtigte Interessen nicht durch die Interessen oder Grundrechte der betroffenen Person überwogen werden.",
                ],
            },
            {
                title: "10. Berechtigte Interessen an der Verarbeitung",
                paragraphs: [
                    "Basiert die Verarbeitung personenbezogener Daten auf Art. 6 Abs. 1 lit. f DS-GVO, ist unser berechtigtes Interesse die Durchführung unserer Geschäftstätigkeit sowie die sichere und funktionsfähige Bereitstellung dieser Website.",
                ],
            },
            {
                title: "11. Dauer, für die personenbezogene Daten gespeichert werden",
                paragraphs: [
                    "Das Kriterium für die Dauer der Speicherung ist die jeweilige gesetzliche Aufbewahrungsfrist. Nach Ablauf der Frist werden die Daten routinemäßig gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind.",
                ],
            },
            {
                title: "12. Gesetzliche oder vertragliche Vorschriften zur Bereitstellung personenbezogener Daten",
                paragraphs: [
                    "Die Bereitstellung personenbezogener Daten kann gesetzlich vorgeschrieben sein oder sich aus vertraglichen Regelungen ergeben. Für einen Vertragsschluss kann es erforderlich sein, dass eine betroffene Person personenbezogene Daten bereitstellt. Eine Nichtbereitstellung kann dazu führen, dass ein Vertrag nicht geschlossen werden kann. Vor einer Bereitstellung kann die betroffene Person erfragen, ob diese gesetzlich oder vertraglich vorgeschrieben oder für einen Vertragsschluss erforderlich ist und welche Folgen eine Nichtbereitstellung hätte.",
                ],
            },
            {
                title: "13. Bestehen einer automatisierten Entscheidungsfindung",
                paragraphs: [
                    "Als verantwortungsbewusstes Unternehmen verzichten wir auf eine automatische Entscheidungsfindung oder ein Profiling.",
                ],
            },
        ],
    },
    en: {
        title: "Privacy policy",
        updated: "Last updated: July 2026",
        introduction: "Thank you for your interest in Haus Rosenbühl. Protecting your personal data is important to us. This policy explains which data may be processed when you visit this website and which rights you have.",
        sections: [
            { title: "1. Definitions", paragraphs: ["Personal data is any information relating to an identified or identifiable natural person. Processing includes operations such as collecting, storing, using, transmitting or deleting personal data.", "The controller determines the purposes and means of processing. A data subject is the person whose personal data is processed."] },
            { title: "2. Controller", paragraphs: ["Haus Rosenbühl Privatvermietung\nJutta Lautenschlager-Rühle\nFleckl – Stechenberg 3\n95485 Warmensteinach\nGermany\nPhone: +49 170 4787138\nEmail: haus.rosenbuehl@web.de"] },
            { title: "3. Cookies", paragraphs: ["The Haus Rosenbühl website itself does not set cookies and does not use Local Storage or Session Storage. The embedded Google Maps map is not loaded automatically. Google may use cookies or similar technologies only after you explicitly agree to load it. This website does not store your decision."] },
            { title: "4. Google Maps", paragraphs: ["The location page can load a map provided by Google Maps. The provider is Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland. No connection to Google is made before you consent; an informational placeholder is shown first. The map is embedded only after you select ‘Load Google Maps’.", "Loading the map transmits information to Google, particularly your IP address and browser and device information, as well as potentially location and usage data. Google may use cookies or similar technologies. Processing and transfers to the United States cannot be ruled out.", "The map is loaded solely on the basis of your consent under Article 6(1)(a) GDPR and, where information is stored on or read from your device, Section 25(1) TDDDG. Consent applies only to the map loaded during that visit and is not stored by us. You can stop further processing by leaving or reloading the page."] },
            { title: "5. Collection of general data and information", paragraphs: ["This website is provided through GitHub Pages. Each request may cause general technical information to be recorded in server logs, including browser type and version, operating system, referrer, requested pages, date and time, IP address, internet service provider and similar security-related information.", "This information is required to deliver the content correctly and maintain the reliable and secure operation of the website. Processing is based on our legitimate interest under Article 6(1)(f) GDPR."] },
            { title: "6. Contact", paragraphs: ["If you contact us by phone or email, we process the information you provide to answer your enquiry and any follow-up questions. Depending on the enquiry, processing is based on Article 6(1)(b) or Article 6(1)(f) GDPR.", "The information is not shared without a legal basis and is deleted when it is no longer needed, unless statutory retention obligations apply."] },
            { title: "7. Routine deletion and restriction of personal data", paragraphs: ["Personal data is processed and stored only for the period required for its purpose or prescribed by applicable laws. When the purpose or retention period ends, the data is routinely restricted or deleted in accordance with the law."] },
            { title: "8. Rights of the data subject", paragraphs: ["Subject to the applicable legal requirements, these include:"], items: ["Right to confirmation and access", "Right to rectification", "Right to erasure", "Right to restriction of processing", "Right to data portability", "Right to object", "Rights relating to automated individual decisions including profiling", "Right to withdraw consent with future effect"] },
            { title: "9. Legal basis for processing", paragraphs: ["Depending on the circumstances, processing may be based on consent under Article 6(1)(a), a contract or pre-contractual measures under Article 6(1)(b), a legal obligation under Article 6(1)(c), vital interests under Article 6(1)(d), or legitimate interests under Article 6(1)(f) GDPR."] },
            { title: "10. Legitimate interests", paragraphs: ["Where processing is based on Article 6(1)(f) GDPR, our legitimate interests are the operation of our business and the secure and reliable provision of this website."] },
            { title: "11. Storage period", paragraphs: ["The relevant statutory retention period determines how long personal data is stored. After that period, it is routinely deleted unless still required for a contract or pre-contractual measures."] },
            { title: "12. Legal or contractual requirements to provide data", paragraphs: ["Providing personal data may be required by law or contract and may be necessary to enter into a contract. Failure to provide required information may prevent a contract from being concluded."] },
            { title: "13. Automated decision-making", paragraphs: ["As a responsible business, we do not use automated decision-making or profiling."] },
        ],
    },
};

function Privacy() {
    const { i18n } = useTranslation();
    const language: PrivacyLanguage = i18n.resolvedLanguage?.startsWith("de") ? "de" : "en";
    const content = privacyContent[language];

    return (
        <main className={styles.container}>
            <header className={styles.introduction}>
                <h1>{content.title}</h1>
                <p>{content.introduction}</p>
                <small>{content.updated}</small>
            </header>

            <div className={styles.policy}>
                {content.sections.map((section) => (
                    <section className={styles.section} key={section.title}>
                        <h2>{section.title}</h2>
                        {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                        {section.items && (
                            <ul>
                                {section.items.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        )}
                    </section>
                ))}

                <aside className={styles.links}>
                    <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noreferrer">GitHub privacy statement</a>
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google privacy policy</a>
                    <a href="https://www.lda.bayern.de/de/beschwerde.html" target="_blank" rel="noreferrer">BayLDA complaint form</a>
                </aside>
            </div>
        </main>
    );
}

export default Privacy;
