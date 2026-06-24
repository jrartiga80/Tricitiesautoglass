# Rank-and-Rent Lessons Learned
## Tri-Cities Auto Glass Build — June 2026

These are hard-won lessons from the first build. Follow every one on every future site.

---

## IMAGES — The Biggest Time Waster

**Never guess at Unsplash or stock photo URLs.**
- Guessed URLs pull wrong photos or break entirely
- Always upload directly to Cloudinary first, then use the Cloudinary secure_url in the code
- Cloudinary MCP is connected — use it every time

**Never cluster photos in one gallery section.**
- A photo grid looks amateur and out of place
- Spread photos throughout the site with purpose:
  - Hero section → dramatic "before" shot (cracked/shattered glass)
  - Why Us section → technician at work as side panel
  - Split promo section → closeup of repair tool/process
  - CTA band → friendly technician as background
  - Services section → plain uniform cards, no photos

**Always rename photos BEFORE uploading to GitHub.**
- Rename on your phone/computer first
- Then upload — GitHub does not have a rename feature after upload
- Exact filenames used: hero-bg.jpg, gallery-1.jpg through gallery-5.jpg

**Logo must always be inline SVG.**
- External image files (logo.png, logo.jpg) break if file is missing or wrong extension
- Inline SVG is built into the HTML — can never break
- Match the real logo design as closely as possible with SVG shapes

---

## SCHEMA MARKUP — Penalty Risks

**Never add aggregateRating with fake numbers.**
- A fake reviewCount (like 47) is a Google penalty risk
- Only add aggregateRating when you have real, verified Google reviews
- Remove it entirely on new sites until reviews exist

**Always update the schema image field.**
- Point it to a real image that exists on the site
- Example: `"image": "https://tricitiesautoglass.com/hero-bg.jpg"`

---

## SITE STRUCTURE

**Service area — keep it focused.**
- 3 core cities max in the main display (Kennewick, Richland, Pasco)
- 3 nearby cities as secondary (West Richland, Benton City, Prosser)
- Never list 12+ cities — looks spammy, dilutes local SEO signal

**Copyright year must always be current.**
- Check and update every time before pushing
- Currently: © 2026

**robots.txt is required before the site is considered complete.**
- Simple file, but Google needs it
- Must be in the root of the GitHub repo alongside index.html

---

## GITHUB WORKFLOW

**File extensions are case sensitive.**
- logo.PNG ≠ logo.png
- Always check exact filename in GitHub matches exactly what's in the code

**All site files go in the repo root.**
- index.html
- sitemap.xml
- robots.txt
- hero-bg.jpg, gallery-1.jpg through gallery-5.jpg
- No subfolders needed for a single-page site

---

## TOOLS & CONNECTORS

**Cloudinary MCP is connected — use it.**
- Upload images directly from URLs or local files
- Never guess at external image URLs again
- Folder: tricitiesautoglass
- Always use secure_url from the upload response

**Cloudflare Pages auto-deploys on every GitHub push.**
- Every commit to main branch = live site update in ~2 minutes
- No manual deploy steps needed

---

## CHECKLIST — Before Every Push

- [ ] All image filenames match exactly what's in the HTML
- [ ] No fake aggregateRating in schema
- [ ] Copyright year is current
- [ ] Logo is inline SVG
- [ ] Photos spread throughout site, not clustered
- [ ] Service area shows 3 core cities
- [ ] robots.txt exists in repo
- [ ] sitemap.xml exists in repo
- [ ] Phone number is correct (or CallRail number when ready)
