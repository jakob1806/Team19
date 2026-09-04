# -*- coding: utf-8 -*-
"""Gemeinsames Seitengerüst: <head>, Header, Drawer, Footer, Icons, Formulare."""

from datetime import date

from content import (
    COMPANY, SOCIAL, HOURS, NAV, PLATFORM_NAV, CHANNELS, GOALS,
    CONSENT_TEXT,
)

# --- Icons (inline SVG, keine externen Requests) -------------------------
_I = {
    "arrow": '<path d="M4 10h12M11 5l5 5-5 5"/>',
    "users": '<path d="M13 14v-1a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v1"/>'
             '<circle cx="7.5" cy="5" r="2.75"/>'
             '<path d="M15.5 14v-1a3 3 0 0 0-2.2-2.9M12.5 2.6a2.75 2.75 0 0 1 0 5.3"/>',
    "megaphone": '<path d="M3 8.5v3a1 1 0 0 0 1 1h1.5L11 16V4L5.5 7.5H4a1 1 0 0 0-1 1Z"/>'
                 '<path d="M14 6.5a4 4 0 0 1 0 7"/>',
    "team": '<path d="M9 2.5 3 5.5v4c0 3.2 2.5 6 6 8 3.5-2 6-4.8 6-8v-4Z"/>'
            '<path d="m6.6 9.2 1.8 1.8 3.2-3.4"/>',
    "sparkle": '<path d="M9 2.5 10.4 7 15 8.5 10.4 10 9 14.5 7.6 10 3 8.5 7.6 7Z"/>'
               '<path d="M14.5 2.5v2.4M13.3 3.7h2.4"/>',
    "seo": '<circle cx="8" cy="8" r="5"/><path d="m11.8 11.8 3.7 3.7"/>',
    "responsive": '<rect x="1.5" y="3" width="10" height="9" rx="1.2"/>'
                  '<rect x="12" y="6.5" width="4.5" height="8" rx="1"/>'
                  '<path d="M4 14.5h4"/>',
    "analytics": '<path d="M2.5 15.5h13"/><path d="M5 15.5V9M9 15.5V4.5M13 15.5v-4"/>',
    "lock": '<rect x="3.5" y="8" width="11" height="8" rx="1.5"/>'
            '<path d="M6.5 8V5.75a2.5 2.5 0 0 1 5 0V8"/>',
    "mail": '<rect x="2" y="4" width="14" height="11" rx="1.6"/><path d="m2.7 5 6.3 4.6L15.3 5"/>',
    "pin": '<path d="M9 16s5.5-4.6 5.5-8.5a5.5 5.5 0 1 0-11 0C3.5 11.4 9 16 9 16Z"/>'
           '<circle cx="9" cy="7.5" r="2"/>',
    "phone": '<path d="M6.2 2.7 7.6 6 6 7.6a9 9 0 0 0 4.4 4.4L12 10.4l3.3 1.4v2.5c0 .8-.7 1.5-1.5 1.4C7.8 15.3 2.7 10.2 2.2 4.2c-.1-.8.6-1.5 1.4-1.5Z"/>',
    "clock": '<circle cx="9" cy="9" r="6.5"/><path d="M9 5.5V9l2.6 1.6"/>',
    "chevron": '<path d="m4.5 7 3.5 3.5L11.5 7"/>',
    "camera": '<path d="M2.5 6.5A1.5 1.5 0 0 1 4 5h1.4l.9-1.5h5.4L13.6 5H15a1.5 1.5 0 0 1 1.5 1.5v6A1.5 1.5 0 0 1 15 14H4a1.5 1.5 0 0 1-1.5-1.5Z"/>'
              '<circle cx="9.5" cy="9.3" r="2.6"/>',
    "trend": '<path d="M2.5 12.5 6.8 8l3 2.6 5.2-5.4"/><path d="M11.4 5.2h4.2v4.2"/>',
    "person": '<circle cx="9" cy="5.8" r="2.9"/>'
              '<path d="M3.4 15.2a5.7 5.7 0 0 1 11.2 0"/>',
}

