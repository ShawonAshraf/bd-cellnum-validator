# bd-cellnum-validator

Validates Bangladeshi cell phone numbers. 

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

## License
MIT