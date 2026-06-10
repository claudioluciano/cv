# Claudio Luciano CV

Simple web app that renders a minimalist, print-friendly CV.

Built with Next.js, React, shadcn/ui, Tailwind CSS, and Biome.

# Features

- Portuguese and English routes: `/pt` and `/en`
- Default Portuguese CV at `/`
- Print-friendly layout
- Static export under `/cv`
- Localized content in [src/data/resume-data.tsx](./src/data/resume-data.tsx)
- Structured data and sitemap for search engines
- Built using Next.js 16, React 19, TypeScript, shadcn/ui, Tailwind CSS, and Biome

# Getting Started Locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the local server:

   ```bash
   npm run dev
   ```

3. Open the local app:

   - Portuguese: http://localhost:3000/cv or http://localhost:3000/cv/pt
   - English: http://localhost:3000/cv/en

4. Edit CV content in [src/data/resume-data.tsx](./src/data/resume-data.tsx).

# Scripts

```bash
npm run dev
npm run build
npm run check
npm run check:fix
npm run format
npm run format:fix
```

# Docker

Build the container:

```
docker compose build
```

Run the container:

```
docker compose up -d
```

Stop the container:

```
docker compose down
```

# License

[MIT](https://choosealicense.com/licenses/mit/)
