// Sämtliche Texte, Namen, Kundenlogos und Kontaktdaten sind unverändert von
// team19.media übernommen (migriert aus build/content.py). Wer Inhalte
// pflegen will, ändert nur diese Datei.

export const COMPANY = {
  name: "Team19 Media",
  legal: "Team19 Media UG (haftungsbeschränkt)",
  tagline: "Deine persönliche Marketing Agentur",
  claim: "Die Ziele unserer Kunden sind unsere Motivation!",
  subline: "Social Media Marketing Agentur",
  street: "An der Isar 9",
  zip: "82049",
  city: "Pullach i. Isartal",
  email: "info@team19.media",
  phone: "+49 (0)89 97313032",
  phoneHref: "+498997313032",
  register: "Registergericht München HRB: 260446",
  vat: "DE335811931",
  directors: "Andreas Fleißner, Alexander Demharter, Frederic Fleißner",
  founded: 2019,
};

export const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${COMPANY.street}, ${COMPANY.zip} ${COMPANY.city}`
)}`;

export const SOCIAL = [
  { name: "Instagram", url: "https://www.instagram.com/team19.media/", key: "instagram" },
  { name: "Facebook", url: "https://www.facebook.com/Team19.media", key: "facebook" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/team19-media-ug-haftungsbeschr%C3%A4nkt/",
    key: "linkedin",
  },
  { name: "TikTok", url: "https://www.tiktok.com/@team19.media", key: "tiktok" },
];

export const HOURS = [
  { day: "Montag - Freitag", time: "08:00 - 18:00 Uhr" },
  { day: "Samstag", time: "Geschlossen" },
  { day: "Sonntag", time: "Geschlossen" },
];

export const PLATFORM_NAV = [
  { label: "Instagram Marketing", href: "/instagram", key: "instagram" },
  { label: "Facebook Marketing", href: "/facebook", key: "facebook" },
  { label: "LinkedIn Marketing", href: "/linkedin", key: "linkedin" },
  { label: "TikTok Marketing", href: "/tiktok", key: "tiktok" },
];

export const NAV = [
  { label: "Home", href: "/", key: "home" },
  { label: "Social Media", href: "/social-media", key: "social", sub: PLATFORM_NAV },
  { label: "Webdesign", href: "/webdesign", key: "webdesign" },
  { label: "Über uns", href: "/team", key: "team" },
  { label: "Referenzen", href: "/referenzen", key: "referenzen" },
];

// Die Punkte, die Team19 von einer austauschbaren Agentur trennen. Stehen als
// eigener Abschnitt unter dem Hero, nicht im Hero selbst.
export const USPS = [
  {
    label: "Kein Stock-Material",
    text: "Jedes Bild und jedes Video entsteht bei Dir vor Ort. Wir kaufen nichts aus einer Datenbank zu.",
  },
  {
    label: "Zwei Ansprechpartner",
    text: "Frederic und Andreas. Keine Projektmanager-Kette, kein wechselndes Team, keine Warteschleife.",
  },
  {
    label: "Alles im Haus",
    text: "Konzept, Kamera, Schnitt, Anzeigen und Auswertung laufen unter einem Dach. Nichts wird ausgelagert.",
  },
  {
    label: "Seit 2019 in München",
    text: "Wir sitzen in Pullach und drehen dort, wo unsere Kunden arbeiten. Meist in unter einer Stunde erreichbar.",
  },
];

// Das eine Statement der Startseite. Läuft beim Scrollen von Grau auf Schwarz
// durch, mit dem Markenrot an der Lesekante.
export const STATEMENT =
  "Die meisten Agenturen zeigen Dir am Ende einen Report. Wir zeigen Dir Deine Kunden. Deshalb stehen wir mit der Kamera in Deiner Werkstatt, statt Stockbilder zu lizenzieren, und deshalb kennt Dein Ansprechpartner Deinen Betrieb, nicht nur Deinen Account.";

// Die Arbeiten als gestapelte Vollbild-Panels. `video` bleibt leer, bis das
// Filmmaterial da ist; bis dahin trägt das Standbild das Panel.
// Poster im Querformat, weil die Panels bildschirmfüllend laufen. Die
// Hochkant-Screenshots der Kanäle liegen weiterhin unter WORK.
export const REEL: { title: string; note: string; img: string; video?: string }[] = [
  {
    title: "Content, der vor Ort entsteht",
    note: "Wir drehen in Werkstatt, Laden und Büro. Was Du siehst, ist Dein Betrieb.",
    img: "/assets/photo/DSC09237Art.jpg",
  },
  {
    title: "Bewegtbild statt Standbild",
    note: "Reels und Kurzvideos im Hochformat, geschnitten für den Feed.",
    img: "/assets/photo/DSC09246Art.jpg",
  },
  {
    title: "Kampagnen, die laufen",
    note: "Anzeigenmotive für Instagram, Facebook, LinkedIn und TikTok.",
    img: "/assets/photo/DSC04671Art.jpg",
  },
];

// Übersichtsseite, die alle Social-Media-Kanäle bündelt (statt Direktsprung auf Instagram).
export const SOCIAL_OVERVIEW = {
  eyebrow: "Social Media Marketing",
  title: "Eine Strategie. Vier Sprachen.",
  lead:
    "Instagram lebt von Bildern, LinkedIn von Substanz, TikTok von Tempo. Wir bespielen jede Plattform in ihrer eigenen Sprache, statt einen Post auf allen Kanälen zu recyceln.",
};

