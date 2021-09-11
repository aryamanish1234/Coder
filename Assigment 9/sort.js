let list = [5, 66, 1, 3, 89, 0, 100, 34, 67, 66, 78, 102, 87];
list.sort(function(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});

console.log(list);