# Bangladesh Odyssey 🇧🇩

A cinematic, foreign-traveller-focused Bangladesh tourism website built with **Next.js + TypeScript + MongoDB/Mongoose**.

## Included
- Immersive cinematic homepage with video hero and animated UI
- 8 destination guides: Cox's Bazar, Bandarban, Sylhet, Moulvibazar, Chattogram, Saint Martin's Island, Dhaka, Rajshahi
- Attraction galleries, origin/history stories, best season, transport instructions, indicative local fares, safety tips and emergency contacts
- Login/signup with hashed passwords and JWT httpOnly cookies
- Hotel/flight booking request flow saved to MongoDB
- Responsive design for desktop/tablet/mobile
- Vercel-friendly Next.js App Router structure

## Run locally
```bash
npm install
cp .env.example .env.local
npm run dev
```

Set `MONGODB_URI` and `JWT_SECRET` in `.env.local` before using signup/login/booking.

## Production
```bash
npm run build
npm start
```

## Media
The demo uses remote high-resolution image/video sources so the ZIP stays lightweight. For a production tourism platform, replace these with licensed 4K Bangladesh footage/photos from your chosen media provider or your own shoots. The destination data is centralized in `lib/destinations.ts`.

## Booking integration
The included booking flow stores requests in MongoDB. It intentionally does not pretend to provide live hotel/flight inventory. Connect your preferred hotel/flight provider and payment gateway in `app/api/bookings/route.ts` when you are ready.

## Safety data
The project uses Bangladesh's National Emergency Service **999** and Tourist Police contacts sourced from official Bangladesh Police / Tourist Police materials. Transport prices are explicitly labelled indicative because local fares can vary by route, traffic, season and negotiation.


## Visual refresh
The latest build uses destination-specific Wikimedia Commons photography, responsive 16:9 cinematic YouTube embeds, and a stricter spacing/alignment system. See `MEDIA_GUIDE.md` for attribution and production-media guidance.


### Homepage cinematic hero
The homepage hero now uses a muted, looping YouTube embed of **Cox’s Bazar From The Sky — Drone Cinematic View 4K** (video ID `E-HLR4zVqyQ`) with the destination image retained as a visual fallback. Replace it with your own licensed/self-produced footage before commercial launch if required by the video creator’s license.
