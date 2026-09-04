# -*- coding: utf-8 -*-
"""
Rechtstexte.

Der Datenschutz-Text wird aus legal/datenschutz.txt eingelesen (1:1 vom
Original übernommen). Die Cookie-Richtlinie liegt hier strukturiert vor, weil
die Original-Tabelle per JavaScript aufgebaut wurde und als Rohtext
unbrauchbar war — Inhalte und Reihenfolge sind unverändert.
"""

import os
import re

HERE = os.path.dirname(os.path.abspath(__file__))

# --- Datenschutz: Text -> HTML ------------------------------------------
_HEADINGS = {
    "Datenschutz:",
    "Ihre Rechte bezüglich Ihrer Daten",
    "Haftungshinweis:",
    "Informationen zum Urheberrecht:",
}


def _linkify(text):
    text = re.sub(
        r'(?<![">])(https?://[^\s<]+?)(?=[.,;:)]?(?:\s|$))',
        r'<a href="\1" target="_blank" rel="noopener noreferrer">\1</a>',
        text,
    )
    return re.sub(
        r'(?<![\w.>"])([\w.+-]+@[\w-]+\.[\w.]+)',
        r'<a href="mailto:\1">\1</a>',
        text,
    )


def datenschutz_html():
    path = os.path.join(HERE, "legal", "datenschutz.txt")
    with open(path, encoding="utf-8") as fh:
        lines = [l.strip() for l in fh if l.strip()]

    # Die erste Zeile ist der Seitentitel — der steckt schon im <h1>.
    if lines and lines[0] == "Datenschutz":
        lines = lines[1:]

    out = []
    bullets = []

    def flush():
        if bullets:
            out.append("<ul>%s</ul>" % "".join("<li>%s</li>" % b for b in bullets))
            del bullets[:]

    for line in lines:
        if line.startswith("•"):
            bullets.append(_linkify(line.lstrip("• ").strip()))
            continue
        flush()
        if line in _HEADINGS:
            out.append("<h2>%s</h2>" % line.rstrip(":"))
        else:
            out.append("<p>%s</p>" % _linkify(line))
    flush()
    return "".join(out)


# --- Cookie-Richtlinie --------------------------------------------------
COOKIE_INTRO = (
    "Diese Cookie-Richtlinie wurde zuletzt am Mai 8, 2023 aktualisiert und gilt für "
    "Bürger und Einwohner mit ständigem Wohnsitz im Europäischen Wirtschaftsraum und "
    "der Schweiz."
)

COOKIE_SECTIONS = [
    ("1. Einführung", [
        "Unsere Website, https://team19.media (im folgenden: „Die Website“) verwendet "
        "Cookies und ähnliche Technologien (der Einfachheit halber werden all diese "
        "unter „Cookies“ zusammengefasst). Cookies werden außerdem von uns "
        "beauftragten Drittparteien platziert. In dem unten stehendem Dokument "
        "informieren wir dich über die Verwendung von Cookies auf unserer Website.",
    ]),
    ("2. Was sind Cookies?", [
        "Ein Cookie ist eine einfache kleine Datei, die gemeinsam mit den Seiten "
        "einer Internetadresse versendet und vom Webbrowser auf dem PC oder einem "
        "anderen Gerät gespeichert werden kann. Die darin gespeicherten Informationen "
        "können während folgender Besuche zu unseren oder den Servern relevanter "
        "Drittanbieter gesendet werden.",
    ]),
    ("3. Was sind Skripte?", [
        "Ein Script ist ein Stück Programmcode, das benutzt wird, um unserer Website "
        "Funktionalität und Interaktivität zu ermöglichen. Dieser Code wird auf "
        "unseren Servern oder auf deinem Gerät ausgeführt.",
    ]),
    ("4. Was ist ein Web Beacon?", [
        "Ein Web-Beacon (auch Pixel-Tag genannt), ist ein kleines unsichtbares "
        "Textfragment oder Bild auf einer Website, das benutzt wird, um den Verkehr "
        "auf der Website zu überwachen. Um dies zu ermöglichen werden diverse Daten "
        "von dir mittels Web-Beacons gespeichert.",
    ]),
    ("5. Cookies", []),
    ("5.1 Technische oder funktionelle Cookies", [
        "Einige Cookies stellen sicher, dass bestimmte Teile der Website "
        "ordnungsgemäß funktionieren und deine Benutzereinstellungen weiterhin in "
        "Erinnerung bleiben. Durch das Setzen funktionaler Cookies erleichtern wir "
        "dir den Besuch unserer Website. Auf diese Weise musst du beim Besuch unserer "
        "Website nicht wiederholt dieselben Informationen eingeben, so bleiben "
        "Artikel beispielsweise in deinem Warenkorb, bis du bezahlst. Wir können "
        "diese Cookies ohne deine Einwilligung platzieren.",
    ]),
    ("5.2 Marketing- / Tracking-Cookies", [
        "Marketing- / Tracking-Cookies sind Cookies oder eine andere Form der lokalen "
        "Speicherung, die zur Erstellung von Benutzerprofilen verwendet werden, um "
        "Werbung anzuzeigen oder den Benutzer auf dieser Website oder über mehrere "
        "Websites hinweg für ähnliche Marketingzwecke zu verfolgen.",
    ]),
]

