# boolish

`boolish` is a simple npm package providing utilities for working with Boolean operations. The package includes easy-to-use functions to handle Boolean values and logical coercions in JavaScript projects.

## Installation
Install the package via npm:

```bash
npm install boolish
```

## Usage
Import and use boolish functions in your project:

```javascript
// ES6+ Import
import { Not } from 'boolish';

// CommonJS Import
const { Not } = require('boolish');

// Usage example
console.log(Not(true)); // false
console.log(Not(false)); // true
```

## API
Not(value: any): boolean
* Description: Returns the logical negation of the provided value.
* Arguments:
  - value: Any type of value, which will be coerced to a Boolean.
* Return Value: true if value is falsy; otherwise, false.

Example:

```javascript
Not(true);       // false
Not('');         // true
Not(0);          // true
Not('hello');    // false
```

## TypeScript Support
This package is written in TypeScript, providing type definitions for all functions to ensure ease of use and compatibility in TypeScript projects.

## Testing
The package uses Jest for testing. To run the tests, use the command:

```bash
npm test
```

## Build
boolish is bundled with Rollup for compatibility with both Node.js and browser environments. Use the following command to build the project:

```bash
npm run build
```

## Contributing
Contributions are welcome! Please open issues or submit pull requests to improve boolish.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
