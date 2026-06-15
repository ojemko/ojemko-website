# Ojemko Website

A simple premium one-page window cleaning company website built with Next.js. It is designed to be easy to edit, fast to load, and simple to deploy on Vercel's free tier.

## Run Locally

Install dependencies:

```bash
npm install
```

Start the local website:

```bash
npm run dev
```

Open this in your browser:

```text
http://localhost:3000
```

## Edit The Main Details

Most beginner-friendly content lives in `app/page.tsx`.

- Company name, phone, email, and service area: edit the `company` object near the top.
- Why Choose Us: edit the `reasons` list.
- Process steps: edit the `steps` list.

Colors and visual styling live in `app/globals.css`.

- Main text: `--ink`
- Background: `--paper`
- Accent teal: `--teal`
- Deeper teal: `--teal-deep`
- Deep navy: `--navy`
- Charcoal: `--charcoal`

The hero photo is stored at `public/images/window-cleaning-hero.png` and referenced inside `app/globals.css` in the `.hero` background. Replace that file later with your own real window cleaning photo for a more authentic local feel.

The small circular logo is stored at `public/images/ojemko-logo.png`.
The long top-left wordmark is stored at `public/images/ojemko-logo-wordmark.png`.

## Future Sections To Add Later

These sections were intentionally removed from the live page for now. Add them back once the business has real material to show:

- Service expansion: residential cleaning, commercial cleaning, carpet cleaning, or other future services.
- Results: before/after window cleaning photos from real jobs.
- Testimonials: real client reviews once customers have given permission.
- Personal note: add a short local-owner section once the tone is ready. Keep it warm and simple, focused on careful work, direct communication, and being based in Rockland.
- Future photo idea: use a real work photo from the side or from behind, not necessarily showing a face, to make the business feel more personal and trustworthy.

## Quote Form Options

The quote form is frontend-only right now.

Recommended simplest free option: use Formspree.

1. Create a free Formspree account.
2. Create a new form.
3. Copy the form endpoint URL.
4. Add it to the form in `app/page.tsx` like this:

```tsx
<form className="quote-form" action="YOUR_FORMSPREE_URL" method="POST">
```

Other options:

- `mailto:` link: easiest, but less polished and depends on the visitor's email app.
- Vercel serverless function: more flexible, but requires a little backend code and an email provider.

## Deploy To Vercel

After you test locally:

1. Create a GitHub repository.
2. Commit this project to GitHub.
3. Go to [Vercel](https://vercel.com).
4. Import the GitHub repository.
5. Keep the default Next.js settings.
6. Click Deploy.

Vercel should automatically detect Next.js.

## Files Not To Commit

These are already included in `.gitignore`:

- `node_modules`
- `.next`
- `.env`
- `.env.local`
- log files

Commit the source files like `app/page.tsx`, `app/globals.css`, `package.json`, and `README.md`.
