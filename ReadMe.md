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
#### And(a: unknown, b: unknown): boolean
Description: Returns true if both a and b are truthy, otherwise returns false.
Arguments:
>  a: Any value to evaluate.
>  b: Any value to evaluate.

Returns: 
>true if both values are truthy, otherwise false.

Example:
```javascript
And(true, 1);       // true
And(true, 0);       // false
And("hello", {});   // true
```

#### AndAll(...args: unknown[]): boolean
Description: Applies logical AND (&&) to all provided arguments and returns true only if all values are truthy.
Arguments:
> args: A list of any values to evaluate. The function requires at least one argument.

Returns: 
> true if all arguments are truthy, otherwise false.

Throws: 
>An error if no arguments are provided.

Example:
```javascript
AndAll(true, 1, "hello");     // true
AndAll(true, 1, 0);           // false
AndAll({});                   // true
```

#### AndAllValue(...args: unknown[]): unknown
Description: Applies logical AND (&&) to all provided arguments, returning the last truthy value if all are truthy, or the first falsy value encountered.
Arguments:
>args: A list of any values to evaluate. The function requires at least one argument.

Returns: 
>The last truthy value if all values are truthy, otherwise the first falsy value encountered.

Throws: 
>An error if no arguments are provided.

Example:
```javascript
AndAllValue(true, "Hello", 42);          // 42 (last truthy)
AndAllValue(true, "Hello", 0);           // 0 (first falsy)
AndAllValue(undefined, null, false);     // undefined (first falsy)
```

#### AndValue<L, R>(a: L, b: R): L | R
Description: Returns b if both a and b are truthy; otherwise, returns a.
Arguments:
>a: Any value to evaluate.
>b: Any value to evaluate.

Returns: 
>b if both values are truthy; otherwise, a.

Example:

```javascript
AndValue(true, "Hello");     // "Hello" (both are truthy)
AndValue(true, 0);           // true (0 is falsy)
AndValue(0, "Hello");        // 0 (first falsy)
```

#### Not(value: any): boolean
Description: Returns the logical negation of the provided value.
Arguments:
> value: Any type of value, which will be coerced to a Boolean.
* Return Value: 
>true if value is falsy; otherwise, false.

Example:

```javascript
Not(true);       // false
Not('');         // true
Not(0);          // true
Not('hello');    // false
```

#### Or(a: unknown, b: unknown): boolean
Description: Returns true if at least one of a or b is truthy; otherwise, returns false.
Arguments:
>  a: Any value to evaluate.
>  b: Any value to evaluate.

Returns:
> true if at least one of the values is truthy, otherwise false.

Example:
```javascript
Or(true, false);      // true
Or(0, 'hello');       // true
Or(null, undefined);  // false
Or(false, 0);         // false
```

#### OrValue<L, R>(a: L, b: R): L | R
Description: Returns the first truthy value between a and b. If both are falsy, it returns the second value b.
Arguments:
>  a: Any value to evaluate.
>  b: Any value to evaluate.

Returns:
>	The first truthy value if at least one is truthy.
>	The second value b if both are falsy.

Example:
```javascript
OrValue(true, 'hello');    // true
OrValue(false, 'hello');   // 'hello'
OrValue(0, null);          // null
OrValue(undefined, NaN);   // NaN
OrValue('', 42);           // 42
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
