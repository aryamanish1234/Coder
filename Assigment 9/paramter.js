const combine = (...args) => {
    return args.reduce(function(prev, cur) {
        return prev + " " + cur;
    });
};
let msg = combine("JavaScript", "Rest", "Parameters");
console.log(msg);