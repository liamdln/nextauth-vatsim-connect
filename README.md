# VATSIM Connect in Next.js 13 and NextAuth

## Why

Next.js 13 introduces the new app router feature that breaks most NextAuth implementations. I've done some searching and have moved some files around
to get it working again with VATSIM Connect.

## Running

This app uses:

- Next.js 13
- NextAuth v4
- Prisma v5
- MySQL Database (any version that works with Prisma)

If you'd like to use a different database, see Change The Database.

Ensure you have implemented the environment variables in found in `.env.example` in your own `.env` file.

Then, simply download and extract wherever you want. With your favorite terminal, navigate to the extracted files and run:

```bash
npm i
```

Then, after ensuring your database is running, run:

```bash
npm run dev
```

This starts a development server. More build/run scripts can be found in `package.json`.

## What Changed?

The `[...nextauth].ts` file changed so that it exports a handler function. The configuration was moved to `./libs/auth/auth.ts`.
NextAuth have done some [funky magic](https://next-auth.js.org/configuration/initialization#route-handlers-app) that detects if NextAuth is being initialised in a Route Handler.

The JSX in `./app/layout.tsx` has been wrapped in a custom context that takes the session as a prop. This is because the `SessionProvider` context cannot be used on a server component (at least, that is what I understood from the errors I was getting). The session is fetched in `layout.tsx` as it's a server component (doesn't have `use client` at the top of the page) as to get the session from the client's side, you'd have to make a GET request to `/api/auth/session` and passed to `auth-context.ts`, where it provides the session to the rest of the app.

## Change The Database

This example uses [Prisma](https://www.prisma.io/). To change the database, follow the instructions from Prisma.

## Contributing

I'm very new to Next.js, and very much a self taught web developer. If you see something that isn't quite right, please let me know, or feel free to correct it yourself.
I appreciate all feedback!
