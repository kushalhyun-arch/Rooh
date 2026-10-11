# Rooh

Rooh is a React single-page experience for discovering local events, concerts, and party experiences.

## Requirements

- Node.js 18 or newer
- npm 9 or newer

## Development

```powershell
npm install
Copy-Item .env.example .env
npm run dev
```

Vite prints the local URL after the development server starts. Create a production build with `npm run build`; preview it locally with `npm run preview`.

On Windows, `run-dev.bat` starts the development server. `run-prod.bat` builds the app and starts the production preview.

## Project structure

- `src/App.jsx` composes the page.
- `src/components/` contains page sections and reusable UI behavior.
- `src/data/` contains the current event and ticket display data.
- `src/services/` isolates API and feedback requests from UI components.
- `src/utils/` contains visitor metadata helpers.
- `src/styles/` contains small app-specific overrides.
- `assets/css/styles.css` retains the existing visual design.

## Feedback and future backend

Without `VITE_API_BASE_URL`, feedback continues to use FormSubmit. Set `VITE_FORMSUBMIT_EMAIL` in `.env` to the destination address before production; the current destination remains as a fallback.

When a backend is available, set `VITE_API_BASE_URL` to its API root, for example `http://localhost:4000/api`. The feedback service then sends JSON to `POST /feedback`. Keep database credentials and other secrets on the backend; Vite-exposed `VITE_` values are public in the browser bundle.

The booking form is still a front-end demonstration and does not create a reservation. A future booking endpoint and database model can be added behind `src/services/` without coupling those requests to the page components.

## Visitor tracking

Visitor ID and visit count are stored in `localStorage`. Page URL, referrer, browser, timezone, and timestamp are included in the feedback submission metadata.
