# -*- coding: utf-8 -*-
"""Die einzelnen Seiteninhalte."""

import content as C
from layout import (
    icon, arrow, breadcrumb, cta_band, client_marquee, form, hours_block,
)

ASSET = "assets/%s"


# =========================================================================
# Bausteine
# =========================================================================
def _photo_band(images):
    """Zwei Foto-Reihen, die in Gegenrichtung laufen."""
    half = len(images) // 2

    def row(imgs, speed, direction):
        figs = "".join(
            '<figure><img src="%s" alt="Foto aus einer unserer Produktionen" '
            'loading="lazy" decoding="async"></figure>' % (ASSET % src)
            for src in imgs
        )
        return ('<div class="marquee" style="--marquee-speed:%ss;--marquee-dir:%s">'
                '<div class="marquee__track">%s</div></div>' % (speed, direction, figs))

    return ('<div class="photo-band" aria-label="Ausschnitt aus unseren Foto- und '
            'Videoproduktionen">%s%s</div>'
            % (row(images[:half], 58, "normal"),
               row(images[half:], 72, "reverse")))


def _members(items, columns_note=True):
    out = []
    for m in items:
        if m["photo"]:
            media = ('<div class="member__photo"><img src="%s" alt="%s" width="656" '
                     'height="656" loading="lazy" decoding="async"></div>'
                     % (ASSET % m["photo"], m["name"]))
            cls = "member"
        else:
            media = ('<div class="member__photo" role="img" aria-label="%s">%s</div>'
                     % (m["name"], icon(m.get("icon", "person"), 34)))
            cls = "member member--placeholder"
        out.append(
            '<article class="%s reveal">%s<div><p class="member__name">%s</p>'
            '<p class="member__role">%s</p>%s</div></article>'
            % (cls, media, m["name"], m["role"],
               '<p class="member__bio">%s</p>' % m["bio"] if columns_note else "")
        )
    return "".join(out)


def _work_cards(items):
    out = []
    for w in items:
        tag = {"webdesign": "Webdesign", "social": "Social Media",
               "foto": "Fotografie"}[w["cat"]]
        out.append(
            '<article class="work %s reveal" data-category="%s">'
            '<div class="work__media"><span class="work__tag">%s</span>'
            '<img src="%s" alt="%s" loading="lazy" decoding="async"></div>'
            '<div><p class="work__title">%s</p><p class="work__desc">%s</p></div>'
            '</article>'
            % (w["shape"], w["cat"], tag, ASSET % w["img"], w["title"],
               w["title"], w["desc"])
        )
    return "".join(out)


def _stat(value, label, count=None, suffix="", prefix=""):
    inner = ('<span class="stat__value" data-count-to="%s" data-count-suffix="%s" '
             'data-count-prefix="%s">%s</span>' % (count, suffix, prefix, prefix + suffix)
             if count is not None
             else '<span class="stat__value">%s</span>' % value)
    return '<div class="stat reveal">%s<span class="stat__label">%s</span></div>' % (
        inner, label)


