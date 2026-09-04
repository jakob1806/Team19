# -*- coding: utf-8 -*-
"""
Alle Inhalte der Team19-Media-Website.

Sämtliche Texte, Namen, Kundenlogos und Kontaktdaten sind unverändert von
team19.media übernommen. Wer Inhalte pflegen will, ändert nur diese Datei
und ruft anschließend `python3 build.py` auf.
"""

# --- Unternehmen ---------------------------------------------------------
COMPANY = {
    "name": "Team19 Media",
    "legal": "Team19 Media UG (haftungsbeschränkt)",
    "tagline": "Deine persönliche Marketing Agentur",
    "claim": "Die Ziele unserer Kunden sind unsere Motivation!",
    "subline": "Social Media Marketing Agentur",
    "street": "An der Isar 9",
    "zip": "82049",
    "city": "Pullach i. Isartal",
    "email": "info@team19.media",
    "phone": "+49 (0)89 97313032",
    "phone_href": "+498997313032",
    "register": "Registergericht München HRB: 260446",
    "vat": "DE335811931",
    "directors": "Andreas Fleißner, Alexander Demharter, Frederic Fleißner",
    "founded": 2019,
    "copyright": "Copyright © 2022 Team19 Media UG",
}

SOCIAL = [
    ("Instagram", "https://www.instagram.com/team19.media/", "instagram"),
    ("Facebook", "https://www.facebook.com/Team19.media", "facebook"),
    ("LinkedIn", "https://www.linkedin.com/company/team19-media-ug-haftungsbeschr%C3%A4nkt/", "linkedin"),
    ("TikTok", "https://www.tiktok.com/@team19.media", "tiktok"),
]

HOURS = [
    ("Montag – Freitag", "08:00 – 18:00 Uhr"),
    ("Samstag", "Geschlossen"),
    ("Sonntag", "Geschlossen"),
]

# --- Navigation ----------------------------------------------------------
PLATFORM_NAV = [
    ("Instagram Marketing", "instagram.html", "instagram"),
    ("Facebook Marketing", "facebook.html", "facebook"),
    ("LinkedIn Marketing", "linkedin.html", "linkedin"),
    ("TikTok Marketing", "tiktok.html", "tiktok"),
]

NAV = [
    {"label": "Home", "href": "index.html", "key": "home"},
    {"label": "Social Media", "href": "instagram.html", "key": "social",
     "sub": PLATFORM_NAV},
    {"label": "Webdesign", "href": "webdesign.html", "key": "webdesign"},
    {"label": "Unser Team", "href": "team.html", "key": "team"},
    {"label": "Referenzen", "href": "referenzen.html", "key": "referenzen"},
    {"label": "Kontakt", "href": "kontakt.html", "key": "kontakt"},
]

# --- Home: Nutzenversprechen --------------------------------------------
BENEFITS = [
    {
        "icon": "users",
        "title": "Neue Kunden finden",
        "text": "Kurbele deine Verkäufe an – online oder im Laden. Wir erstellen "
                "professionellen Content, posten dein Angebot und schalten "
                "zielgenaue Anzeigen.",
    },
    {
        "icon": "megaphone",
        "title": "Bekanntheit steigern",
        "text": "Erreiche deine Zielgruppe passgenau und erhöhe deine Bekanntheit. "
                "Wir bauen deine digitale Visitenkarte auf den Sozialen Medien auf.",
    },
    {
        "icon": "team",
        "title": "Dein Team erweitern",
        "text": "Du willst neue MitarbeiterInnen finden, weißt aber nicht wie? Dann "
                "machen wir das für dich, genau da, wo sie zu finden sind – in den "
                "Sozialen Medien.",
    },
    {
        "icon": "sparkle",
        "title": "Image aufbauen/gestalten",
        "text": "Erzähle der Welt von deinem Business und stelle deine Leistungen "
                "und die Kompetenzen deines Teams vor.",
    },
]

