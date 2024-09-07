## webRequest & webNavigation & chromw.windows
```
- webRequest monitoring HTTP requests, redirecting traffic, blocking URLs, modifying request headers, etc
- webNavigation monitor and react navigation of web pages. track navigation page loads, redirects, navigation history and more.
- create or manage windows in response to events in the background
```
### manifest.json
```json
{
  "name": "My Extension",
  "version": "1.0",
  "manifest_version": 3,
  "background": {
    "service_worker": "background.js"  // In Manifest V3, use service workers for background scripts
  },
  "permissions": [
    "webRequest",
    "webRequestBlocking",
    "webNavigation",
    "tabs",
    "windows",
    "<all_urls>"  // Required for webRequest to monitor all URLs
  ],
  "host_permissions": [
    "*://*/*"  // Required to specify which domains the extension can interact with
  ]
}
```
### webRequests
```js
// webRequest example: Blocking requests to example.com
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log("Blocking request to: " + details.url);
    return { cancel: true };  // Block the request
  },
  { urls: ["*://*.example.com/*"] },  // Filter which requests to block
  ["blocking"]  // Ensure it runs in blocking mode
);
```
```js
// onBeforeRequest: Fired when a request is about to be made.
// onBeforeSendHeaders: Fired before sending HTTP request headers.
// onHeadersReceived: Fired when HTTP response headers are received.
// onCompleted: Fired when a request has completed successfully.
// onErrorOccurred: Fired when an error occurs with the request.
```
### webNavigations
```js
chrome.webNavigation.onCompleted.addListener(function(details) {
  console.log("Navigation completed to URL: " + details.url);
}, { url: [{ urlMatches: 'https://*/*' }] });
```
```js
onBeforeNavigate: Fired when a navigation is about to occur.
onCommitted: Fired when a navigation is committed (meaning it cannot be canceled anymore).
onCompleted: Fired when a page finishes loading.
onErrorOccurred: Fired when an error occurs during the navigation.
```
### chrome.windows
```js
// Example: Creating a popup window when clicked
document.getElementById('openWindow').addEventListener('click', function() {
  chrome.windows.create({
    url: "https://www.example.com",
    type: "popup",
    width: 400,
    height: 500
  }, function(window) {
    console.log("Popup window created with ID:", window.id);
  });
});
```
```js
// Updates the properties of a specified window,
chrome.windows.update(windowId, { state: "maximized" }, function(updatedWindow) {
  console.log("Window updated", updatedWindow);
});
```
```js
// list of all currently open Chrome windows
chrome.windows.getAll({ populate: true }, function(windows) {
  console.log("All open windows:", windows);
});
```
```js
// details about a specific window using its ID.
chrome.windows.get(windowId, { populate: true }, function(window) {
  console.log("Window details:", window);
});
```
```js
chrome.windows.getCurrent({}, function(window) {
  console.log("Current window:", window);
});
```
```js
chrome.windows.getLastFocused({}, function(window) {
  console.log("Last focused window:", window);
});
```
```js
chrome.windows.remove(windowId, function() {
  console.log("Window removed");
});
```
```js
chrome.windows.onCreated.addListener(function(window) {
  console.log("New window created:", window);
});
```
```js
chrome.windows.onRemoved.addListener(function(windowId) {
  console.log("Window removed with ID:", windowId);
});
```