# Abschnitt 6 — platzierte Cookies, gruppiert wie im Original
COOKIE_SERVICES = [
    {
        "name": "Google Maps",
        "category": "Marketing/Tracking",
        "usage": "Wir verwenden Google Maps für maps display.",
        "sharing": "Für weitere Informationen, bitte die Google Maps "
                   "Datenschutzerklärung lesen.",
        "cookies": [("Google Maps API", "nichts",
                     "Fordere die Benutzer-IP-Adresse an")],
    },
    {
        "name": "Calendly",
        "category": "Funktional",
        "usage": "Wir verwenden Calendly für content creation.",
        "sharing": "Für weitere Informationen, bitte die Calendly "
                   "Datenschutzerklärung lesen.",
        "cookies": [("_calendly_session", "Sitzung", "Speicher die Benutzervorlieben")],
    },
    {
        "name": "Sonstiges",
        "category": "Gegenstand der Untersuchung",
        "usage": None,
        "sharing": "Die Weitergabe von Daten wird noch untersucht.",
        "cookies": [
            ("elementor", "", ""),
            ("e_globals", "", ""),
            ("e_kit-elements-defaults", "", ""),
            ("wp-settings-1", "", ""),
            ("wp-settings-time-1", "", ""),
            ("wordpress_test_cookie", "", ""),
            ("wp_lang", "", ""),
            ("PHPSESSID", "", ""),
            ("wordpress_logged_in_abf564adb542399458a39834f2fd466e", "", ""),
            ("wpEmojiSettingsSupports", "", ""),
            ("cmplz_policy_id", "365 Tage", ""),
            ("cmplz_consented_services", "365 Tage", ""),
            ("cmplz_marketing", "365 Tage", ""),
            ("cmplz_statistics", "365 Tage", ""),
            ("cmplz_preferences", "365 Tage", ""),
            ("cmplz_functional", "365 Tage", ""),
            ("cmplz_banner-status", "365 Tage", ""),
            ("WP_PREFERENCES_USER_1", "", ""),
            ("wordpress_logged_in_c3e8b551ad37680037db34d1e4d632f5", "", ""),
            ("trust:cache:timestamp", "", ""),
            ("loglevel", "", ""),
            ("phantom.contentScript.providerInjectionOptions.v3", "", ""),
            ("wp-settings-time-2", "", ""),
        ],
    },
]

COOKIE_SECTIONS_TAIL = [
    ("7. Einwilligung", [
        "Wenn du unsere Website das erste Mal besuchst, zeigen wir dir ein Pop-Up mit "
        "einer Erklärung über Cookies. Sobald du auf „Einstellungen speichern“ "
        "klickst, gibst du uns deine Einwilligung alle von dir gewählten Kategorien "
        "von Cookies und Plugins wie in dieser Cookie-Erklärung beschrieben zu "
        "verwenden. Du kannst die Verwendung von Cookies über deinen Browser "
        "deaktivieren, aber bitte beachte, dass unsere Website dann unter Umständen "
        "nicht richtig funktioniert.",
    ]),
    ("8. Aktivierung/Deaktivierung und Löschen von Cookies", [
        "Du kannst deinen Internetbrowser verwenden um automatisch oder manuell "
        "Cookies zu löschen. Du kannst außerdem spezifizieren ob spezielle Cookies "
        "nicht platziert werden sollen. Eine andere Möglichkeit ist es deinen "
        "Internetbrowser derart einzurichten, dass du jedes Mal benachrichtigt wirst, "
        "wenn ein Cookie platziert wird. Für weitere Information über diese "
        "Möglichkeiten beachte die Anweisungen in der Hilfesektion deines Browsers.",
        "Bitte nimm zur Kenntnis, dass unsere Website möglicherweise nicht richtig "
        "funktioniert, wenn alle Cookies deaktiviert sind. Wenn du die Cookies in "
        "deinem Browser löscht, werden diese neu platziert, wenn du unsere Website "
        "erneut besuchst.",
    ]),
]

