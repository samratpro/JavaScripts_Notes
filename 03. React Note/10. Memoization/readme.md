## Prevent unnecessary re-renders.
```js
import { useState, useMemo, useCallback } from "react";

// Expensive calculation
function slowFunction(num) {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

export default function App() {
  const [number, setNumber] = useState(1);
  const [theme, setTheme] = useState(false);

  // Memoize calculation
  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  // Memoized callback
  const handleChange = useCallback(e => setNumber(parseInt(e.target.value)), []);

  const themeStyles = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black"
  };

  return (
    <div style={themeStyles}>
      <input type="number" value={number} onChange={handleChange} />
      <h2>{doubleNumber}</h2>
      <button onClick={() => setTheme(prev => !prev)}>Toggle Theme</button>
    </div>
  );
}

```
