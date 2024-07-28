## JavaScript Methods: `find` vs `filter`

### `find`
1. **Returns**: The first matched data.
2. **Functionality**: Searches through the array, stops, and returns the first element that matches the condition.
3. **Usage**: Used to get a specific, single matched element.
4. **Callback Function**: Takes a callback function to test each element.

### `filter`
1. **Returns**: An array of matched data.
2. **Functionality**: Searches through the array, stores all matched elements, and returns an array of them.
3. **Usage**: Used to get a list of all matched elements.
4. **Callback Function**: Takes a callback function to test each element.

### Key Differences
- **Breaking Condition**: `find` stops searching after finding the first match, while `filter` continues to search through the entire array.
- **Return Type**: `find` returns a single element, whereas `filter` returns an array of elements.
