# bd-cellnum-validator
> Validates Bangladeshi cell phone numbers.

[![NPM](https://nodei.co/npm/bd-cellnum-validator.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/bd-cellnum-validator/)

[![Build Status](https://travis-ci.org/ShawonAshraf/bd-cellnum-validator.svg?branch=master)](https://travis-ci.org/ShawonAshraf/bd-cellnum-validator)
[![npm version](https://badge.fury.io/js/bd-cellnum-validator.svg)](https://badge.fury.io/js/bd-cellnum-validator)

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
- `3.0.0` : Now supports validation for new GP numbers with 013 code.
## License
MIT