COOKIE_RIGHTS = [
    "Du hast das Recht zu erfahren, warum deine personenbezogenen Daten benötigt "
    "werden, was damit passiert und wie lange sie aufbewahrt werden.",
    "<strong>Auskunftsrecht:</strong> Du hast das Recht deine uns bekannten "
    "persönliche Daten einzusehen.",
    "<strong>Recht auf Berichtigung:</strong> Du hast das Recht wann immer du "
    "wünscht, deine personenbezogenen Daten zu ergänzen, zu korrigieren sowie "
    "gelöscht oder blockiert zu bekommen.",
    "Wenn du uns deine Einwilligung zur Verarbeitung deiner Daten erteilst, hast du "
    "das Recht diese Einwilligung zu widerrufen und deine personenbezogenen Daten "
    "löschen zu lassen.",
    "<strong>Recht auf Datenübertragbarkeit:</strong> Du hast das Recht, alle deine "
    "personenbezogenen Daten von dem für die Verarbeitung Verantwortlichen "
    "anzufordern und sie vollständig an einen anderen für die Verarbeitung "
    "Verantwortlichen zu übermitteln.",
    "<strong>Widerspruchsrecht:</strong> Du kannst der Verarbeitung deiner Daten "
    "widersprechen. Wir entsprechen dem, es sei denn es gibt berechtigte Gründe für "
    "die Verarbeitung.",
]


def cookie_html():
    parts = []

    def block(sections):
        for heading, paras in sections:
            parts.append("<h2>%s</h2>" % heading)
            for p in paras:
                parts.append("<p>%s</p>" % _linkify(p))

    block(COOKIE_SECTIONS)

    parts.append("<h2>6. Platzierte Cookies</h2>")
    for svc in COOKIE_SERVICES:
        parts.append("<h3>%s <span style=\"font-weight:400;color:var(--muted)\">"
                     "— %s</span></h3>" % (svc["name"], svc["category"]))
        if svc["usage"]:
            parts.append("<p><strong>Verwendung:</strong> %s</p>" % svc["usage"])
        parts.append("<p><strong>Weitergabe von Daten:</strong> %s</p>" % svc["sharing"])
        rows = "".join(
            "<li><code>%s</code>%s%s</li>"
            % (name,
               " — Ablaufdatum: %s" % expiry if expiry else "",
               " — %s" % func if func else "")
            for name, expiry, func in svc["cookies"]
        )
        parts.append("<ul>%s</ul>" % rows)

    block(COOKIE_SECTIONS_TAIL)

    parts.append("<h2>9. Deine Rechte in Bezug auf personenbezogene Daten</h2>")
    parts.append("<p>Du hast folgende Rechte in Bezug auf deine personenbezogenen "
                 "Daten:</p>")
    parts.append("<ul>%s</ul>" % "".join("<li>%s</li>" % r for r in COOKIE_RIGHTS))
    parts.append(
        "<p>Um diese Rechte auszuüben kontaktiere uns bitte. Bitte beziehe dich auf "
        "die Kontaktdaten am Ende dieser Cookie-Erklärung. Wenn du eine Beschwerde "
        "darüber hast, wie wir deine Daten behandeln, würden wir diese gerne hören, "
        "aber du hast auch das Recht diese an die Aufsichtsbehörde "
        "(Datenschutzbehörde) zu richten.</p>")

    parts.append("<h2>10. Kontaktdaten</h2>")
    parts.append(
        "<p>Für Fragen und/oder Kommentare über unsere Cookie-Richtlinien und diese "
        "Aussage kontaktiere uns bitte mittels der folgenden Kontaktdaten:</p>")
    parts.append(
        "<dl><dt>Ansprechpartner</dt><dd>Andreas Fleissner</dd>"
        "<dt>Adresse</dt><dd>An d. Isar 9, 82049 Pullach im Isartal, Deutschland</dd>"
        "<dt>Website</dt><dd><a href=\"https://team19.media\">https://team19.media</a></dd>"
        "<dt>E-Mail</dt><dd><a href=\"mailto:info@team19.media\">info@team19.media</a></dd>"
        "<dt>Telefonnummer</dt><dd><a href=\"tel:+498963858695\">089 63858695</a></dd></dl>")
    parts.append(
        "<p style=\"font-size:.875rem;color:var(--muted)\">Diese Cookie-Richtlinie "
        "wurde mit cookiedatabase.org am November 28, 2022 synchronisiert.</p>")

    return "".join(parts)
