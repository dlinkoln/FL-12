let a = parseInt(prompt('Enter value a for equalation ax^2+bx+c = 0 '));
let b = parseInt(prompt('Enter value b for equalation ax^2+bx+c = 0'));
let c = parseInt(prompt('Enter value c for equalation ax^2+bx+c = 0'));
let D;
let X;
let X1;
let X2;
if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
    alert('Invalid input data');
} else {
    let D = Math.pow(b, 2) - 4 * a * c;
    if (D < 0) {
        console.log('no solution');
    } else if (D === 0) {
        let X = -b / 2;
        console.log(`x = ${X}`);
    } else {
        let X1 = (-b + Math.sqrt(D, 2)) / (2 * a);
        let X2 = (-b - Math.sqrt(D, 2)) / (2 * a);
        console.log(`x1= ${X1}`);
        console.log(`x2= ${X2}`);
    }
}