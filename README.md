# STMS User Guides

Static documentation website for STMS, built with plain HTML, CSS and JavaScript.

## Project structure

```text
stms-guides/
├── index.html
├── css/style.css
├── js/main.js
├── guides/
│   ├── demerits-detentions.html
│   └── guide-template.html
├── images/goal-check/
└── README.md
```

## Run locally
1. Open this folder in VS Code.
2. Install the **Live Server** extension.
3. Open `index.html`.
4. Right-click and select **Open with Live Server**.

## Add a new guide
1. Copy `guides/guide-template.html` and rename the copy.
2. Replace the title, description, sections and steps.
3. Put screenshots in a dedicated folder under `images/`.
4. Use relative paths from the guide page, e.g. `../images/new-guide/screenshot.png`.
5. Add a new guide card to `index.html`.

## Publish with GitHub Pages
1. Push the project files to the root of a GitHub repository.
2. Open **Settings → Pages**.
3. Select **Deploy from a branch**, branch `main`, folder `/(root)`.
4. Save. The URL will look like `https://USERNAME.github.io/REPOSITORY/`.

## Important
GitHub Pages sites are public by default. Do not publish student personal data, passwords, confidential records or screenshots containing information that should only be visible to staff. Use access-controlled hosting for staff-only documentation.
