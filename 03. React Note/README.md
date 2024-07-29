# Start React
- Ensure Nodejs Enviroment 
## Create react app standered way
```bash
npx create-react-app appname
cd appname
npm start
```
## Create React app with Vite
```bash
npm create vite@latest my-project -- --template react
pnpm create vite my-project --template react
cd my-project
npm install
npm run dev
```

## React tailwindcss
```
https://tailwindcss.com/docs/guides/vite#react
```
```bash
cd project_folder
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
```css
/* index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```
## daisyui
```
https://daisyui.com/docs/install/
```
```bash
npm i -D daisyui@latest
```
```js
//tailwind.config.js
plugins: [
    require('daisyui'),
  ],
```
## React Bootstrap
```bash
cd project_folder
npm install react-bootstrap bootstrap
```
```
# Import in index.js file

import 'bootstrap/dist/css/bootstrap.min.css';

# or Directly paste CDN CSS and JS LINKS in HTML body ` public/index.html `

```
## StrictMode Can API call dual time, need to disable it
```js
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
)
```

