## chrome_storage


### chrome.storage.local
```
when you need more space and the data doesn't need to sync across devices.
max capacity ~5 MB
```
```js
chrome.storage.local.set({ key: value }).then(() => {
  console.log("Value is set");   // or Update any data
});

chrome.storage.local.get(["key"]).then((result) => {
  console.log("Value is " + result.key);  // or Update any data
});
```
### chrome.storage.sync
```
sync across all devices.
max 100 KB
```
```js
chrome.storage.sync.set({ key: value }).then(() => {
  console.log("Value is set");   // or Update any data
});

chrome.storage.sync.get(["key"]).then((result) => {
  console.log("Value is " + result.key);    // or Update any data
});
```
### chrome.storage.session
```
Temporary (Session-based), browser or extension is closed
```
```
chrome.storage.session.set({ key: value }).then(() => {
  console.log("Value was set");    // or Update any data
});

chrome.storage.session.get(["key"]).then((result) => {
  console.log("Value is " + result.key);   // or Update any data
});
```
