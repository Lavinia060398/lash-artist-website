# Eyelash by Lavinia — website

Site de prezentare pentru Eyelash by Lavinia (extensii de gene, laminare, cursuri) — Timișoara.

**Tehnologii:** Next.js 15 (App Router) · TypeScript · Tailwind CSS 3 · next/image · next/font

## Pagini

| URL | Pagina |
| --- | --- |
| `/` | Acasă (despre, servicii, galerie, politica programărilor, îngrijire, cursuri, contact) |
| `/portofoliu` | Portofoliu (22 de lucrări) |
| `/cursuri/curs-de-baza-extensii-gene` | Curs de bază extensii gene |
| `/cursuri/curs-laminare-gene-sprancene` | Curs laminare gene & sprâncene |
| `/cursuri/curs-perfectionare-extensii-gene` | Curs de perfecționare 1:1 |

`/galerie` → redirecționează la `/portofoliu`; `/cursuri` → `/#cursuri`.

## Unde se modifică textele

- `src/data/site.ts` — telefon, Instagram, Facebook, adresă, program, mesajul WhatsApp, domeniu
- `src/data/services.ts` — servicii și prețuri
- `src/data/courses.ts` — cele 3 cursuri (program, beneficii, ce vei învăța, preț)
- `src/data/portfolio.ts` — pozele din portofoliu (ordine, text alternativ)
- `src/data/care.ts` — îngrijirea genelor și politica de anulare

## Rulare locală

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # verificare build de producție
```

Necesită Node.js 20.9 sau mai nou.

## Publicare (GitHub + Netlify)

1. Codul e în GitHub: `Lavinia060398/lash-artist-website`.
2. Pe [app.netlify.com](https://app.netlify.com) → **Add new project → Import an existing project → GitHub** → alege `lash-artist-website`.
3. Setările se completează singure din `netlify.toml` (build `npm run build`, Node 22). Apasă **Deploy**.
4. În **Project configuration → Environment variables** adaugă:
   - `NEXT_PUBLIC_SITE_URL` = `https://laviniaeyelashes.ro` (fără `/` la final)
   - opțional `NEXT_PUBLIC_GSC_VERIFICATION` = codul Google Search Console
   apoi **Deploys → Trigger deploy**.
5. Fiecare `git push` pe `main` republică site-ul automat. Deploy preview-urile nu sunt indexate de Google (`robots.txt` le blochează).

## Conectarea domeniului (.ro)

1. Netlify → proiect → **Domain management → Add a domain** → `laviniaeyelashes.ro` (Netlify adaugă automat și `www`).
2. La registrarul domeniului, fie:
   - schimbi **nameserverele** cu cele 4 afișate de Netlify (varianta cea mai simplă), fie
   - păstrezi DNS-ul actual și adaugi: **A** pentru `@` → `75.2.60.5`, **CNAME** pentru `www` → `numele-proiectului.netlify.app` (verifică valorile exacte afișate de Netlify).
3. După propagare (minute – 48 h), Netlify emite automat certificatul HTTPS.
4. Actualizează `NEXT_PUBLIC_SITE_URL` cu domeniul final și redeploy.

## Google Search Console

1. Adaugă proprietatea `https://laviniaeyelashes.ro` în Search Console.
2. Verifică prin înregistrare DNS TXT sau prin `NEXT_PUBLIC_GSC_VERIFICATION`.
3. Trimite sitemap-ul: `https://laviniaeyelashes.ro/sitemap.xml`.

Deploy preview-urile (Netlify / Vercel) au automat `robots.txt` cu `Disallow`, ca să nu fie indexate; doar producția e indexabilă.
