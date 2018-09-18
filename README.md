# bd-cellnum-validator

Validates Bangladeshi cell phone numbers. 
[![Npm version](https://runkit.com/npm/bd-cellnum-validator/npm-version/branches/master/bd-cellnum-validator)](https://www.npmjs.com/package/bd-cellnum-validator)

## How to?
### Installation

- Install from `npm` :
```bash
npm install bd-cellnum-validator
```

### Usage Example

```javascript
const validator = require('bd-cellnum-validator');

var cellNumber = '1212121'

// validator.isValid returns a boolean
// true - if the number is valid
// false - if not valid
var result = validator.isValid(cellNumber);

console.log(result);
```

### Testing
- Clone the repository from [github](https://github.com/ShawonAshraf/bd-cellnum-validator)
- Then open your favorite command shell inside the directory and run :

```bash
npm run test
```

## isValid function
 - `isValid` function takes the cell number as `String`  as its param.
 - returns `true` if the cell number is valid and `false` otherwise.

## Changelog
- `1.0.1` : Now supports cell phone numbers with country code. 

## License
MIT
