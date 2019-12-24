let a = parseInt(prompt('Enter value a for a side'));
let b = parseInt(prompt('Enter value b for b side'));
let c = parseInt(prompt('Enter value c for c side'));

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('input values should be ONLY numbers');
} else if (a <= 0 || b <= 0 || c <= 0) {
    alert('A triangle must have 3 sides with a positive definite length');
} else if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
        console.log('Equilateral triangle');
    } else if (a !== b && b !== c && c !== a) {
        console.log('Scalene triangle');
    } else {
        console.log('Isosceles triangle');
    }
} else {
    alert('Triangle doesn’t exist');
}