# 🖼️ Bilde-migrasjon Guide

## 🚀 Enkleste måte å flytte bildene til Vercel

### **Steg 1: Last ned bildene**

Kjør dette kommandoen for å se hvilke bilder som trengs:

```bash
pnpm run migrate:images
```

### **Steg 2: Last ned bildene manuelt**

Klikk på disse linkene og last ned bildene:

**Logoer:**

- [logo_transparent.png](https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/logo_transparent.png) ✅ **Du har denne!**
- [logo_sirkel.avif](https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/logo_sirkel.avif) ✅ **Du har denne!**

**Undergruppe bilder:**

- [styret.png](https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/subGroup/styret.png) ✅ **Du har denne!**
- [bedrift.png](https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/subGroup/bedrift.png) ✅ **Du har denne!**
- [marked.png](https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/subGroup/marked.png) ✅ **Du har denne!**
- [logistikk.png](https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/subGroup/logistikk.png) ✅ **Du har denne!**
- [fa.png](https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/subGroup/fa.png) ✅ **Du har denne!**

**Innholdsbilder:**

- [bedriftsbilde.avif](https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/bedriftsbilde.avif) ✅ **Du har denne!**
- [instagram.avif](https://iglqmuqbolugyifhsrfh.supabase.co/storage/v1/object/public/bilder/instagram.avif) ✅ **Du har denne!**

**Bedriftslogoer:**

- Disse er dynamiske basert på partnernavn og finnes allerede i `public/images/company_logos/`
- Ingen ekstra nedlasting nødvendig

### **Steg 3: Plasser bildene i riktige mapper**

```
public/
  images/
    logos/
      logo_transparent.png ✅ Du har denne
      logo_sirkel.avif ✅ Du har denne
    subgroups/
      styret.png ✅ Du har denne
      bedrift.png ✅ Du har denne
      marked.png ✅ Du har denne
      logistikk.png ✅ Du har denne
      fa.png ✅ Du har denne
    content/
      bedriftsbilde.avif ✅ Du har denne
      instagram.avif ✅ Du har denne
    company_logos/
      [dynamiske bedriftslogoer] ✅ Du har disse
```

**📝 Merk:** Du kan bruke alle formater (PNG, JPG, JPEG, AVIF, WebP) - Vercel konverterer automatisk til best format for hver nettleser!

### **Steg 4: Oppdater kode**

Kjør denne kommandoen for å automatisk oppdatere alle image paths:

```bash
pnpm run update:image-paths
```

### **Steg 5: Test**

```bash
pnpm dev
```

### **Steg 6: Deploy til Vercel**

Når du deployer til Vercel, får du automatisk:

- ✅ Global CDN
- ✅ Automatisk WebP/AVIF konvertering
- ✅ Bildeoptimalisering
- ✅ Raskere lasting

## 🎯 Forventet forbedring

- **50-70% raskere** bildehastning
- **Automatisk optimalisering** av bilder
- **Bedre caching** og CDN-distribusjon
- **Redusert båndbredde** med 30-50%

## 📸 Bildeformater som støttes

**✅ Støttede formater:**

- **PNG** - Best for logoer og bilder med gjennomsiktighet
- **JPG/JPEG** - Best for fotografier og bilder uten gjennomsiktighet
- **WebP** - Moderne format, automatisk konvertering
- **AVIF** - Nyeste format, automatisk konvertering
- **SVG** - For vektorgrafikk

**🚀 Vercel optimalisering:**

- Konverterer automatisk PNG/JPG til WebP/AVIF
- Komprimerer bilder uten kvalitetstap
- Leverer best format basert på nettleser

## 🔧 Troubleshooting

Hvis noe ikke fungerer:

1. Sjekk at alle bilder er på plass: `pnpm run migrate:images`
2. Sjekk at paths er oppdatert i koden
3. Test lokalt: `pnpm dev`
4. Bygg prosjektet: `pnpm build`
