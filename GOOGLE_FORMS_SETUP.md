# Google Forms Integration Setup

## ✅ What's Already Done

Your booking page now has a beautiful professional form that:
- Shows dynamic pricing calculation
- Validates all required fields
- Collects all user data
- Shows confirmation modal
- Redirects to Google Forms for final submission

## 🔧 How to Connect Your Google Form

### Step 1: Create Google Form
1. Go to [forms.google.com](https://forms.google.com)
2. Click "+" to create new form
3. Title: "West Coast BJJ Camp Registration"

### Step 2: Add These Exact Questions

Copy these questions **exactly** as written:

1. **Fullständigt namn** (Short answer, Required)
2. **E-postadress** (Short answer, Required) 
3. **Telefonnummer** (Short answer, Required)
4. **Födelsedatum** (Date, Required)
5. **BJJ-nivå** (Multiple choice, Required)
   - Nybörjare (0-6 månader)
   - Vitt bälte
   - Blått bälte
   - Lila bälte
   - Brunt bälte
   - Svart bälte
6. **Nuvarande klubb/academy** (Short answer)
7. **Välj paket** (Multiple choice, Required)
   - Dagspass - Fredag (450 SEK)
   - Dagspass - Lördag (450 SEK)
   - Dagspass - Söndag (450 SEK)
   - Baspaket (1,200 SEK)
   - Fullt paket (2,950 SEK)
8. **Rumstyp** (Multiple choice)
   - Delat rum (inkluderat)
   - Privat rum (+800 SEK)
9. **T-shirt storlek** (Multiple choice)
   - XS, S, M, L, XL, XXL
10. **Specialkost/Allergier** (Paragraph)
11. **Nödkontakt (namn & telefon)** (Short answer, Required)
12. **Rabattkod** (Short answer)
13. **Övrig information** (Paragraph)
14. **Nyhetsbrev** (Multiple choice)
    - Ja, jag vill få nyhetsbrev
    - Nej tack

### Step 3: Get Your Form ID
1. In your Google Form, click "Send"
2. Look at the URL: `https://docs.google.com/forms/d/FORM_ID_HERE/edit`
3. Copy the FORM_ID_HERE part

### Step 4: Update Your Website
1. Open `pages/booking.html` 
2. Find line 330: `const baseUrl = 'https://docs.google.com/forms/d/YOUR_GOOGLE_FORM_ID/viewform';`
3. Replace `YOUR_GOOGLE_FORM_ID` with your actual form ID

### Step 5: Test It!
1. Go to your booking page
2. Fill out the form
3. Click "Slutför bokning →"
4. Confirm it opens your Google Form

## 🎯 Optional: Pre-fill Google Form

To automatically fill the Google Form with user data:

1. In your Google Form, click "Send" → "Link" → "Shorten URL" (uncheck)
2. Fill out your form with test data
3. Submit it
4. Check the URL - it will show entry IDs like `entry.123456789=testdata`
5. Copy those entry IDs into the JavaScript code

## 📊 View Responses

1. In your Google Form, click "Responses" tab
2. Click the Google Sheets icon to create a spreadsheet
3. All bookings will appear in this spreadsheet automatically!

## 📧 Email Notifications

1. In your form responses spreadsheet
2. Go to Extensions → Apps Script
3. Add this code to get email notifications:

```javascript
function onFormSubmit(e) {
  const response = e.values;
  const email = "info@westcoastbjjcamp.se";
  const subject = "New BJJ Camp Registration";
  const body = `New registration received:\n\nName: ${response[1]}\nEmail: ${response[2]}\nPackage: ${response[7]}`;
  
  GmailApp.sendEmail(email, subject, body);
}
```

4. Set up trigger: Triggers → Add Trigger → Form Submit

## ✅ You're Done!

Your professional booking system is now ready with:
- Beautiful custom form design
- Dynamic pricing calculation
- Google Forms backend
- Automatic spreadsheet data collection
- Optional email notifications

The user experience is seamless and professional!