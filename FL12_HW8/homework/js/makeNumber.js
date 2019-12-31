function makeNumber(string) {
    let numbers = '';
    let symbArr = string.split('');
    for (let i = 0; i < symbArr.length; i++) {
        if (!isNaN(symbArr[i])) {
            numbers += symbArr[i];
        }
    }
    return numbers;
}
makeNumber('sdsdggd1255gwdfq');