// Die vier Ziele, mit denen Kunden zu uns kommen. Icons aus Phosphor, ein
// Strichgewicht für alle.
export const BENEFITS = [
  {
    icon: "UserPlus",
    title: "Neue Kunden finden",
    text: "Wir erstellen den Content, posten Dein Angebot und schalten Anzeigen auf die Menschen, die tatsächlich kaufen. Online wie im Laden.",
  },
  {
    icon: "Megaphone",
    title: "Bekanntheit steigern",
    text: "Wir bauen Deine digitale Visitenkarte auf den Sozialen Medien auf und bringen sie vor Deine Zielgruppe, nicht vor irgendeine.",
  },
  {
    icon: "UsersThree",
    title: "Mitarbeiter gewinnen",
    text: "Deine nächsten Kolleginnen und Kollegen scrollen schon. Wir zeigen ihnen dort, wie es ist, bei Dir zu arbeiten.",
  },
  {
    icon: "Sparkle",
    title: "Image aufbauen",
    text: "Wir stellen die Menschen hinter Deinem Betrieb vor und machen aus Leistungen eine Geschichte, die hängen bleibt.",
  },
];

// Leistungen als nummerierte Liste, nicht als Kartenraster. Die Reihenfolge
// entspricht dem tatsächlichen Ablauf eines Projekts.
export const SERVICES = [
  {
    title: "Content Creation",
    text: "Wir sammeln Ideen, schreiben Skripte und Texte und drehen Fotos und Videos bei Dir vor Ort oder an einer passenden Location, abgestimmt auf Deinen Redaktionsplan.",
  },
  {
    title: "Werbekampagnen",
    text: "Vom Entwurf bis zur laufenden Anzeige: Wir entwickeln die Botschaft und schalten Ads auf LinkedIn, Facebook, Instagram und TikTok, bei Bedarf inklusive Foto, Video und Logo.",
  },
  {
    title: "Content Management",
    text: "Wir übernehmen die Pflege Deiner Accounts, legen sie bei Bedarf neu an und bauen darauf aufbauend Werbeanzeigen, die Reichweite und Bekanntheit spürbar steigern.",
  },
  {
    title: "Auswertungen",
    text: "Erst die Analyse, dann die Justierung: Wir werten Insights laufend aus, erkennen die passende Zielgruppe und schärfen die Kampagne dort, wo sie den größten Hebel hat.",
  },
];

export type PlatformKey = "instagram" | "facebook" | "linkedin" | "tiktok";

export const PLATFORMS: Record<
  PlatformKey,
  {
    name: string;
    navLabel: string;
    title: string;
    lead: string;
    paras: string[];
    extra: { title: string; paras: string[] } | null;
    heroImg: string;
    shots: string[];
  }
