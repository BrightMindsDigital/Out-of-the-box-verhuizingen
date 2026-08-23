# Out Of The Box — Verhuizingen & Transport

Website voor Out Of The Box Verhuizingen, Zoetermeer.

**Live:** www.outofthebox-verhuizingen.nl

## Structuur

```
index.html          Home
diensten.html       Diensten
zakelijk.html       Zakelijk
projecten.html      Projecten
over-ons.html       Over ons
contact.html        Contact

site.css            Basis: variabelen, typografie, header/footer, componenten
pages.css           Pagina-specifieke secties
form.js             Verzending van de contactformulieren

assets/             Logo's
sitemap.xml         Sitemap voor zoekmachines
robots.txt          Crawl-instructies
```

Statische HTML/CSS, geen build-stap.

## Design

Fonts: Archivo (koppen) + Hanken Grotesk (broodtekst), via Google Fonts.
Brandkleuren: `#0A4A98` primair, `#083878` donker, `#2868B8` accent.

## Openstaand

- Logostrook (homepage + Zakelijk) staat uitgecommentarieerd in de HTML. Terugzetten
  zodra de logo's van Zitmaxx en Mr Tafel binnen zijn; keukenklanten lopen nog.

- Echte fotografie vervangt de placeholders (`.ph` elementen met `data-label`)
- Social links in de footer hebben nog geen href