# =========================================================================
# Home
# =========================================================================
def home():
    rot = [("Instagram", "instagram"), ("Facebook", "facebook"),
           ("Tiktok", "tiktok"), ("Shopify", "shopify")]
    rot_items = "".join(
        '<span class="rotator__item%s" data-brand="%s">%s</span>'
        % (" is-active" if i == 0 else "", brand, word)
        for i, (word, brand) in enumerate(rot)
    )

    benefits = "".join(
        '<article class="card tilt reveal">'
        '<div class="card__icon">%s</div>'
        '<h3 class="h4">%s</h3><p>%s</p></article>'
        % (icon(b["icon"], 22), b["title"], b["text"])
        for b in C.BENEFITS
    )

    services = "".join(
        '<article class="service reveal">'
        '<span class="service__index">%02d</span>'
        '<div class="service__body"><h3 class="h4">%s</h3>%s</div></article>'
        % (i + 1, s["title"], "".join("<p>%s</p>" % p for p in s["paras"]))
        for i, s in enumerate(C.SERVICES)
    )

    platforms = "".join(
        '<a class="platform reveal" data-pf="%s" href="%s.html">'
        '<span class="platform__icon">%s</span>'
        '<h3 class="h4">%s</h3><p>%s</p>'
        '<span class="link-arrow">Mehr erfahren %s</span></a>'
        % (key, key, icon(key, 24), C.PLATFORMS[key]["name"],
           C.PLATFORM_TEASER[key], arrow(16))
        for key in ("instagram", "facebook", "linkedin", "tiktok")
    )

    stats = "".join([
        _stat(None, "gegründet in München", count=C.COMPANY["founded"]),
        _stat(None, "Köpfe im Team", count=5),
        _stat(None, "Plattformen aus einer Hand", count=4),
        _stat("in-house", "Kernkompetenz im eigenen Haus"),
    ])

    return """
<!-- ===== Hero ===== -->
<section class="hero" data-glow-host>
  <span class="hero__bg" aria-hidden="true"></span>
  <span class="hero__glow" aria-hidden="true"></span>
  <div class="container hero__inner">
    <p class="eyebrow">%(subline)s · München</p>
    <h1 class="hero__title">
      <span class="hero__title-line hero__title-line--sm">Du möchtest dein Business voranbringen, indem du</span>
      <span class="rotator" data-rotator aria-live="off">%(rot)s</span>
      <span class="hero__title-line">bestmöglich nutzt?</span>
    </h1>
    <p class="lead hero__lead">Du hast aber weder die Zeit noch die Expertise?<br>
      Dann lass uns das für dich machen.</p>
    <div class="hero__actions">
      <a class="btn" href="kontakt.html">Beratungstermin anfordern
        <span class="btn__arrow">%(arrow)s</span></a>
      <a class="btn btn--ghost" href="referenzen.html">Referenzen ansehen</a>
    </div>
  </div>
</section>

<!-- ===== Foto-Band ===== -->
<section class="section section--tight" style="padding-top:clamp(2rem,4vw,3rem)">
  %(photos)s
</section>

%(clients)s

<!-- ===== Warum Social Media ===== -->
<section class="section section--alt">
  <div class="container">
    <div class="section-head reveal">
      <p class="eyebrow">Der Nutzen</p>
      <h2 class="h2">Wieso brauchst du einen professionellen Social&nbsp;Media Auftritt?</h2>
    </div>
    <div class="grid-cards" data-stagger>%(benefits)s</div>
  </div>
</section>

<!-- ===== Leistungen ===== -->
<section class="section">
  <div class="container">
    <div class="services">
      <div class="services__aside">
        <div class="reveal">
          <p class="eyebrow">Wir kümmern uns um</p>
          <h2 class="h2">Dein Social Media Auftritt leichtgemacht</h2>
          <p class="lead" style="margin-top:1.25rem">Von der ersten Idee bis zur
            Auswertung – vier Bausteine, die zusammengehören.</p>
          <div class="services__progress" aria-hidden="true"><span data-progress-bar></span></div>
        </div>
      </div>
      <div class="services__list" data-progress-source>%(services)s</div>
    </div>
  </div>
</section>

<!-- ===== Zahlen ===== -->
<section class="section band-dark" data-spotlight>
  <span class="band-dark__spot" aria-hidden="true"></span>
  <div class="container">
    <div class="section-head reveal" style="margin-bottom:2.5rem">
      <p class="eyebrow">Über uns</p>
      <h2 class="h2">%(claim)s</h2>
    </div>
    <div class="hero__stats" style="margin-top:0" data-stagger>%(stats)s</div>
  </div>
</section>

<!-- ===== Plattformen ===== -->
<section class="section">
  <div class="container">
    <div class="section-head reveal">
      <p class="eyebrow">Plattformen</p>
      <h2 class="h2">Bei welchem Social Media Auftritt können wir dir helfen?</h2>
    </div>
    <div class="platforms" data-stagger>%(platforms)s</div>
  </div>
</section>

<!-- ===== Team-Teaser ===== -->
<section class="section section--alt">
  <div class="container">
    <div class="split split--wide">
      <div class="reveal">
        <p class="eyebrow">Wir sind ein Team!</p>
        <h2 class="h2">Menschen, keine Agentur-Maschine</h2>
        <p class="lead" style="margin-top:1.25rem">Wir unterstützen Dich dabei, Deine
          Ziele zu erreichen und begleiten Dich auf dem Weg.</p>
        <div style="display:flex;flex-wrap:wrap;gap:.75rem;margin-top:2rem">
          <a class="btn btn--ghost" href="team.html">Lerne uns kennen
            <span class="btn__arrow">%(arrow)s</span></a>
        </div>
        <div style="margin-top:2.5rem">
          <p style="font-weight:750;color:var(--ink)">Frederic Fleißner</p>
          <p style="font-size:.9375rem;color:var(--muted)">Gründer und Geschäftsführer</p>
          <p style="font-weight:750;color:var(--ink);margin-top:1rem">Andreas Fleißner</p>
          <p style="font-size:.9375rem;color:var(--muted)">Gründer und Geschäftsführer</p>
        </div>
      </div>
      <div class="split__duo reveal">
        <figure><img src="assets/team/frederic.webp" alt="Frederic Fleißner" width="656" height="656" loading="lazy"></figure>
        <figure><img src="assets/team/andreas.webp" alt="Andreas Fleißner" width="656" height="656" loading="lazy"></figure>
      </div>
    </div>
  </div>
</section>

<!-- ===== Referenzen-Teaser ===== -->
<section class="section">
  <div class="container">
    <div class="section-head reveal" style="display:flex;flex-wrap:wrap;
         align-items:flex-end;justify-content:space-between;gap:1.5rem;max-width:none">
      <div style="max-width:620px">
        <p class="eyebrow">Referenzen</p>
        <h2 class="h2">Ein Blick auf unsere Arbeit</h2>
      </div>
      <a class="link-arrow" href="referenzen.html">Alle Referenzen %(arrow)s</a>
    </div>
    <div class="work-grid" data-stagger>%(work)s</div>
  </div>
</section>

%(cta)s
""" % {
        "subline": C.COMPANY["subline"],
        "rot": rot_items,
        "arrow": arrow(16),
        "photos": _photo_band(C.HERO_PHOTOS),
        "clients": client_marquee(alt=False),
        "benefits": benefits,
        "services": services,
        "claim": C.COMPANY["claim"],
        "stats": stats,
        "platforms": platforms,
        "work": _work_cards([w for w in C.WORK if w["cat"] == "webdesign"][:3]
                            + [w for w in C.WORK if w["cat"] == "social"][:3]),
        "cta": cta_band(),
    }