> = {
  instagram: {
    name: "Instagram",
    navLabel: "Instagram Marketing",
    title: "Instagram Marketing",
    lead: "Glaubwürdigkeit und Kundenbindung - mit Bildern und Videos, die im Gedächtnis bleiben.",
    paras: [
      "Bei Social Media Marketing auf Instagram geht es um Glaubwürdigkeit und Kundenbindung, der Fokus liegt auf Bildern und Videos. Die Qualität der visuellen Inhalte und der Unterhaltungswert spielen eine nicht zu unterschätzende Rolle. Gleichzeitig ist die Wiedererkennung wichtig. Mittlerweile sind bewegte Bilder (also Videos) die Treiber dieses Mediums.",
      "Für unsere Kunden empfehlen wir für Instagram Reels (kurze Videos) vor allem im Format des Digital Storytelling, so transportieren wir Inhalte kurz und spannend. Auf diese Weise nutzen wir die dynamische, erweiterte Visitenkarte zur Steigerung der Bekanntheit, Vergrößerung der Reichweite, dem Finden neuer MitarbeiterInnen oder der Förderung der Verkäufe (online und im Laden).",
      "Nach der Definition der Zielgruppe führen wir eine Wettbewerbsanalyse durch, um zu ermitteln, welche Maßnahmen in der jeweiligen Branche gerade genutzt werden. Mit diesen Informationen planen wir, welche Inhalte, in welcher Frequenz und mit welchem Ziel wir veröffentlichen wollen. Diese Inhalte sind natürlich sowohl für Computer als auch für Tablets und Handys optimiert. Daraus erstellen wir den Redaktionsplan, der in einem Kalender aufzeigt, welche Aktivität wir wann planen. Dann gehen wir damit live und werten die Ergebnisse ständig aus, um eventuell Anpassungen an der Strategie vorzunehmen.",
    ],
    extra: {
      title: "Wir legen Wert auf Digital Storytelling",
      paras: [
        "Geschichten, die in Bildern erzählt werden, bleiben besser im Gedächtnis, sind leicht wieder abrufbar und fesseln die Aufmerksamkeit. Soziale Medien leben davon, dass die NutzerInnen durch qualitativ hochwertige Bilder und Videos unterhalten werden. Das ist der Grund, warum wir uns dem „digital storytelling“ verschrieben haben. Wir stellen Menschen vor, die etwas zu sagen haben und verbinden so den sozialen Aspekt mit der Expertise. Letztlich nimmt man nicht die Leistung eines Unternehmens in Anspruch, sondern immer die von Menschen.",
      ],
    },
    heroImg: "/assets/photo/DSC09237Art.jpg",
    shots: [
      "/assets/work/social-7.webp",
      "/assets/work/social-9.webp",
      "/assets/work/irmi-thumb.webp",
      "/assets/work/spaetzuender-thumb.webp",
    ],
  },
  facebook: {
    name: "Facebook",
    navLabel: "Facebook Marketing",
    title: "Facebook Marketing",
    lead: "Solide Content-Strategie und passgenaues Community Management - Post für Post aufgebaut.",
    paras: [
      "Unsere Veröffentlichungen auf Facebook basieren immer auf einer soliden Content-Strategie und einem passgenauen Community Management. Zielgruppen und zu erreichende Ziele müssen exakt definiert werden. Sobald die Bedürfnisse und Wünsche der potentiellen Kunden klar sind, erarbeiten wir gemeinsam mit Dir die strategische Vorgehensweise. Eine fundierte Wettbewerbsanalyse sowie ein Audit über bisherige Aktionen und zukünftige Aktivitäten bilden dann die Basis um loslegen zu können. Auch auf Facebook sind derzeit Inhalte in Form von digitalem Storytelling sehr erfolgreich.",
      "All das fließt in einen Redaktionsplan ein. So bauen wir Stück für Stück Deinen Account auf und sichern so das Unterhaltungsmoment für die Zielgruppe. Einzelne Posts können durch gezielte Werbemaßnahmen unterstützt und gepusht werden.",
    ],
    extra: null,
    heroImg: "/assets/photo/DSC04715Art.jpg",
    shots: [
      "/assets/work/social-8.webp",
      "/assets/work/social-11.webp",
      "/assets/work/social-13.webp",
      "/assets/work/sitzmacher-thumb.webp",
    ],
  },
  linkedin: {
    name: "LinkedIn",
    navLabel: "LinkedIn Marketing",
    title: "LinkedIn Marketing",
    lead: "B2B-Sichtbarkeit mit klar definierten Zielen, Zielgruppen und einem belastbaren Redaktionsplan.",
    paras: [
      "Unsere Veröffentlichungen auf LinkedIn fangen ebenfalls mit einer soliden Content-Strategie und einem definierten Community Management an. Sowohl die Ziele als auch die Zielgruppen müssen exakt definiert sein. Mit einer Beschreibung der Bedürfnisse und Wünsche der potentiellen Kunden erarbeiten wir gemeinsam mit Dir die strategische Vorgehensweise. Bevor wir dann anfangen, folgt die fundierte Wettbewerbsanalyse sowie ein Audit über bisherige Aktionen und zukünftige Aktivitäten. Wie auch bei z.B. Facebook sind bei LinkedIn Inhalte in Form von digitalem Storytelling sehr erfolgreich.",
      "All das fließt in den Redaktionsplan ein. Auch auf LinkedIn können wir gezielte Marketing-Maßnahmen platzieren, um Content zu pushen.",
    ],
    extra: null,
    heroImg: "/assets/photo/DSC04704Art.jpg",
    shots: [
      "/assets/work/linkedin-ecoblue.webp",
      "/assets/work/linkedin-hoerbrand.webp",
      "/assets/work/social-14.webp",
      "/assets/work/social-15.webp",
    ],
  },
  tiktok: {
    name: "TikTok",
    navLabel: "TikTok Marketing",
    title: "TikTok Marketing",
    lead: "Kreativität, Humor und Qualität - Authentizität schlägt Perfektion.",
    paras: [
      "TikTok hat sich schon lange etabliert und ist nicht mehr das Medium nur für Jugendliche. Auch Unternehmen haben viele Möglichkeiten sich perfekt zu positionieren und Aufmerksamkeit zu bekommen.",
      "Auf dieser Plattform ist es möglich, durch geringen Aufwand die digitale Visitenkarte dynamisch zu gestalten und das Branding aufzubauen.",
      "Um TikTok zu effektiv zu nutzen, erstellen wir mit Kreativität, Humor und Qualität zielgruppengerechte Inhalte. Es geht nicht um Perfektion, sondern um Authentizität und Qualität. So erreichen wir genau Deine Zielgruppe und überzeugen durch sympathische Darstellung von Expertise und Kompetenz. Wir liefern Ideen, Skripte und erstellen den Inhalt mit unserem Team.",
    ],
    extra: null,
    heroImg: "/assets/photo/DSC09246Art.jpg",
    shots: [
      "/assets/work/social-10-1.webp",
      "/assets/work/social-7.webp",
      "/assets/work/spaetzuender-thumb.webp",
      "/assets/work/irmi-thumb.webp",
    ],
  },
};

export const PLATFORM_TEASER: Record<PlatformKey, string> = {
  instagram: "Bilder, Reels und Digital Storytelling für Glaubwürdigkeit und Kundenbindung.",
  facebook: "Content-Strategie und Community Management mit gezielten Werbemaßnahmen.",
  linkedin: "Fundierte B2B-Strategie mit Wettbewerbsanalyse und Redaktionsplan.",
  tiktok: "Kreativ, humorvoll, authentisch - dynamische Markenbildung mit Reichweite.",
};

export const VALUES = [
  {
    title: "Kundenorientiert",
    text: "Die Wünsche unserer Kunden treiben uns an. Deshalb stehst Du und Dein Traum bei uns im Fokus.",
  },
  {
    title: "Regionale Präsenz",
    text: "Unsere Kunden kommen aus der Gegend. Das gibt uns die Möglichkeit uns individuell um sie zu kümmern ohne Abstriche machen zu müssen.",
  },
  { title: "Flexibel", text: "Wir sind flexibel und passen uns Deinen Wünschen an." },
  {
    title: "Kernkompetenz im Haus",
    text: "Bei uns läuft alles in-house um lange Arbeitswege zu vermeiden.",
  },
];

export const HISTORY = [
  "Angefangen haben wir 2019 mit Social Media Marketing für ein bekanntes Immobilienbüro im Münchner Süden. Dort haben wir vom Marketing über Social Media Management alles Leistungen erbracht, die für einen neuen, erfolgreichen Auftritt in Social Media nötig warten. Aufgrund dieser sehr positiven Erfahrung haben wir unsere Leistung auch für andere Kunden in anderen Branchen ausgeweitet.",
  "Im Sommer 2020 haben wir uns dann entschlossen, daraus unseren Beruf zu machen und haben unsere eigene Firma gegründet: Team19 Media UG - Social Media Marketing Agentur. Mittlerweile haben wir Kunden verschiedener Größe innerhalb und außerhalb Deutschlands.",
];