# --- Home: Leistungen ----------------------------------------------------
SERVICES = [
    {
        "title": "Content Creation",
        "paras": [
            "In den Sozialen Medien zählen Authentizität und Qualität. Es kommt "
            "darauf an, dass Du zeigst, wer Du bist und was Dein Ziel ist. Dazu "
            "gehören auch echte Bilder, aussagekräftige Texte und interessante "
            "Videos. Was auf keinen Fall mehr geht sind Stock-Bilder.",
            "Wir haben viel Erfahrung, welche Medien wirken und womit die besten "
            "Effekte erzielt werden. Zusammen sammeln wir Ideen für Content, "
            "schreiben Skripte für Videos und schreiben schlagkräftige Texte. In "
            "Deinem Büro oder in einer coolen Lokation machen wir dann die Fotos "
            "und Videos, die wir gemäß dem Redaktionsplan posten.",
        ],
    },
    {
        "title": "Werbekampagnen",
        "paras": [
            "Du willst einen ausgereiften Auftritt in den Sozialen Medien zum "
            "fairen Preis? Wir werben für dich auf den Plattformen deiner Wahl, um "
            "Kunden zu gewinnen oder Verkäufe zu erhöhen.",
            "Um deine Reichweite oder Bekanntheit zu pushen, erstellen wir zunächst "
            "den Content mit der perfekten Botschaft. Vom Entwurf bis zur Schaltung "
            "von Ads (z.B. auf LinkedIn, Facebook, Instagram oder TikTok) kümmern "
            "wir uns um alles. Falls nötig, erstellt unser Fotograf die richtigen "
            "Bilder, aber z.B. auch Logos oder Videos.",
        ],
    },
    {
        "title": "Content Management",
        "paras": [
            "Du willst die Pflege der Accounts in kompetente Hände geben? Wir "
            "beraten dich bezüglich deines online Auftritts und erstellen bei "
            "Bedarf auch Accounts oder verwalten die Kanäle. Durch regelmäßige "
            "Pflege der Accounts steigern wir deine Reichweite und Bekanntheit. "
            "Darauf aufbauend schalten wir targetierte Werbeanzeigen, die dein "
            "Produkt oder deine Dienstleistung optimal vermarkten.",
        ],
    },
    {
        "title": "Auswertungen",
        "paras": [
            "Du willst immer sehen können wie es läuft? Mit der anfänglichen "
            "Analyse schaffen wir einen guten Überblick über die Ausgangssituation. "
            "Durch kontinuierliche Auswertung der Insights erkennen wir genau, "
            "welche Zielgruppe passend ist und welche Kampagne den besten Effekt "
            "erzielt. Das ist für uns die Grundlage bei Bedarf die richtigen "
            "Stellschrauben zu justieren.",
        ],
    },
]