# =========================================================================
# Plattform-Seiten
# =========================================================================
def platform(key):
    p = C.PLATFORMS[key]
    shots = "".join(
        '<figure class="work__media reveal work--portrait work--mockup" style="margin:0">'
        '<img src="%s" alt="Beispiel aus unserer %s-Arbeit" loading="lazy" '
        'decoding="async"></figure>' % (ASSET % s, p["name"])
        for s in p["shots"]
    )

    extra = ""
    if p["extra"]:
        extra = """
<section class="section section--alt">
  <div class="container container--narrow">
    <div class="reveal">
      <p class="eyebrow">Unser Ansatz</p>
      <h2 class="h2">%s</h2>
      <div class="lead" style="margin-top:1.5rem">%s</div>
    </div>
  </div>
</section>""" % (p["extra"]["title"],
                 "".join("<p>%s</p>" % x for x in p["extra"]["paras"]))

    others = "".join(
        '<a class="platform reveal" data-pf="%s" href="%s.html">'
        '<span class="platform__icon">%s</span><h3 class="h4">%s</h3><p>%s</p>'
        '<span class="link-arrow">Mehr erfahren %s</span></a>'
        % (k, k, icon(k, 24), C.PLATFORMS[k]["name"], C.PLATFORM_TEASER[k], arrow(16))
        for k in ("instagram", "facebook", "linkedin", "tiktok") if k != key
    )

    return """
<section class="page-hero" style="--pf:var(--%(key)s)">
  <div class="container">
    %(crumb)s
    <div class="page-hero__grid">
      <div class="reveal">
        <span class="pf-badge">%(icon)s %(name)s</span>
        <h1 class="h1">%(title)s</h1>
        <p class="lead" style="margin-top:1.5rem">%(lead)s</p>
        <div class="hero__actions">
          <a class="btn" href="#anfrage">Beratungstermin anfordern
            <span class="btn__arrow">%(arrow)s</span></a>
          <a class="btn btn--ghost" href="referenzen.html">Referenzen</a>
        </div>
      </div>
      <div class="page-hero__media reveal">
        <img src="%(shot)s" alt="Arbeitsbeispiel %(name)s" loading="lazy">
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container container--narrow">
    <div class="reveal">
      <p class="eyebrow">So arbeiten wir</p>
      <div class="prose">%(paras)s</div>
    </div>
  </div>
</section>

<section class="section section--tight">
  <div class="container">
    <div class="section-head reveal"><p class="eyebrow">Wie sieht Marketing bei uns aus?</p>
      <h2 class="h2">Durch Social Media verpasst Du keine Chancen auf Kunden</h2></div>
    <div class="work-grid" data-stagger>%(shots)s</div>
  </div>
</section>
%(extra)s

<section class="section">
  <div class="container">
    <div class="section-head reveal"><p class="eyebrow">Weitere Plattformen</p>
      <h2 class="h2">Bei welchem Social Media Auftritt können wir dir noch helfen?</h2></div>
    <div class="platforms" data-stagger>%(others)s</div>
  </div>
</section>

<section class="section section--alt" id="anfrage">
  <div class="container container--narrow">
    <div class="section-head reveal" style="margin-bottom:2.5rem">
      <p class="eyebrow">Interessiert?</p>
      <h2 class="h2">Wir wollen Dich kennenlernen!</h2>
    </div>
    <div class="reveal">%(form)s</div>
  </div>
</section>

%(cta)s
""" % {
        "key": key,
        "crumb": breadcrumb(("Social Media", None), (p["nav_label"], None)),
        "icon": icon(key, 18),
        "name": p["name"],
        "title": p["title"],
        "lead": p["lead"],
        "arrow": arrow(16),
        "shot": ASSET % p["hero_img"],
        "paras": "".join("<p>%s</p>" % x for x in p["paras"]),
        "shots": shots,
        "extra": extra,
        "others": others,
        "form": form("f-" + key, C.FORM_INTRO_SOCIAL),
        "cta": cta_band(),
    }