export const TEAM_INTRO =
  "Team19 Media wird von Frederic und Andreas Fleißner geführt. Frederic ist der Spezialist für Social Media, Online Marketing und Online Shops - er hat den direkten persönlichen Kontakt zu unseren Kunden und kreiert Posts, Ads und, wenn nötig, gemeinsam mit den Kunden auch Content in Form von Fotos oder Videos. Andreas macht bei uns das Backoffice und kümmert sich neben der Administration, den Steuern und Rechnungen auch um unsere internen Prozesse und schreibt die Texte.";

export const MEMBERS = [
  {
    name: "Frederic Fleißner",
    role: "Geschäftsführer und Gründer",
    photo: "/assets/team/frederic.webp",
    icon: null as string | null,
    bio: "Spezialist für Social Media, Online Marketing und Online Shops. Direkter Kontakt zu unseren Kunden, kreiert Posts, Ads und Content.",
  },
  {
    name: "Andreas Fleißner",
    role: "Geschäftsführer und Gründer",
    photo: "/assets/team/andreas.webp",
    icon: null,
    bio: "Backoffice, Administration, Steuern und Rechnungen. Kümmert sich um unsere internen Prozesse und schreibt die Texte.",
  },
];

export const TESTIMONIALS = [
  {
    paras: [
      "An dieser Stelle ein „Dankeschön“ an vor allem dich, Frederic für die gute Zusammenarbeit.",
      "Der Umgang und die Kommunikation empfinde ich (Verena) als professionell, wertschätzend unkompliziert und somit als sehr angenehm und zielführend.",
      "Vor allem mit der Werbung schätze ich eure Initiative Neues auszuprobieren.",
    ],
    name: "Verena von der Gönna",
    meta: "Marketing & Öffentlichkeitsarbeit, Eurokolleg Fachoberschule München",
  },
  {
    paras: [
      "Die Jungs von Team19 haben unseren Social Media Auftritt aufgebaut und gepflegt. Die Zusammenarbeit macht immer Spaß und über die Jahre ist ein sehr vertrauensvolles Verhältnis gewachsen.",
    ],
    name: "Gundula Guenaoui",
    meta: "Geschäftsführerin, 1 Grund mehr GmbH",
  },
  {
    paras: [
      "Ich kann Team19 Media nur weiterempfehlen. Von Anfang an ging es nur um mich als Mensch, mein Unternehmen und mein unternehmerisches Vorhaben. Als erste Schritte wurde die Bekanntheit und Sichtbarkeit innerhalb kürzester Zeit messbar gesteigert. Ich freue mich auf alle unseren weiteren zukünftigen gemeinsamen Projekte für Die Wunschschmiede. Danke an Team19 Media für die tolle rundum Betreuung und eure Unterstützung!",
    ],
    name: "Andreas Schmied",
    meta: "Inhaber, Die Wunschschmiede München",
  },
];

export const CLIENTS = [
  { name: "Fräulein Irmi", img: "/assets/clients/irmi.webp" },
  { name: "Helm and More München", img: "/assets/clients/helm-and-more.webp" },
  { name: "Spätzünder", img: "/assets/clients/spaetzuender.webp" },
  { name: "Dr. Schütz", img: "/assets/clients/dr-schuetz.webp" },
  { name: "Hörbrand", img: "/assets/clients/hoerbrand.webp" },
  { name: "1 Grund mehr", img: "/assets/clients/1grundmehr.webp" },
  { name: "Casa Idea", img: "/assets/clients/casa-idea.webp" },
  { name: "EcoBlue", img: "/assets/clients/ecoblue.webp" },
  { name: "David Jacques", img: "/assets/clients/david-jacques.webp" },
  { name: "Cocktale", img: "/assets/clients/cocktale.webp" },
  { name: "BOCO Bottled Cocktails", img: "/assets/clients/boco.webp" },
  { name: "Sitzmacher", img: "/assets/clients/sitzmacher.webp" },
  { name: "Autosalon Isartal", img: "/assets/clients/autosalon-isartal.webp" },
  { name: "Honda Moto Star München", img: "/assets/clients/honda-motostar.webp" },
  { name: "ABI", img: "/assets/clients/abi.jpg" },
  { name: "Sedlmair Optik", img: "/assets/clients/logo-square.webp" },
];