# --- Plattform-Seiten ----------------------------------------------------
PLATFORMS = {
    "instagram": {
        "name": "Instagram",
        "nav_label": "Instagram Marketing",
        "title": "Instagram Marketing",
        "lead": "Glaubwürdigkeit und Kundenbindung – mit Bildern und Videos, die "
                "im Gedächtnis bleiben.",
        "paras": [
            "Bei Social Media Marketing auf Instagram geht es um Glaubwürdigkeit "
            "und Kundenbindung, der Fokus liegt auf Bildern und Videos. Die "
            "Qualität der visuellen Inhalte und der Unterhaltungswert spielen eine "
            "nicht zu unterschätzende Rolle. Gleichzeitig ist die Wiedererkennung "
            "wichtig. Mittlerweile sind bewegte Bilder (also Videos) die Treiber "
            "dieses Mediums.",
            "Für unsere Kunden empfehlen wir für Instagram Reels (kurze Videos) vor "
            "allem im Format des Digital Storytelling, so transportieren wir "
            "Inhalte kurz und spannend. Auf diese Weise nutzen wir die dynamische, "
            "erweiterte Visitenkarte zur Steigerung der Bekanntheit, Vergrößerung "
            "der Reichweite, dem Finden neuer MitarbeiterInnen oder der Förderung "
            "der Verkäufe (online und im Laden).",
            "Nach der Definition der Zielgruppe führen wir eine Wettbewerbsanalyse "
            "durch, um zu ermitteln, welche Maßnahmen in der jeweiligen Branche "
            "gerade genutzt werden. Mit diesen Informationen planen wir, welche "
            "Inhalte, in welcher Frequenz und mit welchem Ziel wir veröffentlichen "
            "wollen. Diese Inhalte sind natürlich sowohl für Computer als auch für "
            "Tablets und Handys optimiert. Daraus erstellen wir den Redaktionsplan, "
            "der in einem Kalender aufzeigt, welche Aktivität wir wann planen. Dann "
            "gehen wir damit live und werten die Ergebnisse ständig aus, um "
            "eventuell Anpassungen an der Strategie vorzunehmen.",
        ],
        "extra": {
            "title": "Wir legen Wert auf Digital Storytelling",
            "paras": [
                "Geschichten, die in Bildern erzählt werden, bleiben besser im "
                "Gedächtnis, sind leicht wieder abrufbar und fesseln die "
                "Aufmerksamkeit. Soziale Medien leben davon, dass die NutzerInnen "
                "durch qualitativ hochwertige Bilder und Videos unterhalten werden. "
                "Das ist der Grund, warum wir uns dem „digital storytelling“ "
                "verschrieben haben. Wir stellen Menschen vor, die etwas zu sagen "
                "haben und verbinden so den sozialen Aspekt mit der Expertise. "
                "Letztlich nimmt man nicht die Leistung eines Unternehmens in "
                "Anspruch, sondern immer die von Menschen.",
            ],
        },
        "hero_img": "photo/DSC09237Art.jpg",
        "shots": ["work/social-7.webp", "work/social-9.webp", "work/irmi-thumb.webp",
                  "work/spaetzuender-thumb.webp"],
    },
    "facebook": {
        "name": "Facebook",
        "nav_label": "Facebook Marketing",
        "title": "Facebook Marketing",
        "lead": "Solide Content-Strategie und passgenaues Community Management – "
                "Post für Post aufgebaut.",
        "paras": [
            "Unsere Veröffentlichungen auf Facebook basieren immer auf einer soliden "
            "Content-Strategie und einem passgenauen Community Management. "
            "Zielgruppen und zu erreichende Ziele müssen exakt definiert werden. "
            "Sobald die Bedürfnisse und Wünsche der potentiellen Kunden klar sind, "
            "erarbeiten wir gemeinsam mit Dir die strategische Vorgehensweise. Eine "
            "fundierte Wettbewerbsanalyse sowie ein Audit über bisherige Aktionen "
            "und zukünftige Aktivitäten bilden dann die Basis um loslegen zu können. "
            "Auch auf Facebook sind derzeit Inhalte in Form von digitalem "
            "Storytelling sehr erfolgreich.",
            "All das fließt in einen Redaktionsplan ein. So bauen wir Stück für "
            "Stück Deinen Account auf und sichern so das Unterhaltungsmoment für die "
            "Zielgruppe. Einzelne Posts können durch gezielte Werbemaßnahmen "
            "unterstützt und gepusht werden.",
        ],
        "extra": None,
        "hero_img": "photo/DSC04715Art.jpg",
        "shots": ["work/social-8.webp", "work/social-11.webp", "work/social-13.webp",
                  "work/sitzmacher-thumb.webp"],
    },
    "linkedin": {
        "name": "LinkedIn",
        "nav_label": "LinkedIn Marketing",
        "title": "LinkedIn Marketing",
        "lead": "B2B-Sichtbarkeit mit klar definierten Zielen, Zielgruppen und "
                "einem belastbaren Redaktionsplan.",
        "paras": [
            "Unsere Veröffentlichungen auf LinkedIn fangen ebenfalls mit einer "
            "soliden Content-Strategie und einem definierten Community Management "
            "an. Sowohl die Ziele als auch die Zielgruppen müssen exakt definiert "
            "sein. Mit einer Beschreibung der Bedürfnisse und Wünsche der "
            "potentiellen Kunden erarbeiten wir gemeinsam mit Dir die strategische "
            "Vorgehensweise. Bevor wir dann anfangen, folgt die fundierte "
            "Wettbewerbsanalyse sowie ein Audit über bisherige Aktionen und "
            "zukünftige Aktivitäten. Wie auch bei z.B. Facebook sind bei LinkedIn "
            "Inhalte in Form von digitalem Storytelling sehr erfolgreich.",
            "All das fließt in den Redaktionsplan ein. Auch auf LinkedIn können wir "
            "gezielte Marketing-Maßnahmen platzieren, um Content zu pushen.",
        ],
        "extra": None,
        "hero_img": "photo/DSC04704Art.jpg",
        "shots": ["work/linkedin-ecoblue.webp", "work/linkedin-hoerbrand.webp",
                  "work/social-14.webp", "work/social-15.webp"],
    },
    "tiktok": {
        "name": "TikTok",
        "nav_label": "TikTok Marketing",
        "title": "TikTok Marketing",
        "lead": "Kreativität, Humor und Qualität – Authentizität schlägt "
                "Perfektion.",
        "paras": [
            "TikTok hat sich schon lange etabliert und ist nicht mehr das Medium nur "
            "für Jugendliche. Auch Unternehmen haben viele Möglichkeiten sich "
            "perfekt zu positionieren und Aufmerksamkeit zu bekommen.",
            "Auf dieser Plattform ist es möglich, durch geringen Aufwand die "
            "digitale Visitenkarte dynamisch zu gestalten und das Branding "
            "aufzubauen.",
            "Um TikTok zu effektiv zu nutzen, erstellen wir mit Kreativität, Humor "
            "und Qualität zielgruppengerechte Inhalte. Es geht nicht um Perfektion, "
            "sondern um Authentizität und Qualität. So erreichen wir genau Deine "
            "Zielgruppe und überzeugen durch sympathische Darstellung von Expertise "
            "und Kompetenz. Wir liefern Ideen, Skripte und erstellen den Inhalt mit "
            "unserem Team.",
        ],
        "extra": None,
        "hero_img": "photo/DSC09246Art.jpg",
        "shots": ["work/social-10-1.webp", "work/social-7.webp",
                  "work/spaetzuender-thumb.webp", "work/irmi-thumb.webp"],
    },
}

