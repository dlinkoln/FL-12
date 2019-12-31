function isLeapYear(date) {
    let dates = new Date(date);
    if (!isNaN(dates.getTime())) {
        let fyear = dates.getFullYear();
        let leap = fyear % 4 === 0 && fyear % 100 !== 0 || fyear % 400 === 0;
        if (leap) {
            return (fyear + " is a leap year!");
        } else {
            return (fyear + " is not a leap year!");
        }
    } else {
        return ('Invalid Date');
    }
}
console.log(isLeapYear('2020-01-01,00:00:00'));
console.log(isLeapYear('2020-01-01,00:00:00777'));
console.log(isLeapYear('2200-01-15,13:00:00'));
console.log(isLeapYear(1213131313135465656654564646542132132131));
console.log(isLeapYear(1213131313));