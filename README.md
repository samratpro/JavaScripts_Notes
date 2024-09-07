## JS Event List
#### 01. click
```js
document.getElementById('myButton').addEventListener('click', function() {
  alert('Button clicked!');
});
```
#### 02. dblclick
```js
document.getElementById('myElement').addEventListener('dblclick', function() {
  alert('Element double-clicked!');
});
```
#### 03. mouseover
```js
document.getElementById('myElement').addEventListener('mouseover', function() {
  this.style.backgroundColor = 'yellow';
});
```
#### 04. mouseout
```js
document.getElementById('myElement').addEventListener('mouseout', function() {
  this.style.backgroundColor = '';
});
```
#### 05. keydown
```js
document.addEventListener('keydown', function(event) {
  console.log('Key pressed:', event.key);
});
```
#### 06. keyup
```js
document.addEventListener('keyup', function(event) {
  console.log('Key released:', event.key);
});
```
#### 07. keypress
```js
document.addEventListener('keypress', function(event) {
  console.log('Key pressed:', event.key);
});
```
#### 08. submit
```js
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent form from submitting
  alert('Form submitted!');
});
```
#### 09. focus
```js
document.getElementById('myInput').addEventListener('focus', function() {
  this.style.borderColor = 'blue';
});
```
#### 10. blur
```js
document.getElementById('myInput').addEventListener('blur', function() {
  this.style.borderColor = '';
});
```
#### 11. change
```js
document.getElementById('mySelect').addEventListener('change', function() {
  console.log('Selection changed to:', this.value);
});
```
#### 12. input
```js
document.getElementById('myInput').addEventListener('input', function() {
  console.log('Input value changed to:', this.value);
});
```
#### 13. resize
```js
window.addEventListener('resize', function() {
  console.log('Window resized to', window.innerWidth, 'x', window.innerHeight);
});
```
#### 14. scroll
```js
window.addEventListener('scroll', function() {
  console.log('User scrolled!');
});
```
#### 15. contextmenu
```js
document.addEventListener('contextmenu', function(event) {
  event.preventDefault();  // Prevent the context menu from opening
  alert('Right-click detected!');
});
```
#### 16. load
```js
window.addEventListener('load', function() {
  console.log('Page fully loaded');
});
```
#### 17. unload
```js
window.addEventListener('unload', function() {
  console.log('Page is unloading...');
});
```
#### 18. dragstart
```js
document.getElementById('myDraggable').addEventListener('dragstart', function(event) {
  console.log('Drag started');
});
```
#### 19. drop
```
document.getElementById('dropZone').addEventListener('drop', function(event) {
  event.preventDefault();
  console.log('Element dropped');
});
```
#### 20. error
```js
window.addEventListener('error', function(event) {
  console.error('Error occurred:', event.message);
});
```
