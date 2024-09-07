## Architecture
```
📁 html
  📄 popup.html
  📄 style.css
📁 icons
  📄 icon.png
📁 scripts
  📄 background.js
  📄 content.js
  📄 popup.js
📄 manifest.json
```

### manifest.json
```json
{
    "manifest_version": 3,
    "name": "API Auth Extension",
    "version": "1.0",
    "description": "An extension to authenticate and fetch data from API.",
    "permissions": [
        "storage",
        "identity",
        "activeTab",
        "scripting",
        "tabs"
    ],
    "action": {
        "default_popup": "./html/popup.html"
    },
    
    "background": {
        "service_worker": "./scripts/background.js"
    },
    "content_scripts":[{
           "matches" : ["<all_urls>"],
           "js":["./scripts/content.js"]
        }
      ],
    "icons": {
        "48": "icons/icon.png"
    }
}

```
### html/popup.html
```

```
