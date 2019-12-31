function addOne(x) {
    return x + 1;
}
function pipe(x, ...arr) {
    for (let i = 0; i < arr.length; i++) {
        x = arr[i](x);
    }
    return x;
}

pipe(4, addOne, addOne, addOne);