# =========================================================================
# Webdesign
# =========================================================================
def webdesign():
    steps = "".join(
        '<article class="step reveal"><span class="step__k">%s</span>'
        '<h3 class="h4">%s</h3><p>%s</p>%s</article>'
        % (s["k"], s["title"], s["text"],
           "<ul>%s</ul>" % "".join("<li>%s</li>" % x for x in s["list"])
           if s["list"] else "")
        for s in C.WEBDESIGN_STEPS
    )

    features = "".join(
        '<article class="feature reveal"><div class="feature__icon">%s</div>'
        '<h3 class="h4">%s</h3><p>%s</p></article>'
        % (icon(key, 20), title, text)
        for key, title, text in C.WEBDESIGN_FEATURES
    )

    projects = "".join(
        '<article class="work reveal"><div class="work__media">'
        '<span class="work__tag">Webdesign</span>'
        '<img src="%s" alt="%s" loading="lazy" decoding="async"></div>'
        '<div><p class="work__title">%s</p><p class="work__desc">%s</p></div></article>'
        % (ASSET % w["img"], w["title"], w["title"], w["desc"])
        for w in C.WORK if w["cat"] == "webdesign"
    )

    return """
<section class="page-hero">
  <div class="container">
    %(crumb)s
    <div class="page-hero__grid">
      <div class="reveal">
        <p class="eyebrow">Webdesign</p>
        <h1 class="h1">Die perfekte Webseite für einen gelungenen Auftritt im Internet!</h1>
        <div class="hero__actions">
          <a class="btn" href="#anfrage">Kostenloses Erstgespräch
            <span class="btn__arrow">%(arrow)s</span></a>
          <a class="btn btn--ghost" href="#projekte">Projekte ansehen</a>
        </div>
      </div>
      <div class="page-hero__media reveal">
        <img src="assets/work/webdesign-hero.webp" alt="Webdesign von Team19 Media" loading="lazy">
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head reveal">
      <p class="eyebrow">Wie funktioniert es?</p>
      <h2 class="h2">Der Prozess hinter unserem Webdesign</h2>
    </div>
    <div class="steps steps--3" data-stagger>%(steps)s</div>
  </div>
</section>

<section class="section section--alt" id="projekte">
  <div class="container">
    <div class="section-head reveal">
      <p class="eyebrow">Responsive und Maßgeschneidert</p>
      <h2 class="h2">Wie sieht Webdesign bei uns aus?</h2>
    </div>
    <div class="work-grid" data-stagger>%(projects)s</div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head reveal">
      <p class="eyebrow">Das steckt dahinter</p>
      <h2 class="h2">In jeder Webseite bereits enthalten</h2>
    </div>
    <div class="features" data-stagger>%(features)s</div>
  </div>
</section>

<section class="section section--alt" id="anfrage">
  <div class="container container--narrow">
    <div class="section-head reveal" style="margin-bottom:2.5rem">
      <p class="eyebrow">Interessiert?</p>
      <h2 class="h2">Lass uns über Deine Webseite sprechen</h2>
    </div>
    <div class="reveal">%(form)s</div>
  </div>
</section>

%(cta)s
""" % {
        "crumb": breadcrumb(("Webdesign", None)),
        "arrow": arrow(16),
        "steps": steps,
        "projects": projects,
        "features": features,
        "form": form("f-web", C.FORM_INTRO_WEB, goals=C.GOALS_WEB,
                     website_question=True),
        "cta": cta_band(),
    }