_BRAND = {
    "instagram": '<path d="M12 2.2c2.6 0 3 0 4 .06 1 .05 1.5.2 1.9.36.5.2.8.42 1.2.8.4.4.6.7.8 1.2.15.4.3.9.35 1.9.05 1 .06 1.3.06 4s0 3-.06 4c-.05 1-.2 1.5-.35 1.9-.2.5-.4.8-.8 1.2-.4.4-.7.6-1.2.8-.4.15-.9.3-1.9.35-1 .05-1.4.06-4 .06s-3 0-4-.06c-1-.05-1.5-.2-1.9-.35a3.3 3.3 0 0 1-1.2-.8 3.3 3.3 0 0 1-.8-1.2c-.16-.4-.31-.9-.36-1.9C2.2 15 2.2 14.6 2.2 12s0-3 .06-4c.05-1 .2-1.5.36-1.9.2-.5.42-.8.8-1.2.4-.4.7-.6 1.2-.8.4-.16.9-.31 1.9-.36 1-.05 1.4-.06 4-.06Zm0 1.8c-2.55 0-2.88.01-3.9.06-.78.03-1.2.16-1.48.27-.37.14-.63.31-.9.59-.28.27-.45.53-.6.9-.1.28-.23.7-.26 1.48-.05 1.02-.06 1.35-.06 3.9s.01 2.88.06 3.9c.3.78.16 1.2.27 1.48.14.37.31.63.59.9.27.28.53.45.9.6.28.1.7.23 1.48.26 1.02.05 1.35.06 3.9.06s2.88-.01 3.9-.06c.78-.03 1.2-.16 1.48-.27.37-.14.63-.31.9-.59.28-.27.45-.53.6-.9.1-.28.23-.7.26-1.48.05-1.02.06-1.35.06-3.9s-.01-2.88-.06-3.9c-.03-.78-.16-1.2-.27-1.48a2.4 2.4 0 0 0-.59-.9 2.4 2.4 0 0 0-.9-.6c-.28-.1-.7-.23-1.48-.26-1.02-.05-1.35-.06-3.9-.06Zm0 3.06a4.94 4.94 0 1 1 0 9.88 4.94 4.94 0 0 1 0-9.88Zm0 8.15a3.2 3.2 0 1 0 0-6.42 3.2 3.2 0 0 0 0 6.42Zm6.3-8.35a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z"/>',
    "facebook": '<path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.24 10.44 22v-7.02H7.9v-2.92h2.54v-1.9c0-2.52 1.5-3.92 3.78-3.92 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.58h2.78l-.45 2.92h-2.33V22C18.34 21.24 22 17.08 22 12.06Z"/>',
    "linkedin": '<path d="M6.94 5.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM6.7 8.98H3.3V21h3.4V8.98Zm5.43 0H8.75V21h3.35v-6.31c0-1.72.32-3.38 2.45-3.38 2.1 0 2.13 1.96 2.13 3.49V21H20v-6.9c0-3.4-.73-5.4-4.7-5.4-1.9 0-3.18 1.05-3.7 2.04h-.05V8.98h-.02Z"/>',
    "tiktok": '<path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.1v12.4a2.59 2.59 0 1 1-1.85-2.48V9.77a5.72 5.72 0 1 0 4.95 5.66V8.98a7.34 7.34 0 0 0 4.3 1.38V7.26a4.26 4.26 0 0 1-3.24-1.44Z"/>',
}


def icon(name, size=18, stroke=True):
    """Liefert ein Inline-SVG. Stroke-Icons für UI, Fill-Icons für Marken."""
    if name in _BRAND:
        return ('<svg viewBox="0 0 24 24" width="%d" height="%d" fill="currentColor" '
                'aria-hidden="true">%s</svg>' % (size, size, _BRAND[name]))
    path = _I.get(name, _I["arrow"])
    return ('<svg viewBox="0 0 18 18" width="%d" height="%d" fill="none" '
            'stroke="currentColor" stroke-width="1.5" stroke-linecap="round" '
            'stroke-linejoin="round" aria-hidden="true">%s</svg>'
            % (size, size, path))


def arrow(size=17):
    return icon("arrow", size)


# --- Head ----------------------------------------------------------------
def head(title, description, page):
    return """<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>%(title)s</title>
<meta name="description" content="%(desc)s">
<meta name="theme-color" content="#e01d33">
<meta name="author" content="%(legal)s">
<link rel="canonical" href="https://team19.media/%(canon)s">
<meta property="og:type" content="website">
<meta property="og:site_name" content="%(name)s">
<meta property="og:title" content="%(title)s">
<meta property="og:description" content="%(desc)s">
<meta property="og:image" content="assets/logo/team19-logo-full.webp">
<meta property="og:locale" content="de_DE">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="assets/logo/logo-transparent.png">
<link rel="apple-touch-icon" href="assets/logo/logo-transparent.png">
<link rel="preload" as="image" href="assets/logo/team19-logo-full.webp">
<link rel="stylesheet" href="css/style.css">""" % {
        "title": title,
        "desc": description,
        "name": COMPANY["name"],
        "legal": COMPANY["legal"],
        "canon": "" if page == "home" else page + ".html",
    }


