### 01. How to start JavaScript
- Installing Node.js: Setting up Node.js and npm for JavaScript development.
- Understanding the Workspace: Explanation of project structure, modules, and package.json.
- Basic Commands: `node`, `npm install`, `npm run`.

### 02. Data Types and common variable rules
- Variable Declaration: `var`, `let`, `const` and scope differences.
- Type Coercion: Implicit and explicit type conversion (e.g., `String()`, `Number()`).
- Primitive vs Non-Primitive Types: Understanding primitives (string, number, boolean) vs objects (arrays, functions).
- Dynamic Typing: Variable type assignment based on value.

### 03. Statement
- If-Else: Multi-condition handling with `if`, `else`, and `else if`.
- Switch Statement: Efficient way to handle multiple conditions.
- Ternary Operator: Compact conditional expression.
- Try-Catch: Exception handling for errors in asynchronous code.

### 04. Loop
- `for` Loop: Basic loop iteration and `for` loop with `break`, `continue`.
- `while` Loop: Condition-based looping.
- `do-while` Loop: Executing the loop at least once.
- Iterating with `forEach`, `map`, `reduce`: Functional looping techniques for arrays and collections.
- `for...in` vs `for...of`: Iterating over properties (objects) and elements (arrays).

### 05. Function
- Function Declaration vs Expression: Understanding the differences.
- Named vs Anonymous Functions: Declaring and using named and anonymous functions.
- Arrow Functions: Concise syntax for function expressions.
- Callback Functions: Passing functions as arguments to other functions.
- Higher-order Functions: Functions that return other functions.
- Closures: Understanding closures and lexical scoping.

### 06. Common Built-in Methods
- Array Methods:
  - `map()`, `reduce()`, `filter()`, `forEach()`, `find()`, `some()`, `every()`, `sort()`.
- String Methods:
  - `split()`, `replace()`, `trim()`, `substring()`, `indexOf()`, `toUpperCase()`, `toLowerCase()`.
- Object Methods:
  - `Object.keys()`, `Object.values()`, `Object.entries()`, `Object.assign()`.
- Math Methods:
  - `Math.random()`, `Math.floor()`, `Math.ceil()`, `Math.max()`, `Math.min()`.
- Date Methods:
  - `Date()`, `getDate()`, `getMonth()`, `getFullYear()`, `setDate()`, `toISOString()`.

### 07. Callback Methods
- Passing Functions as Arguments:
  - Defining and using callback functions for asynchronous tasks.
- Asynchronous Callbacks:
  - Handling asynchronous operations with callbacks, promises, and `async/await`.
- Higher-order Functions:
  - Functions that accept other functions as arguments or return them.

### 08. String Manipulation
- String Operations:
  - Concatenation, `split()`, `trim()`, `charAt()`, and `slice()`.
- Template Literals: Using backticks for multi-line strings and embedded expressions.
- Regular Expressions:
  - Using regular expressions with `RegExp` for pattern matching.
- String Formatting:
  - Using `replace()`, `split()`, `join()` for formatting strings.

### 09. Array, Object, Map, Set, Function, and Project Base Use Cases
- Arrays:
  - Creating and manipulating arrays using `push()`, `pop()`, `shift()`, `unshift()`, `map()`, `reduce()`, `filter()`, `forEach()`.
- Objects:
  - Creating and manipulating objects with dot notation and bracket notation.
  - Using methods like `Object.keys()`, `Object.values()`, `Object.entries()`.
- Maps:
  - Creating and manipulating maps with `set()`, `get()`, `has()`, `delete()`.
- Sets:
  - Creating sets and performing set operations like `add()`, `delete()`, `has()`, `clear()`.
- Functions:
  - Understanding function declarations, expressions, and higher-order functions.
  - Using functions as arguments for other functions.
- Use Cases:
  - Deciding when to use arrays, objects, maps, and sets in JavaScript.

### 10. Strong OOP in JavaScript (following Java or Python's)
- Objects and Prototypes:
  - Understanding prototype-based inheritance.
  - Creating objects using `new` and constructor functions.
- Classes:
  - Defining classes using `class` and creating instances.
  - Using `constructor()`, `static methods`, and `instance methods`.
- Inheritance:
  - Extending classes and method overriding using `extends`.
- Polymorphism:
  - Using method overloading and overriding in subclasses.
- Encapsulation:
  - Using private and public methods and properties (ES6 classes with `#` syntax for private fields).
- Design Patterns:
  - Common design patterns like Singleton, Factory, and Observer in JavaScript.

### 11. DOM and BOM (Browser Object Model)
- DOM Manipulation:
  - Accessing and modifying HTML elements using `document.getElementById()`, `querySelector()`, `createElement()`, `appendChild()`, and `removeChild()`.
- Event Handling:
  - Adding event listeners (`addEventListener`) and handling events like `click`, `keydown`, etc.
- BOM Manipulation:
  - Working with the browser’s window and navigator objects.
  - Manipulating `localStorage`, `sessionStorage`, and `cookies`.
- AJAX and Fetch API:
  - Sending HTTP requests using `XMLHttpRequest` or `fetch()`.
  - Handling JSON responses and using asynchronous operations.

### 12. Error Handling (Try Catch)
- Synchronous Error Handling:
  - Using `try-catch` blocks for handling errors.
- Asynchronous Error Handling:
  - Handling errors in promises with `.catch()`.
  - Using `async/await` and `try-catch` for handling asynchronous errors.
- Throwing Custom Errors:
  - Throwing custom errors with `throw`.

### 13. File Handling and IO (with Node.js)
- File Operations (Node.js):
  - Reading and writing files using the `fs` module (`fs.readFile()`, `fs.writeFile()`).
- Buffering:
  - Using streams and buffers to read/write large files efficiently.
- File Manipulation:
  - Renaming, deleting, and checking file existence with the `fs` module.

### 14. Advanced Topics
- Asynchronous JavaScript:
  - Promises and chaining.
  - Async functions and `await`.
- Web APIs:
  - Geolocation, Notifications, and other Web APIs.
- Node.js:
  - Setting up a basic Node.js server.
  - Using Express.js for creating web applications.

### 15. Event List
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
