/**
 * Created by : Shawon Ashraf on 17-July-2018
 * https: //github.com/ShawonAshraf/bd-cellnum-validator
 */

/**
 * isValid function
 * param - cellNumber to validate
 * param type - String
 * return value - a boolean value, returns true if the the param is valid and false otherwise 
 */

var isValid = function(cellNumber) {
    const regex = /(\+){0,1}(88){0,1}01(7|8|6|9|5)(\d){8}/;
    var result = regex.exec(cellNumber);

    if (result != null && result[0] === cellNumber) {
        return true;
    } else {
        return false;
    }
}

/**
 * export module
 */
module.exports = {
    isValid
}