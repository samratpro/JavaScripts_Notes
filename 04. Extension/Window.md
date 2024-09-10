## window vs chrome.windows 
```
01. window : is global object in the context of a webpage or a content script running in the browser.
           window is used to access and manipulate DOM, control browser-level events,
           access properties like window.location, window.history, and more.
02. chrome.windows : is a part of the Chrome Extensions API. It allows you to interact with the browser's window management system,
                   such as opening new browser windows, modifying their state, or querying for existing windows.
```
### 01. window
```js
console.log(window.location.href);             // Gets the current page's URL
window.alert("Hello!");                        // Shows a popup alert in the browser windo
console.log(window.innerWidth);                // Width of the window's content area
console.log(window.innerHeight);               // Height of the window's content area
window.resizeTo(800, 600);                     // Resize the window to 800x600 pixels
window.location.href = "https://example.com";  // Redirect to a new URL
```
```js
// condition
if (window.location.href.includes('google')){
      console.log('found google in url');
}
```
```js
// open and close window
let newWindow = window.open("https://example.com", "_blank", "width=500,height=500");
// Opens a new window with the specified dimensions
newWindow.close();  // Close the newly opened window
```
```js
// prompt
window.alert("This is an alert!");  // Displays an alert dialog
let confirmed = window.confirm("Do you agree?");  // Displays a confirmation dialog
if (confirmed) {
  console.log("User agreed");
}
let name = window.prompt("What is your name?", "Default Name");  // Displays a prompt dialog
console.log("User's name is", name);
```
```js
// History
window.history.back();   // Go back one page
window.history.forward();  // Go forward one page
window.history.go(-2);  // Go back two pages
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