# --- Header + Drawer -----------------------------------------------------
def header():
    items = []
    for entry in NAV:
        if entry.get("sub"):
            subs = "".join(
                '<li><a href="%s" data-nav="%s"><span class="dot" '
                'style="background:var(--%s)"></span>%s</a></li>'
                % (href, key, key, label)
                for label, href, key in entry["sub"]
            )
            items.append(
                '<li class="nav__item nav__item--has-sub">'
                '<a class="nav__link" href="%s" data-nav="%s">%s'
                '<span class="nav__caret">%s</span></a>'
                '<ul class="nav__sub">%s</ul></li>'
                % (entry["href"], entry["key"], entry["label"],
                   icon("chevron", 14), subs)
            )
        else:
            items.append(
                '<li class="nav__item"><a class="nav__link" href="%s" '
                'data-nav="%s">%s</a></li>'
                % (entry["href"], entry["key"], entry["label"])
            )

    return """<a class="skip-link" href="#main">Zum Inhalt wechseln</a>
<header class="header">
  <div class="header__inner">
    <a class="header__logo" href="index.html" aria-label="%(name)s — Startseite">
      <img src="assets/logo/team19-logo.webp" alt="%(name)s" width="2560" height="881">
    </a>
    <nav class="nav" aria-label="Hauptnavigation">
      <ul class="nav__list">%(items)s</ul>
    </nav>
    <a class="btn btn--sm header__cta" href="kontakt.html">
      Beratungstermin anfordern <span class="btn__arrow">%(arrow)s</span>
    </a>
    <button class="header__toggle" type="button" aria-expanded="false"
            aria-controls="drawer" aria-label="Menü öffnen">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>
%(drawer)s""" % {
        "name": COMPANY["name"],
        "items": "".join(items),
        "arrow": arrow(15),
        "drawer": drawer(),
    }


def drawer():
    items = []
    for entry in NAV:
        if entry.get("sub"):
            subs = "".join('<li><a href="%s">%s</a></li>' % (href, label)
                           for label, href, _ in entry["sub"])
            items.append(
                '<li><button class="drawer__sub-toggle" type="button" '
                'aria-expanded="false" aria-controls="drawer-social">%s %s</button>'
                '<ul class="drawer__sub" id="drawer-social">%s</ul></li>'
                % (entry["label"], icon("chevron", 16), subs)
            )
        else:
            items.append('<li><a href="%s">%s</a></li>'
                         % (entry["href"], entry["label"]))

    return """<div class="drawer" id="drawer" hidden>
  <ul class="drawer__list">%(items)s</ul>
  <div class="drawer__foot">
    <a class="btn" href="kontakt.html">Beratungstermin anfordern</a>
  </div>
  <div class="drawer__meta">
    <a href="mailto:%(email)s">%(email)s</a>
    <a href="tel:%(tel)s">%(phone)s</a>
  </div>
</div>""" % {
        "items": "".join(items),
        "email": COMPANY["email"],
        "tel": COMPANY["phone_href"],
        "phone": COMPANY["phone"],
    }


# --- Footer --------------------------------------------------------------
def _copyright_line():
    year = date.today().year
    founded = COMPANY["founded"]
    span = str(founded) if year <= founded else "%d–%d" % (founded, year)
    return "Copyright © %s %s" % (span, COMPANY["name"] + " UG")


