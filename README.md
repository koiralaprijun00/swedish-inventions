# BeerCount 🍺

BeerCount is a mobile-first Next.js app for tracking every beer you drink. It uses Firebase Auth for email/password login and Firestore to store your beer stats, with a playful UI built in Tailwind CSS.

## Features
- Email/password signup & login with Firebase Auth
- Beer search with quick "+1" adds and per-beer detail counters
- Dashboard showing totals, unique beers, and recent activity
- Seeded demo beers for quick testing
- Warm, friendly BeerCount styling out of the box

## Getting started
1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Add Firebase config**
   - Copy your Firebase project keys into environment variables (e.g. `.env.local`).
   - Variables read by `src/lib/firebase.ts`:
     ```bash
     NEXT_PUBLIC_FIREBASE_API_KEY=
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
     NEXT_PUBLIC_FIREBASE_APP_ID=
     ```
   - Or replace the placeholder values directly in `src/lib/firebase.ts`.

3. **Run the dev server**
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000 and sign up with any email/password to start tracking.

## Production builds
```bash
npm run build
npm start
```

## Linting
```bash
npm run lint
```

## Pointing to your new GitHub repo
You mentioned creating `https://github.com/koiralaprijun00/beer-count.git`. To push this code there:
```bash
git remote add origin https://github.com/koiralaprijun00/beer-count.git
git branch -M main
git push -u origin main
```
If a different remote already exists, replace `git remote add` with `git remote set-url origin <url>`.

## Notes
- `next-sitemap.config.js` now targets `https://beer-count.vercel.app` by default; set `SITE_URL` for your deployment domain.
- Seeded beers live in `src/lib/sampleBeers.ts` and can be customized.