export const WORK = [
  {
    cat: "webdesign",
    title: "Resubae",
    desc: "Eine umfangreiche Webseite für eine Karriereberatung mit Sitz in Bangkok, Thailand",
    img: "/assets/work/resubae.webp",
  },
  {
    cat: "webdesign",
    title: "ERS - Elektrotechnik GmbH",
    desc: "Eine Webseite für eine Elektrotechnik Firma mit Sitz in Garching bei München",
    img: "/assets/work/ers.webp",
  },
  {
    cat: "webdesign",
    title: "Radl Bock",
    desc: "Eine Webseite für einen Fahrradladen in Grünwald",
    img: "/assets/work/radlbock.webp",
  },
  {
    cat: "webdesign",
    title: "Schreinerei Armin Schmalisch",
    desc: "Webauftritt und Mockups für eine Schreinerei",
    img: "/assets/work/schmalisch-mockups.webp",
  },
  {
    cat: "social",
    title: "Fräulein Irmi",
    desc: "Social Media Auftritt und Content Creation",
    img: "/assets/work/irmi-thumb.webp",
  },
  {
    cat: "social",
    title: "Spätzünder",
    desc: "Content Creation und Redaktionsplanung",
    img: "/assets/work/spaetzuender-thumb.webp",
  },
  {
    cat: "social",
    title: "Sitzmacher",
    desc: "Social Media Betreuung und Werbeanzeigen",
    img: "/assets/work/sitzmacher-thumb.webp",
  },
  {
    cat: "social",
    title: "EcoBlue",
    desc: "LinkedIn Auftritt und B2B Content",
    img: "/assets/work/linkedin-ecoblue.webp",
  },
  {
    cat: "social",
    title: "Hörbrand",
    desc: "LinkedIn Auftritt und Employer Branding",
    img: "/assets/work/linkedin-hoerbrand.webp",
  },
  {
    cat: "social",
    title: "Instagram Feed Design",
    desc: "Wiedererkennbare Bildsprache für den Kanal",
    img: "/assets/work/social-7.webp",
  },
  {
    cat: "social",
    title: "Reels & Kurzvideos",
    desc: "Digital Storytelling im Hochformat",
    img: "/assets/work/social-9.webp",
  },
  {
    cat: "social",
    title: "Kampagnen-Assets",
    desc: "Anzeigenmotive für Instagram und Facebook",
    img: "/assets/work/social-13.webp",
  },
  {
    cat: "foto",
    title: "Produktfotografie",
    desc: "Bildwelt für Social Media und Webseite",
    img: "/assets/photo/DSC09233Art.jpg",
  },
  {
    cat: "foto",
    title: "Editorial",
    desc: "Aufnahmen vor Ort beim Kunden",
    img: "/assets/photo/DSC09289Art.jpg",
  },
  {
    cat: "foto",
    title: "Detailaufnahmen",
    desc: "Nahaufnahmen für Feed und Anzeigen",
    img: "/assets/photo/DSC04671Art.jpg",
  },
  {
    cat: "foto",
    title: "Location Shooting",
    desc: "Fotos in einer passenden Lokation",
    img: "/assets/photo/DSC09316Art.jpg",
  },
  {
    cat: "foto",
    title: "Stimmungsbilder",
    desc: "Authentische Motive statt Stock-Bilder",
    img: "/assets/photo/DSC03946Art.jpg",
  },
  {
    cat: "foto",
    title: "Reportage",
    desc: "Begleitung von Terminen und Events",
    img: "/assets/photo/DSC04909Art.jpg",
  },
  {
    cat: "foto",
    title: "Interieur",
    desc: "Räume und Werkstätten im richtigen Licht",
    img: "/assets/photo/DSC09347Art.jpg",
  },
  {
    cat: "foto",
    title: "Portrait",
    desc: "Menschen hinter dem Unternehmen",
    img: "/assets/photo/DSC09237Art.jpg",
  },
];

export const HERO_PHOTOS = [
  "/assets/photo/DSC09233Art.jpg",
  "/assets/photo/DSC04671Art.jpg",
  "/assets/photo/DSC09289Art.jpg",
  "/assets/photo/DSC03730Art.jpg",
  "/assets/photo/DSC09316Art.jpg",
  "/assets/photo/DSC04909Art.jpg",
  "/assets/photo/DSC09347Art.jpg",
  "/assets/photo/DSC03946Art.jpg",
  "/assets/photo/DSC04704Art.jpg",
  "/assets/photo/DSC09246Art.jpg",
];

export const WEBDESIGN_STEPS = [
  {
    k: "Schritt 01",
    title: "Webdesign Brief",
    text: "Ein individuell zugeschnittener Fragebogen um die wichtigsten Dinge vorab zu klären. Dazu gehören Fragen wie:",
    list: [
      "Welche Ziele verfolgst Du mit deiner Webseite?",
      "Was sollen Besucher auf Deiner Webseite sehen?",
      "Welche Funktionen sollen auf Deiner Webseite enthalten sein?",
    ],
  },
  {
    k: "Schritt 02",
    title: "Layout & Konzept",
    text: "In diesem Schritt wird der Entwurf vorgestellt. Wir gehen dabei durch spezifische Handy und Desktop Designs, sodass Deine Webseite auf allen Geräten gut aussieht. Hier haben wir außerdem Zeit für etwaige Änderungen und Revisionen. Wenn Du zufrieden mit dem Entwurf bist, wird dieser abgenommen und es geht in die letzte Phase.",
    list: [] as string[],
  },
  {
    k: "Schritt 03",
    title: "Entwicklung",
    text: "In der letzten Phase wird das CMS und die Datenbank aufgesetzt und Deine Webseite gebaut. Desweiteren werden alle nötigen Plugins installiert, Dein Impressum und die Datenschutzerklärung geschrieben sowie eine Cookie Abfrage eingerichtet.",
    list: [] as string[],
  },
];

export const WEBDESIGN_FEATURES = [
  {
    icon: "Search",
    title: "SEO Integration",
    text: "Egal ob große oder kleine Webseite. Bei uns bekommst Du automatisch eine Suchmaschinenoptimierung ohne Aufpreis dazu. Wir wollen, dass Du direkt beim Start deiner Webseite auf Suchmaschinen gefunden wirst.",
  },
  {
    icon: "Smartphone",
    title: "Responsive Design",
    text: "Unsere Webseiten sind selbstverständlich auch für Handys und Tablets optimiert! Wir wissen, wie viele Leute heutzutage ein Handy benutzen, also ist dies ein unverzichtbarer Schritt um Deine Webseite auf allen Geräten herausstechen zu lassen.",
  },
  {
    icon: "BarChart3",
    title: "Google Analytics",
    text: "Google Analytics kommt vorinstalliert mit Deiner Webseite, damit Du einen Einblick in Deine Kunden- und Besucherzahlen bekommst und siehst, wie sich diese im Laufe der Zeit entwickeln. Dazu gehören selbstverständlich auch DSGVO konforme Cookie Hinweise.",
  },
  {
    icon: "Lock",
    title: "SSL Zertifikat",
    text: "SSL Zertifikate sind heutzutage unerlässlich. Wir wollen, dass Deine Webseite gegen Angriffe geschützt ist. Deshalb wird Deine Webseite von Haus aus sicher gemacht.",
  },
  {
    icon: "Mail",
    title: "Individuelle Email Adresse",
    text: "Hast Du Dich schonmal gefragt, wieso manche Firmen Ihren Namen nach dem @ in Ihrer Email Adresse haben? Genau! Sie alle besitzen eine Webseite und auch Du bekommst eine oder mehrere benutzerdefinierte Email Adressen mit Deiner Webseite dazu.",
  },
];

