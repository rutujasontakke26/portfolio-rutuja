# Rutuja Sontakke's Portfolio

A responsive personal portfolio built with React 18, Vite, Tailwind CSS, Framer Motion and Lucide React. Editable profile and project details live in `src/data/portfolio.js`.

## Run locally

1. Install Node.js 20.19+ or 22.12+.
2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

4. Create and preview a production build:

   ```sh
   npm run build
   npm run preview
   ```

## Update portfolio content

- Edit contact details, skills, projects, education placeholders and social links in `src/data/portfolio.js`.
- Replace `public/rutuja-sontakke-resume.pdf` with the latest resume, keeping the same filename or updating the `resume` value.
- The contact form uses a `mailto:` handoff and does not send data to a server. To receive submissions directly, connect an EmailJS or Formspree endpoint before publishing.
- Add project screenshots under `public/images/` and update their references in `src/data/portfolio.js`.

## Deploy to Vercel

1. Import the repository in Vercel.
2. Keep the framework preset as **Vite** and the build command as `npm run build`.
3. Set the output directory to `dist`, then deploy.

## Deploy to GitHub Pages

1. Push the repository to GitHub. The included `.github/workflows/deploy.yml` builds the site and publishes `dist` on pushes to `main`.
2. In the repository's **Settings → Pages**, select **GitHub Actions** as the deployment source.
3. For a user/organization site or custom domain, change the workflow's `VITE_BASE_PATH` from `/${{ github.event.repository.name }}/` to `/`.

To build locally for a project site, set the Vite base path to the repository name first. In PowerShell:

```powershell
$env:VITE_BASE_PATH = "/your-repository-name/"
npm run build
```