def footer():
    social = "".join(
        '<a href="%s" target="_blank" rel="noopener noreferrer" '
        'aria-label="%s">%s</a>' % (url, name, icon(key, 17))
        for name, url, key in SOCIAL
    )
    platforms = "".join('<li><a href="%s">%s</a></li>' % (href, label)
                        for label, href, _ in PLATFORM_NAV)

    return """<footer class="footer">
  <div class="container">
    <div class="footer__top">
      <div class="footer__brand">
        <img src="assets/logo/team19-logo.webp" alt="%(name)s" width="2560" height="881"
             style="filter:brightness(0) invert(1)">
        <p>%(tagline)s. %(claim)s</p>
        <div class="footer__social">%(social)s</div>
      </div>
      <div class="footer__cols">
        <div class="footer__col">
          <h4>Social Media</h4>
          <ul>%(platforms)s</ul>
        </div>
        <div class="footer__col">
          <h4>Agentur</h4>
          <ul>
            <li><a href="webdesign.html">Webdesign</a></li>
            <li><a href="team.html">Unser Team</a></li>
            <li><a href="referenzen.html">Referenzen</a></li>
            <li><a href="kontakt.html">Kontakt</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>Kontakt</h4>
          <ul>
            <li><a href="mailto:%(email)s">%(email)s</a></li>
            <li><a href="tel:%(tel)s">%(phone)s</a></li>
            <li>%(street)s<br>%(zip)s %(city)s</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <span>%(copyright)s</span>
      <nav class="footer__legal" aria-label="Rechtliches">
        <a href="impressum.html">Impressum</a>
        <a href="datenschutz.html">Datenschutz</a>
        <a href="cookie-richtlinie.html">Cookie Richtlinie</a>
      </nav>
    </div>
  </div>
</footer>""" % {
        "name": COMPANY["name"],
        "tagline": COMPANY["tagline"],
        "claim": COMPANY["claim"],
        "social": social,
        "platforms": platforms,
        "email": COMPANY["email"],
        "tel": COMPANY["phone_href"],
        "phone": COMPANY["phone"],
        "street": COMPANY["street"],
        "zip": COMPANY["zip"],
        "city": COMPANY["city"],
        "copyright": _copyright_line(),
    }


# --- Bausteine -----------------------------------------------------------
def breadcrumb(*trail):
    parts = ['<a href="index.html">Home</a>']
    for i, (label, href) in enumerate(trail):
        parts.append('<span aria-hidden="true">/</span>')
        if href and i < len(trail) - 1:
            parts.append('<a href="%s">%s</a>' % (href, label))
        else:
            parts.append('<span aria-current="page">%s</span>' % label)
    return '<nav class="breadcrumb" aria-label="Brotkrumen">%s</nav>' % "".join(parts)


def cta_band(heading=None, text=None):
    heading = heading or COMPANY["claim"]
    text = text or ("Jetzt einen kostenlosen Beratungstermin vereinbaren – wir "
                    "melden uns innerhalb eines Werktags bei Dir.")
    return """<section class="cta">
  <span class="cta__deco" aria-hidden="true"></span>
  <div class="container">
    <div class="reveal" style="max-width:800px">
      <p class="eyebrow" style="color:#fff">Bereit?</p>
      <h2>%(heading)s</h2>
      <p class="lead">%(text)s</p>
      <div class="cta__actions">
        <a class="btn btn--light" href="kontakt.html">Beratungstermin anfordern
          <span class="btn__arrow">%(arrow)s</span></a>
        <a class="btn btn--outline-light" href="mailto:%(email)s">%(email)s</a>
      </div>
    </div>
  </div>
</section>""" % {
        "heading": heading, "text": text, "arrow": arrow(16),
        "email": COMPANY["email"],
    }


def client_marquee(heading="Denn sie glauben an uns", alt=False):
    from content import CLIENTS
    logos = "".join(
        '<div class="logos__item"><img src="assets/%s" alt="%s" loading="lazy" '
        'decoding="async"></div>' % (img, name)
        for name, img in CLIENTS
    )
    return """<section class="section section--tight%(alt)s">
  <div class="container">
    <p class="eyebrow eyebrow--plain reveal" style="display:block;text-align:center;margin-bottom:2rem">%(heading)s</p>
  </div>
  <div class="marquee logos" style="--marquee-speed:62s">
    <div class="marquee__track">%(logos)s</div>
  </div>
</section>""" % {
        "alt": " section--alt" if alt else "",
        "heading": heading,
        "logos": logos,
    }


