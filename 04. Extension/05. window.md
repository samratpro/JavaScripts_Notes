## window vs chrome.windows 
```
01. window : is global object in the context of a webpage or a ` content script ` running in the browser.
           window is used to access and manipulate BOM -> DOM, control browser-level events,
           access properties like window.location, window.history, and more.
           (content.js)
02. chrome.windows : is a part of the Chrome Extensions API. It allows you to interact with the browser's window management system,
                   such as opening new browser windows, modifying their state, or querying for existing windows.
                  (background.js)
```
### 01. window
#### I. Common uses
```js
console.log(window.location.href);             // Gets the current page's URL
window.alert("Hello!");                        // Shows a popup alert in the browser windo
console.log(window.innerWidth);                // Width of the window's content area
console.log(window.innerHeight);               // Height of the window's content area
window.resizeTo(800, 600);                     // Resize the window to 800x600 pixels
window.location.href = "https://example.com";  // Redirect to a new URL
```
#### II. condition
```js
if (window.location.href.includes('google')){
      console.log('found google in url');
}
```
#### III. open and close window
```js
let newWindow = window.open("https://example.com", "_blank", "width=500,height=500");
// Opens a new window with the specified dimensions
newWindow.close();  // Close the newly opened window
```
#### IV. prompt
```js
window.alert("This is an alert!");  // Displays an alert dialog
let confirmed = window.confirm("Do you agree?");  // Displays a confirmation dialog
if (confirmed) {
  console.log("User agreed");
}
let name = window.prompt("What is your name?", "Default Name");  // Displays a prompt dialog
console.log("User's name is", name);
```
#### V. History
```js
window.history.back();   // Go back one page
window.history.forward();  // Go forward one page
window.history.go(-2);  // Go back two pages
```
#### VI. Storage
```js
// Storing data in localStorage (persistent storage)
window.localStorage.setItem('username', 'JohnDoe');
console.log(window.localStorage.getItem('username'));  // Retrieve the stored value

// Storing data in sessionStorage (data lasts for the session)
window.sessionStorage.setItem('sessionData', 'abc123');
console.log(window.sessionStorage.getItem('sessionData'));  // Retrieve the session data
```
#### VII. navigator
```js
console.log(window.navigator.userAgent);  // The browser's user agent string

if (window.navigator.onLine) {
  console.log("The browser is online.");
} else {
  console.log("The browser is offline.");
}
```
#### VIII. scroll
```js
window.scrollTo(0, 500);  // Scrolls the page to 500px from the top
window.scrollBy(0, 100);  // Scrolls the page 100px down from the current position
```
#### IVV. setTimeout
```js
window.setTimeout(() => {
  console.log("This message will appear after 2 seconds");
}, 2000);

let intervalId = window.setInterval(() => {
  console.log("This message appears every 3 seconds");
}, 3000);

window.clearInterval(intervalId);  // Stop the interval
```
#### VV. addEventListener
```js
window.addEventListener("resize", () => {
  console.log("Window resized to", window.innerWidth, "x", window.innerHeight);
});

window.addEventListener("scroll", () => {
  console.log("Scrolled to", window.scrollY, "px from the top");
});
```
#### VVI. document
```JS
console.log(window.document.title);  // Gets the page's title
window.document.body.style.backgroundColor = "lightblue";  // Change the page background color
```
#### VVII. location.reload
```JS
window.location.reload();  // Reloads the current page
```


### chrome.windows
#### I. Creating a popup window when clicked
```js 
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
#### II. Updates the properties of a specified window
```js
chrome.windows.update(windowId, { state: "maximized" }, function(updatedWindow) {
  console.log("Window updated", updatedWindow);
});
```
#### III. list of all currently open Chrome windows
```js
chrome.windows.getAll({ populate: true }, function(windows) {
  console.log("All open windows:", windows);
});
```
#### IV. details about a specific window using its ID.
```js
chrome.windows.get(windowId, { populate: true }, function(window) {
  console.log("Window details:", window);
});
```
#### V. getCurrent
```js
chrome.windows.getCurrent({}, function(window) {
  console.log("Current window:", window);
});
```
#### VI. getLastFocused
```js
chrome.windows.getLastFocused({}, function(window) {
  console.log("Last focused window:", window);
});
```
#### VII. remove window
```js
chrome.windows.remove(windowId, function() {
  console.log("Window removed");
});
```
#### VIII. When create then add event listener
```js
chrome.windows.onCreated.addListener(function(window) {
  console.log("New window created:", window);
});
```
#### IV. When Removed then add event listener
```js
chrome.windows.onRemoved.addListener(function(windowId) {
  console.log("Window removed with ID:", windowId);
});
```
