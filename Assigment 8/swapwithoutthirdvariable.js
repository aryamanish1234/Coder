function swap2(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(a, b);
}

swap2(2, 3);