export const FORM_INTRO_SOCIAL =
  "Bevor Du einen Termin mit uns buchst, würden wir gerne mehr über Dich und Dein Unternehmen erfahren, um uns so gut wie möglich auf Deine Ansprüche vorzubereiten.";
export const FORM_INTRO_WEB =
  "Buche einfach einen Termin für ein kostenloses Erstgespräch. Damit wir uns bestens auf Dich vorbereiten können, bitten wir Dich den Fragebogen unten auszufüllen und anschließend einen Termin zu buchen.";
export const CONSENT_TEXT =
  "Ja, ich habe die Datenschutzerklärung zur Kenntnis genommen und bin damit einverstanden, dass die von mir angegebenen Daten elektronisch erhoben und gespeichert werden. Meine Daten werden dabei nur streng zweckgebunden zur Bearbeitung und Beantwortung meiner Anfrage benutzt.";
export const GOALS = [
  "Neukunden gewinnen?",
  "Qualifizierte Mitarbeiter finden?",
  "Reichweite der Accounts erhöhen?",
  "Anderes",
];
export const GOALS_WEB = [
  "Neukunden gewinnen?",
  "Qualifizierte Mitarbeiter finden?",
  "Reichweite Deines Unternehmens erweitern?",
  "Anderes",
];
export const CHANNELS = ["Facebook", "Instagram", "Tiktok", "Linkedin", "Youtube"];

export const IMPRESSUM = {
  responsible: "Verantwortlich für diese Seite ist Team19.media",
  rows: [
    {
      label: "Anschrift",
      value: "Team19 Media UG (haftungsbeschränkt)<br>An der Isar 9, 82049 Pullach i. Isartal.",
    },
    { label: "Web", value: '<a href="https://www.team19.media">www.team19.media</a>' },
    { label: "E-Mail", value: '<a href="mailto:info@team19.media">info@team19.media</a>' },
    { label: "Telefon", value: '<a href="tel:+498997313032">+49 (0)89 97313032</a>' },
    { label: "Registergericht", value: "Registergericht München HRB: 260446" },
    { label: "Umsatzsteuer-ID", value: "DE335811931" },
    {
      label: "Geschäftsführer",
      value: "Andreas Fleißner, Alexander Demharter, Frederic Fleißner",
    },
  ],
};

// --- Datenschutz (1:1 aus build/legal/datenschutz.txt) --------------------
export const DATENSCHUTZ_HTML = `
<p>Inhaltlich Verantwortlicher gemäß §10 Abs. 3 MDStV, §55 Abs. 2 RStV (ehemals §6 MDStV) und im Sinne des Presserechts: Andreas Fleißner, <a href="mailto:andreas.fleissner@team19.media">andreas.fleissner@team19.media</a></p>
<p>Dieser Internetauftritt richtet sich ausschließlich an Gewerbetreibende.</p>
<p>Nachfolgend geben wir Ihnen einen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
<p>Diese Datenschutzerklärung (Fassung vom 4. November 2020) erläutert gemäß der Vorgaben der Datenschutz-Grundverordnung (EU) 2016/679, welche Daten beim Besuch dieser Seite erhoben werden und wie sie verarbeitet werden.</p>
<h2>Datenschutz</h2>
<p>Wir als Betreiber dieser Webseite nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre alle Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
<p>Die Nutzung dieser Webseite ist möglich ohne dass persönliche Daten eingegeben werden müssen. Personenbezogene Daten werden auf dieser Webseite nur in dem Rahmen erhoben, wie es im technisch notwendigen Umfang vom Webseiten-Provider nötig ist. In keinem Fall werden die erhobenen Daten von uns verkauft oder aus anderen Gründen an Dritte weitergegeben. Nachfolgend ist erklärt, wie dieser Schutz sichergestellt ist welche Art von Daten zu welchem Zweck erhoben werden.</p>
<p>Beim Besuch von Webseiten werden Informationen vom Webseiten-Hoster (siehe Impressum) automatisch erfasst und in Dateien (Webserver-Logfiles) gespeichert, so auch auf dieser Webseite:</p>
<ul>
<li>Adresse (URL) der aufgerufenen Webseite</li>
<li>Browsertyp und Version</li>
<li>verwendetes Betriebssystem</li>
<li>Referrer URL (die zuvor besuchte Seite)</li>
<li>Hostname des zugreifenden Rechners (IP Adresse)</li>
<li>Uhrzeit der Serveranfrage</li>
</ul>
<p>In der Regel werden Webserver-Logfiles für zwei Wochen gespeichert und danach automatisch gelöscht. Diese Daten sind für uns nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen, die Daten werden zudem nach einer statistischen Auswertung gelöscht. Wir möchten aber ausdrücklich darauf hinweisen, dass eine Datenübertragung im Internet (wie z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Alle Daten vor dem Zugriff durch Dritte zu schützen ist nicht möglich.</p>
<p>Es kann nicht ausgeschlossen werden, dass diese Daten beim Vorliegen von rechtswidrigem Verhalten eingesehen werden.</p>
<p>Wir erfassen keine persönlichen Daten über unsere Website, wie zum Beispiel Name, E-MailAdresse, Adresse oder andere persönlichen Angaben.</p>
<p>Daten aus Formularen, persönliche Daten, die Sie eventuell zukünftig an uns mit Hilfe von Kontaktformularen übermitteln, dienen ausschließlich der Kontaktaufnahme zu Ihnen. Eine weitere Nutzung oder Speicherung erfolgen nicht. Alle Daten werden nach der Kontaktaufnahme gelöscht.</p>
<p>Wir werten die Besuche auf unserer Website hinsichtlich der Beleibtheit der Inhalte aus. Die Auswertung erfolgt anonym und es ist uns nicht möglich (und auch nicht gewollt) von Ihrem Verhalten auf dieser Website auf Ihre Person zu schließen.</p>
<h2>Ihre Rechte bezüglich Ihrer Daten</h2>
<p>Der Gesetzgeber räumt jedem das Recht ein, unentgeltlich Auskunft über Erfassung, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Darüber hinaus haben Sie das Recht, eine Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse info@team19.media an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu:</p>
<p>Der Bayerische Landesbeauftragte für den Datenschutz <a href="https://www.bfdi.bund.de/SharedDocs/Adressen/LfD/Bayern.html?nn=5217144" target="_blank" rel="noopener noreferrer">https://www.bfdi.bund.de/SharedDocs/Adressen/LfD/Bayern.html?nn=5217144</a></p>
<p>Bei Fragen und Anregungen bezüglich dieser Seiten wenden Sie sich bitte an: <a href="mailto:info@team19.media">info@team19.media</a> oder rufen unter 089 63858695 an.</p>
<p>Alle hier nicht ausdrücklich eingeräumten Rechte bleiben vorbehalten. Druckfehler und Irrtümer vorbehalten.</p>
<h2>Haftungshinweis</h2>
<p>Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</p>
<h2>Informationen zum Urheberrecht</h2>
<p>Der Inhalt dieser Webseiten ist urheberrechtlich geschützt und darf nicht ohne schriftliche Einwilligung übernommen, vervielfältigt und verbreitet werden.</p>
<p>Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte wird hiermit ausdrücklich widersprochen. Wir behalten uns ausdrücklich rechtliche Schritte etwa im Falle der unverlangten Zusendung von Werbeinformationen vor.</p>
`;

