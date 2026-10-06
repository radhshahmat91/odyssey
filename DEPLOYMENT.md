# Deployment: MongoDB Atlas + Vercel

1. Push this project to GitHub.
2. Create a MongoDB Atlas cluster and database named `bangladesh_odyssey` (database name can also be inferred from your URI).
3. In Vercel, import the GitHub repository.
4. Add environment variables:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `NEXT_PUBLIC_SITE_URL`
5. Deploy.
6. Test `/`, `/destinations`, `/destinations/coxs-bazar`, `/signup`, `/login`, and `/book`.

The public browsing experience does not require MongoDB. MongoDB is required for account creation, login and booking requests.
