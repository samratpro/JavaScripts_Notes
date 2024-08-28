## Architecture

### manifest.json
```json
{
  "manifest_version": 3,
  "name": "Title Scraper",
  "version": "1.0",
  "description": "A simple extension to scrape the current page's title.",
  "permissions": [
    "activeTab",
    "scripting",
    "storage",
    "geolocation"
  ],
  "action": {
    "default_popup": "./popup.html",
    "default_icon": {
      "16": "icons/icon16.png",
      "48": "icons/icon48.png",
      "128": "icons/icon128.png"
    }
  },
  "icons": {
    "16": "icons/icon16.png",
    "48": "icons/icon48.png",
    "128": "icons/icon128.png"
  }
}
```