PLATFORM_TEASER = {
    "instagram": "Bilder, Reels und Digital Storytelling für Glaubwürdigkeit und Kundenbindung.",
    "facebook": "Content-Strategie und Community Management mit gezielten Werbemaßnahmen.",
    "linkedin": "Fundierte B2B-Strategie mit Wettbewerbsanalyse und Redaktionsplan.",
    "tiktok": "Kreativ, humorvoll, authentisch – dynamische Markenbildung mit Reichweite.",
}

# --- Team ----------------------------------------------------------------
VALUES = [
    ("Kundenorientiert",
     "Die Wünsche unserer Kunden treiben uns an. Deshalb stehst Du und Dein Traum "
     "bei uns im Fokus."),
    ("Regionale Präsenz",
     "Unsere Kunden kommen aus der Gegend. Das gibt uns die Möglichkeit uns "
     "individuell um sie zu kümmern ohne Abstriche machen zu müssen."),
    ("Flexibel",
     "Wir sind flexibel und passen uns Deinen Wünschen an."),
    ("Kernkompetenz im Haus",
     "Bei uns läuft alles in-house um lange Arbeitswege zu vermeiden."),
]

HISTORY = [
    "Angefangen haben wir 2019 mit Social Media Marketing für ein bekanntes "
    "Immobilienbüro im Münchner Süden. Dort haben wir vom Marketing über Social "
    "Media Management alles Leistungen erbracht, die für einen neuen, erfolgreichen "
    "Auftritt in Social Media nötig warten. Aufgrund dieser sehr positiven "
    "Erfahrung haben wir unsere Leistung auch für andere Kunden in anderen Branchen "
    "ausgeweitet.",
    "Im Sommer 2020 haben wir uns dann entschlossen, daraus unseren Beruf zu machen "
    "und haben unsere eigene Firma gegründet: Team19 Media UG – Social Media "
    "Marketing Agentur. Mittlerweile haben wir Kunden verschiedener Größe innerhalb "
    "und außerhalb Deutschlands.",
]

