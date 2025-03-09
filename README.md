# AUV IIITDM Website

Modern website for AUV IIITDM Kancheepuram team built with React and modern web technologies.

## Live Website

https://auviiitdm.github.io/

## Tech Stack

- React 
- Vite
- CSS Modules
- Font Awesome
- Bootstrap 4.5
- Animate.css
- Google Maps API
- Instagram API

## Development Setup

1. Clone this repository:
```bash
git clone https://github.com/auviiitdm/auviiitdm.github.io.git
cd auviiitdm.github.io
```

2. Create a `.env` file in the root directory with the following API keys:
```
REACT_APP_GMAPS_API_KEY=your_google_maps_api_key
REACT_APP_INSTA_API_KEY=your_instagram_api_key
```

3. Install dependencies:
```bash
npm install
```

4. Start development server:
```bash
npm run dev
```

## Deployment

The website is deployed using GitHub Pages. To deploy updates:

1. Make sure all changes are committed and pushed to the main branch

2. Run the deployment command:
```bash
npm run deploy
```

This will:
- Build the project
- Push the built files to the `gh-pages` branch
- Update the live website

## API References

- [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview)
- [Instagram oEmbed API](https://developers.facebook.com/docs/instagram/oembed/)

## Contributing

Please read [INSTRUCTIONS.md](./INSTRUCTIONS.md) for detailed information about updating different sections of the website.