# --- Formular ------------------------------------------------------------
def form(form_id, intro, goals=None, submit="Fragebogen abschicken und Termin buchen",
         website_question=False):
    goals = goals or GOALS

    if website_question:
        presence = """<fieldset class="fieldset">
        <legend>Besitzt Du bereits eine Webseite?</legend>
        <div class="choices">
          <label class="choice"><input type="radio" name="webseite" value="Ja"><span>Ja</span></label>
          <label class="choice"><input type="radio" name="webseite" value="Nein"><span>Nein</span></label>
        </div>
      </fieldset>"""
    else:
        chips = "".join(
            '<label class="choice"><input type="checkbox" name="kanaele" value="%s">'
            '<span>%s</span></label>' % (c, c) for c in CHANNELS
        )
        presence = """<fieldset class="fieldset">
        <legend>Existieren bereits Social Media Präsenzen von Deinem Unternehmen? Wenn ja, welche?</legend>
        <div class="choices">%s</div>
      </fieldset>""" % chips

    goal_chips = "".join(
        '<label class="choice"><input type="radio" name="ziel" value="%s">'
        '<span>%s</span></label>' % (g, g) for g in goals
    )

    return """<form class="form" data-form id="%(id)s" novalidate>
      <p class="lead" style="font-size:1rem">%(intro)s</p>
      <div class="form__row">
        <div class="field">
          <label for="%(id)s-vorname">Vorname</label>
          <input id="%(id)s-vorname" name="vorname" type="text" autocomplete="given-name" required>
        </div>
        <div class="field">
          <label for="%(id)s-nachname">Nachname</label>
          <input id="%(id)s-nachname" name="nachname" type="text" autocomplete="family-name" required>
        </div>
      </div>
      <div class="form__row">
        <div class="field">
          <label for="%(id)s-email">E-Mail</label>
          <input id="%(id)s-email" name="email" type="email" autocomplete="email" required>
        </div>
        <div class="field">
          <label for="%(id)s-firma">Firma</label>
          <input id="%(id)s-firma" name="firma" type="text" autocomplete="organization">
        </div>
      </div>
      %(presence)s
      <fieldset class="fieldset">
        <legend>%(goal_legend)s</legend>
        <div class="choices">%(goals)s</div>
      </fieldset>
      <div class="field">
        <label for="%(id)s-nachricht">Schreibe uns eine kurze Nachricht über Dein Anliegen</label>
        <textarea id="%(id)s-nachricht" name="nachricht" rows="5"></textarea>
      </div>
      <div class="consent">
        <input id="%(id)s-consent" name="datenschutz" type="checkbox" required>
        <label for="%(id)s-consent"><strong>Einwilligungserklärung Datenschutz</strong><br>%(consent)s</label>
      </div>
      <div>
        <button class="btn" type="submit">%(submit)s <span class="btn__arrow">%(arrow)s</span></button>
      </div>
      <!-- Formular-Endpoint: action-Attribut am <form> ergänzen (z.B. WPForms,
           Formspree oder eigener Handler). Ohne action zeigt main.js den Hinweis unten. -->
      <p class="form__status" role="status" hidden>
        Dieses Formular ist noch nicht mit einem Versand-Endpoint verbunden.
        Schreib uns in der Zwischenzeit direkt an
        <a href="mailto:%(email)s"><strong>%(email)s</strong></a> oder ruf an:
        <a href="tel:%(tel)s"><strong>%(phone)s</strong></a>.
      </p>
    </form>""" % {
        "id": form_id,
        "intro": intro,
        "presence": presence,
        "goal_legend": "Was möchtest Du durch Social Media erreichen"
                       if not website_question
                       else "Was möchtest Du mit Deiner neuen Webseite erreichen?",
        "goals": goal_chips,
        "consent": CONSENT_TEXT,
        "submit": submit,
        "arrow": arrow(16),
        "email": COMPANY["email"],
        "tel": COMPANY["phone_href"],
        "phone": COMPANY["phone"],
    }


def hours_block():
    rows = "".join('<div><dt>%s</dt><dd>%s</dd></div>' % (d, t) for d, t in HOURS)
    return """<div class="contact-card reveal">
      <p class="eyebrow eyebrow--plain" style="color:var(--muted-2)">Wir haben offen</p>
      <dl class="hours">%s</dl>
    </div>""" % rows


# --- Seitengerüst --------------------------------------------------------
def page(page_key, title, description, body):
    return """<!doctype html>
<html lang="de">
<head>
%(head)s
</head>
<body data-page="%(key)s">
%(header)s
<main id="main">
%(body)s
</main>
%(footer)s
<script src="js/main.js" defer></script>
</body>
</html>
""" % {
        "head": head(title, description, page_key),
        "key": page_key,
        "header": header(),
        "body": body,
        "footer": footer(),
    }