TEAM_INTRO = (
    "Heute sind wir zu fünft im Team: Alex und Frederic sind die Spezialisten bei "
    "den Themen Social Media, Online Marketing und online Shops. Beide haben den "
    "direkten persönlichen Kontakt zu unseren Kunden und kreieren Posts, Ads und – "
    "wenn nötig – erstellen sie zusammen mit den Kunden auch Content in Form von "
    "Fotos oder Videos. Dabei unterstützt uns auch unser Fotograf. Andreas macht "
    "bei uns das Backoffice und kümmert sich neben der Administration, den Steuern "
    "und Rechnungen auch um unsere internen Prozesse und schreibt die Texte. "
    "Außerdem haben wir noch einen Schüler bei uns im Team, der für uns immer die "
    "neuesten Trends auf den Socials im Blick hat."
)

MEMBERS = [
    {
        "name": "Frederic Fleißner",
        "role": "Geschäftsführer und Gründer",
        "photo": "team/frederic.webp",
        "bio": "Spezialist für Social Media, Online Marketing und Online Shops. "
               "Direkter Kontakt zu unseren Kunden, kreiert Posts, Ads und Content.",
    },
    {
        "name": "Andreas Fleißner",
        "role": "Geschäftsführer und Gründer",
        "photo": "team/andreas.webp",
        "bio": "Backoffice, Administration, Steuern und Rechnungen. Kümmert sich um "
               "unsere internen Prozesse und schreibt die Texte.",
    },
    {
        "name": "Alex",
        "role": "Social Media & Online Shops",
        "photo": None,
        "icon": "person",
        "bio": "Spezialist für Social Media, Online Marketing und Online Shops. "
               "Direkter persönlicher Kontakt zu unseren Kunden.",
    },
    {
        "name": "Unser Fotograf",
        "role": "Foto & Video",
        "photo": None,
        "icon": "camera",
        "bio": "Unterstützt bei der Erstellung von Content in Form von Fotos und "
               "Videos.",
    },
    {
        "name": "Unser Schüler",
        "role": "Trends & Recherche",
        "photo": None,
        "icon": "trend",
        "bio": "Hat für uns immer die neuesten Trends auf den Socials im Blick.",
    },
]

TESTIMONIALS = [
    {
        "paras": [
            "An dieser Stelle ein „Dankeschön“ an vor allem dich, Frederic für die "
            "gute Zusammenarbeit.",
            "Der Umgang und die Kommunikation empfinde ich (Verena) als "
            "professionell, wertschätzend unkompliziert und somit als sehr angenehm "
            "und zielführend.",
            "Vor allem mit der Werbung schätze ich eure Initiative Neues "
            "auszuprobieren.",
        ],
        "name": "Verena von der Gönna",
        "meta": "Marketing & Öffentlichkeitsarbeit, Eurokolleg Fachoberschule München",
    },
    {
        "paras": [
            "Die Jungs von Team19 haben unseren Social Media Auftritt aufgebaut und "
            "gepflegt. Die Zusammenarbeit macht immer Spaß und über die Jahre ist "
            "ein sehr vertrauensvolles Verhältnis gewachsen.",
        ],
        "name": "Gundula Guenaoui",
        "meta": "Geschäftsführerin, 1 Grund mehr GmbH",
    },
    {
        "paras": [
            "Ich kann Team19 Media nur weiterempfehlen. Von Anfang an ging es nur um "
            "mich als Mensch, mein Unternehmen und mein unternehmerisches Vorhaben. "
            "Als erste Schritte wurde die Bekanntheit und Sichtbarkeit innerhalb "
            "kürzester Zeit messbar gesteigert. Ich freue mich auf alle unseren "
            "weiteren zukünftigen gemeinsamen Projekte für Die Wunschschmiede. Danke "
            "an Team19 Media für die tolle rundum Betreuung und eure Unterstützung!",
        ],
        "name": "Andreas Schmied",
        "meta": "Inhaber, Die Wunschschmiede München",
    },
]

