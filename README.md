# Out Of The Box — Verhuizingen & Transport

Website voor Out Of The Box Verhuizingen (Zoetermeer). Zakelijke verhuis- en
transportpartner voor keuken- en meubelretailers.

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

assets/             Logo's (transparant, wit, mark, standaard)
divi-exports/       Divi 5 page-imports per pagina (WordPress-route)
docs/               Stijlgids en goedgekeurde websitetekst
```

Statische HTML/CSS, geen build-stap. Openen kan direct in de browser.

## Design

Kleuren, typografie, schaduwen, buttons en componentmaten staan in
`docs/stijlgids.html`. Fonts: Archivo (koppen) + Hanken Grotesk (broodtekst),
via Google Fonts.

Brandkleuren: `#0A4A98` primair, `#083878` donker, `#2868B8` accent.

## Tekst

`docs/website-tekst.rtf` is de bron voor alle paginateksten. Wijkt de code af
van dit document, dan is het document leidend.

## Openstaand

- Echte fotografie vervangt de placeholders (`.ph` elementen met `data-label`)
- Contactformulieren zijn nog HTML-only en moeten aan een endpoint gekoppeld
- SEO-basis: meta descriptions, Open Graph, sitemap.xml, schema.org
- Social links in de footer hebben nog geen href

## Publiceren

Upload de bestanden uit de repo-root naar de webroot van de hosting
(bijv. `public_html/`) via FTP/SFTP. `docs/`, `divi-exports/` en `README.md`
hoeven niet mee naar de server.
