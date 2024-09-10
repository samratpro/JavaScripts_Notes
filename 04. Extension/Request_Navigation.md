## webRequest & webNavigation
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
