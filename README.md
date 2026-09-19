# Personal Portfolio

A polished, interactive portfolio built with Next.js, TypeScript, and Tailwind CSS. It presents projects, experience, technical skills, a blog, achievements, a gallery, a downloadable resume, and a configurable AI-powered chat experience.

The portfolio content is centralized in `src/data/portfolio.ts`, so personal details, projects, links, skills, and experience can be updated without changing the page components.

## Highlights

- Responsive App Router portfolio with light/dark themes and English/Indonesian translations.
- Dedicated pages for projects, experience, skills, achievements, blog posts, gallery, contact, and resume.
- Rich visual interactions using Framer Motion, GSAP, Lenis, Three.js, React Three Fiber, and React Three Rapier.
- API routes for chat, contact mail, GitHub statistics/languages, WakaTime, Kaggle, LeetCode, and image galleries.
- Image optimization for approved remote image sources and modern AVIF/WebP formats.
- Static assets, certificates, and a resume served from `public/`.

## Technology

- [Next.js](https://nextjs.org/) 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS and Radix-based UI primitives
- `next-intl` for localization
- Three.js / React Three Fiber / Rapier for interactive 3D scenes
- Nodemailer for the contact form

## Project structure

```text
src/
├── app/                 # Pages, layouts, server actions, and API route handlers
├── components/          # Shared UI, visual effects, layout, and page sections
├── data/portfolio.ts    # Portfolio content and project data
├── hooks/               # Reusable React hooks
├── i18n/                # Locale configuration and request setup
├── lib/                 # Shared utilities
├── providers/           # Theme, localization, and scroll providers
└── styles/              # Global stylesheet
public/                  # Images, PDFs, logos, and other static assets
messages/                # English and Indonesian translation messages
```

## Prerequisites

- Node.js 20.9 or later (Node.js 22 LTS recommended)
- npm 10 or later

## Run locally

1. Clone the repository and enter it.

   ```bash
   git clone https://github.com/<your-github-username>/personal-portfolio.git
   cd personal-portfolio
   ```

2. Install the locked dependency set.

   ```bash
   npm ci
   ```

3. Copy the environment template and set the integrations you want to enable.

   ```bash
   cp .env.example .env.local
   ```

   On Windows PowerShell:

   ```powershell
   Copy-Item .env.example .env.local
   ```

4. Start the development server.

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Use `.env.local` for local credentials. It is intentionally ignored by Git. All variables are optional unless the related feature is enabled.

| Variable | Used by | Notes |
| --- | --- | --- |
| `NEXT_PUBLIC_GITHUB_USERNAME` | GitHub widgets | Public GitHub username displayed by data endpoints. |
| `GITHUB_TOKEN` | GitHub API routes | Personal access token for higher GitHub API limits. |
| `WAKATIME_API_KEY` | WakaTime API routes | WakaTime API key. |
| `GROQ_API_KEY` | Chat API | Groq provider key for the chatbot. |
| `GEMINI_API_KEY` | Chat API | Gemini fallback/provider key for the chatbot. |
| `EMAIL_USER` | Contact API | Gmail address used to send contact-form messages. |
| `EMAIL_APP_PASSWORD` | Contact API | Gmail app password; never use an account password. |

See [`.env.example`](.env.example) for the required names. Do not commit real keys or passwords.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Create an optimized production build. |
| `npm start` | Run the production server after a build. |
| `npm run lint` | Run the configured Next.js lint command. |

## Customization

1. Update identity, social links, projects, work history, skills, and content in `src/data/portfolio.ts`.
2. Replace logos, images, certificates, and the resume in `public/`.
3. Edit translation strings in `messages/en.json` and `messages/id.json`.
4. Update the site metadata in `src/app/layout.tsx` before deployment.
5. If you introduce new remote image hosts, allow them in `next.config.ts` under `images.remotePatterns`.

## Deployment

The application can be deployed to Vercel or any platform that supports Node.js and Next.js.

1. Create a new project from this repository in your hosting provider.
2. Add the same environment variables from `.env.local` to the provider's production environment.
3. Build with `npm run build` and start with `npm start` when your platform requires explicit commands.

Before going live, update `metadataBase`, Open Graph values, and social handles in `src/app/layout.tsx` to the production domain and profile.

## Security and repository hygiene

- `.env*`, build artifacts, dependencies, logs, editor settings, and private key files are excluded through `.gitignore`.
- `.env.example` is tracked as a safe, credential-free template.
- `package-lock.json` is tracked to ensure reproducible installs via `npm ci`.

## License

This project is available under the [MIT License](LICENSE).