# --- Kunden --------------------------------------------------------------
CLIENTS = [
    ("Fräulein Irmi", "clients/irmi.webp"),
    ("Helm and More München", "clients/helm-and-more.webp"),
    ("Spätzünder", "clients/spaetzuender.webp"),
    ("Dr. Schütz", "clients/dr-schuetz.webp"),
    ("Hörbrand", "clients/hoerbrand.webp"),
    ("1 Grund mehr", "clients/1grundmehr.webp"),
    ("Casa Idea", "clients/casa-idea.webp"),
    ("EcoBlue", "clients/ecoblue.webp"),
    ("David Jacques", "clients/david-jacques.webp"),
    ("Cocktale", "clients/cocktale.webp"),
    ("BOCO Bottled Cocktails", "clients/boco.webp"),
    ("Sitzmacher", "clients/sitzmacher.webp"),
    ("Autosalon Isartal", "clients/autosalon-isartal.webp"),
    ("Honda Moto Star München", "clients/honda-motostar.webp"),
    ("ABI", "clients/abi.jpg"),
    ("Sedlmair Optik", "clients/logo-square.webp"),
]

# --- Referenzen ----------------------------------------------------------
WORK = [
    # Webdesign
    {"cat": "webdesign", "title": "Resubae",
     "desc": "Eine umfangreiche Webseite für eine Karriereberatung mit Sitz in "
             "Bangkok, Thailand",
     "img": "work/resubae.webp", "shape": ""},
    {"cat": "webdesign", "title": "ERS – Elektrotechnik GmbH",
     "desc": "Eine Webseite für eine Elektrotechnik Firma mit Sitz in Garching bei "
             "München",
     "img": "work/ers.webp", "shape": ""},
    {"cat": "webdesign", "title": "Radl Bock",
     "desc": "Eine Webseite für einen Fahrradladen in Grünwald",
     "img": "work/radlbock.webp", "shape": ""},
    {"cat": "webdesign", "title": "Schreinerei Armin Schmalisch",
     "desc": "Webauftritt und Mockups für eine Schreinerei",
     "img": "work/schmalisch-mockups.webp", "shape": ""},
    # Social Media
    {"cat": "social", "title": "Fräulein Irmi",
     "desc": "Social Media Auftritt und Content Creation",
     "img": "work/irmi-thumb.webp", "shape": "work--portrait work--mockup"},
    {"cat": "social", "title": "Spätzünder",
     "desc": "Content Creation und Redaktionsplanung",
     "img": "work/spaetzuender-thumb.webp", "shape": "work--portrait work--mockup"},
    {"cat": "social", "title": "Sitzmacher",
     "desc": "Social Media Betreuung und Werbeanzeigen",
     "img": "work/sitzmacher-thumb.webp", "shape": "work--portrait work--mockup"},
    {"cat": "social", "title": "EcoBlue",
     "desc": "LinkedIn Auftritt und B2B Content",
     "img": "work/linkedin-ecoblue.webp", "shape": "work--portrait work--mockup"},
    {"cat": "social", "title": "Hörbrand",
     "desc": "LinkedIn Auftritt und Employer Branding",
     "img": "work/linkedin-hoerbrand.webp", "shape": "work--portrait work--mockup"},
    {"cat": "social", "title": "Instagram Feed Design",
     "desc": "Wiedererkennbare Bildsprache für den Kanal",
     "img": "work/social-7.webp", "shape": "work--portrait work--mockup"},
    {"cat": "social", "title": "Reels & Kurzvideos",
     "desc": "Digital Storytelling im Hochformat",
     "img": "work/social-9.webp", "shape": "work--portrait work--mockup"},
    {"cat": "social", "title": "Kampagnen-Assets",
     "desc": "Anzeigenmotive für Instagram und Facebook",
     "img": "work/social-13.webp", "shape": "work--portrait work--mockup"},
    # Fotografie
    {"cat": "foto", "title": "Produktfotografie",
     "desc": "Bildwelt für Social Media und Webseite",
     "img": "photo/DSC09233Art.jpg", "shape": "work--portrait"},
    {"cat": "foto", "title": "Editorial", "desc": "Aufnahmen vor Ort beim Kunden",
     "img": "photo/DSC09289Art.jpg", "shape": "work--portrait"},
    {"cat": "foto", "title": "Detailaufnahmen",
     "desc": "Nahaufnahmen für Feed und Anzeigen",
     "img": "photo/DSC04671Art.jpg", "shape": "work--portrait"},
    {"cat": "foto", "title": "Location Shooting",
     "desc": "Fotos in einer passenden Lokation",
     "img": "photo/DSC09316Art.jpg", "shape": "work--portrait"},
    {"cat": "foto", "title": "Stimmungsbilder",
     "desc": "Authentische Motive statt Stock-Bilder",
     "img": "photo/DSC03946Art.jpg", "shape": "work--portrait"},
    {"cat": "foto", "title": "Reportage",
     "desc": "Begleitung von Terminen und Events",
     "img": "photo/DSC04909Art.jpg", "shape": "work--portrait"},
    {"cat": "foto", "title": "Interieur",
     "desc": "Räume und Werkstätten im richtigen Licht",
     "img": "photo/DSC09347Art.jpg", "shape": "work--portrait"},
    {"cat": "foto", "title": "Portrait",
     "desc": "Menschen hinter dem Unternehmen",
     "img": "photo/DSC09237Art.jpg", "shape": "work--portrait"},
]