# =========================================================================
# Unser Team
# =========================================================================
def team():
    values = "".join(
        '<article class="value reveal"><span class="value__k">%02d</span>'
        '<h3>%s</h3><p>%s</p></article>' % (i + 1, t, x)
        for i, (t, x) in enumerate(C.VALUES)
    )

    quotes = "".join(
        '<figure class="quote reveal"><div class="quote__mark" aria-hidden="true">&ldquo;</div>'
        '<blockquote>%s</blockquote>'
        '<figcaption><p class="quote__name">%s</p><p class="quote__meta">%s</p></figcaption>'
        '</figure>'
        % ("".join("<p>%s</p>" % p for p in q["paras"]), q["name"], q["meta"])
        for q in C.TESTIMONIALS
    )

    return """
<section class="page-hero">
  <div class="container">
    %(crumb)s
    <div class="page-hero__grid">
      <div class="reveal">
        <p class="eyebrow">Unser Team</p>
        <h1 class="h1">Was macht uns als Social Media Agentur aus?</h1>
        <p class="lead" style="margin-top:1.5rem">Wir unterstützen Dich dabei, Deine
          Ziele zu erreichen und begleiten Dich auf dem Weg.</p>
      </div>
      <div class="page-hero__media reveal">
        <img src="assets/photo/DSC09229Art.jpg" alt="Arbeit bei Team19 Media" loading="lazy">
      </div>
    </div>
  </div>
</section>

<section class="section section--tight">
  <div class="container">
    <div class="values" data-stagger>%(values)s</div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split split--wide">
      <div class="reveal">
        <p class="eyebrow">Unsere Geschichte</p>
        <h2 class="h2">Aus einem Projekt wurde ein Beruf</h2>
        <div class="prose" style="margin-top:1.5rem">%(history)s</div>
      </div>
      <div class="split__media reveal" style="aspect-ratio:4/5">
        <img src="assets/photo/DSC03730Art.jpg" alt="Team19 Media bei der Arbeit" loading="lazy">
      </div>
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="section-head reveal">
      <p class="eyebrow">Unser Team</p>
      <h2 class="h2">Heute sind wir zu fünft im Team</h2>
      <p class="lead" style="margin-top:1.25rem">%(intro)s</p>
    </div>
    <div class="team-grid" data-stagger>%(members)s</div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head reveal" style="display:flex;flex-wrap:wrap;
         align-items:flex-end;justify-content:space-between;gap:1.5rem;max-width:none">
      <div style="max-width:620px">
        <p class="eyebrow">Unsere Projekte</p>
        <h2 class="h2">Wir fokussieren uns auf regionale Kunden</h2>
        <p class="lead" style="margin-top:1.25rem">… um Ihnen das beste Erlebnis zu bieten.</p>
      </div>
      <a class="link-arrow" href="referenzen.html">Alle Referenzen %(arrow)s</a>
    </div>
    <div class="work-grid" data-stagger>%(work)s</div>
  </div>
</section>

%(clients)s

<section class="section section--alt">
  <div class="container">
    <div class="section-head section-head--center reveal">
      <p class="eyebrow eyebrow--plain">Stimmen</p>
      <h2 class="h2">Was Kunden über uns sagen</h2>
    </div>
    <div class="quotes" data-stagger>%(quotes)s</div>
  </div>
</section>

%(cta)s
""" % {
        "crumb": breadcrumb(("Unser Team", None)),
        "values": values,
        "history": "".join("<p>%s</p>" % p for p in C.HISTORY),
        "intro": C.TEAM_INTRO,
        "members": _members(C.MEMBERS),
        "arrow": arrow(16),
        "work": _work_cards([w for w in C.WORK if w["cat"] == "social"][:4]),
        "clients": client_marquee("Diese Kunden vertrauen uns"),
        "quotes": quotes,
        "cta": cta_band(
            "Bist du bereit für Deinen professionellen Social Media Auftritt?",
            "Jetzt einen kostenlosen Beratungstermin vereinbaren!"),
    }