// --- Cookie-Richtlinie (1:1 aus build/legal_data.py) -----------------------
export const COOKIE_INTRO =
  "Diese Cookie-Richtlinie wurde zuletzt am Mai 8, 2023 aktualisiert und gilt für Bürger und Einwohner mit ständigem Wohnsitz im Europäischen Wirtschaftsraum und der Schweiz.";

export const COOKIE_HTML = `
<h2>1. Einführung</h2>
<p>Unsere Website, https://team19.media (im folgenden: „Die Website“) verwendet Cookies und ähnliche Technologien (der Einfachheit halber werden all diese unter „Cookies“ zusammengefasst). Cookies werden außerdem von uns beauftragten Drittparteien platziert. In dem unten stehendem Dokument informieren wir dich über die Verwendung von Cookies auf unserer Website.</p>
<h2>2. Was sind Cookies?</h2>
<p>Ein Cookie ist eine einfache kleine Datei, die gemeinsam mit den Seiten einer Internetadresse versendet und vom Webbrowser auf dem PC oder einem anderen Gerät gespeichert werden kann. Die darin gespeicherten Informationen können während folgender Besuche zu unseren oder den Servern relevanter Drittanbieter gesendet werden.</p>
<h2>3. Was sind Skripte?</h2>
<p>Ein Script ist ein Stück Programmcode, das benutzt wird, um unserer Website Funktionalität und Interaktivität zu ermöglichen. Dieser Code wird auf unseren Servern oder auf deinem Gerät ausgeführt.</p>
<h2>4. Was ist ein Web Beacon?</h2>
<p>Ein Web-Beacon (auch Pixel-Tag genannt), ist ein kleines unsichtbares Textfragment oder Bild auf einer Website, das benutzt wird, um den Verkehr auf der Website zu überwachen. Um dies zu ermöglichen werden diverse Daten von dir mittels Web-Beacons gespeichert.</p>
<h2>5. Cookies</h2>
<h3>5.1 Technische oder funktionelle Cookies</h3>
<p>Einige Cookies stellen sicher, dass bestimmte Teile der Website ordnungsgemäß funktionieren und deine Benutzereinstellungen weiterhin in Erinnerung bleiben. Durch das Setzen funktionaler Cookies erleichtern wir dir den Besuch unserer Website. Auf diese Weise musst du beim Besuch unserer Website nicht wiederholt dieselben Informationen eingeben, so bleiben Artikel beispielsweise in deinem Warenkorb, bis du bezahlst. Wir können diese Cookies ohne deine Einwilligung platzieren.</p>
<h3>5.2 Marketing- / Tracking-Cookies</h3>
<p>Marketing- / Tracking-Cookies sind Cookies oder eine andere Form der lokalen Speicherung, die zur Erstellung von Benutzerprofilen verwendet werden, um Werbung anzuzeigen oder den Benutzer auf dieser Website oder über mehrere Websites hinweg für ähnliche Marketingzwecke zu verfolgen.</p>
<h2>6. Platzierte Cookies</h2>
<h3>Google Maps <span style="font-weight:400;color:#6b7280">— Marketing/Tracking</span></h3>
<p><strong>Verwendung:</strong> Wir verwenden Google Maps für maps display.</p>
<p><strong>Weitergabe von Daten:</strong> Für weitere Informationen, bitte die Google Maps Datenschutzerklärung lesen.</p>
<ul><li><code>Google Maps API</code> — Fordere die Benutzer-IP-Adresse an</li></ul>
<h3>Calendly <span style="font-weight:400;color:#6b7280">— Funktional</span></h3>
<p><strong>Verwendung:</strong> Wir verwenden Calendly für content creation.</p>
<p><strong>Weitergabe von Daten:</strong> Für weitere Informationen, bitte die Calendly Datenschutzerklärung lesen.</p>
<ul><li><code>_calendly_session</code> — Ablaufdatum: Sitzung — Speicher die Benutzervorlieben</li></ul>
<h3>Sonstiges <span style="font-weight:400;color:#6b7280">— Gegenstand der Untersuchung</span></h3>
<p><strong>Weitergabe von Daten:</strong> Die Weitergabe von Daten wird noch untersucht.</p>
<ul>
<li><code>elementor</code></li><li><code>e_globals</code></li><li><code>e_kit-elements-defaults</code></li>
<li><code>wp-settings-1</code></li><li><code>wp-settings-time-1</code></li><li><code>wordpress_test_cookie</code></li>
<li><code>wp_lang</code></li><li><code>PHPSESSID</code></li>
<li><code>wordpress_logged_in_abf564adb542399458a39834f2fd466e</code></li>
<li><code>wpEmojiSettingsSupports</code></li>
<li><code>cmplz_policy_id</code> — Ablaufdatum: 365 Tage</li>
<li><code>cmplz_consented_services</code> — Ablaufdatum: 365 Tage</li>
<li><code>cmplz_marketing</code> — Ablaufdatum: 365 Tage</li>
<li><code>cmplz_statistics</code> — Ablaufdatum: 365 Tage</li>
<li><code>cmplz_preferences</code> — Ablaufdatum: 365 Tage</li>
<li><code>cmplz_functional</code> — Ablaufdatum: 365 Tage</li>
<li><code>cmplz_banner-status</code> — Ablaufdatum: 365 Tage</li>
<li><code>WP_PREFERENCES_USER_1</code></li>
<li><code>wordpress_logged_in_c3e8b551ad37680037db34d1e4d632f5</code></li>
<li><code>trust:cache:timestamp</code></li><li><code>loglevel</code></li>
<li><code>phantom.contentScript.providerInjectionOptions.v3</code></li>
<li><code>wp-settings-time-2</code></li>
</ul>
<h2>7. Einwilligung</h2>
<p>Wenn du unsere Website das erste Mal besuchst, zeigen wir dir ein Pop-Up mit einer Erklärung über Cookies. Sobald du auf „Einstellungen speichern“ klickst, gibst du uns deine Einwilligung alle von dir gewählten Kategorien von Cookies und Plugins wie in dieser Cookie-Erklärung beschrieben zu verwenden. Du kannst die Verwendung von Cookies über deinen Browser deaktivieren, aber bitte beachte, dass unsere Website dann unter Umständen nicht richtig funktioniert.</p>
<h2>8. Aktivierung/Deaktivierung und Löschen von Cookies</h2>
<p>Du kannst deinen Internetbrowser verwenden um automatisch oder manuell Cookies zu löschen. Du kannst außerdem spezifizieren ob spezielle Cookies nicht platziert werden sollen. Eine andere Möglichkeit ist es deinen Internetbrowser derart einzurichten, dass du jedes Mal benachrichtigt wirst, wenn ein Cookie platziert wird. Für weitere Information über diese Möglichkeiten beachte die Anweisungen in der Hilfesektion deines Browsers.</p>
<p>Bitte nimm zur Kenntnis, dass unsere Website möglicherweise nicht richtig funktioniert, wenn alle Cookies deaktiviert sind. Wenn du die Cookies in deinem Browser löscht, werden diese neu platziert, wenn du unsere Website erneut besuchst.</p>
<h2>9. Deine Rechte in Bezug auf personenbezogene Daten</h2>
<p>Du hast folgende Rechte in Bezug auf deine personenbezogenen Daten:</p>
<ul>
<li>Du hast das Recht zu erfahren, warum deine personenbezogenen Daten benötigt werden, was damit passiert und wie lange sie aufbewahrt werden.</li>
<li><strong>Auskunftsrecht:</strong> Du hast das Recht deine uns bekannten persönliche Daten einzusehen.</li>
<li><strong>Recht auf Berichtigung:</strong> Du hast das Recht wann immer du wünscht, deine personenbezogenen Daten zu ergänzen, zu korrigieren sowie gelöscht oder blockiert zu bekommen.</li>
<li>Wenn du uns deine Einwilligung zur Verarbeitung deiner Daten erteilst, hast du das Recht diese Einwilligung zu widerrufen und deine personenbezogenen Daten löschen zu lassen.</li>
<li><strong>Recht auf Datenübertragbarkeit:</strong> Du hast das Recht, alle deine personenbezogenen Daten von dem für die Verarbeitung Verantwortlichen anzufordern und sie vollständig an einen anderen für die Verarbeitung Verantwortlichen zu übermitteln.</li>
<li><strong>Widerspruchsrecht:</strong> Du kannst der Verarbeitung deiner Daten widersprechen. Wir entsprechen dem, es sei denn es gibt berechtigte Gründe für die Verarbeitung.</li>
</ul>
<p>Um diese Rechte auszuüben kontaktiere uns bitte. Bitte beziehe dich auf die Kontaktdaten am Ende dieser Cookie-Erklärung. Wenn du eine Beschwerde darüber hast, wie wir deine Daten behandeln, würden wir diese gerne hören, aber du hast auch das Recht diese an die Aufsichtsbehörde (Datenschutzbehörde) zu richten.</p>
<h2>10. Kontaktdaten</h2>
<p>Für Fragen und/oder Kommentare über unsere Cookie-Richtlinien und diese Aussage kontaktiere uns bitte mittels der folgenden Kontaktdaten:</p>
<dl>
<dt>Ansprechpartner</dt><dd>Andreas Fleissner</dd>
<dt>Adresse</dt><dd>An d. Isar 9, 82049 Pullach im Isartal, Deutschland</dd>
<dt>Website</dt><dd><a href="https://team19.media">https://team19.media</a></dd>
<dt>E-Mail</dt><dd><a href="mailto:info@team19.media">info@team19.media</a></dd>
<dt>Telefonnummer</dt><dd><a href="tel:+498963858695">089 63858695</a></dd>
</dl>
<p style="font-size:.875rem;color:#6b7280">Diese Cookie-Richtlinie wurde mit cookiedatabase.org am November 28, 2022 synchronisiert.</p>
`;
