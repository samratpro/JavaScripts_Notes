## Architecture
```
🔽 html
  📄 popup.html
  📄 style.css
🔽 icons
  📄 icon.png
🔽 scripts
  📄 background.js
  📄 content.js
  📄 popup.js
📄 manifest.json
```
### HTML
```html
<!- popup.html  // Extension popup page HTML Design -!>
<!- style.css   // CSS For popup page -!>
<!DOCTYPE html>
<html>
<head>
    <title>Title/title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <script src="../scripts/popup.js"></script>
</body>
</html>
```
### scripts
```
📄 background.js // Manipulating webpage content, injecting UI elements
📄 content.js    // Event handling, managing state, performing background tasks
📄 popup.js      // Handling UI interactions, fetching data from storage
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