# Fotoband im Hero
HERO_PHOTOS = [
    "photo/DSC09233Art.jpg", "photo/DSC04671Art.jpg", "photo/DSC09289Art.jpg",
    "photo/DSC03730Art.jpg", "photo/DSC09316Art.jpg", "photo/DSC04909Art.jpg",
    "photo/DSC09347Art.jpg", "photo/DSC03946Art.jpg", "photo/DSC04704Art.jpg",
    "photo/DSC09246Art.jpg",
]

# --- Webdesign -----------------------------------------------------------
WEBDESIGN_STEPS = [
    {
        "k": "Schritt 01",
        "title": "Webdesign Brief",
        "text": "Ein individuell zugeschnittener Fragebogen um die wichtigsten Dinge "
                "vorab zu klären. Dazu gehören Fragen wie:",
        "list": [
            "Welche Ziele verfolgst Du mit deiner Webseite?",
            "Was sollen Besucher auf Deiner Webseite sehen?",
            "Welche Funktionen sollen auf Deiner Webseite enthalten sein?",
        ],
    },
    {
        "k": "Schritt 02",
        "title": "Layout & Konzept",
        "text": "In diesem Schritt wird der Entwurf vorgestellt. Wir gehen dabei "
                "durch spezifische Handy und Desktop Designs, sodass Deine Webseite "
                "auf allen Geräten gut aussieht. Hier haben wir außerdem Zeit für "
                "etwaige Änderungen und Revisionen. Wenn Du zufrieden mit dem "
                "Entwurf bist, wird dieser abgenommen und es geht in die letzte "
                "Phase.",
        "list": [],
    },
    {
        "k": "Schritt 03",
        "title": "Entwicklung",
        "text": "In der letzten Phase wird das CMS und die Datenbank aufgesetzt und "
                "Deine Webseite gebaut. Desweiteren werden alle nötigen Plugins "
                "installiert, Dein Impressum und die Datenschutzerklärung "
                "geschrieben sowie eine Cookie Abfrage eingerichtet.",
        "list": [],
    },
]

