



## Create dynamic Array
```ts
let endPage:number = 200;
let startPage:number = 50;

// traditional way
const pagesToScrape1 = [...Array(150).keys()].map(i => i + startPage);
// efficient way
const pagesToScrape2 = Array.from({ length: endPage - startPage + 1 }, (_, i) => i + startPage);
```