# =========================================================================
# Referenzen
# =========================================================================
def referenzen():
    tabs = [("alle", "Alle"), ("social", "Social Media"),
            ("webdesign", "Webdesign"), ("foto", "Fotografie")]
    filters = "".join(
        '<button class="filter" type="button" role="tab" data-filter="%s" '
        'aria-selected="%s">%s</button>'
        % (key, "true" if key == "alle" else "false", label)
        for key, label in tabs
    )

    return """
<section class="page-hero">
  <div class="container">
    %(crumb)s
    <div style="max-width:760px" class="reveal">
      <p class="eyebrow">Referenzen</p>
      <h1 class="h1">Unsere Referenzen auf einen Blick</h1>
      <p class="lead" style="margin-top:1.5rem">Social Media, Webdesign und
        Fotografie – alles aus einer Hand, für Kunden verschiedener Größe innerhalb
        und außerhalb Deutschlands.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="filters" role="tablist" aria-label="Referenzen filtern" data-filters>%(filters)s</div>
    <div class="work-grid" data-work-grid data-stagger>%(work)s</div>
  </div>
</section>

%(clients)s
%(cta)s
""" % {
        "crumb": breadcrumb(("Referenzen", None)),
        "filters": filters,
        "work": _work_cards(C.WORK),
        "clients": client_marquee("Denn sie glauben an uns", alt=True),
        "cta": cta_band(),
    }


# =========================================================================
# Kontakt
# =========================================================================
def kontakt():
    social = "".join(
        '<li><a class="link-arrow" href="%s" target="_blank" rel="noopener noreferrer">'
        '%s %s</a></li>' % (url, icon(key, 17), name)
        for name, url, key in C.SOCIAL
    )

    return """
<section class="page-hero">
  <div class="container">
    %(crumb)s
    <div style="max-width:760px" class="reveal">
      <p class="eyebrow">Kontakt</p>
      <h1 class="h1">So erreichst Du uns</h1>
      <p class="lead" style="margin-top:1.5rem">Schreib uns einfach eine Nachricht
        damit wir Deinen Social Media Kanal auf das nächste Level bringen können!</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="contact-grid">
      <div class="reveal">%(form)s</div>
      <aside class="contact-aside">
        <div class="contact-card reveal">
          <p class="eyebrow eyebrow--plain" style="color:var(--muted-2)">Direkt</p>
          <dl class="contact-list">
            <div>
              <dt>E-Mail</dt>
              <dd><a href="mailto:%(email)s">%(email)s</a></dd>
            </div>
            <div>
              <dt>Telefon</dt>
              <dd><a href="tel:%(tel)s">%(phone)s</a></dd>
            </div>
            <div>
              <dt>Adresse</dt>
              <dd>%(legal)s<br>%(street)s<br>%(zip)s %(city)s</dd>
            </div>
          </dl>
        </div>
        %(hours)s
        <div class="contact-card reveal">
          <p class="eyebrow eyebrow--plain" style="color:var(--muted-2)">Folge uns</p>
          <ul style="list-style:none;margin:0;padding:0;display:grid;gap:.85rem">%(social)s</ul>
        </div>
      </aside>
    </div>
  </div>
</section>

%(cta)s
""" % {
        "crumb": breadcrumb(("Kontakt", None)),
        "form": form("f-kontakt", C.FORM_INTRO_SOCIAL, submit="Senden"),
        "email": C.COMPANY["email"],
        "tel": C.COMPANY["phone_href"],
        "phone": C.COMPANY["phone"],
        "legal": C.COMPANY["legal"],
        "street": C.COMPANY["street"],
        "zip": C.COMPANY["zip"],
        "city": C.COMPANY["city"],
        "hours": hours_block(),
        "social": social,
        "cta": cta_band(),
    }


# =========================================================================
# Rechtliches
# =========================================================================
def legal(title, crumb_label, body_html, lead=None):
    return """
<section class="page-hero">
  <div class="container">
    %(crumb)s
    <div style="max-width:760px" class="reveal">
      <p class="eyebrow">Rechtliches</p>
      <h1 class="h1">%(title)s</h1>
      %(lead)s
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="prose reveal">%(body)s</div>
  </div>
</section>
""" % {
        "crumb": breadcrumb((crumb_label, None)),
        "title": title,
        "lead": '<p class="lead" style="margin-top:1.5rem">%s</p>' % lead if lead else "",
        "body": body_html,
    }


def impressum():
    rows = "".join("<dt>%s</dt><dd>%s</dd>" % (k, v) for k, v in C.IMPRESSUM["rows"])
    body = "<p>%s</p><dl>%s</dl>" % (C.IMPRESSUM["responsible"], rows)
    return legal("Impressum", "Impressum", body)
