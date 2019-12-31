function getMin(args) {
    let minimal = args[0];
    for (let i = 1; i < args.length; i++) {
        let arg = args[i];
        if (arg < minimal) {
            minimal = arg;
        }
    }
    return minimal;
}
getMin([3, 0, -3, 5, 6, 3, -2, 15]);