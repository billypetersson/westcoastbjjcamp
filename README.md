# Westcoast BJJ Camp Website

En modern, responsiv hemsida för Westcoast BJJ Camp i Strömstad, Sverige.

## 📁 Filstruktur

```
westcoast-bjj-camp/
├── index.html              # Huvudsaklig HTML-fil
├── css/
│   └── style.css          # Alla stilmallar
├── js/
│   └── main.js           # JavaScript-funktioner
├── images/
│   ├── logo.svg          # Logotyp
│   ├── hero-bg.jpg       # Hero-bakgrundsbild
│   ├── og-image.jpg      # Social media delningsbild
│   ├── apple-touch-icon.png
│   ├── favicon.ico
│   ├── icons/            # Ikoner för olika sektioner
│   │   ├── location.svg
│   │   ├── belt.svg
│   │   ├── home.svg
│   │   ├── community.svg
│   │   ├── facebook.svg
│   │   ├── instagram.svg
│   │   └── youtube.svg
│   ├── instructors/      # Instruktörsbilder
│   │   ├── marcus.jpg
│   │   ├── sofia.jpg
│   │   └── guest.jpg
│   └── gallery/          # Galleriblider
│       ├── training-1.jpg
│       ├── beach-training.jpg
│       ├── group-photo.jpg
│       ├── evening-bbq.jpg
│       ├── open-mat.jpg
│       └── sunrise-yoga.jpg
└── README.md              # Denna fil

## 🚀 Kom igång

### 1. Ladda ner filerna
Spara alla filer i rätt mappstruktur enligt ovan.

### 2. Lägg till bilder
Du behöver lägga till följande bilder:
- **Hero-bakgrund** (1920x1080px rekommenderat)
- **Logotyp** (SVG eller PNG, transparent bakgrund)
- **Instruktörsfoton** (400x400px rekommenderat)
- **Galleriblider** (minst 800x600px)
- **Favicon** (16x16px och 32x32px)

### 3. Anpassa innehåll
Redigera `index.html` för att:
- Uppdatera text och information
- Ändra datum för lägret
- Uppdatera priser
- Lägga till rätt kontaktinformation
- Uppdatera sociala medier-länkar

### 4. Konfigurera formulär
Formuläret behöver anslutas till en backend-tjänst. Välj ett alternativ:

#### Alternativ A: Google Sheets
1. Skapa ett Google Apps Script
2. Koppla till ett Google Sheets-dokument
3. Uppdatera URL:en i `main.js`

#### Alternativ B: Mailchimp
1. Skapa ett Mailchimp-konto
2. Skapa en lista och formulär
3. Uppdatera URL:en i `main.js`

#### Alternativ C: Egen server
1. Skapa en server-endpoint som tar emot POST-requests
2. Uppdatera URL:en i `main.js`

## 📱 Funktioner

- ✅ Fullt responsiv design
- ✅ Smooth scrolling
- ✅ Animationer vid scroll
- ✅ FAQ accordion
- ✅ Bildgalleri med lightbox
- ✅ Formulärvalidering
- ✅ SEO-optimerad
- ✅ Snabb laddningstid

## 🎨 Anpassning

### Färger
Ändra färgerna i `css/style.css`:
```css
:root {
    --primary-blue: #2563eb;    /* Huvudfärg */
    --light-blue: #dbeafe;      /* Ljus accent */
    --dark-blue: #1e40af;       /* Mörk accent */
}
```

### Typsnitt
Sidan använder Inter från Google Fonts. För att ändra:
1. Välj ett nytt typsnitt på [Google Fonts](https://fonts.google.com)
2. Uppdatera `<link>` i `index.html`
3. Ändra `font-family` i `css/style.css`

## 🌐 Publicering

### GitHub Pages (Gratis)
1. Skapa ett GitHub-repository
2. Ladda upp alla filer
3. Gå till Settings → Pages
4. Välj "Deploy from a branch"
5. Välj "main" branch
6. Din sida publiceras på: `https://[användarnamn].github.io/[repo-namn]/`

### Egen domän
1. Köp domänen westcoastbjjcamp.se
2. Lägg till en `CNAME`-fil med domännamnet
3. Konfigurera DNS-inställningar hos din domänleverantör

## 📧 E-postintegration

För att ta emot formulärdata via e-post:

### SendGrid
```javascript
// Lägg till i main.js
async function sendEmail(formData) {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer YOUR_API_KEY',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            personalizations: [{
                to: [{ email: 'info@westcoastbjjcamp.se' }]
            }],
            from: { email: 'noreply@westcoastbjjcamp.se' },
            subject: 'Ny registrering - Westcoast BJJ Camp',
            content: [{
                type: 'text/html',
                value: `
                    <h2>Ny registrering</h2>
                    <p><strong>Namn:</strong> ${formData.fullName}</p>
                    <p><strong>E-post:</strong> ${formData.email}</p>
                    <p><strong>Telefon:</strong> ${formData.phone}</p>
                    <p><strong>Bälte:</strong> ${formData.beltLevel}</p>
                `
            }]
        })
    });
}
```

## 🔍 SEO-tips

1. **Uppdatera meta-taggar** i `index.html`
2. **Lägg till strukturerad data** för event
3. **Skapa en sitemap.xml**
4. **Lägg till robots.txt**
5. **Optimera bildstorlekar** (använd WebP-format)

## 📊 Analytics

Lägg till Google Analytics eller Plausible:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_ID');
</script>
```

## 🐛 Felsökning

### Bilder visas inte
- Kontrollera filsökvägar
- Se till att bilderna ligger i rätt mappar
- Kontrollera filnamn (case-sensitive)

### Formulär fungerar inte
- Öppna utvecklarkonsolen (F12)
- Kontrollera för JavaScript-fel
- Verifiera att backend-URL är korrekt

### Mobilmenyn fungerar inte
- Kontrollera att JavaScript laddas
- Verifiera att ID:n matchar mellan HTML och JS

## 📞 Support

För hjälp med hemsidan, kontakta:
- E-post: [din-email@exempel.se]
- GitHub Issues: [github.com/ditt-användarnamn/westcoast-bjj-camp/issues]

## 📄 Licens

Detta projekt är skapat för Westcoast BJJ Camp. Alla rättigheter förbehållna.

---

Skapad med ❤️ för BJJ-communityn