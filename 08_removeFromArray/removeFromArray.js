const removeFromArray = function(arrays, ...args) {
    return arrays.filter(item => !args.includes (item));
};

// Do not edit below this line
module.exports = removeFromArray;
