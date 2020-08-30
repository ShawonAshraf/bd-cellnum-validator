# bd-cellnum-validator
> Validates Bangladeshi cell phone numbers.

[![NPM](https://nodei.co/npm/bd-cellnum-validator.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/bd-cellnum-validator/)

[![Build Status](https://travis-ci.org/ShawonAshraf/bd-cellnum-validator.svg?branch=master)](https://travis-ci.org/ShawonAshraf/bd-cellnum-validator)
[![npm version](https://badge.fury.io/js/bd-cellnum-validator.svg)](https://badge.fury.io/js/bd-cellnum-validator) [![DeepScan grade](https://deepscan.io/api/teams/4763/projects/6519/branches/54718/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=4763&pid=6519&bid=54718) [![CodeFactor](https://www.codefactor.io/repository/github/shawonashraf/bd-cellnum-validator/badge)](https://www.codefactor.io/repository/github/shawonashraf/bd-cellnum-validator)

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

## License
MIT