WEBDESIGN_FEATURES = [
    ("seo", "SEO Integration",
     "Egal ob große oder kleine Webseite. Bei uns bekommst Du automatisch eine "
     "Suchmaschinenoptimierung ohne Aufpreis dazu. Wir wollen, dass Du direkt beim "
     "Start deiner Webseite auf Suchmaschinen gefunden wirst."),
    ("responsive", "Responsive Design",
     "Unsere Webseiten sind selbstverständlich auch für Handys und Tablets "
     "optimiert! Wir wissen, wie viele Leute heutzutage ein Handy benutzen, also ist "
     "dies ein unverzichtbarer Schritt um Deine Webseite auf allen Geräten "
     "herausstechen zu lassen."),
    ("analytics", "Google Analytics",
     "Google Analytics kommt vorinstalliert mit Deiner Webseite, damit Du einen "
     "Einblick in Deine Kunden- und Besucherzahlen bekommst und siehst, wie sich "
     "diese im Laufe der Zeit entwickeln. Dazu gehören selbstverständlich auch DSGVO "
     "konforme Cookie Hinweise."),
    ("lock", "SSL Zertifikat",
     "SSL Zertifikate sind heutzutage unerlässlich. Wir wollen, dass Deine Webseite "
     "gegen Angriffe geschützt ist. Deshalb wird Deine Webseite von Haus aus sicher "
     "gemacht."),
    ("mail", "Individuelle Email Adresse",
     "Hast Du Dich schonmal gefragt, wieso manche Firmen Ihren Namen nach dem @ in "
     "Ihrer Email Adresse haben? Genau! Sie alle besitzen eine Webseite und auch Du "
     "bekommst eine oder mehrere benutzerdefinierte Email Adressen mit Deiner "
     "Webseite dazu."),
]

# --- Formulare -----------------------------------------------------------
FORM_INTRO_SOCIAL = (
    "Bevor Du einen Termin mit uns buchst, würden wir gerne mehr über Dich und Dein "
    "Unternehmen erfahren, um uns so gut wie möglich auf Deine Ansprüche "
    "vorzubereiten."
)
FORM_INTRO_WEB = (
    "Buche einfach einen Termin für ein kostenloses Erstgespräch. Damit wir uns "
    "bestens auf Dich vorbereiten können, bitten wir Dich den Fragebogen unten "
    "auszufüllen und anschließend einen Termin zu buchen."
)
CONSENT_TEXT = (
    "Ja, ich habe die Datenschutzerklärung zur Kenntnis genommen und bin damit "
    "einverstanden, dass die von mir angegebenen Daten elektronisch erhoben und "
    "gespeichert werden. Meine Daten werden dabei nur streng zweckgebunden zur "
    "Bearbeitung und Beantwortung meiner Anfrage benutzt."
)
GOALS = [
    "Neukunden gewinnen?",
    "Qualifizierte Mitarbeiter finden?",
    "Reichweite der Accounts erhöhen?",
    "Anderes",
]
GOALS_WEB = [
    "Neukunden gewinnen?",
    "Qualifizierte Mitarbeiter finden?",
    "Reichweite Deines Unternehmens erweitern?",
    "Anderes",
]
CHANNELS = ["Facebook", "Instagram", "Tiktok", "Linkedin", "Youtube"]

# --- Recht ---------------------------------------------------------------
IMPRESSUM = {
    "responsible": "Verantwortlich für diese Seite ist Team19.media",
    "rows": [
        ("Anschrift", "Team19 Media UG (haftungsbeschränkt)<br>An der Isar 9, "
                      "82049 Pullach i. Isartal."),
        ("Web", '<a href="https://www.team19.media">www.team19.media</a>'),
        ("E-Mail", '<a href="mailto:info@team19.media">info@team19.media</a>'),
        ("Telefon", '<a href="tel:+498997313032">+49 (0)89 97313032</a>'),
        ("Registergericht", "Registergericht München HRB: 260446"),
        ("Umsatzsteuer-ID", "DE335811931"),
        ("Geschäftsführer", "Andreas Fleißner, Alexander Demharter, "
                            "Frederic Fleißner"),
    ],
}
