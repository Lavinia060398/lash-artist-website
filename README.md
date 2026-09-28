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

## Publicare (GitHub + Vercel)

1. Urcă proiectul într-un repository GitHub.
2. Pe [vercel.com](https://vercel.com) → **Add New… → Project** → importă repository-ul. Vercel detectează Next.js automat; nu e nevoie de setări.
3. În **Settings → Environment Variables** adaugă:
   - `NEXT_PUBLIC_SITE_URL` = `https://domeniul-tau.ro` (fără `/` la final) — folosit pentru canonical, sitemap și Open Graph
   - opțional `NEXT_PUBLIC_GSC_VERIFICATION` = codul de verificare Google Search Console
4. **Deploy.** Fiecare `git push` pe ramura principală republică site-ul automat.

## Conectarea domeniului (.ro)

1. Vercel → proiect → **Settings → Domains** → adaugă `domeniul-tau.ro` și `www.domeniul-tau.ro` (setează unul să redirecționeze către celălalt).
2. La registrarul domeniului (ex. ROTLD / furnizorul tău), în zona DNS:
   - înregistrare **A** pentru `@` → IP-ul afișat de Vercel (de obicei `76.76.21.21`)
   - înregistrare **CNAME** pentru `www` → valoarea afișată de Vercel (ex. `cname.vercel-dns.com`)
   - sau, alternativ, schimbă nameserverele către cele ale Vercel.
3. Așteaptă propagarea DNS (de la câteva minute la 48 h). Certificatul HTTPS se emite automat.
4. Actualizează `NEXT_PUBLIC_SITE_URL` cu domeniul final și redeploy.

## Google Search Console

1. Adaugă proprietatea `https://domeniul-tau.ro` în Search Console.
2. Verifică prin înregistrare DNS TXT sau prin `NEXT_PUBLIC_GSC_VERIFICATION`.
3. Trimite sitemap-ul: `https://domeniul-tau.ro/sitemap.xml`.

Paginile de preview Vercel (`*.vercel.app`) au automat `robots.txt` cu `Disallow`, ca să nu fie indexate; doar producția e indexabilă.
