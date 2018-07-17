var isValid = function(mobileNumber) {
    const regex = /01(7|8|6|9|5)(\d){8}/;
    var result = regex.exec(mobileNumber);

    if (result != null && result[0] === mobileNumber) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    isValid
}