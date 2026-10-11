# Rooh

A polished single-page landing site for a startup that helps people discover local events, concerts, and party experiences.

## Project structure

- `index.html` – main landing page
- `assets/css/styles.css` – site styling and animations
- `assets/js/main.js` – interactions, reveal effects, and visitor tracking metadata

## Local preview

```bash
cd "C:\Users\kusha\OneDrive\Documents\Web"
python -m http.server 3000
```

Then open:

http://localhost:3000

## Feedback form setup

The feedback form is configured to send submissions to FormSubmit. Replace the placeholder email in `index.html` before going live:

```html
<form method="POST" action="https://formsubmit.co/hello@rooh.co">
```

Use your real business email in place of `hello@rooh.co`.

## Visitor tracking

The page stores a unique visitor ID using `localStorage` and appends metadata such as:

- visitor ID
- visit count
- page URL
- referrer
- browser user agent
- timezone
- timestamp

This data is included in the hidden tracking field so it arrives with the feedback email.
